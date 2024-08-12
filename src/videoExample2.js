import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {reverse,accelerate} from "@cloudinary/url-gen/actions/effect";
import {brightness} from "@cloudinary/url-gen/actions/adjust";
import {max} from "@cloudinary/url-gen/actions/roundCorners";
import {concatenate} from "@cloudinary/url-gen/actions/videoEdit";
import {Concatenate} from "@cloudinary/url-gen/qualifiers/concatenate";

export default function getExample2Video() {

  // Create a Cloudinary instance and set your cloud name.
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'dl2iiiyzj'
    },
    url: {
      analytics: false
    }
  });

// Use the video with public ID, 'Điều_gì_xảy_ra_với_cơ_thể_nếu_bạn_ăn_quá_nhiều_bắp_cải_1_vpjojm'.
const myVideo = cld.video('Điều_gì_xảy_ra_với_cơ_thể_nếu_bạn_ăn_quá_nhiều_bắp_cải_1_vpjojm');

// Apply the transformation.
myVideo
  .videoEdit(concatenate(Concatenate.videoSource('ski_jump').transformation(new Transformation().effect(reverse()))))
  .videoEdit(concatenate(Concatenate.videoSource('ski_jump').transformation(new Transformation().effect(accelerate(-50)))))
  .adjust(brightness(10))
  .roundCorners(max());

  return myVideo;
}



