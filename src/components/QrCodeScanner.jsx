import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrCodeScanner = ({ onScanSuccess, onScanFailure }) => {
  const [scanResult, setScanResult] = useState('');

  const handleScan = (data,error) => {
    if (data) {
      console.log('test')
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
          onResult= {handleScan}
          constraints={{facingMode:"environment"}} 
        />
      )}
    </div>
  );
};

export default QrCodeScanner;
