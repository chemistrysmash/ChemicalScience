import React, { useState } from 'react';
import service from "./../services";
import QrScanner from 'react-qr-scanner';

const About = () => {
  const [data, setData] = useState({ text: 'No result', format: '' });
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setData({ text: result.text, format: result.format });
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

  const videoConstraints = {
    facingMode: 'environment'  // Use back camera
  };

  return (
    <div>
      <h1>QR Code Reader</h1>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
        constraints={{facingMode: 'environment'}}
      />
      <p>Scan Result: {data.text}</p>
      <p>Format: {data.format}</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default About;
