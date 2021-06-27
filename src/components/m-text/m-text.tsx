import React, { createElement as h } from "react";
import { ITextProps } from "config/type";
import { textDefaultProps } from "config/defaultProps";
import { useComponentCommon, textStylePropsName } from "utils";

import "./index.less";

interface IProps extends ITextProps {
  // 使用的标签: div p
  tag: string;
}

const baseCls = "m-text-comp";
const MText: React.FC<IProps> = (props) => {
  console.log("this is package m-text update ts");
  const { tag: Tag, text } = props;
  const [styleProps, handleClick] = useComponentCommon(
    props,
    textStylePropsName
  );

  return h(
    Tag,
    {
      className: baseCls,
      style: styleProps,
      onClick: handleClick
    },
    text
  );
};

MText.defaultProps = {
  tag: "div",
  ...textDefaultProps
};

export default MText;
