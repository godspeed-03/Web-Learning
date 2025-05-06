import { NextResponse } from 'next/server';
import pdf from 'pdf-parse/lib/pdf-parse.js';
import { Buffer } from 'buffer';

// const pdf = require("pdf-parse");

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const data = await pdf(buffer);

    // Extract structured details from the text
    const extractedData = extractDetails(data.text);

    return NextResponse.json(extractedData);
  } catch (error) {
    console.error('Error extracting PDF text:', error);
    return NextResponse.json({ error: 'Failed to parse PDF' }, { status: 500 });
  }
}

// 🛠️ Extracts structured information from the resume text
const extractDetails = (text: string) => {
  const name = text.match(/([A-Z][a-z]+\s[A-Z][a-z]+)/)?.[0] || 'Not found';

  const email = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)?.[0] || 'Not found';
  const linkedIn = text.match(/https?:\/\/(www\.)?linkedin\.com\/[^\s\uFFFD]+/)?.[0] || 'Not found';
  const github = text.match(/https?:\/\/(www\.)?github\.com\/[^\s\uFFFD]+/)?.[0] || 'Not found';
  const xCom = text.match(/https?:\/\/(www\.)?x\.com\/[^\s\uFFFD]+/)?.[0] || 'Not found';

  // Extract all links in the resume
  const allLinks = [...text.matchAll(/https?:\/\/[^\s]+/g)].map(match => match[0]) || [];
  const otherLinks = allLinks.filter(
    link =>
      !link.includes('linkedin.com') && !link.includes('github.com') && !link.includes('x.com')
  );

  // Extract keywords
  const keywords = extractKeywords(text);

  // Extract additional properties (all lines except already extracted ones)
  //   const extractedValues = [
  //     name,
  //     email,
  //     linkedIn,
  //     github,
  //     xCom,
  //     ...otherLinks,
  //     ...keywords.split(', '),
  //   ];
  //   const otherProperties = text
  //     .split('\n')
  //     .filter(line => !extractedValues.some(value => line.includes(value)))
  //     .map(line => line.trim())
  //     .filter(line => line.length > 2); // Ignore empty or single-character lines

  return {
    name,
    email,
    linkedIn,
    github,
    xCom,
    otherLinks,
    keywords,
    // otherProperties,
    pdfContent: formatPDFContent(text),
  };
};

// 🛠️ Extract keywords from the resume text
const extractKeywords = (text: string) => {
  const techKeywords = [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'Python',
    'Java',
    'C++',
    'SQL',
    'MongoDB',
    'PostgreSQL',
    'GraphQL',
    'AWS',
    'Docker',
    'Kubernetes',
    'REST API',
    'CI/CD',
    'Git',
    'Firebase',
    'Redux',
  ];

  const foundKeywords = techKeywords.filter(keyword => text.includes(keyword));
  return foundKeywords.length > 0 ? foundKeywords.join(', ') : 'No keywords found';
};

// 🛠️ Format the PDF content for better readability
const formatPDFContent = (text: string) => {
  return text
    .replace(/[\uFFFD]/g, '') // Remove broken characters
    .split('\n')
    .map(line => {
      if (line.match(/^\s*- /)) {
        return `• ${line.trim().replace(/^- /, '')}`;
      } else if (line.match(/(Experience|Education|Skills|Projects|Certifications)/i)) {
        return `\n### ${line.trim()} ###\n`;
      } else {
        return line.trim();
      }
    })
    .filter(line => line.length > 0)
    .join('\n');
};
