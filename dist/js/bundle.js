!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(0);var n=r.p+"index.json";function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var u=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._setDataCall=!1}var e,r,n;return e=t,(r=[{key:"setData",value:function(t){this._setDataCall||(this._data=t,this._setDataCall=!0)}},{key:"getData",value:function(){return this._data}},{key:"getDataRowById",value:function(t){return this._data.find((function(e){return e.id===t}))}},{key:"getIndexDataById",value:function(t){return this._data.findIndex((function(e){return e.id===t}))}},{key:"addRow",value:function(t){this._data=[].concat(o(this._data),[t])}},{key:"changeRow",value:function(t){this._data.splice(this.getIndexDataById(t.id),1,t)}}])&&i(e.prototype,r),n&&i(e,n),t}());function c(t,e,r){var n=document.createElement(t);for(var o in e)if("onclick"!==o){if(o&&e.hasOwnProperty(o)){var a=e[o];!0===a?n.setAttribute(o,o):!1!==a&&null!=a&&n.setAttribute(o,a.toString())}}else n.onclick=e.onclick;for(var i=2;i<arguments.length;i++){var u=arguments[i];n.appendChild(null==u.nodeType?document.createTextNode(u.toString()):u)}return n}function l(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentPage=1,this._itemsPerPage=10}var e,r,n;return e=t,(r=[{key:"_resetCurrentPage",value:function(){this._currentPage=1}},{key:"_nextPage",value:function(){this._currentPage=Math.min(this._currentPage+1,this._maxPages)}},{key:"_prevPage",value:function(){this._currentPage=Math.max(this._currentPage-1,1)}},{key:"_changeCurrentPage",value:function(t){this._currentPage=t}},{key:"_changeItemsPerPage",value:function(t){this._itemsPerPage=t,this._resetCurrentPage()}},{key:"_setData",value:function(t){t&&(this._data=t,this._maxPages=Math.ceil(t.length/this._itemsPerPage))}},{key:"_getCurrentData",value:function(){var t=(this._currentPage-1)*this._itemsPerPage,e=t+this._itemsPerPage;return this._data.slice(t,e)}},{key:"get",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this._setData(e),{currentData:this._getCurrentData(),currentPage:this._currentPage,maxPages:this._maxPages,nextPage:function(){return t._nextPage()},prevPage:function(){return t._prevPage()},jumpToPage:function(e){return t._changeCurrentPage(e)}}}}])&&l(e.prototype,r),n&&l(e,n),t}());function f(t){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var d=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._currentSortType="ASC",this._currentSortProperty=null}var e,r,n;return e=t,(r=[{key:"_sortOrder",value:function(){return"ASC"===this._currentSortType?1:-1}},{key:"_compareFunction",value:function(){var t=this._currentSortProperty,e=this._sortOrder(),r=function t(e,r){return"object"===f(e[r[0]])?t(e[r[0]],r.slice(1,r.length)):e[r[0]]};return function(n,o){return r(n,t)<r(o,t)?-1*e:r(n,t)>r(o,t)?e:0}}},{key:"_getCurrentSortData",value:function(){return this._currentSortProperty?this._data.sort(this._compareFunction()):this._data}},{key:"_checkCurrentSortProperty",value:function(t){return this._currentSortProperty&&t.join("")===this._currentSortProperty.join("")}},{key:"_setData",value:function(t){t&&(this._data=t)}},{key:"_handleClickSort",value:function(t){this._currentSortProperty&&t.join("")===this._currentSortProperty.join("")?this._currentSortType="ASC"===this._currentSortType?"DESC":"ASC":(this._currentSortProperty=t,this._currentSortType="ASC")}},{key:"get",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this._setData(e),{currentSortData:this._getCurrentSortData(),currentSortType:this._currentSortType,currentSortProperty:this._currentSortProperty,handleClickSort:function(e){return t._handleClickSort(e)},checkCurrentSortProperty:function(e){return t._checkCurrentSortProperty(e)}}}}])&&h(e.prototype,r),n&&h(e,n),t}());function y(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var p=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=null}var e,r,n;return e=t,(r=[{key:"_handleClickOpenForm",value:function(t){this._id=t}},{key:"_handleClickCloseForm",value:function(){this._id=null}},{key:"_handleClickToggleForm",value:function(t){this._id=this._id===t?null:t}},{key:"_formIsOpen",value:function(){return null!==this._id}},{key:"get",value:function(){var t=this;return{handleClickToggleForm:function(e){return t._handleClickToggleForm(e)},handleClickCloseForm:function(){return t._handleClickCloseForm()},formIsOpen:function(){return t._formIsOpen()},rowId:this._id}}}])&&y(e.prototype,r),n&&y(e,n),t}());function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var v=new(function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._columns=[]}var e,r,n;return e=t,(r=[{key:"_setColumns",value:function(t){var e=this;Array.isArray(this._columns)&&!this._columns.length&&t&&t.forEach((function(t){e._columns.push({name:t,show:!0})}))}},{key:"_toggleColumn",value:function(t){var e=this._columns.find((function(e){return e.name===t}));e.show=!e.show}},{key:"get",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;return this._setColumns(e),{toggleColumn:function(e){return t._toggleColumn(e)},columnsShowHide:this._columns}}}])&&m(e.prototype,r),n&&m(e,n),t}()),g=function(){var t,e=d.get(u.getData()),r=e.currentSortType,n=e.currentSortProperty,o=e.currentSortData,a=e.handleClickSort,i=e.checkCurrentSortProperty,l=s.get(o),f=l.currentData,h=l.currentPage,y=l.maxPages,m=l.nextPage,g=l.prevPage,b=l.jumpToPage,C=p.get(),S=C.handleClickCloseForm,k=C.handleClickToggleForm,P=C.formIsOpen,w=C.rowId,j=v.get(["firstName","lastName","about","eyeColor"]),O=j.toggleColumn,x=j.columnsShowHide;!function(t){for(;t.firstChild;)t.removeChild(t.firstChild)}(document.getElementById("root")),root.appendChild(c("div",{class:"app__wrapper"},F(O,x),c("div",{class:"table__wrapper"},T({data:f,sort:{currentSortType:r,currentSortProperty:n,handleClickSort:a,checkCurrentSortProperty:i,jumpToFirstPage:function(){return b(1)}},rowForm:{handleClickToggleForm:k,handleClickCloseForm:S,rowId:w},showHide:{columns:x}}),P()?A(w,S):""),_(h,y,m,g,b,S))),t=".text-ellipsis-two-line",document.querySelectorAll(t).forEach((function(t){for(var e=t.querySelector("p"),r=t.clientHeight;e.offsetHeight>r;)e.textContent=e.textContent.replace(/\W*\s(\S)*$/,"...")}))},_=function(t,e,r,n,o,a){var i=[],u=function(e){return c("div",{class:"page-num ".concat(t===e?"active":""),onclick:function(){o(e),t!==e&&a(),g()}},"".concat(e))};if(e<=10)for(var l=1;l<=e;l++)i.push(u(l));else{var s,f=2,h=2;t>e-2?f=2-(h=e-t):t<2&&(h=2-(f=t));for(var d=1;d<=e;d++)d<=3||d>e-3||d>=t-f&&d<=t+h?i.push(u(d)):i[i.length-1]!==s&&(s=c("div",{class:"page-ellipsis"},"..."),i.push(s))}return c.apply(void 0,["div",{id:"pagination"},c("div",{class:"page-prev ".concat(1!==t?"active":""),onclick:function(){n(),1!==t&&a(),g()}},"<")].concat(i,[c("div",{class:"page-next ".concat(t!==e?"active":""),onclick:function(){r(),t!==e&&a(),g()}},">")]))};function b(t){return function(t){if(Array.isArray(t))return C(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return C(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var S=function(t,e){return t.find((function(t){return t.name===e})).show},k=["name","firstName"],P=["name","lastName"],w=["about"],j=["eyeColor"],T=function(t){var e=t.data,r=t.sort,n=t.rowForm,o=t.showHide;return c("table",null,function(t,e,r){var n=function(t,e,n){return S(r.columns,t)?c("th",e,n):""};return c("thead",null,c("tr",null,n("firstName",{onclick:function(){t.handleClickSort(k),t.jumpToFirstPage(),e(),g()}},c("div",{class:"arrow-sort ".concat(t.checkCurrentSortProperty(k)?t.currentSortType:"")},"Имя")),n("lastName",{onclick:function(){t.handleClickSort(["name","lastName"]),t.jumpToFirstPage(),e(),g()}},c("div",{class:"arrow-sort ".concat(t.checkCurrentSortProperty(P)?t.currentSortType:"")},"Фамилия")),n("about",{onclick:function(){t.handleClickSort(["about"]),t.jumpToFirstPage(),e(),g()}},c("div",{class:"arrow-sort ".concat(t.checkCurrentSortProperty(w)?t.currentSortType:"")},"Описание")),n("eyeColor",{onclick:function(){t.handleClickSort(["eyeColor"]),t.jumpToFirstPage(),e(),g()}},c("div",{class:"arrow-sort ".concat(t.checkCurrentSortProperty(j)?t.currentSortType:"")},"Цвет глаз"))))}(r,n.handleClickCloseForm,o),function(t,e,r){var n=function(t,e,n){return S(r.columns,t)?c("td",e,n):""},o=t.map((function(t){return c("tr",{class:e.rowId===t.id&&"active",onclick:function(){e.handleClickToggleForm(t.id),g()}},n("firstName",null,t.name.firstName),n("lastName",null,t.name.lastName),n("about",{class:"width-300"},c("div",{class:"about text-ellipsis-two-line"},c("p",null,t.about))),n("eyeColor",null,c("div",{class:"eye-color",style:"background-color: ".concat(t.eyeColor)})))}));return c.apply(void 0,["tbody",null].concat(b(o)))}(e,n,o))},A=function(t,e){var r=u.getDataRowById(t),n=c("input",{name:"firstName",value:r.name.firstName,placeholder:"Имя"}),o=c("input",{name:"lastName",value:r.name.lastName,placeholder:"Фамилия"}),a=c("textarea",{name:"about",placeholder:"Описание"},r.about),i=c("input",{name:"eyeColor",value:r.eyeColor,placeholder:"Цвет глаз"});return c("div",{class:"edit-row-form__wrapper"},c("div",{class:"form"},c("div",{class:"title"},c("b",null,"Форма изменения строки")),c("div",{class:"description"},"id: ".concat(r.id)),n,o,a,i,c("div",{class:"buttons"},c("div",{class:"button secondary-button",onclick:function(){e(),g()}},"Закрыть"),c("div",{class:"button success-button",onclick:function(){confirm("Подтвердите изменение")&&(u.changeRow({id:r.id,name:{firstName:n.value,lastName:o.value},about:a.value,eyeColor:i.value}),e(),g())}},"Изменить"))))};function O(t){return function(t){if(Array.isArray(t))return x(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return x(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return x(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var I,D,F=function(t,e){var r=e.map((function(e){return c("div",{class:"button",onclick:function(){t(e.name),g()}},c("div",{class:"status"},e.show?"скрыть":"показать"),c("div",{class:"label"},function(t){switch(t){case"firstName":return"Имя";case"lastName":return"Фамилия";case"about":return"Описание";case"eyeColor":return"Цвет глаз";default:return""}}(e.name)))}));return c.apply(void 0,["div",{class:"show-hide__wrapper"}].concat(O(r)))};I={jsonUrl:n},(window.fetch||(alert("Ваш браузер устарел!"),0))&&(D=I.jsonUrl,new Promise((function(t,e){return fetch(D,{mode:"no-cors"}).then((function(r){r.ok?t(r.json()):(alert("Произошла ошибка, подробности в консоли!"),e("Ошибка: ".concat(r.status," ").concat(r.statusText)))}))}))).then((function(t){u.setData(t),g()}),(function(t){console.error(t)}))}]);