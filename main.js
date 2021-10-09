headX=0;
 headY=0;
  function preload() { clown_nose = loadImage("stupid hair.png"); }


  function setup() { canvas = createCanvas(300, 300);
     canvas.center(); video = createCapture(VIDEO);
      video.size(300, 300); video.hide(); 
      poseNet = ml5.poseNet(video, modelLoaded);
       poseNet.on('pose', gotPoses);} 
       
       
       
       function modelLoaded() { console.log('PoseNet Is Initialized'); }



function gotPoses(results)
 { if(results.length > 0) { console.log(results);
     headX = results[0].pose.head.x-15; 
     headY = results[0].pose.head.y-15; }}
   
   
   
   
   
    
    function take_snapshot(){ save('myFilterImage.png'); }
