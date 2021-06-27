import React from "react";
import { ITextProps } from "config/type";
import "./index.less";
interface IProps extends ITextProps {
    tag: string;
}
declare const MText: React.FC<IProps>;
export default MText;
