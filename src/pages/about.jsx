import React, { useState } from 'react';
import service from "./../services";
import { QrReader } from 'react-qr-reader';

const About = () => {
  const [data, setData] = useState('No result');
  const [error, setError] = useState(null);

  const handleScan = (result) => {
    if (result) {
      setData(result.text);
    }
  };

  const handleError = (error) => {
    console.error(error);
    setError(error.message);
  };

  return (
    <div>
      <h1>QR Code Reader</h1>
      <div style={{width:'20%'}}>
          <QrReader
        onResult={(result, error) => {
          if (result) {
            handleScan(result);
          }

          if (error) {
            handleError(error);
          }
        }}
        //constraints={{ facingMode: 'environment' }}
      />
      </div>
    
      <p>Scan Result: {data}</p>
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default About;
