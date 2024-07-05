import React, { useState } from 'react';
import QrReader from 'modern-react-qr-reader';

const QrCodeScanner = ({ onScanSuccess, onScanFailure }) => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
      if (onScanSuccess) {
        onScanSuccess(data);
      }
    } else {
      if (onScanFailure) {
        onScanFailure();
      }
    }
  };

  const handleError = (err) => {
    console.error(err);
    if (onScanFailure) {
      onScanFailure();
    }
  };

  return (
    <div>
      <h1>QR Code Scanning in React</h1>
      {scanResult ? (
        <p>Success: {scanResult}</p>
      ) : (
        <QrReader
          delay={300}
          style={{ width: '100%' }}
          onError={handleError}
          onScan={handleScan}
          facingMode="environment" // Use "environment" for rear-facing camera
        />
      )}
    </div>
  );
};

export default QrCodeScanner;
