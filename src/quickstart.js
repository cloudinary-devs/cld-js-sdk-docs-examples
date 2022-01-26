import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";

export default function getQuickstartImage() {

    const cld = new Cloudinary({
        cloud: {
            cloudName: 'demo'
        }
    });

    const myImage = cld.image('docs/models'); 

    myImage.resize(fill().width(250).height(250));

    return myImage;
}