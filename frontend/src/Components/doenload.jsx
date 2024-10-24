import React from 'react';

const DownloadButton = () => {
  const handleDownload = async () => {
    try {
      const response = await fetch('http://localhost:8080/admin/download-users', {
        method: 'GET',
        headers: {
          'Accept': 'text/csv',
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'users.csv'; // Specify the filename for download
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url); // Clean up the URL object
    } catch (error) {
      console.error('Error downloading the file:', error);
    }
  };

  return (
    <button onClick={handleDownload}>Download Users CSV</button>
  );
};

export default DownloadButton;
