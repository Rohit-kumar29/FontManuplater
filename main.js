noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX=0;

function setup(){
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(550 ,550);
    canvas.position(1000,200);

    poseNet = ml5.poseNet(video,modalLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
    background('#2f4f4f');

    document.getElementById("square_side").innerHTML= "Width and Height of the square will be  = " + difference + "px";
    fill('#F90093');
    stroke('#F90093');
    square (noseX , noseY , difference);
}
function modalLoaded(){
    console.log('PoseNet is Initialized !');
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        noseX = result[0].pose.nose.x;
        noseY = result[0].pose.nose.y;
        console.log("noseX = "+ noseX + "noseY = " + noseY);

        leftWristX = result[0].pose.leftWrist.x;
        rightWristX =result[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        
        console.log("leftWristX = "+ leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }

}