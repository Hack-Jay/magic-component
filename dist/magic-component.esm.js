import t,{useMemo as e,useCallback as o,createElement as n}from"react";import{without as i,pick as r}from"lodash-es";const a={actionType:"",url:"",height:"",width:"373px",paddingLeft:"0px",paddingRight:"0px",paddingTop:"0px",paddingBottom:"0px",borderStyle:"none",borderColor:"#000",borderWidth:"0",borderRadius:"0",boxShadow:"0 0 0 #000000",opacity:"1",position:"absolute",left:"0",top:"0",right:"0"},l={text:"正文内容",fontSize:"14px",fontFamily:"",fontWeight:"normal",fontStyle:"normal",textDecoration:"none",lineHeight:"1",textAlign:"left",color:"#000000",backgroundColor:"",...a},d={src:"test.url",...a},s=i(Object.keys(l),"actionType","url","text"),c=(t,n)=>[e((()=>r(t,n)),[t,n]),o((()=>{"url"===t.actionType&&t.url&&!t.idEditing&&(window.location.href=t.url)}),[t])];function p(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===o&&n.firstChild?n.insertBefore(i,n.firstChild):n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}p(".m-text-comp {\n  position: relative !important;\n}\n");const m=t=>{console.log("this is package m-text update ts");const{tag:e,text:o}=t,[i,r]=c(t,s);return n(e,{className:"m-text-comp mmm",style:i,onClick:r},o)};m.defaultProps={tag:"div",...l};p(".m-image-component {\n  max-width: 100%;\n  position: relative !important;\n}\n");const g=e=>{const{src:o}=e,[n,i]=c(e,s);return t.createElement("img",{src:o,className:"m-image-component",style:n,onClick:i,alt:""})};export{g as MImage,m as MText,a as commonDefaultProps,d as imageDefaultProps,l as textDefaultProps};
