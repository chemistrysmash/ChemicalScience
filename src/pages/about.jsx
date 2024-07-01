import React, { useState } from 'react';
import service from "./../services";
import QrScanner from 'react-qr-scanner';

const About = () => {
  const [data, setData] = useState('No result');
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setData(result.text);  // Assuming you want to display the 'text' property
    }
  };

  const handleError = (error) => {
    console.error(error);
    setError(error.message);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <h1>QR Code Reader</h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <p>Scan Result: {data}</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default About;
