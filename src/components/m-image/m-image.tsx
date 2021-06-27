import React from "react";
import { textStylePropsName, useComponentCommon } from "utils";
import "./index.less";

interface IProps {
  src: string;
}

const MImage: React.FC<IProps> = (props) => {
  const { src } = props;
  const [styleProps, handleClick] = useComponentCommon(
    props,
    textStylePropsName
  );
  return (
    <img
      src={src}
      className="m-image-component"
      style={styleProps}
      onClick={handleClick}
      alt=""
    />
  );
};

export default MImage;
