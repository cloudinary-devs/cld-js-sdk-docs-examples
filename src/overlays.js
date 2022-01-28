import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {scale, fill, crop} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {byAngle} from "@cloudinary/url-gen/actions/rotate"
import {vignette} from "@cloudinary/url-gen/actions/effect";
import {byRadius, max} from "@cloudinary/url-gen/actions/roundCorners";
import {saturation, hue} from "@cloudinary/url-gen/actions/adjust";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
import {image, text} from "@cloudinary/url-gen/qualifiers/source";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";

export default function getOverlaysImage() {

// Create and configure your Cloudinary instance.
const cld = new Cloudinary({
  cloud: {
    cloudName: 'demo'
  }
});

// Use the image with public ID, 'coffee_cup'.
const myImage = cld.image('coffee_cup');

// Apply the transformation.
myImage
  .resize(fill().height(250).width(400).gravity('south'))
  .overlay(
    source(
      image('nice_couple')
          .transformation(new Transformation()
          .resize(crop().width(1.3).height(1.3).gravity(focusOn(FocusOn.faces())).regionRelative())
          .adjust(saturation(50))
          .effect(vignette())
          .resize(scale().width(100))
          .roundCorners(max())
          )
      )
      .position(new Position().gravity(compass('center')).offsetX(-20).offsetY(20)) 
  )
  .overlay(
    source(
      image('balloon')
        .transformation(new Transformation()
        .resize(scale().height(55))
        .adjust(hue(-20))
        .rotate(byAngle(5))
        )
    )
    .position(new Position().gravity(compass('center')).offsetX(30).offsetY(5)) 
  )
  .overlay(
    source(
      text('Love', new TextStyle('Cookie',40)
        .fontWeight('bold'))
        .textColor('#f08')
        .transformation(new Transformation()
        .rotate(byAngle(20)))
    )
    .position(new Position().gravity(compass('center')).offsetX(-45).offsetY(44)) 
  )
  .resize(crop().width(300).height(250).x(30))
  .roundCorners(byRadius(60));

return myImage;
}