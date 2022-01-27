import {Cloudinary} from "@cloudinary/url-gen";
import {Adjust} from "@cloudinary/url-gen/actions";

export default function getSyntaxOverviewImage() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  });

  const myImage = cld.image('sample'); 

  myImage.adjust(Adjust.replaceColor('lightblue').tolerance(17));

  return myImage;
}
