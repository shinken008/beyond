import * as React from "react";

const SvgUpCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    className="up-circle_svg__icon"
    width={200}
    height={200}
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="#333"
      d="M518.5 360.3c-3.2-4.4-9.7-4.4-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246z"
    />
    <path
      fill="#333"
      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"
    />
  </svg>
);

export default SvgUpCircle;
