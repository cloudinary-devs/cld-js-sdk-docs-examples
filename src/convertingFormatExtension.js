import {Cloudinary} from "@cloudinary/url-gen"

export default function getConvertingFormatExtensionImage() {
 // Create and configure your Cloudinary instance.
 const cld = new Cloudinary({
   cloud: {
     cloudName: 'demo'
   }
 }); 

 // Use the image with public ID, 'docs/shoes', specifying the 'gif' extension.
 const myImage = cld.image('docs/shoes.gif');

 return myImage;
}