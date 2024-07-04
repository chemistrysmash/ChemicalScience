// src/components/QrCodeScanner.js
import { Html5Qrcode, Html5QrcodeScanner } from 'html5-qrcode';
import { useEffect, useState } from 'react';

const QrCodeScanner = ({ onScanSuccess, onScanFailure }) => {
    const [ scanResult, setScanResult]=useState(null);
    useEffect(()=>{
        const scanner =new Html5QrcodeScanner('reader',{
            qrbox: {
                width: 250,
                height: 250,
            },
            fps: 5,
        });
    
        scanner.render(success, error);
        function success(reasult){
            scanner.clear();
            setScanResult(result);
        }
        function error(err){
            console.warn(err);
        }
    },[]);
    
return(
    <div>
        <h1>QR Code Scanning in React</h1>
        {scanResult
        ?<p>Success:{scanResult}</p>
        : <div id='reader'></div>
        }
        
    </div>
)

};

export default QrCodeScanner;
