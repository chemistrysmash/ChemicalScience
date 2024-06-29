// camera.js
  
export const camera = {
    async openBackCamera() {
        const constraints = {
            video: {
              facingMode: { exact: 'environment' } // 使用后置摄像头
            }
        };
        try {
            const stream = await navigator.mediaDevices.getUserMedia({video: true});
            console.log("test")
            return stream;
        } catch (error) {
            console.error('Error accessing back camera:', error);
            throw error;
        }
    }
  };
  