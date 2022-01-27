import {Cloudinary} from "@cloudinary/url-gen";

export default function getFetchImage() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('https://upload.wikimedia.org/wikipedia/commons/1/13/Benedict_Cumberbatch_2011.png').setDeliveryType('fetch');

  return myImage;
}
