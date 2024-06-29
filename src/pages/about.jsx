import React, { useRef, useEffect } from 'react';
import service from "./../services";

const About = () => {
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
      <h2>About Page</h2>
      <video ref={videoRef} autoPlay playsInline style={{ width: '50%', height: 'auto' }} />
    </div>
  );
};

export default About;
