import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const CheckboxIcom = (props: SvgProps) => (
  <Svg width={12} height={13} fill="none" {...props}>
    <Path
      fill="#FFC996"
      d="M3.727 9.993.947 6.055 0 7.386l3.727 5.28 8-11.334L10.787 0l-7.06 9.993Z"
    />
  </Svg>
);
export default CheckboxIcom;
