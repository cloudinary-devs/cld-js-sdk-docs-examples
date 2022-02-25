import {Cloudinary} from "@cloudinary/url-gen";
// Import the scale mode from the resize action.
import {scale} from "@cloudinary/url-gen/actions/resize";

export default function getTransformingYourVideoVideo() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    },
    url: {
      analytics: false
    }
  });

  // Instantiate a CloudinaryVideo object for the video with public ID, 'elephants'.
  const myVideo = cld.video('elephants');

  // Scale the video to a width of 400 pixels.
  myVideo.resize(scale().width(400));

  return myVideo;
}
