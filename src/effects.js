import {Cloudinary} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {outline, cartoonify} from "@cloudinary/url-gen/actions/effect";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {outer} from "@cloudinary/url-gen/qualifiers/outlineMode";

export default function getEffectsImage() {

// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  }
}); 

// Use the image with public ID, 'actor'.
const myImage = cld.image('actor');

// Apply the transformation.
myImage
  .effect(cartoonify())
  .roundCorners(max())
  .effect(outline().mode(outer()).width(100).color('lightblue'))
  .backgroundColor('lightblue')
  .resize(scale().height(300));

  return myImage;

}