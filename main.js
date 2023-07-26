function preload()
{}

function draw()
{
  image(video,0,0,300,300);
}

function setup()
{
  canvas=createCanvas(300,300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();
  posenet=ml5.poseNet(video,modelLoaded);
  posenet.on('pose',gotPoses)
}

 function modelLoaded()
{
   console.log("modelLoaded");
}

function gotPoses(result)
{
  console.log("posenet.on");
  if(result.length > 0)
  {
    console.log(result);
    console.log("nose x="+result[0].pose.nose.x);
    console.log("nose y="+result[0].pose.nose.y);
  }
}
 
function take_snapshot()
{
  save('My_Filter_Image.jpg');
}