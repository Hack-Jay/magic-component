import { useMemo, useCallback } from "react";
import { without, pick } from "lodash-es";
import { textDefaultProps } from "config/defaultProps";
import { IImageProps, ITextProps } from "config/type";

export const textStylePropsName = without(
  Object.keys(textDefaultProps),
  "actionType",
  "url",
  "text"
);

// 返回组件的style属性和点击事件
export const useComponentCommon = (
  props: Readonly<Partial<ITextProps & IImageProps>>,
  picks: string[]
): [{ [key: string]: any }, React.MouseEventHandler<HTMLDivElement>] => {
  const styleProps = useMemo(() => pick(props, picks), [props, picks]);
  const handleClick = useCallback(() => {
    if (props.actionType === "url" && props.url) {
      window.location.href = props.url;
    }
  }, [props]);
  return [styleProps, handleClick];
};
