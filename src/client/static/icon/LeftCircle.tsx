import * as React from "react";

const SvgLeftCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="left-circle_svg__icon"
    width={200}
    height={200}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#333"
      d="M603.3 327.5l-246 178c-4.4 3.2-4.4 9.7 0 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"
    />
    <path
      fill="#333"
      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
    />
  </svg>
);

export default SvgLeftCircle;
