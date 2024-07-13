import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const QrCodeReader = (handleResult) => {
  return (
    <div>
      <QrReader
        delay={500}
        containerStyle={{width: '100%', height: '40%', border: '2px solid red', padding: '0px', backgroundColor: 'lightyellow' }}
        videoContainerStyle={{width: '100%', height: '100%', border: '2px solid blue', padding: '5px' , backgroundColor: 'lightyellow' }}
        videoStyle={{ width: '100%', height: '100%', backgroundColor: 'lightblue', justifyContent: 'center' }}
        onResult={handleResult}
        constraints={{ facingMode: "environment" }}
      />
    </div>
  );
};

export default QrCodeReader;
