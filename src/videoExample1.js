import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {scale} from "@cloudinary/url-gen/actions/resize";
import {byAngle} from "@cloudinary/url-gen/actions/rotate";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {opacity} from "@cloudinary/url-gen/actions/adjust";
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export default function getExample1Video() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    },
    url: {
      analytics: false
    }
  });

// Use the video with public ID, 'elephants'.
const myVideo = cld.video('elephants');

// Apply the transformation.
myVideo
.resize(scale().width(0.2))
.rotate(byAngle(20))
.overlay(
  source(
    image('cloudinary_icon')
    .transformation(new Transformation()
      .resize(scale().width(60))
      .adjust(opacity(50))
      )
  )
  .position(new Position().gravity(compass('south_east')).offsetX(60).offsetY(15))  
);

  return myVideo;
}



