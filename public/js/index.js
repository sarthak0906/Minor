window.onload = async () => {
  // get video dom element
  const video = await document.getElementById('my');

  // returns a frame encoded in base64
  const getFrame = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 426;
    canvas.height = 240;
    // console.log(canvas.width);
    // console.log(canvas.height);



    canvas.getContext('2d').drawImage(video, 0, 0);
    const data = canvas.toDataURL('image/png');
    return data;
  }

  // request access to webcam
  await navigator.mediaDevices.getUserMedia({
      video: {
        width: 426,
        height: 240
      }
    }).then((stream) => video.srcObject = stream)
    .then(async () => {
      for (var i = 0; i < 25; ++i) {
        const data = await getFrame();
        console.log(data);
      }
    })

  // while (1) {
  //   const data = await getFrame();
  //   console.log(data);
  // }
  // setTimeout(() => {
  // }, 75);

  // const data =getFrame();
  // console.log(data);
}
