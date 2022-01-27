
import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

export default function getTransformationsImage() {

  // Create and configure your Cloudinary instance.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 

  // Use the image with public ID, 'front_face'.
  const myImage = cld.image('front_face');

  // Apply the transformation.
  myImage
  .resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())))  // Crop the image, focusing on the face.
  .roundCorners(byRadius(20));    // Round the corners.

  return myImage;
}