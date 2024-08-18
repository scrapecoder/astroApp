import * as React from "react"
import { Svg,G,Defs,Filter, Circle,FeFlood, FeBlend, FeGaussianBlur } from "react-native-svg"
const SvgComponent = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={369}
    height={358}
    fill="none"
    {...props}
  >
    <G filter="url(#a)" opacity={1}>
      <Circle cx={361} cy={-3} r={177} fill="#FEB640" />
    </G>
    <Defs>
      <Filter
        id="a"
        width={722}
        height={722}
        x={0}
        y={-364}
        filterUnits="userSpaceOnUse"
      >
        <FeFlood floodOpacity={0} result="BackgroundImageFix" />
        <FeBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <FeGaussianBlur
          result="effect1_foregroundBlur_1_36"
          stdDeviation={92}
        />
      </Filter>
    </Defs>
  </Svg>
)
export default SvgComponent
