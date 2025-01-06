import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerUi from 'swagger-ui-express'
import YAML from 'yamljs'
import fs from 'fs'
// import mermaid from 'mermaid'
 
const app = express();

app.use( cors() );
app.use( cookieParser() );
app.use( express.json( { limit: "16kb" } ) );
app.use( express.urlencoded( {
  extended: true,
  limit: "16kb"
} ) );

// (err, req, res, next)

// import routes

// app.get('/flowchart', (req, res) => {
//   const chartDefinition = `graph TD;
//       A[Start] --> B[Process Step 1];
//       B --> C[Process Step 2];
//       C --> D[End];`;

//   const output = 'flowchart.png';
//   mermaid.render('graphDiv', chartDefinition, (svgCode) => {
//     fs.writeFileSync(output, svgCode);
//     res.sendFile(path.join(__dirname, output));
//   });
// });


app.get('/diagram', (req, res) => {
  // Path to the markdown file
  const markdownPath = './flowchat.md';
  
  // Check if the markdown file exists
  if (fs.existsSync(markdownPath)) {
    // Read the markdown file
    fs.readFile(markdownPath, 'utf-8', (err, data) => {
      if (err) {
        res.status(500).send('Error reading the markdown file');
        return;
      }

      // Render HTML with the markdown content and mermaid diagram
      res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Flowchart Diagram</title>
            <!-- Load Mermaid.js -->
            <script type="module">
                import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';
                mermaid.initialize({ startOnLoad: true });
            </script>
        </head>
        <body>
            // <h1>Flowchart Diagram</h1>
            // <div class="markdown-body">
            //   ${convertMarkdownToHtml(data)} 
            // </div>

            <!-- Render Mermaid diagrams -->
            <div class="mermaid">
              // ${extractMermaidDiagram(data)}
            </div>
        </body>
        </html>
      `);
    });
  } else {
    res.status(404).send('Markdown file not found');
  }
});

function extractMermaidDiagram(markdown) {
  const mermaidRegex = /```mermaid([\s\S]*?)```/;
  const match = mermaidRegex.exec(markdown);
  return match ? match[1] : '';
}

// Function to convert basic markdown to HTML
function convertMarkdownToHtml(markdown) {
  // Convert Markdown to HTML (using a simple replace for now; could use a library like marked)
  return markdown
    .replace(/^# (.*)$/gm, '<h1>$1</h1>')
    .replace(/^## (.*)$/gm, '<h2>$1</h2>')
    .replace(/```(.*?)```/gm, '<pre>$1</pre>')
    .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
    .replace(/\*(.*?)\*/g, '<i>$1</i>');
}

app.use('/docs', swaggerUi.serve, swaggerUi.setup(YAML.load('./swaggerAPI.yaml')))

import router from "./src/routes/user.routes.js";
import errorHandler from "./src/middleware/error.middleware.js";

app.use( "/api/v1/user", router );

app.use( errorHandler );

export default app;
