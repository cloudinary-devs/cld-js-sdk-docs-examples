import {Cloudinary} from "@cloudinary/url-gen";

export default function getConvertingFormatDeliveryImage() {

   // Create and configure your Cloudinary instance.
   const cld = new Cloudinary({
     cloud: {
       cloudName: 'demo'
     }
   }); 

   // Use the image with public ID, 'docs/shoes'.
   const myImage = cld.image('docs/shoes');

   // Set the format to GIF.
   myImage.format('gif');

   return myImage;

}