var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,a="object"==typeof self&&self&&self.Object===Object&&self,c=l||a||Function("return this")(),s=Object.prototype.toString,f=Math.max,d=Math.min,g=function(){return c.Date.now()};function v(e,t,n){var o,i,r,u,l,a,c=0,s=!1,v=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function h(e){return c=e,l=setTimeout(L,t),s?b(e):u}function w(e){var n=e-a;return void 0===a||n>=t||n<0||v&&e-c>=r}function L(){var e=g();if(w(e))return T(e);l=setTimeout(L,function(e){var n=t-(e-a);return v?d(n,r-(e-c)):n}(e))}function T(e){return l=void 0,p&&o?b(e):(o=i=void 0,u)}function j(){var e=g(),n=w(e);if(o=arguments,i=this,a=e,n){if(void 0===l)return h(a);if(v)return l=setTimeout(L,t),b(a)}return void 0===l&&(l=setTimeout(L,t)),u}return t=m(t)||0,y(n)&&(s=!!n.leading,r=(v="maxWait"in n)?f(m(n.maxWait)||0,t):r,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=a=i=l=void 0},j.flush=function(){return void 0===l?u:T(g())},j}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var l=i.test(e);return l||r.test(e)?u(e.slice(2),l?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:o,maxWait:t,trailing:i})};const p={header:document.querySelector("header"),body:document.querySelector("body"),menu:document.querySelector(".header__menu"),end:document.querySelector(".header__menu-end"),nav:document.querySelector("#nav"),hero:document.querySelector("#hero"),button:document.querySelector("[data-modal-open-two]")};p.menu.addEventListener("click",(()=>{p.nav.classList.toggle("nav--show"),p.body.classList.toggle("hidden"),p.menu.classList.toggle("is-open"),p.button.classList.toggle("is-open"),setTimeout((()=>{p.menu.classList.toggle("none"),p.button.classList.toggle("none")}),250)})),p.end.addEventListener("click",(()=>{p.menu.classList.toggle("none"),p.button.classList.toggle("none"),p.nav.classList.toggle("nav--show"),p.body.classList.toggle("hidden"),p.menu.classList.toggle("is-open"),p.button.classList.toggle("is-open")})),window.addEventListener("scroll",t((()=>{if(innerWidth<1280)return;p.hero.getBoundingClientRect().y>-60?p.header.removeAttribute("style"):p.header.style.backgroundColor="#00000060"}),500)),function(){let e=0,n=$(".back-to-top");$(window).on("scroll",t((()=>{$(this).scrollTop()>=50?n.fadeIn():n.fadeOut(),e+=1,console.log("🚀 ~ a",e)}),500)),n.on("click",(()=>{event.preventDefault(),$("html").animate({scrollTop:0},1e3)}))}();
//# sourceMappingURL=index.972ea537.js.map
