import React, { useState } from 'react';
import service from "./../services";
import QrScanner from 'react-qr-scanner';
import QrCodeScanner from '../components/QrCodeScanner';

const About = () => {
  const [scanResult, setScanResult] = useState('');

  const handleScanSuccess = (decodedText) => {
    setScanResult(decodedText);
  };

  const handleScanFailure = (errorMessage) => {
    console.warn(`QR Code scan failed: ${errorMessage}`);
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrCodeScanner onScanSuccess={handleScanSuccess} onScanFailure={handleScanFailure} />
      <p>Scan Result: {scanResult}</p>
    </div>
  );
};

export default About;
