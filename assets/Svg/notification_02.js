import * as React from "react";
import Svg, { G, Mask, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
      <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <G clipPath="url(#clip0_396_2569)">
                  <Mask
                        id="mask0_396_2569"
                        style={{
                              maskType: "luminance",
                        }}
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={24}
                        height={24}
                  >
                        <Path d="M24 0H0V24H24V0Z" fill="white" />
                  </Mask>
                  <G mask="url(#mask0_396_2569)">
                        <Path
                              d="M10.01 21.01C10.01 22.11 10.9 23 12 23C13.1 23 13.99 22.11 13.99 21.01H10.01ZM18.88 16.82V11C18.88 7.75 16.63 5.03 13.59 4.31V3.59C13.59 2.71 12.88 2 12 2C11.12 2 10.41 2.71 10.41 3.59V4.31C7.37 5.03 5.12 7.75 5.12 11V16.82L3 18.94V20H21V18.94L18.88 16.82Z"
                              fill="white"
                        />
                  </G>
            </G>
            <Defs>
                  <ClipPath id="clip0_396_2569">
                        <Rect width={24} height={24} fill="white" />
                  </ClipPath>
            </Defs>
      </Svg>
);
export default SVGComponent;