import './style.css';
import quickstart from './quickstart.js';

async function getComponent() {
    const element = document.createElement('div');
    const { default: _ } = await import('lodash');

    element.classList.add('text','App');
    element.innerHTML = "Crop an image to a square, as shown in the <br><a class=\"App-link\" href=\"https://cloudinary.com/documentation/react2_quick_start#2_add_cloudinary_to_your_code\" target=\"_blank\" rel=\"noopener noreferrer\">Quickstart guide</a></br>"

    const imgElement = document.createElement('img');
    element.appendChild(imgElement);
    const myImage = quickstart();
    imgElement.src = myImage.toURL();       
  
    return element;


  }
  
  getComponent().then((component) => {
    document.body.appendChild(component);
  });