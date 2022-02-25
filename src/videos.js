import './style.css';
import getTransformingYourVideoVideo from './transformingYourVideo';
import getExample1Video from './videoExample1';
import getExample2Video from './videoExample2';
import getExample3Video from './videoExample3';

async function getComponent(index) {

    let description = "";
    let link = "";
    let linkText = "";
    let myVideoUrl = "";

    // Set the variables for the different videos
    switch (index)
    {
        case 1:
        {
            description = "Resize a video to a width of 400 pixels, as shown in";
            link = "https://cloudinary.com/documentation/javascript_video_transformations#transforming_your_video";
            linkText = "Transforming your video";
            myVideoUrl = getTransformingYourVideoVideo().toURL();
            break;
        }
        case 2:
        {
            description = "Apply several transformations to the elephant video, as shown in";
            link = "https://cloudinary.com/documentation/javascript_video_transformations#example_1";
            linkText = "Example 1";
            myVideoUrl = getExample1Video().toURL();
            break;
        }
        case 3:
        {
            description = "Apply several transformations to the snowboarding video, as shown in ";
            link = "https://cloudinary.com/documentation/javascript_video_transformations#example_2";
            linkText = "Example 2";
            myVideoUrl = getExample2Video().toURL();
            break;
        }
        case 4:
        {
            description = "Focus on faces in a video, as shown in";
            link = "https://cloudinary.com/documentation/javascript_video_transformations#example_3";
            linkText = "Example 3";
            myVideoUrl = getExample3Video().toURL();
            break;
        }
        default:
        {
            console.log("Oops! Outside of range.");
        }
    }

    // Create the elements
    const element = document.createElement('div');
    const spacing = document.createElement('div');
    const spacing2 = document.createElement('div');
    const spacing3 = document.createElement('div');
    const anchor = document.createElement('a');
    const videoElement = document.createElement('video');
    const webmSourceElement = document.createElement('source');
    const mp4SourceElement = document.createElement('source');
    const ogvSourceElement = document.createElement('source');

    // Set the styles
    element.classList.add('text','App');
    spacing.classList.add('space');
    spacing2.classList.add('space');
    spacing3.classList.add('space');

    // Add the description
    element.innerHTML = description;

    // Define the link
    anchor.href = link;
    anchor.classList.add('App-link');
    anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.innerHTML = linkText;

    // Add the link and some space to the div
    element.appendChild(anchor);
    element.appendChild(spacing);

    // Set the source elements for the video element
    webmSourceElement.src = myVideoUrl + ".webm"; 
    webmSourceElement.type = "video/webm";
    videoElement.appendChild(webmSourceElement); 
    mp4SourceElement.src = myVideoUrl + ".mp4"; 
    mp4SourceElement.type = "video/mp4";
    videoElement.appendChild(mp4SourceElement); 
    ogvSourceElement.src = myVideoUrl + ".ogv"; 
    ogvSourceElement.type = "video/ogg";
    videoElement.appendChild(ogvSourceElement);

    // Set the attributes of the video element
    videoElement.controls = "true";
    videoElement.autoplay = "true"; 
    videoElement.loop = "true";
    videoElement.muted = "true";

    // Add the video and some space to the div
    element.appendChild(videoElement);
    element.appendChild(spacing2);

    if (index == 4)
    {
        let endDiv = document.createElement('div');
        endDiv.innerHTML = "Go to <a href=\"index.html\">image transformations...</a>";
        
        element.appendChild(endDiv);

        element.appendChild(spacing3);
    }
         
    return element;
  }
  
  // Loop through all the different videos, adding them to the page
  for (let i=1; i<5; i++)
  {
    getComponent(i).then((component) => {
        document.body.appendChild(component);
    });
  }

