'use client';

import { useState } from 'react';
interface ParsedData {
  name: string;
  email: string;
  linkedIn: string;
  github: string;
  xCom: string;
  otherLinks: string[];
  keywords: string;
  pdfContent: string;
}

export default function ResumeParser() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [parsedData, setParsedData] = useState<ParsedData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    setLoading(true);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/extract-pdf', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      setParsedData(data);
    } catch (error) {
      console.error('Error parsing PDF:', error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Resume Parser</h1>
      <p className="my-4 text-sm text-gray-700 dark:text-gray-300 bg-yellow-100 dark:bg-yellow-900 p-3 rounded-lg border-l-4 border-yellow-500 dark:border-yellow-400">
        <strong className="text-yellow-800 dark:text-yellow-300">NOTE:</strong>
        This is a <strong>basic PDF text extractor</strong>. It can be enhanced using{' '}
        <strong>AI-powered engines</strong> and advanced <strong>PDF libraries</strong> to extract
        structured data beyond plain text. In future versions, <strong>AI models</strong> can be
        integrated to extract <strong>specific data</strong>, <strong>keywords</strong>, and{' '}
        <strong>custom insights</strong> efficiently.
      </p>

      <input
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        className="mb-4 border p-2 w-full"
      />
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        disabled={!selectedFile || loading}
      >
        {loading ? 'Processing...' : 'Upload & Parse'}
      </button>

      {parsedData && (
        <div className="mt-6 p-4 border rounded bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Extracted Data</h2>

          <p>
            <strong>Name:</strong> {parsedData.name}
          </p>
          <p>
            <strong>Email:</strong> {parsedData.email}
          </p>
          <p>
            <strong>LinkedIn:</strong> <a className="text-blue-500">{parsedData.linkedIn}</a>
          </p>
          <p>
            <strong>GitHub:</strong> <a className="text-blue-500">{parsedData.github}</a>
          </p>
          <p>
            <strong>X.com:</strong> <a className="text-blue-500">{parsedData.xCom}</a>
          </p>

          {parsedData.otherLinks?.length > 0 && (
            <div className="mt-4">
              <h3 className="text-md font-semibold">Other Links:</h3>
              <ul className="list-disc list-inside">
                {parsedData.otherLinks.map((link: string, index: number) => (
                  <li key={index}>
                    <a href={link} target="_blank" className="text-blue-500">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {parsedData.keywords && (
            <p className="mt-4">
              <strong>Keywords:</strong> {parsedData.keywords}
            </p>
          )}

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              📄 PDF Content
            </h3>
            <div className="mt-2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-h-96 overflow-y-auto border border-gray-300 dark:border-gray-700">
              {parsedData.pdfContent.split('\n').map((line: string, index: number) =>
                line.startsWith('###') ? (
                  <h4
                    key={index}
                    className="mt-4 text-md font-bold text-blue-600 dark:text-blue-400"
                  >
                    {line.replace(/###/g, '')}
                  </h4>
                ) : (
                  <p
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed"
                  >
                    {line}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
