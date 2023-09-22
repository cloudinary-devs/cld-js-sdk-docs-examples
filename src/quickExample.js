import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {sepia} from "@cloudinary/url-gen/actions/effect";

export default function getQuickExampleImage() {
  
  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('front_face');

  // Apply the transformation.
  myImage
  .effect(sepia());  // Apply a sepia effect.

  return myImage;
}