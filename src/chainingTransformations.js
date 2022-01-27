import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions.
import {fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"
import {sepia} from "@cloudinary/url-gen/actions/effect";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";

// Import required values.
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";


export default function getChainingTransformationsImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
    }); 

    // Use the image with public ID, 'sample'.
    const myImage = cld.image('sample');

    // Transform the image.
    myImage
    .resize(fill(150, 150))
    .roundCorners(byRadius(20))
    .effect(sepia())
    .overlay(   
        source(
        text('This is my picture', new TextStyle('arial',18))
        .textColor('white')      
        )
        .position(new Position().gravity(compass('north')).offsetY(20)))
    .rotate(byAngle(20))
    .format('png');

    return myImage;
}