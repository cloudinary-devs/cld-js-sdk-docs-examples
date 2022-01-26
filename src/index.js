import './style.css';
import getQuickstartImage from './quickstart.js';
import getFullExampleImage from './fullExample.js';

async function getComponent(index) {

    let description = "";
    let link = "";
    let linkText = "";
    let myImageUrl = "";

    // Set the variables for the different images
    switch (index)
    {
        case 1:
        {
            description = "Crop an image to a square, as shown in the";
            link = "https://cloudinary.com/documentation/javascript_quick_start#2_add_cloudinary_to_your_code";
            linkText = "Quickstart guide";
            myImageUrl = getQuickstartImage().toURL();
            break;
        }
        case 2:
        {
            description = "Apply a range of transformations, as shown in the";
            link = "https://cloudinary.com/documentation/javascript_integration#full_example";
            linkText = "Full example";
            myImageUrl = getFullExampleImage().toURL();
            break;
        }
        default:
        {
            console.log("Oops! Outside of range.");
        }
    }

    const element = document.createElement('div');
    const spacing = document.createElement('div');
    const spacing2 = document.createElement('div');
    const anchor = document.createElement('a');
    const imgElement = document.createElement('img');

    element.classList.add('text','App');
    spacing.classList.add('space');
    spacing2.classList.add('space');

    // Add the description
    element.innerHTML = description;

    // Define the link
    anchor.setAttribute("href", link);
    anchor.classList.add('App-link');
    anchor.setAttribute("target", "_blank");
    anchor.setAttribute("rel", "noopener noreferrer");
    anchor.innerHTML = linkText;

    // Add the link and some space to the div
    element.appendChild(anchor);
    element.appendChild(spacing);

    // Set the src attribute of the img element
    imgElement.src = myImageUrl;

    // Add the image and some space to the div
    element.appendChild(imgElement);
    element.appendChild(spacing2);
         
    return element;
  }
  
  for (let i=1; i<3; i++)
  {
    getComponent(i).then((component) => {
        document.body.appendChild(component);
    });
  }