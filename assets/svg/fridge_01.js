import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
      <Svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
      >
            <Path
                  d="M5 19.2V4.8C5 3.80589 5.72754 3 6.62499 3H16.375C17.2724 3 18 3.80589 18 4.8V19.2C18 20.1941 17.2724 21 16.375 21H6.625C5.72754 21 5 20.1941 5 19.2Z"
                  fill="#52a2e7"
                  stroke="#52a2e7"
                  strokeLinecap="round"
            />
            <Path
                  d="M5.18994 9L17.7999 9"
                  stroke="#F2F2F2"
                  strokeWidth={1.4}
                  strokeLinecap="square"
            />
            <Path
                  d="M8.19629 12V15.6602"
                  stroke="#F2F2F2"
                  strokeWidth={1.4}
                  strokeLinecap="round"
            />
            <Path
                  d="M8.19629 5.59467V6.50997"
                  stroke="#F2F2F2"
                  strokeWidth={1.4}
                  strokeLinecap="round"
            />
      </Svg>
);
export default SVGComponent;