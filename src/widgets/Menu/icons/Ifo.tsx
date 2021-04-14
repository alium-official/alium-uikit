import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path opacity="0.5" d="M4.27783 10.9233V19.0106C4.27783 20.1152 5.17326 21.0106 6.27783 21.0106H17.7219C18.8265 21.0106 19.7219 20.1152 19.7219 19.0106V10.9233" stroke="#8990A5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M12.1333 3.63586L12.1333 9.14219C12.1333 10.3659 11.1413 11.3579 9.91763 11.3579V11.3579C8.55165 11.3579 7.51102 10.1339 7.73077 8.78575L8.61205 3.37888" stroke="#8990A5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M12.0166 3.63586L12.0166 9.14219C12.0166 10.3659 13.0086 11.3579 14.2323 11.3579V11.3579C15.5982 11.3579 16.6389 10.1339 16.4191 8.78575L15.5379 3.37888" stroke="#8990A5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M11.9663 2.98992L6.42566 2.98992C5.84681 2.98992 5.32905 3.35003 5.12764 3.89271L3.48299 8.32395C2.93729 9.79423 4.05738 11.3579 5.62566 11.3579V11.3579C6.54782 11.3579 7.38595 10.7784 7.69638 9.91003V9.91003" stroke="#8990A5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
      <path d="M12.0337 2.98992L17.5743 2.98992C18.1532 2.98992 18.6709 3.35003 18.8724 3.89271L20.517 8.32395C21.0627 9.79423 19.9426 11.3579 18.3743 11.3579V11.3579C17.4522 11.3579 16.6141 10.7784 16.3036 9.91003V9.91003" stroke="#8990A5" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    </Svg>
  );
};

export default Icon;
