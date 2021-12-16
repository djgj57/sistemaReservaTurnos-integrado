import { colors } from "./../components/styles/utils/colors";
import React from "react";
export default function SmallLogo() {
  return (
    <svg
      className="small"
      width="current"
      height="current"
      viewBox="0 0 144 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M34.0273 58.959H40.8828C40.9251 58.959 40.9463 58.9801 40.9463 59.0225V85.4287C40.9463 85.4287 49.1771 89.1527 65.6387 96.6006L72.1768 99.584C91.1351 90.9935 100.868 86.5924 101.376 86.3809L103.407 85.4287V59.0225C103.407 58.9801 103.428 58.959 103.471 58.959H110.326C110.368 58.959 110.39 58.9801 110.39 59.0225V89.8721C110.22 89.999 106.75 91.5859 99.9795 94.6328L74.0176 106.376C72.9173 106.884 72.3037 107.159 72.1768 107.201C53.5993 98.7799 44.1624 94.5059 43.8662 94.3789L33.9639 89.9355V59.0225C33.9639 58.9801 33.985 58.959 34.0273 58.959ZM34.0273 98.8223C52.6471 106.439 62.0417 110.29 62.2109 110.375C62.4225 110.46 65.7445 111.814 72.1768 114.438C91.389 106.566 101.397 102.483 102.201 102.187C102.243 102.144 104.973 101.023 110.39 98.8223V98.8857V150.937C110.39 150.979 110.368 151 110.326 151H103.471C103.428 151 103.407 150.979 103.407 150.937V109.169C84.7028 116.786 75.3294 120.616 75.2871 120.658C74.9486 120.785 73.9118 121.208 72.1768 121.928C54.7842 114.861 45.6859 111.137 44.8818 110.756C44.8395 110.756 43.5277 110.227 40.9463 109.169V150.937C40.9463 150.979 40.9251 151 40.8828 151H34.0273C33.985 151 33.9639 150.979 33.9639 150.937V98.8857C33.9639 98.8434 33.985 98.8223 34.0273 98.8223Z"
        fill="url(#paint0_linear_21:22)"
      />
      <path
        d="M4 67.0604V156.7H140V67.0604L72 5L4 67.0604Z"
        stroke="url(#paint1_linear_21:22)"
        strokeWidth="7"
        strokeLinecap="square"
      />
      <defs>
        <linearGradient
          id="paint0_linear_21:22"
          x1="81"
          y1="61"
          x2="81"
          y2="158"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.gold} />
          <stop offset="0.703125" stopColor={colors.gold} />
          <stop offset="1" stopColor={colors.highlight} />
        </linearGradient>
        <linearGradient
          id="paint1_linear_21:22"
          x1="72"
          y1="5"
          x2="72"
          y2="156.7"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors.gold} />
          <stop offset="0.75" stopColor={colors.gold} />
          <stop offset="1" stopColor={colors.gold} />
        </linearGradient>
      </defs>
    </svg>
  );
}
