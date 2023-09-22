import './style.css';
import getQuickstartImage from './quickstart';
import getQuickExampleImage from './quickExample';
import getFullExampleImage from './fullExample';
import getTransformationsImage from './transformations';
import getAssetInstanceImage from './assetInstance';
import getSyntaxOverviewImage from './syntaxOverview';
import getFetchImage from './deliveryType';
import getTransformingYourImageImage from './transformingYourImage';
import getChainingTransformationsImage from './chainingTransformations';
import getResizingAndCroppingImage from './resizingAndCropping';
import getAutoGravityImage from './autoGravity';
import getConvertingFormatExtensionImage from './convertingFormatExtension';
import getConvertingFormatDeliveryImage from './convertingFormatDelivery';
import getAutoFormatImage from './autoFormat';
import getEffectsImage from './effects';
import getOverlaysImage from './overlays';
import getOptimizationsImage from './imageOptimizations';

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
            link = "https://cloudinary.com/documentation/javascript_quick_start";
            linkText = "Quick start guide";
            myImageUrl = getQuickstartImage().toURL();
            break;
        }
        case 2:
        {
            description = "Apply a sepia effect, as shown in the";
            link = "https://cloudinary.com/documentation/javascript_integration#quick_example";
            linkText = "Quick example";
            myImageUrl = getQuickExampleImage().toURL();
            break;
        }
        case 3:
        {
            description = "Apply a range of transformations, as shown in the";
            link = "https://cloudinary.com/documentation/javascript_integration#full_example";
            linkText = "Full example";
            myImageUrl = getFullExampleImage().toURL();
            break;
        }
        case 4:
        {
            description = "Apply a thumbnail crop with rounded corners, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#image_transformations_with_javascript";
            linkText = "Image transformations with JavaScript";
            myImageUrl = getTransformationsImage().toURL();
            break;
        }
        case 5:
        {
            description = "Specify the Cloudinary configuration when instantiating an asset, as shown in";
            link = "https://cloudinary.com/documentation/javascript_integration#asset_instance_configuration";
            linkText = "Asset instance configuration";
            myImageUrl = getAssetInstanceImage().toURL();
            break;
        }
        case 6:
        {
            description = "Replace the most prominent color with light blue, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#syntax_overview";
            linkText = "Syntax overview";
            myImageUrl = getSyntaxOverviewImage().toURL();
            break;
        }
        case 7:
        {
            description = "Use the fetch delivery type to deliver an image, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#specifying_the_delivery_type";
            linkText = "Specifying the delivery type";
            myImageUrl = getFetchImage().toURL();
            break;
        }
        case 8:
        {
            description = "Scale an image to a width of 400 pixels, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#transforming_your_image";
            linkText = "Transforming your image";
            myImageUrl = getTransformingYourImageImage().toURL();
            break;
        }
        case 9:
        {
            description = "Chain several transformations together, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#chaining_transformations";
            linkText = "Chaining transformations";
            myImageUrl = getChainingTransformationsImage().toURL();
            break;
        }
        case 10:
        {
            description = "Crop an image to keep the faces, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#resizing_and_cropping";
            linkText = "Resizing and cropping";
            myImageUrl = getResizingAndCroppingImage().toURL();
            break;
        }
        case 11: 
        {
            description =
              "Crop an image to keep the most interesting part, as shown in";
            link =
              "https://cloudinary.com/documentation/javascript_image_transformations#resizing_and_cropping";
            linkText = "Resizing and cropping";
            myImageUrl = getAutoGravityImage().toURL();
            break;
        }
        case 12:
        {
            description = "Deliver a .jpg file in .gif format by changing the extension, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#converting_format_example1a";
            linkText = "Converting to another image format";
            myImageUrl = getConvertingFormatExtensionImage().toURL();
            break;
        }
        case 13:
        {
            description = "Deliver a .jpg file in .gif format by setting the delivery format, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#converting_format_example1b";
            linkText = "Converting to another image format";
            myImageUrl = getConvertingFormatDeliveryImage().toURL();
            break;
        }
        case 14:
        {
            description = "Use auto format to deliver a file in the best format for the end device, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#converting_format_example2";
            linkText = "Converting to another image format";
            myImageUrl = getAutoFormatImage().toURL();
            break;
        }
        case 15:
        {
            description = "Apply various transformations, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#applying_image_effects_and_filters";
            linkText = "Applying image effects and filters";
            myImageUrl = getEffectsImage().toURL();
            break;
        }
        case 16:
        {
            description = "Add text and image overlays to an image, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#adding_text_and_image_overlays";
            linkText = "Adding text and image overlays";
            myImageUrl = getOverlaysImage().toURL();
            break;
        }
        case 17:
        {
            description = "Apply automatic format and quality, as shown in";
            link = "https://cloudinary.com/documentation/javascript_image_transformations#image_optimizations";
            linkText = "Image optimizations";
            myImageUrl = getOptimizationsImage().toURL();
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
    const imgElement = document.createElement('img');

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

    // Set the src attribute of the img element
    imgElement.src = myImageUrl;

    // Add the image and some space to the div
    element.appendChild(imgElement);
    element.appendChild(spacing2);

    if (index === 17)
    {
        let endDiv = document.createElement('div');
        endDiv.innerHTML = "Go to <a href=\"videos.html\">video transformations...</a>";
        
        element.appendChild(endDiv);

        element.appendChild(spacing3);
    }
         
    return element;
  }
  
  // Loop through all the different images, adding them to the page
  for (let i=1; i<18; i++)
  {
    getComponent(i).then((component) => {
        document.body.appendChild(component);
    });
  }
