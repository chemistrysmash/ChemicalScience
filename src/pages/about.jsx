import React, { useState } from 'react';
import QrCodeScanner from '../components/QrCodeScanner';

const About = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScanSuccess = (decodedResult) => {
    if (decodedResult && decodedResult.text) {
      setScanResult(decodedResult.text);
    }
  };

  const handleScanFailure = (errorMessage) => {
    console.warn(`QR Code scan failed: ${errorMessage}`);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrCodeScanner
        delay={100}
        onScanSuccess={handleScanSuccess}
      />
      <p>Scan Result: {scanResult}</p>
    </div>
  );
};

export default About;
