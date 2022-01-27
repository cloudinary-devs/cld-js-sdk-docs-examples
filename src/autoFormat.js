import {Cloudinary} from "@cloudinary/url-gen";

export default function getAutoFormatImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
    }); 

    // Use the image with public ID, 'docs/shoes'.
    const myImage = cld.image('docs/shoes');

    // Request automatic format.
    myImage.format('auto');

    return myImage;
}