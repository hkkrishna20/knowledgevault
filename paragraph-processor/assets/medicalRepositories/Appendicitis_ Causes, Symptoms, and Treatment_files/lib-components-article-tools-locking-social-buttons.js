webpackJsonp([9],{115:function(e,t,n){"use strict";var a=n(0),o=n(5),r=n.n(o),i=n(6),c=n.n(i),l=n(7),s=n.n(l),u=n(1),p=n.n(u),d=n(96),m=n.n(d),h=n(116),f=n.n(h),b=n(3),g=(n.n(b),n(13)),v=n(27),y=n(2),w=n(59),E={modalWrapper:Object(a.a)({alignItems:"flex-start",display:"flex",justifyContent:"center",maxHeight:"100%",pointerEvents:"none",position:"relative",width:"100%",maxWidth:640}),backdrop:Object(a.a)(g.h,{background:"rgba(0, 0, 0, 0.65)",bottom:0,cursor:"pointer",display:"block",left:0,opacity:0,position:"fixed",right:0,top:0,transition:Object(w.b)("opacity",350),width:"100%"}),modalWindow:Object(a.a)(y.a.mq({"&::before":{bottom:0,boxShadow:"0 5px 50px rgba(0, 0, 0, 0.5)",content:'""',display:"block",left:0,pointerEvents:"none",position:"absolute",right:0,top:0},background:"white",margin:["10px","60px 10px"],opacity:0,pointerEvents:"none",position:"relative",transform:"scale(.96, .96)",transformOrigin:"50% 200px",transition:Object(w.b)("opacity")+", "+Object(w.b)("transform"),width:"100%"})),closeButton:Object(a.a)(y.a.mq({"&::before":{alignItems:"center",bottom:0,display:"flex",fontSize:16,justifyContent:"center",left:0,lineHeight:"14px",position:"absolute",right:0,top:0},background:"none",border:"none",color:"gray-dark",height:64,width:64,position:"absolute",right:0,top:0,padding:0,cursor:"pointer",zIndex:1})),modal:Object(a.a)({color:"hl-black",alignItems:"center",bottom:0,display:"flex",justifyContent:"center",left:0,overflow:"auto",WebkitOverflowScrolling:"touch",pointerEvents:"none",position:"fixed",right:0,top:0,maxWidth:"100vw",zIndex:y.a.zIndex.modals,"&.no-hash":{opacity:1,pointerEvents:"auto","& .backdrop":{opacity:1,transition:"opacity 0ms"},"& .window":{opacity:1,pointerEvents:"auto",transform:"none",transition:"opacity 0ms, "+Object(w.a)("transform")}}})},k=function(e){function t(){var n,a,o;r()(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=a=c()(this,e.call.apply(e,[this].concat(l))),a.state={},a.close=function(){document.body.style.overflow="auto";var e=a.props.onClose;a.setState({transitioning:!0}),setTimeout(function(){e&&e()},350)},a.handleCloseButtonClick=function(){a.close(),a.modalCloseButtonRef.blur()},o=n,c()(a,o)}return s()(t,e),t.prototype.componentDidMount=function(){var e=this;document.body.style.overflow="hidden",setTimeout(function(){e.setState({transitioning:!1})},10)},t.prototype.render=function(){var e=this,t=this.props,n=t.className,o=t.render,r=t.omitCloseButton,i=t.disableCloseOnEscape,c=t.disableCloseOnClickBackdrop,l=this.state.transitioning,s=function(){return p.a.createElement("button",{ref:function(t){e.modalCloseButtonRef=t},className:Object(a.a)([v.c,E.closeButton])+" icon-hl-close window-close-button",onClick:e.handleCloseButtonClick})},u=function(){return!c&&e.close()},d=p.a.createElement("div",{className:Object(a.g)(Object(a.a)([E.modal,n])+" "+(l?"":"no-hash"))},p.a.createElement("button",{className:Object(a.a)(Object(a.b)(E.backdrop,Object(a.a)({cursor:c?"default":"cursor"})))+" backdrop",onClick:u,tabIndex:"-1"}),p.a.createElement("div",{className:"window-wrapper "+E.modalWrapper},p.a.createElement("div",{className:Object(a.a)(E.modalWindow)+" window"},!r&&s(),o({closeButton:s,close:this.close}))));return m.a.createPortal(i?d:p.a.createElement(f.a,{onEscape:this.close},d),document.querySelector("#modal-host"))},t}(u.Component);k.defaultProps={className:""},t.a=k},116:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),l=n(1),s=(a(l),n(3)),u=a(s),p=function(e){function t(){o(this,t);var e=r(this,Object.getPrototypeOf(t).call(this));return e.onEscape=e.onEscape.bind(e),e}return i(t,e),c(t,[{key:"onEscape",value:function(e){27===e.keyCode&&this.props.onEscape()}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.onEscape)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.onEscape)}},{key:"render",value:function(){return l.Children.only(this.props.children)}}]),t}(l.Component);t.default=p,p.propTypes={onEscape:u.default.func.isRequired}},118:function(e,t,n){"use strict";var a=!("undefined"==typeof window||!window.document||!window.document.createElement),o={canUseDOM:a,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:a&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:a&&!!window.screen,isInWorker:!a};e.exports=o},119:function(e,t,n){"use strict";var a=n(104),o={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!0),{remove:function(){e.removeEventListener(t,n,!0)}}):{remove:a}},registerDefault:function(){}};e.exports=o},120:function(e,t,n){"use strict";function a(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}e.exports=a},121:function(e,t,n){"use strict";function a(e,t){return!(!e||!t)&&(e===t||!o(e)&&(o(t)?a(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}var o=n(97);e.exports=a},122:function(e,t,n){"use strict";function a(e){try{e.focus()}catch(e){}}e.exports=a},172:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),o=n(1),r=n.n(o),i=n(453),c=n(454),l=n(20),s=["facebook","twitter","flipboard","pinterest","email"],u=["facebook","twitter","flipboard","pinterest","email","sms"];t.default=Object(l.c)(function(e){var t=e.pinterestImage,n=e.mobile,o=e.appState,l=e.isTablet,p={display:"flex",flexDirection:"column","& > .button-wrapper":{"& > .button":{color:"white",border:"1px solid white",padding:10,fontSize:20,display:"flex","&:hover":{color:"white"}},"&.pinterest":{backgroundColor:"#bd081c","&:hover":{backgroundColor:"#71040f"}},"&.email":{backgroundColor:"magenta","&:hover":{backgroundColor:"#8d0f4e"}},"&.twitter":{backgroundColor:"#20abe4","&:hover":{backgroundColor:"#126688"}},"&.flipboard":{backgroundColor:"#e12828","&:hover":{backgroundColor:"#871818"}},"&.facebook":{backgroundColor:"#415bac","&:hover":{backgroundColor:"#273767"}}}},d={display:"flex",justifyContent:"space-between",flexDirection:"row",backgroundColor:"white",padding:"4px 3px 4px 19.5px",borderBottom:"1px solid gray","& > .button-wrapper":{"& > .button":{marginRight:8,color:"white",padding:10,fontSize:20,display:"flex",border:"1px solid white","&.pinterest":{color:"#bd081c"},"&.email":{color:"magenta"},"&.twitter":{color:"#20abe4"},"&.flipboard":{color:"#e12828"},"&.facebook":{color:"#415bac"},"&.sms":{color:"hl-blue",marginRight:"unset"}}}},m={lineHeight:"42px",textAlign:"center",color:"gray-dark",fontSize:14};return n&&!o.isMobileShareBarVisible?null:r.a.createElement("div",{className:Object(a.a)(n?d:p)},n&&r.a.createElement("div",{className:Object(a.a)(m)}," SHARE "),r.a.createElement(i.a,{pinterestImage:t,buttons:n?u:s,ButtonWrapper:c.a,disableTooltip:!0,mobile:n,isTablet:l}))})},42:function(e,t,n){"use strict";function a(e){var t=e.className;return s.a.createElement("span",{"aria-valuetext":"Loading...",role:"progressbar",className:Object(r.a)([p,t])},s.a.createElement("span",{className:"dot"}),s.a.createElement("span",{className:"dot"}),s.a.createElement("span",{className:"dot"}))}function o(e){var t=e.children,n=e.color,o=e.customColors,i=e.className,p=e.disabled,b=e.large,g=e.loading,v=e.hasCheck,y=e.title,w=e.onClick,E=c()(e,["children","color","customColors","className","disabled","large","loading","hasCheck","title","onClick"]),k=b?8:6,x=E.href?u.a:"button",O=Object(r.a)("position:relative;min-width:",b?210:150,"px;padding:",k,"px ",g?7*k:2*k,"px ",b?9:6,"px ",2*k,"px;transition:",Object(m.a)("padding",500),";overflow:hidden;cursor:pointer;user-select:none;",g||p?"pointer-events: none":"",";&:active,&:hover:not(:focus){outline:none;}background:transparent;border:1px solid transparent;font-size:14px;",d.a.font.proximaNovaSemiBold,";text-decoration:none;text-shadow:0 0 0 rgba(255,255,255,0.5);&:hover{& img{opacity:0.8;}& svg{fill:currentColor;}}color:white;",o||h[n],";&:disabled{background:#bcbfc5;}");return Object(l.createElement)(x,Object.assign({onClick:function(e){e.currentTarget.blur(),w&&w(e)},className:Object(r.b)(O,i)},E.href&&{disableColors:!0},E),v&&s.a.createElement(f,null),s.a.createElement("span",{className:Object(r.a)("position:relative")},s.a.createElement("span",{className:Object(r.a)("opacity:",g||p?.5:1)},y,t),g&&s.a.createElement(a,{className:Object(r.a)("align-items:center;bottom:0;display:flex;margin:auto;position:absolute;right:-37px;top:-2px;")})))}var r=n(0),i=n(15),c=n.n(i),l=n(1),s=n.n(l),u=(n(3),n(9)),p=Object(r.a)({"& .dot":{"&::before":{content:'"•"',fontSize:15},"&:nth-of-type(2)":{animationDelay:"200ms"},"&:nth-of-type(3)":{animationDelay:"400ms"},animationDirection:"alternate",animationDuration:"400ms",animationIterationCount:"infinite",animationName:Object(r.f)({from:{opacity:1},to:{opacity:0}}),display:"inline-block",marginRight:3}}),d=n(2),m=n(59);n.d(t,"b",function(){return o}),n.d(t,"a",function(){return f});var h={pink:Object(r.a)("background:magenta;&:hover,&:active{background:magenta-dark;}"),primary:Object(r.a)("background:hl-blue;&:hover{background:magenta;}&:active{background:magenta-dark;}")},f=function(e){var t=e.color,n=e.size,a=void 0===n?13:n,o=e.className;return s.a.createElement("span",{className:Object(r.b)(Object(r.a)("&::before{display:inline-block;font-size:",a,"px;height:",a,"px;width:",a,"px;}margin-right:6px;margin-left:-6px;",t&&"color: "+t,";",o,";"),"icon-hl-check")})};o.defaultProps={color:"primary"}},441:function(e,t,n){"use strict";function a(e){var t=e.message,n=e.marginTop,a=e.marginBottom;return i.a.createElement("p",{className:Object(o.a)(c.a.mq({marginTop:n,marginBottom:a,color:"red",border:"solid 1px rgba(254, 38, 38, 0.25)",padding:"10px 15px",background:"rgba(254, 38, 38, 0.1)"}))},i.a.createElement("small",null,i.a.createElement("strong",null,"There was an error.")," ",t||"Please review the fields below or try again later."))}t.a=a;var o=n(0),r=n(1),i=n.n(r),c=n(2)},453:function(e,t,n){"use strict";function a(e){var t=e.actionDescription,n=e.actionTitle,a=e.aTagProps,o=e.ButtonChildren,r=e.ButtonWrapper,i=e.eventAction,l=e.handle,s=e.href,u=e.icon,p=e.onClick,d=e.title;return f.a.createElement(r,{actionTitle:n,handle:l,title:d},f.a.createElement(g.a,{action:i,category:"Any Page",label:d,onClick:p},f.a.createElement(b.a,c()({className:l+" button icon "+u,disableColorsTillHover:!0,href:s,rel:s&&"noopener noreferrer nofollow",target:s&&"#"===s.substr(0,1)?void 0:"_blank",title:t},a),o&&f.a.createElement(o,{actionTitle:n,title:d}))))}function o(e){var t=e.children;return f.a.createElement("div",{className:Object(v.a)(R)},f.a.createElement(L.a,{toggleMaxWidthAndSideMargins:z,toggleSideSpace:z,className:Object(v.a)("display:flex;align-items:center")},t))}function r(e){var t=e.onClose;return f.a.createElement(j.a,{className:q,onClose:t,render:function(e){var t=e.closeButton;return f.a.createElement("div",null,f.a.createElement(L.a,{toggleMaxWidthAndSideMargins:[!0,!0,!1,!1],toggleSideSpace:[!0,!0,!1,!1]},f.a.createElement("div",{className:Object(v.a)({position:"relative",userSelect:"none","& .window-close-button":{bottom:0,margin:"auto",right:-24}})},f.a.createElement("p",{className:Object(v.a)({color:"hl-black",fontWeight:800})},"Share"),t())),f.a.createElement("div",null,f.a.createElement(G,{buttons:H,eventAction:"Sharebar more",ButtonChildren:function(e){var t=e.actionTitle;return f.a.createElement("span",{className:Object(v.a)({color:"hl-black"})},t)},ButtonWrapper:o})))}})}var i=n(4),c=n.n(i),l=n(5),s=n.n(l),u=n(6),p=n.n(u),d=n(7),m=n.n(d),h=n(1),f=n.n(h),b=n(13),g=n(58),v=n(0),y=n(36),w=n.n(y),E=n(37),k=n.n(E),x=(n(3),n(42)),O=n(441),j=n(115),C=n(61),S=n(2),T=n(29),N=n(62),D=n(20),_=function(){function e(e){return t.apply(this,arguments)}var t=k()(w.a.mark(function e(t){var n,a;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(N.a)("emailShare");case 2:return n=e.sent,e.prev=3,e.next=6,Object(T.b)("/api/email-share",{data:c()({recaptcha:n,pageToken:D.a.pageToken},t),method:"POST"});case 6:return a=e.sent,e.abrupt("return",a.data);case 10:return e.prev=10,e.t0=e.catch(3),e.abrupt("return",e.t0.data);case 13:case"end":return e.stop()}},e,this,[[3,10]])}));return e}(),B=function(){function e(e){return t.apply(this,arguments)}var t=k()(w.a.mark(function e(t){var n;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(T.b)("/api/config/newsletter-token"+(t?"?k1="+t:""),{method:"GET"});case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",e.t0.data);case 10:case"end":return e.stop()}},e,this,[[0,7]])}));return e}(),P=n(57),M={width:"100%"},A={error:!1,success:!1,theirEmail:"",yourEmail:"",yourName:"",loading:!1},I=function(e){function t(){var n,a,o,r=this;s()(this,t);for(var i=arguments.length,l=Array(i),u=0;u<i;u++)l[u]=arguments[u];return n=a=p()(this,e.call.apply(e,[this].concat(l))),a.state=A,a.handleChange=function(e){var t,n=e.target,o=n.name,r=n.value;a.setState((t={},t[o]=r,t))},a.handleSubmit=function(){var e=k()(w.a.mark(function e(t){var n,o,i,l,s,u;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),a.setState({loading:!0}),n=a.props.shareBarType,o=a.state,i=o.yourName,l=o.yourEmail,s=o.theirEmail,e.t0=_,e.t1=c.a,e.t2={theirEmail:s,yourEmail:l,yourName:i,shareBarType:n},e.next=10,B(D.a.targeting.k1);case 10:return e.t3=e.sent,e.t4=(0,e.t1)(e.t2,e.t3),e.next=14,(0,e.t0)(e.t4);case 14:u=e.sent,u&&u.success&&Object(P.e)({action:"Sharebar",category:"Any Page",value:void 0,label:"Email Submit"}),a.setState({loading:!1,response:u,error:u&&u.error,success:u&&u.success}),e.next=22;break;case 19:e.prev=19,e.t5=e.catch(0),a.setState({loading:!1,response:void 0,error:e.t5});case 22:case"end":return e.stop()}},e,r,[[0,19]])}));return function(t){return e.apply(this,arguments)}}(),a.handleClose=function(){var e=a.props.onClose;a.setState(A),e()},o=n,p()(a,o)}return m()(t,e),t.prototype.render=function(){var e=this,t=this.state,n=t.error,a=t.success,o=t.theirEmail,r=t.yourEmail,i=t.yourName,c=t.loading;return f.a.createElement(j.a,{onClose:this.handleClose,render:function(t){var l=t.close;return f.a.createElement("div",{className:Object(v.a)({padding:25,"@media tablet":{padding:40}})},a&&f.a.createElement("div",{className:Object(v.a)([S.a.utils.marginHero,{bottom:30,left:40,position:"absolute",right:40,top:40}])},f.a.createElement("h3",null,"Email this page"),f.a.createElement("div",{className:Object(v.a)([S.a.utils.marginHero,{bottom:30,left:40,position:"absolute",right:40,top:40}])},f.a.createElement("div",{className:Object(v.a)({bottom:0,display:"flex",flexDirection:"column",justifyContent:"center",left:0,margin:"auto",position:"absolute",right:0,textAlign:"center",top:0})},f.a.createElement("p",{className:Object(v.a)({alignItems:"center",display:"flex",justifyContent:"center",marginBottom:40,textAlign:"left"})},f.a.createElement("span",{className:Object(v.a)({"&::before":{display:"block",fontSize:26,height:"100%",lineHeight:"26px",width:"100%"},color:"hl-blue",display:"inline-block",height:26,marginRight:15,position:"relative",top:-1,width:26})+" icon-hl-check-thin"}),"Thank you. Your message has been sent."),f.a.createElement("div",null,f.a.createElement(x.b,{onClick:l,title:"OK"}))))),f.a.createElement("form",{className:Object(v.a)([S.a.utils.marginHero,a&&{opacity:0,pointerEvents:"none"}]),onSubmit:e.handleSubmit},f.a.createElement("h3",null,"Email this page"),n&&f.a.createElement(O.a,null),f.a.createElement(b.e,{required:!0},f.a.createElement("span",null,"Your full name"),f.a.createElement(b.d,{className:Object(v.a)(M),name:"yourName",onChange:e.handleChange,required:!0,type:"text",value:i,disabled:c})),f.a.createElement(b.e,{disabled:c,required:!0},f.a.createElement("span",null,"Your email"),f.a.createElement(b.d,{className:Object(v.a)(M),name:"yourEmail",onChange:e.handleChange,required:!0,type:"email",value:r,disabled:c})),f.a.createElement(b.e,{disabled:c,required:!0},f.a.createElement("span",null,"Recipient’s email"),f.a.createElement(b.d,{className:Object(v.a)(M),name:"theirEmail",onChange:e.handleChange,required:!0,type:"email",value:o,disabled:c})),f.a.createElement("div",{className:Object(v.a)({marginBottom:20,marginTop:30})},f.a.createElement(x.b,{title:"SEND EMAIL",loading:c})),f.a.createElement(C.a,{grayTheme:!0})))}})},t}(h.Component),W=I,L=n(48),R={borderBottom:"solid 1px gray","& .button":{display:"flex",alignItems:"center",userSelect:"none",minHeight:"70px",width:"100%",fontSize:"inherit","&::before":{fontSize:25,width:25,height:25,lineHeight:"25px",display:"block",textAlign:"center",marginRight:25}},"&:first-child":{borderTop:"solid 1px gray"}},z=[!0,!0,!1,!1],H=["print","email","facebook","twitter","pinterest","reddit"],q=Object(v.a)({maxWidth:"100%",alignItems:"flex-start","& .window":{boxShadow:"none",width:"100%",margin:0,"&::before":{content:"none"},"& > .window-close-button":{display:"none"}},"& .window-wrapper":{maxWidth:"100%"},"& .backdrop":{background:"white"}}),U=n(18),K=n(39),F=function(e){var t=e.event,n=e.height,a=e.width,o=e.type,r=e.url,i=e.eventId,c=e.targeting,l=c.k1,s=c.k2,u=c.msiteID;t.preventDefault(),Object(K.f)({eventId:i,eventType:"social",k1:l,k2:s,msiteID:u}),window.open(r,o+"Share",["centerscreen=yes","chrome=yes","directories=no","location=no","menubar=no","resizable=yes","scrollbars=no","status=no","toolbar=no","height="+n,"left="+(screen.width/2-a/2),"top="+(screen.height/2-n/2),"width="+a].join(","))},V=function(e){function t(){var n,a,o;s()(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return n=a=p()(this,e.call.apply(e,[this].concat(i))),a.state={emailModal:!1,moreModal:!1},a.toggleModal=function(e){return function(){var t;a.setState((t={},t[e+"Modal"]=!a.state[e+"Modal"],t))}},a.enablePinterest=function(e){-1!==e.buttons.indexOf("pinterest")&&Object(U.a)("https://assets.pinterest.com/js/pinit.js").catch(function(){})},o=n,p()(a,o)}return m()(t,e),t.prototype.componentDidMount=function(){this.enablePinterest(this.props)},t.prototype.componentWillUpdate=function(e){this.enablePinterest(e)},t.prototype.render=function(){var e=this.props,t=e.appState,n=e.ButtonChildren,o=e.buttons,i=e.ButtonWrapper,l=e.eventAction,s=e.pinterestImage,u=e.disableTooltip,p=e.mobile,d=e.isTablet,m=t.contentTitle,b=t.canonical,g=t.targeting,v=this.state,y=v.emailModal,w=v.moreModal,E=function(){return d?"tablet":p?"mobile":"desktop"},k=function(e,t){return"?utm_medium="+(t||"social")+"&utm_source="+e+"&utm_campaign=social-sharebar-referred-"+E()},x=function(e){return encodeURIComponent(""+b+k(e))},O="https://www.facebook.com/sharer/sharer.php?u="+x("facebook"),j="https://share.flipboard.com/bookmarklet/popout?ext=sharethis&url="+x("flipboard"),C="https://twitter.com/intent/tweet?"+Object(T.c)({text:m,via:"healthline"})+"&url="+x("twitter"),S="https://www.pinterest.com/pin/create/button/?media="+s+"&description="+m+"&url="+x("pinterest"),N=""+(l||"Sharebar"),D={email:{title:"Email",actionTitle:"Email",actionDescription:"Email this page",onClick:this.toggleModal("email")},facebook:{title:"Facebook",actionTitle:"Share",actionDescription:"Share on Facebook",href:O,onClick:function(e){F({event:e,eventId:"KyPCshQN",height:712,type:"facebook",url:O,width:555,targeting:g})}},sms:{title:"Text",actionTitle:"SMS",actionDescription:"Text",href:"sms:?&body="+encodeURIComponent(m+" "+b+k("sms-share","sms"))},more:{title:"More",actionTitle:"Expand",actionDescription:"Show more",onClick:this.toggleModal("more")},pinterest:{title:"Pinterest",actionTitle:"Pin",actionDescription:"Share on Pinterest",href:S,aTagProps:{"data-pin-custom":!0,"data-pin-do":"buttonPin","data-pin-href":S,media:s}},flipboard:{title:"Flipboard",actionTitle:"Flip",actionDescription:"Share on Flipboard",href:j},print:{title:"Print",actionTitle:"Print",actionDescription:"Print this page",onClick:function(){try{window.print()}catch(e){}}},reddit:{title:"Reddit",actionTitle:"Reddit",actionDescription:"Share on Reddit",href:"https://www.reddit.com/submit?url="+x("reddit")},twitter:{title:"Twitter",actionTitle:"Tweet",actionDescription:"Share on Twitter",href:C,onClick:function(e){F({event:e,eventId:"KyPZy9Ti",height:500,type:"twitter",url:C,width:750,targeting:g})}}};return u&&Object.keys(D).map(function(e){return delete D[e].actionDescription,null}),f.a.createElement(h.Fragment,null,y&&f.a.createElement(W,{onClose:this.toggleModal("email"),shareBarType:E()}),w&&f.a.createElement(r,{onClose:this.toggleModal("more")}),o.map(function(e){return f.a.createElement(a,c()({key:e,ButtonChildren:n,ButtonWrapper:i,handle:e,icon:"icon-hl-"+e,eventAction:N},D[e]))}))},t}(h.Component),G=t.a=Object(D.c)(V)},454:function(e,t,n){"use strict";function a(e){var t=e.children,n=e.handle;return r.a.createElement("div",{className:"button-wrapper "+n},t)}t.a=a;var o=n(1),r=n.n(o),i=n(3);n.n(i)},48:function(e,t,n){"use strict";var a=n(0),o=n(2),r=o.a.pageMargins,i=o.a.pageMaxWidth,c=o.a.mq,l=[!0,!0,!0,!0],s=[!1,!1,!1,!1];t.a=Object(a.c)("div",{target:"e3tj0s00"})(function(e){var t=e.toggleSideSpace,n=e.toggleMaxWidthAndSideMargins;return n=n&&!0!==n?n:l,t=(!0===t?l:t)||s,c({marginLeft:n.map(function(e){return e?"auto":0}),marginRight:n.map(function(e){return e?"auto":0}),maxWidth:n.map(function(e,t){return e?i[t]:"none"}),width:t.map(function(e,t){return e?"calc(100vw - "+2*r[t]+"px)":"100%"})})})},61:function(e,t,n){"use strict";var a=n(0),o=n(1),r=n.n(o),i=n(3),c=(n.n(i),n(13)),l=n(9),s=n(20),u=n(2),p=Object(a.a)({textDecoration:"underline",whiteSpace:"nowrap"}),d=function(e){var t=e.appState,n=e.className,o=e.classNames,i=e.colorTheme,s=e.grayTheme,d=e.marginTop,m=e.marginBottom;return r.a.createElement(c.c,{className:Object(a.g)(Object(a.a)(u.a.mq({marginTop:d,marginBottom:m}))+" "+n),gray:s},"Your ",r.a.createElement(l.a,{className:Object(a.b)(p,o&&o.link),disableColorsTillHover:!i,href:"/health/privacy-policy",rel:"noopener noreferrer",target:"_blank"},"privacy")," is important to us",t.isEEA&&". Any information you provide to us via this website may be placed by us on servers located in countries outside of the EU. If you do not agree to such placement, do not provide the information.")};d.defaultProps={appState:{}},t.a=Object(s.c)(d)},62:function(e,t,n){"use strict";n.d(t,"a",function(){return d});var a=n(36),o=n.n(a),r=n(37),i=n.n(r),c=n(26),l=n(18),s=n(38),u=void 0,p=function(){var e=i()(o.a.mark(function e(){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!u){e.next=2;break}return e.abrupt("return",u);case 2:e.next=4;break;case 4:return u=Object(l.a)("https://www.google.com/recaptcha/api.js?render="+c.a.googleRecaptchaSiteKey).then(function(){return new Promise(function(e){grecaptcha.ready(function(){e(grecaptcha)})})}),e.abrupt("return",u);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),d=function(){var e=i()(o.a.mark(function e(t){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.next=2;break;case 2:return e.abrupt("return",p().then(function(e){return e.execute(c.a.googleRecaptchaSiteKey,{action:t})}).catch(function(e){Object(s.a)(e,{action:t})}));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},96:function(e,t,n){"use strict";function a(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}a(),e.exports=n(117)},97:function(e,t,n){"use strict";function a(e){return o(e)&&3==e.nodeType}var o=n(98);e.exports=a},98:function(e,t,n){"use strict";function a(e){var t=e?e.ownerDocument||e:document,n=t.defaultView||window;return!(!e||!("function"==typeof n.Node?e instanceof n.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}e.exports=a}});
//# sourceMappingURL=lib-components-article-tools-locking-social-buttons.js.map