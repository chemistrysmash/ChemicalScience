import React, { useRef, useEffect } from 'react';
import service from "./../services";

const Compound_reaction = () => {
  const videoRef = useRef(null);


  useEffect(() => {
    let stream;

    const startCamera = async () => {
      try {
        stream = await service.camera.openBackCamera();
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Failed to start camera:', error);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h2>Compound_reaction</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: '50%', height: 'auto' }} />
      
    </div>
  );
};

export default Compound_reaction;
