import {Cloudinary} from "@cloudinary/url-gen";

export default function getOptimizationsImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
    }); 

    // Use the image with public ID, 'pond_reflect'.
    const myImage = cld.image('pond_reflect');

    // Request automatic format and quality.
    myImage
    .format('auto')
    .quality('auto');

    return myImage;
}