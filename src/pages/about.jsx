import React, { useState } from 'react';
import service from "./../services";
import QrReader from 'react-qr-scanner';
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
  const previewStyle = {
    height: 240,
    width: 320,
  }
  return (
    <div>
      <h1>QR Code Scanner</h1>
      <QrReader
          delay={100}
          style={previewStyle}
          onError={handleScanFailure}
          onScan={handleScanSuccess}
          facingMode={'rear'}
          />
      <p>Scan Result: {scanResult}</p>
    </div>
  );
};

export default About;
