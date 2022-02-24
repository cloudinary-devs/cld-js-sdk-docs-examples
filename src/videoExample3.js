import {Cloudinary} from "@cloudinary/url-gen";

// Import required actions and qualifiers.
import {fill} from "@cloudinary/url-gen/actions/resize";
import {byRadius} from "@cloudinary/url-gen/actions/roundCorners";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {Gravity} from "@cloudinary/url-gen/qualifiers";
import {AutoFocus} from "@cloudinary/url-gen/qualifiers/autoFocus";

export default function getExample3Video() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    },
    url: {
      analytics: false
    }
  });

  // Use the video with public ID, 'docs/walking_talking'.
  const myVideo = cld.video('docs/walking_talking');

  // Apply the transformation.
  myVideo
   .resize(fill().width(150).height(150).gravity(Gravity.autoGravity().autoFocus(AutoFocus.focusOn(FocusOn.faces()))))
   .roundCorners(byRadius(20));    // Round the corners.

  return myVideo;
}
