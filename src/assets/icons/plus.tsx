import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
const Plus = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Circle cx={10} cy={10} r={9.5} fill="#FFC996" stroke="#fff" />
    <Path stroke="#fff" d="M10.13 3.704v12.592M3.704 9.87h12.592" />
  </Svg>
);
export default Plus;
