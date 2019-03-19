import * as React from "react";

const SvgCheck = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="check_svg__icon"
    width={200}
    height={200}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#333"
      d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474c-6.1-7.7-15.3-12.2-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"
    />
  </svg>
);

export default SvgCheck;
