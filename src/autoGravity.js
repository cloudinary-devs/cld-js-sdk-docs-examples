import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {autoGravity} from "@cloudinary/url-gen/qualifiers/gravity";

export default function getAutoGravityImage() {

    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    }
    });

    // Use the image with public ID, 'basketball_in_net'.
    const myImage = cld.image('basketball_in_net');

    // Apply the transformation.
    myImage.resize(fill().width(200).height(300).gravity(autoGravity()));

    return myImage;
}