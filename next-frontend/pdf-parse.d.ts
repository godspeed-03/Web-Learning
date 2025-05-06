declare module 'pdf-parse/lib/pdf-parse.js' {
  interface PDFData {
    numpages: number;
    numrender: number;
    // info: any;
    // metadata: any;
    text: string;
    version: string;
  }

  function pdf(buffer: Buffer): Promise<PDFData>;
  export default pdf;
}
