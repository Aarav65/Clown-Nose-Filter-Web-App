noseX = 0;
noseY = 0;
leyesX = 0;
leyesY = 0;
reyesX = 0;
reyesY = 0;

function preload()
{
    clown_nose = loadImage("https://i.postimg.cc/N0GF7ZtY/clown-image.png");
    eyeglasses = loadImage("https://i.postimg.cc/pdGn4PVq/69-699666-clip-art-glasses-png-for-ray-ban-glasses.jpg");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-13;
        noseY = results[0].pose.nose.y-13;
        reyesX = results[0].pose.rightEye.x-13;
        reyesY = results[0].pose.rightEye.y-13;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
        console.log("right eye x = " + leyesX);
        console.log("right eye y = " + leyesY);
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 33, 30);
    image(eyeglasses, reyesX, reyesY, 100, 30);
}

function take_snapshot()
{
    save('my_filter_image.png');
}