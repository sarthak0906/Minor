  // get video dom element
  const video = document.getElementById('my');
        
  // request access to webcam
  navigator.mediaDevices.getUserMedia({video: {width: 426,height: 240}}).then((stream) => video.srcObject = stream)
  
  // returns a frame encoded in base64
  const getFrame = () => {
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;    
      console.log(canvas.width);
      console.log(canvas.height);
      
      

      canvas.getContext('2d').drawImage(video, 0, 0);
      const data = canvas.toDataURL('image/png');
      return data;
  }
    setTimeout(() => {
        const data =getFrame();
        console.log(data);
    }, 750);
    
    // const data =getFrame();
    // console.log(data);
   