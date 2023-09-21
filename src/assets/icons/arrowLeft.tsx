import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const ArrowLeft = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path fill="#9CCB86" d="M0 0h16v16H0z" />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="M12.667 8H3.333m0 0L8 12.667M3.333 8 8 3.333"
    />
  </Svg>
);
export default ArrowLeft;
