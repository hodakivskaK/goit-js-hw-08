var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof e&&e&&e.Object===Object&&e,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),l=Object.prototype.toString,s=Math.max,d=Math.min,m=function(){return c.Date.now()};function v(e,t,n){var o,r,i,a,u,f,c=0,l=!1,v=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function T(e){return c=e,u=setTimeout(j,t),l?y(e):a}function S(e){var n=e-f;return void 0===f||n>=t||n<0||v&&e-c>=i}function j(){var e=m();if(S(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-f);return v?d(n,i-(e-c)):n}(e))}function h(e){return u=void 0,b&&o?y(e):(o=r=void 0,a)}function w(){var e=m(),n=S(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return T(f);if(v)return u=setTimeout(j,t),y(f)}return void 0===u&&(u=setTimeout(j,t)),a}return t=p(t)||0,g(n)&&(l=!!n.leading,i=(v="maxWait"in n)?s(p(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),w.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=f=r=u=void 0},w.flush=function(){return void 0===u?a:h(m())},w}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==l.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var u=r.test(e);return u||i.test(e)?a(e.slice(2),u?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),y=document.querySelector("input"),T=document.querySelector("textarea"),S={},j=localStorage.getItem("feedback-form-state"),h=JSON.parse(j);localStorage.getItem("feedback-form-state")&&(y.value=h.email,T.value=h.message),b.addEventListener("input",t((function(e){e.preventDefault(),"INPUT"===e.target.nodeName&&(S.email=e.target.value),"TEXTAREA"===e.target.nodeName&&(S.message=e.target.value),localStorage.setItem("feedback-form-state",JSON.stringify(S))}),500));b.addEventListener("submit",(function(e){e.preventDefault(),localStorage.removeItem("feedback-form-state"),y.value="",T.value="",console.log(S)}));
//# sourceMappingURL=03-feedback.a350d4f8.js.map
