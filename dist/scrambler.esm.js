function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function Scramble(t,e){return new Promise(function(r,n){if(void 0===t&&n(),"true"!==t.getAttribute("data-scramble-active")){e.beforeEach&&e.beforeEach(t),t.setAttribute("data-scramble-active","true"),t.classList.add("scrambling");var a,o=t.innerHTML,i=[],l=e.speed?e.speed:100,c=t.textContent.split(""),f=c,u=t.textContent.split(""),s=!1;isValidString(e.text)?a=defineEndText(e.text):t.getAttribute("data-scramble-text")&&""!==t.getAttribute("data-scramble-text")&&(a=defineEndText(t.getAttribute("data-scramble-text"))),a&&(s=!0,c=a.truth,u=a.newLetters,f=a.startText);var d=setInterval(function(){if(f.map(function(r,n){return!(" \t\n\r\v".indexOf(r)>-1)&&(u[n]=randomChar(),setTimeout(function(){i[n]=!0},randomTime(isObject(e),e.random)),!0===i[n]&&(u[n]=c[n]),t.textContent=u.join(""),!0)}),killCheck(u,c)){if(t.innerHTML=o,s){var n=t.children[0];n&&""!==n?n.textContent=u.join(""):t.textContent=u.join("")}clearInterval(d),t.setAttribute("data-scramble-active","false"),t.classList.remove("scrambling"),e.afterEach&&e.afterEach(t),r(t)}},l)}else n()})}function ScramblerSetup(t){if(!isValidArgType(t))return!1;var e=setArgs(t,isObject(t)),r=_toConsumableArray(isObject(e)?document.querySelectorAll(e.target):document.querySelectorAll(e)),n=[];if(r.forEach(function(t){var r=Scramble(t,e);n.push(r)}),!(n.length>0))return!1;e.beforeAll&&e.beforeAll(r),Promise.all(n).then(function(t){e.afterAll&&e.afterAll(t)})}var isObject=function(t){return!!t&&t.constructor===Object},isArray=function(t){return!!t&&t.constructor===Array},isBool=function(t){return"boolean"==typeof t},isFunction=function(t){return"function"==typeof t},isValidString=function(t){return!(!t||""===t||!("string"==typeof t||t instanceof String))},isValidArgType=function(t){return!isArray(t)&&!isBool(t)&&"number"!=typeof t&&"function"!=typeof t&&void 0!==t},randomChar=function(t,e){var r=t||1,n=e||!1,a=Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,r);return" \t\n\r\v".indexOf(a)<0&&!0!==n&&a},randomTime=function(t,e){return(t||!1)&&isArray(e)&&e.length>1?Math.floor(Math.random()*(e[1]-(e[0]+1)))+e[0]:Math.floor(1999*Math.random())+1e3},setArgs=function(t,e){var r=e||!1,n={target:"[data-scrambler]",random:[1e3,3e3],speed:100,text:!1,beforeEach:!1,afterEach:!1,beforeAll:!1,afterAll:!1};return t&&r&&(n.target=void 0!==t.target?t.target:"[data-scrambler]",n.random=void 0!==t.random?t.random:[1e3,3e3],n.speed=void 0!==t.speed?t.speed:100,n.text=void 0!==t.text&&t.text,n.beforeEach=!(void 0===t.beforeEach||!isFunction(t.beforeEach))&&t.beforeEach,n.afterEach=!(void 0===t.afterEach||!isFunction(t.afterEach))&&t.afterEach,n.beforeAll=!(void 0===t.beforeAll||!isFunction(t.beforeAll))&&t.beforeAll,n.afterAll=!(void 0===t.afterAll||!isFunction(t.afterAll))&&t.afterAll),n},killCheck=function(t,e){return!(t.length!==e.length||!t.every(function(t,r){return t===e[r]}))},defineEndText=function(t){if(!t||void 0===t||!("string"==typeof t||t instanceof String))return!1;var e,r=t,n=r.split(""),a=r.split(""),o=[];return n.forEach(function(t,e){" \t\n\r\v".indexOf(n[e])>-1?o.push(" "):o.push(randomChar())}),e=o,{truth:n,newLetters:a,startText:e}},scrambler=function(){return ScramblerSetup}();export default scrambler;
