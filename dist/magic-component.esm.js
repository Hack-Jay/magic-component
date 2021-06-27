import React, { useMemo, useCallback, createElement } from 'react';
import { without, pick } from 'lodash-es';

const commonDefaultProps = {
    // actions
    actionType: '',
    url: '',
    // size
    height: '',
    width: '373px',
    paddingLeft: '0px',
    paddingRight: '0px',
    paddingTop: '0px',
    paddingBottom: '0px',
    // border type
    borderStyle: 'none',
    borderColor: '#000',
    borderWidth: '0',
    borderRadius: '0',
    // shadow and opacity
    boxShadow: '0 0 0 #000000',
    opacity: '1',
    // position and x,y
    position: 'absolute',
    left: '0',
    top: '0',
    right: '0'
};
// text组件默认属性
const textDefaultProps = {
    text: '正文内容',
    fontSize: '14px',
    fontFamily: '',
    fontWeight: 'normal',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '1',
    textAlign: 'left',
    color: '#000000',
    backgroundColor: '',
    ...commonDefaultProps
};
const imageDefaultProps = {
    src: 'test.url',
    ...commonDefaultProps
};

const textStylePropsName = without(Object.keys(textDefaultProps), 'actionType', 'url', 'text');
// 返回组件的style属性和点击事件
const useComponentCommon = (props, picks) => {
    const styleProps = useMemo(() => pick(props, picks), [props, picks]);
    const handleClick = useCallback(() => {
        if (props.actionType === 'url' && props.url) {
            window.location.href = props.url;
        }
    }, [props]);
    return [styleProps, handleClick];
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".m-text-comp {\n  position: relative !important;\n}\n";
styleInject(css_248z$1);

const baseCls = "m-text-comp";
const MText = (props) => {
    console.log("this is package m-text update ts");
    const { tag: Tag, text } = props;
    const [styleProps, handleClick] = useComponentCommon(props, textStylePropsName);
    return createElement(Tag, {
        className: baseCls,
        style: styleProps,
        onClick: handleClick
    }, text);
};
MText.defaultProps = {
    tag: "div",
    ...textDefaultProps
};

var css_248z = ".m-image-component {\n  max-width: 100%;\n  position: relative !important;\n}\n";
styleInject(css_248z);

const MImage = (props) => {
    const { src } = props;
    const [styleProps, handleClick] = useComponentCommon(props, textStylePropsName);
    return (React.createElement("img", { src: src, className: "m-image-component", style: styleProps, onClick: handleClick, alt: "" }));
};

export { MImage, MText, commonDefaultProps, imageDefaultProps, textDefaultProps };
