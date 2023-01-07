/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/components/Brands.js":
/*!******************************************!*\
  !*** ./src/scripts/components/Brands.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brands)
/* harmony export */ });
class Brands {
  constructor(arr) {
    this.arr = arr;
    this.elem = this.render;
  }
  get render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('brands__items', 'body__wrapper');
    this.arr.forEach(item => {
      const link = document.createElement('a');
      link.classList.add('brands__item');
      link.href = item.link;
      link.style.backgroundImage = item.img;
      link.title = item.name;
      this.elem.append(link);
    });
    return this.elem;
  }
}

/***/ }),

/***/ "./src/scripts/components/Cards.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/Cards.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cards)
/* harmony export */ });
class Cards {
  constructor(arr) {
    this.arr = arr;
    this.elem = this.#render();
  }
  #render() {
    this.elem = document.createElement('div');
    this.elem.classList.add('cards');
    this.arr.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
                <a href="${item.link}" class="card__link body__link">
                    <img class="card__img" alt="${item.name}" src="${item.img}">
                </a>
                <div>
                <a href="${item.link}" class="card__link body__link">
                    ${item.name}
                </a>
                <p class="card__price">${item.currency} ${item.price}</p>
                </div>  
            `;
      this.elem.append(card);
    });
    return this.elem;
  }
}

/***/ }),

/***/ "./src/scripts/components/CategoriesList.js":
/*!**************************************************!*\
  !*** ./src/scripts/components/CategoriesList.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoriesList)
/* harmony export */ });
class CategoriesList {
  constructor(arr) {
    this.arr = arr;
    this.elem = this.render;
  }
  get render() {
    this.elem = document.createElement('ul');
    this.elem.classList.add('small-categoties', 'body__list');
    this.arr.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('small-categoties__item');
      li.innerHTML = `<a class="body__link small-categoties__link" href="${item.link}">${item.name}</a>`;
      this.elem.append(li);
    });
    return this.elem;
  }
}

/***/ }),

/***/ "./src/scripts/components/LoginLinks.js":
/*!**********************************************!*\
  !*** ./src/scripts/components/LoginLinks.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginLinks)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/scripts/components/Popup.js");

class LoginLinks {
  constructor(arr) {
    this.arr = arr;
    this.elem = this.#render();
    this.setEventListeners();
  }
  #render() {
    this.elem = document.createElement('ul');
    this.elem.classList.add('login-list', 'body__list');
    this.arr.forEach(item => {
      let listItem = document.createElement('li');
      listItem.classList.add('login-list__item');
      if (item.link) {
        let link = `<a href="${item.link}" class="body__link" data-link="${item.data}">${item.name}</a>`;
        listItem.innerHTML = link;
      } else {
        listItem.textContent = item.name;
      }
      this.elem.append(listItem);
    });
    return this.elem;
  }
  setEventListeners() {
    this.elem.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        event.preventDefault();
        const popup = new _Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"](event.target.dataset.link);
        popup.open();
      }
    });
  }
}

/***/ }),

/***/ "./src/scripts/components/Nav.js":
/*!***************************************!*\
  !*** ./src/scripts/components/Nav.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
class Nav {
  constructor(arr) {
    this.arr = arr;
    this.elem = this.render;
  }
  get render() {
    this.elem = document.createElement('ul');
    this.elem.classList.add('header__nav-links', 'body__list');
    this.arr.forEach(item => {
      let listItem = document.createElement('li');
      listItem.classList.add('header__nav-item');
      listItem.innerHTML = `<a href="" class="header__nav-link body__link"></a>`;
      let link = listItem.querySelector('.header__nav-link');
      if (item.icon) {
        listItem.style.fontSize = 0;
        link.innerHTML = item.icon;
      } else {
        link.innerHTML = item.name;
      }
      this.elem.append(listItem);
    });
    return this.elem;
  }
}

/***/ }),

/***/ "./src/scripts/components/Popup.js":
/*!*****************************************!*\
  !*** ./src/scripts/components/Popup.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
class Popup {
  constructor(data) {
    this.elem = this.#render(data);
  }
  #render(data) {
    const template = document.querySelector('#popup').content.cloneNode(true);
    document.body.append(template);
    const popup = document.querySelector('.popup');
    const title = popup.querySelector('.popup__title');
    const container = popup.querySelector('.popup__inner');
    const popupBody = popup.querySelector('.popup__body');
    const form = `<form action="https://httpbin.org/post" class="popup__form" method="post" novalidate name="${data}">
        <input type="email" placeholder="Enter email" required name="email" class="popup__input" autocomplete="off"><span class="popup__error"></span>
        <input type="password" minlength="7" placeholder="Enter password" required name="password" class="popup__input"><span class="popup__error"></span><button class="button popup__submit" type="submit" disabled>Submit</button></form>`;
    container.innerHTML = form;
    if (data && data === 'singin') {
      title.textContent = 'Long time no see :)';
      popupBody.textContent = 'Enter you login and password';
    } else if (data && data === 'singup') {
      title.textContent = 'Welcome :)';
      popupBody.textContent = 'Set you login and password to save and check your orders';
    }
    return popup;
  }
  open() {
    this.elem.classList.add('popup_opened');
    document.body.classList.add('body_popup-opened');
    document.addEventListener('keydown', this.keydownHandler);
    this.elem.addEventListener('click', this.closePopup);
    this.elem.addEventListener('input', this.onChange);
    const form = this.elem.querySelector('.popup__form');
    form.addEventListener('submit', this.onSubmit);
  }
  close() {
    this.elem.remove();
    document.body.classList.remove('body_popup-opened');
    document.removeEventListener('keydown', this.keydownHandler);
    document.removeEventListener('click', this.closePopup);
  }
  keydownHandler = event => {
    if (event.code === 'Escape') {
      this.close();
    }
  };
  closePopup = event => {
    if (event.target.closest('.popup__close') || event.target === event.currentTarget) {
      this.close();
    }
  };
  onChange = event => {
    const inputsArr = Array.from(this.elem.querySelectorAll('.popup__input'));
    const submitBtn = this.elem.querySelector('.popup__submit');
    if (event.target.closest('.popup__input')) {
      if (event.target.validity.valid) {
        event.target.classList.remove('popup__input_style_error');
        event.target.nextSibling.textContent = '';
      } else {
        event.target.classList.add('popup__input_style_error');
        event.target.nextSibling.textContent = event.target.validationMessage;
      }
      const formValid = inputsArr.filter(input => input.validity.valid);
      if (formValid.length === inputsArr.length) {
        submitBtn.removeAttribute('disabled', 'false');
      } else {
        submitBtn.removeAttribute('disabled', 'true');
      }
    }
  };
  checkValidity = () => {
    const inputsArr = Array.from(this.elem.querySelectorAll('.popup__input'));
    const formValid = inputsArr.filter(input => input.validity.valid);
    if (formValid.length === inputsArr.length) {
      return true;
    } else {
      return false;
    }
  };
  onSubmit = event => {
    event.preventDefault();
    if (this.checkValidity()) {
      let formData = new FormData(event.target);
      fetch('https://httpbin.org/post', {
        method: "POST",
        body: formData
      }).then(response => {
        return response.json;
      }).then(() => {
        const body = this.elem.querySelector('.popup__inner');
        const popupBody = this.elem.querySelector('.popup__body');
        body.innerHTML = '';
        popupBody.innerHTML = 'Succes!';
        setTimeout(() => {
          this.close();
        }, 3000);
      });
    }
  };
}

/***/ }),

/***/ "./src/scripts/components/Worktime.js":
/*!********************************************!*\
  !*** ./src/scripts/components/Worktime.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Worktime)
/* harmony export */ });
class Worktime {
  // creating UL with worktime
  constructor(arr) {
    this.arr = arr;
    this.elem = this.render;
  }
  get render() {
    this.elem = document.createElement('ul');
    this.elem.classList.add('workhours', 'body__list');
    this.arr.forEach(item => {
      let listItem = document.createElement('li');
      listItem.classList.add('workhours__item');
      if (item.link) {
        let link = `<a href="tel:${item.link}" class="body__link">${item.name}</a>`;
        listItem.innerHTML = link;
      } else {
        listItem.textContent = item.name;
      }
      this.elem.append(listItem);
    });
    return this.elem;
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/index.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/index.css ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_body_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/body.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/body.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_header_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/header.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/header.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_workhours_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/workhours.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/workhours.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_login_list_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/login-list.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/login-list.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_promo_categoties_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/promo-categoties.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/promo-categoties.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_cards_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/cards.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/cards.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_card_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/card.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/card.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_button_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/button.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/button.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_promo_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/promo.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/promo.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_categoties_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/categoties.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/categoties.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_info_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/info.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_cards_new_arr_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/cards-new-arr.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/cards-new-arr.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_brands_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/brands.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/brands.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_small_categoties_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/small-categoties.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/small-categoties.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_mailing_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/mailing.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/mailing.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_footer_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/footer.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_main_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/main.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/main.css");
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_blocks_popup_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!../blocks/popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/blocks/popup.css");
// Imports




















var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_body_css__WEBPACK_IMPORTED_MODULE_2__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_header_css__WEBPACK_IMPORTED_MODULE_3__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_workhours_css__WEBPACK_IMPORTED_MODULE_4__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_login_list_css__WEBPACK_IMPORTED_MODULE_5__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_promo_categoties_css__WEBPACK_IMPORTED_MODULE_6__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_cards_css__WEBPACK_IMPORTED_MODULE_7__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_card_css__WEBPACK_IMPORTED_MODULE_8__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_button_css__WEBPACK_IMPORTED_MODULE_9__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_promo_css__WEBPACK_IMPORTED_MODULE_10__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_categoties_css__WEBPACK_IMPORTED_MODULE_11__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_info_css__WEBPACK_IMPORTED_MODULE_12__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_cards_new_arr_css__WEBPACK_IMPORTED_MODULE_13__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_brands_css__WEBPACK_IMPORTED_MODULE_14__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_small_categoties_css__WEBPACK_IMPORTED_MODULE_15__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_mailing_css__WEBPACK_IMPORTED_MODULE_16__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_footer_css__WEBPACK_IMPORTED_MODULE_17__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_main_css__WEBPACK_IMPORTED_MODULE_18__["default"]);
___CSS_LOADER_EXPORT___.i(_node_modules_css_loader_dist_cjs_js_blocks_popup_css__WEBPACK_IMPORTED_MODULE_19__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/body.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/body.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".body {\n    margin: 0 auto;\n    font-family: 'PT Sans', 'Arial', sans-serif;\n    background: #000000;\n    color: #ffffff;\n    min-width: 320px;\n}\n\n.body__wrapper {\n    width: 100%;\n    max-width: 1100px;\n    box-sizing: border-box;\n    padding: 10px;\n    margin: 0 auto 20px;\n}\n\n.body__wrapper_size_large {\n    max-width: 1920px;\n}\n\n.body__main-title {\n    font-size: 0;\n    line-height: 0;\n    margin: -1px;\n    overflow: hidden;\n}\n\n.body__link {\n    color: inherit;\n    text-decoration: none;\n    transition: 0.3s;\n}\n\n.body__link:hover {\n    opacity: 0.8;\n}\n\n.body__list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.body__title {\n    margin: 0 auto;\n    padding: 0 0 20px 0;\n    font-size: 36px;\n    line-height: 42px;\n    font-weight: 400;\n    text-align: center;\n    text-transform: uppercase;\n    position: relative;\n    color: #ffffff;\n    margin-bottom: 20px;\n}\n\n.body__title::before {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 2px;\n    width: 120px;\n    height: 1px;\n    background-color: #ffffff;\n}\n\n.body__subtitle {\n    margin: 0 0 40px 0;\n    font-size: 24px;\n    line-height: 28px;\n    text-transform: uppercase;\n    font-weight: 400;\n    color: #FFFFFF;\n}\n\n@media screen and (max-width: 1000px) {\n    .body__subtitle {\n        margin: 0 0 20px 0;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .body__title {\n        font-size: 26px;\n        line-height: 1.4;\n    }\n\n    .body_popup-opened {\n        overflow: hidden;\n    }\n}\n", "",{"version":3,"sources":["webpack://./src/blocks/body.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,2CAA2C;IAC3C,mBAAmB;IACnB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,qBAAqB;IACrB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,kBAAkB;IAClB,cAAc;IACd,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,SAAS;IACT,2BAA2B;IAC3B,WAAW;IACX,YAAY;IACZ,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI;QACI,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,eAAe;QACf,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;IACpB;AACJ","sourcesContent":[".body {\n    margin: 0 auto;\n    font-family: 'PT Sans', 'Arial', sans-serif;\n    background: #000000;\n    color: #ffffff;\n    min-width: 320px;\n}\n\n.body__wrapper {\n    width: 100%;\n    max-width: 1100px;\n    box-sizing: border-box;\n    padding: 10px;\n    margin: 0 auto 20px;\n}\n\n.body__wrapper_size_large {\n    max-width: 1920px;\n}\n\n.body__main-title {\n    font-size: 0;\n    line-height: 0;\n    margin: -1px;\n    overflow: hidden;\n}\n\n.body__link {\n    color: inherit;\n    text-decoration: none;\n    transition: 0.3s;\n}\n\n.body__link:hover {\n    opacity: 0.8;\n}\n\n.body__list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n}\n\n.body__title {\n    margin: 0 auto;\n    padding: 0 0 20px 0;\n    font-size: 36px;\n    line-height: 42px;\n    font-weight: 400;\n    text-align: center;\n    text-transform: uppercase;\n    position: relative;\n    color: #ffffff;\n    margin-bottom: 20px;\n}\n\n.body__title::before {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    transform: translateX(-50%);\n    bottom: 2px;\n    width: 120px;\n    height: 1px;\n    background-color: #ffffff;\n}\n\n.body__subtitle {\n    margin: 0 0 40px 0;\n    font-size: 24px;\n    line-height: 28px;\n    text-transform: uppercase;\n    font-weight: 400;\n    color: #FFFFFF;\n}\n\n@media screen and (max-width: 1000px) {\n    .body__subtitle {\n        margin: 0 0 20px 0;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .body__title {\n        font-size: 26px;\n        line-height: 1.4;\n    }\n\n    .body_popup-opened {\n        overflow: hidden;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/brands.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/brands.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".brands {\n    background: #0F0F0F;\n    padding: 20px 0 50px;\n    margin-bottom: 0;\n}\n\n.brands__items {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 13px;\n}\n\n.brands__item {\n    display: block;\n    width: 255px;\n    height: 94px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}", "",{"version":3,"sources":["webpack://./src/blocks/brands.css"],"names":[],"mappings":"AAAA;IACI,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,4BAA4B;IAC5B,wBAAwB;IACxB,2BAA2B;AAC/B","sourcesContent":[".brands {\n    background: #0F0F0F;\n    padding: 20px 0 50px;\n    margin-bottom: 0;\n}\n\n.brands__items {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 13px;\n}\n\n.brands__item {\n    display: block;\n    width: 255px;\n    height: 94px;\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-position: center;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/button.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/button.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".button {\n    padding: 7px 15px;\n    border: 1px solid #ffffff;\n    border-radius: 0;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 23px;\n    text-align: center;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    text-decoration: none;\n    background: transparent;\n}\n\n:disabled {\n    opacity: 0.5;\n}", "",{"version":3,"sources":["webpack://./src/blocks/button.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,gBAAgB;IAChB,oBAAoB;IACpB,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,yBAAyB;IACzB,cAAc;IACd,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".button {\n    padding: 7px 15px;\n    border: 1px solid #ffffff;\n    border-radius: 0;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-weight: 400;\n    font-size: 18px;\n    line-height: 23px;\n    text-align: center;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    text-decoration: none;\n    background: transparent;\n}\n\n:disabled {\n    opacity: 0.5;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/card.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/card.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".card {\n    min-width: 260px;\n    max-width: 260px;\n    width: 260px;\n}\n\n.card__img {\n    display: block;\n    box-sizing: border-box;\n    padding: 20px;\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    height: 260px;\n    object-fit: contain;\n    object-position: center;\n    background-color: #191B1C;\n    margin-bottom: 15px;\n}\n\n.card__link {\n    font-size: 18px;\n    line-height: 21px;\n    color: #FFFFFF;\n    margin-bottom: 10px;\n    display: inline-block;\n}\n\n.card__price {\n    margin: 0;\n    font-size: 16px;\n    line-height: 19px;\n    color: #D0D0D0;\n}\n\n@media screen and (max-width: 1150px) {\n    .cards-new-arr .card {\n        min-width: 32%;\n        max-width: 32%;\n        width: 32%;\n    }\n    \n}\n\n@media screen and (max-width: 750px) {\n    .cards-new-arr .card {\n        min-width: 260px;\n        max-width: 260px;\n        width: 260px;\n    }\n    \n}", "",{"version":3,"sources":["webpack://./src/blocks/card.css"],"names":[],"mappings":"AAAA;IACI,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,sBAAsB;IACtB,aAAa;IACb,WAAW;IACX,eAAe;IACf,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,yBAAyB;IACzB,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,mBAAmB;IACnB,qBAAqB;AACzB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI;QACI,cAAc;QACd,cAAc;QACd,UAAU;IACd;;AAEJ;;AAEA;IACI;QACI,gBAAgB;QAChB,gBAAgB;QAChB,YAAY;IAChB;;AAEJ","sourcesContent":[".card {\n    min-width: 260px;\n    max-width: 260px;\n    width: 260px;\n}\n\n.card__img {\n    display: block;\n    box-sizing: border-box;\n    padding: 20px;\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n    height: 260px;\n    object-fit: contain;\n    object-position: center;\n    background-color: #191B1C;\n    margin-bottom: 15px;\n}\n\n.card__link {\n    font-size: 18px;\n    line-height: 21px;\n    color: #FFFFFF;\n    margin-bottom: 10px;\n    display: inline-block;\n}\n\n.card__price {\n    margin: 0;\n    font-size: 16px;\n    line-height: 19px;\n    color: #D0D0D0;\n}\n\n@media screen and (max-width: 1150px) {\n    .cards-new-arr .card {\n        min-width: 32%;\n        max-width: 32%;\n        width: 32%;\n    }\n    \n}\n\n@media screen and (max-width: 750px) {\n    .cards-new-arr .card {\n        min-width: 260px;\n        max-width: 260px;\n        width: 260px;\n    }\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/cards-new-arr.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/cards-new-arr.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cards-new-arr {\n    position: relative;\n}\n\n@media screen and (max-width: 1150px) {\n    .cards-new-arr {\n        padding: 0 0 60px 0;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/cards-new-arr.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ","sourcesContent":[".cards-new-arr {\n    position: relative;\n}\n\n@media screen and (max-width: 1150px) {\n    .cards-new-arr {\n        padding: 0 0 60px 0;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/cards.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/cards.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cards {\n    display: flex;\n    align-items: flex-start;\n    align-items: flex-start;\n    overflow-x: auto;\n    gap: 50px;\n    padding-bottom: 15px;\n}\n\n.cards-new-arr .cards {\n    flex-wrap: wrap;\n    gap: 13px;\n    margin: 0 auto;\n}\n\n.cards::-webkit-scrollbar  {\n    height: 5px; \n    background-color: #ffffff;\n}\n\n.cards::-webkit-scrollbar-thumb {\n    background-color: #000000;\n}\n\n.cards__show-more {\n    margin: 40px auto 0;\n}\n\n@media screen and (max-width: 1150px) {\n    .cards-new-arr .cards {\n        padding: 0 3% 15px;\n    }\n\n    .cards__show-more {\n        margin: 0;\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        transform: translateX(-50%);\n    }\n}\n\n@media screen and (max-width: 750px) {\n    .cards-new-arr .cards {\n        padding: 0 0 15px;\n        flex-wrap: nowrap;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/cards.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,uBAAuB;IACvB,gBAAgB;IAChB,SAAS;IACT,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI;QACI,kBAAkB;IACtB;;IAEA;QACI,SAAS;QACT,kBAAkB;QAClB,SAAS;QACT,SAAS;QACT,2BAA2B;IAC/B;AACJ;;AAEA;IACI;QACI,iBAAiB;QACjB,iBAAiB;IACrB;AACJ","sourcesContent":[".cards {\n    display: flex;\n    align-items: flex-start;\n    align-items: flex-start;\n    overflow-x: auto;\n    gap: 50px;\n    padding-bottom: 15px;\n}\n\n.cards-new-arr .cards {\n    flex-wrap: wrap;\n    gap: 13px;\n    margin: 0 auto;\n}\n\n.cards::-webkit-scrollbar  {\n    height: 5px; \n    background-color: #ffffff;\n}\n\n.cards::-webkit-scrollbar-thumb {\n    background-color: #000000;\n}\n\n.cards__show-more {\n    margin: 40px auto 0;\n}\n\n@media screen and (max-width: 1150px) {\n    .cards-new-arr .cards {\n        padding: 0 3% 15px;\n    }\n\n    .cards__show-more {\n        margin: 0;\n        position: absolute;\n        left: 50%;\n        bottom: 0;\n        transform: translateX(-50%);\n    }\n}\n\n@media screen and (max-width: 750px) {\n    .cards-new-arr .cards {\n        padding: 0 0 15px;\n        flex-wrap: nowrap;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/categoties.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/categoties.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/cat-bg.jpg */ "./src/images/cat-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".categoties {\n    box-sizing: border-box;\n    padding: 80px 192px 40px 1152px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: 50% auto;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.categories__text {\n    margin: 0 auto 25px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 150%;\n    text-align: center;\n    color: #FFFFFF;\n    max-width: 470px;\n}\n\n@media screen and (max-width: 1920px) {\n    .categoties {\n        padding: 80px 10% 40px 60%;\n    }\n    \n}\n\n@media screen and (max-width: 1300px) {\n    .categoties {\n        padding: 20px;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        background-size: cover;\n        background-position: center;\n        background-attachment: fixed;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/categoties.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,+BAA+B;IAC/B,yDAA6C;IAC7C,yBAAyB;IACzB,4BAA4B;IAC5B,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI;QACI,0BAA0B;IAC9B;;AAEJ;;AAEA;IACI;QACI,aAAa;QACb,yDAA6C;QAC7C,sBAAsB;QACtB,2BAA2B;QAC3B,4BAA4B;IAChC;AACJ","sourcesContent":[".categoties {\n    box-sizing: border-box;\n    padding: 80px 192px 40px 1152px;\n    background-image: url('../images/cat-bg.jpg');\n    background-size: 50% auto;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n}\n\n.categories__text {\n    margin: 0 auto 25px;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 150%;\n    text-align: center;\n    color: #FFFFFF;\n    max-width: 470px;\n}\n\n@media screen and (max-width: 1920px) {\n    .categoties {\n        padding: 80px 10% 40px 60%;\n    }\n    \n}\n\n@media screen and (max-width: 1300px) {\n    .categoties {\n        padding: 20px;\n        background-image: url('../images/cat-bg.jpg');\n        background-size: cover;\n        background-position: center;\n        background-attachment: fixed;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/footer.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/footer.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".footer__copy-text {\n    margin: 0;\n    font-size: 12px;\n    line-height: 16px;\n    color: #D0D0D0;\n}\n\n.footer__wrapper {\n    display: flex;\n    align-items: baseline;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    box-sizing: border-box;\n}", "",{"version":3,"sources":["webpack://./src/blocks/footer.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,qBAAqB;IACrB,eAAe;IACf,8BAA8B;IAC9B,sBAAsB;AAC1B","sourcesContent":[".footer__copy-text {\n    margin: 0;\n    font-size: 12px;\n    line-height: 16px;\n    color: #D0D0D0;\n}\n\n.footer__wrapper {\n    display: flex;\n    align-items: baseline;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    box-sizing: border-box;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/header.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/header.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/close.svg */ "./src/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".header {\n    position: relative;\n    z-index: 2;\n}\n\n.header__work-info {\n    font-size: 12px;\n    line-height: 16px;\n    color: #969696;\n}\n\n.header__nav-links {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n}\n\n.header__work-info {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.header__nav {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n\n.header__nav-link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 25px 20px;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n.header__nav-link:hover {\n    background: #1F1F1F;\n    opacity: 1;\n}\n\n.header__nav-toggle {\n    display: none;\n}\n\n@media screen and (max-width: 600px) {\n    .header__work-info, .header__nav-links {\n        display: none;\n    }\n\n    .header__nav-links_opened {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        position: fixed;\n        background: #000;\n        left: 0;\n        right: 0;\n        top: 66px;\n        min-height: calc(100vh - 66px);\n    }\n\n    .header__nav-toggle {\n        display: block;\n        background-color: transparent;\n        position: relative;\n        width: 20px;\n        height: 20px;\n        padding: 0;\n        border: 0;\n        border-top: 1px solid #fff;\n        border-bottom: 1px solid #fff;\n    }\n\n    .header__nav-toggle::before {\n        content: '';\n        position: absolute;\n        display: block;\n        border-bottom: 1px solid #fff;\n        width: 100%;\n        height: 1px;\n        top: 50%;\n        transform: translateY(-50%);\n        left: 0;\n        right: 0;\n    }\n\n    .header__nav-toggle_opened {\n        border: 0;\n        background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center center;\n    }\n\n    .header__nav-toggle_opened::before {\n        display: none;\n    }\n\n    .header__nav {\n        padding: 20px;\n        position: fixed;\n        left: 0;\n        right: 0;\n        top: 0;\n        background-color: #000000;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/header.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,UAAU;AACd;;AAEA;IACI,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,eAAe;IACf,mBAAmB;IACnB,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,kBAAkB;IAClB,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,2BAA2B;QAC3B,eAAe;QACf,gBAAgB;QAChB,OAAO;QACP,QAAQ;QACR,SAAS;QACT,8BAA8B;IAClC;;IAEA;QACI,cAAc;QACd,6BAA6B;QAC7B,kBAAkB;QAClB,WAAW;QACX,YAAY;QACZ,UAAU;QACV,SAAS;QACT,0BAA0B;QAC1B,6BAA6B;IACjC;;IAEA;QACI,WAAW;QACX,kBAAkB;QAClB,cAAc;QACd,6BAA6B;QAC7B,WAAW;QACX,WAAW;QACX,QAAQ;QACR,2BAA2B;QAC3B,OAAO;QACP,QAAQ;IACZ;;IAEA;QACI,SAAS;QACT,yDAA4C;QAC5C,wBAAwB;QACxB,4BAA4B;QAC5B,kCAAkC;IACtC;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,aAAa;QACb,eAAe;QACf,OAAO;QACP,QAAQ;QACR,MAAM;QACN,yBAAyB;IAC7B;AACJ","sourcesContent":[".header {\n    position: relative;\n    z-index: 2;\n}\n\n.header__work-info {\n    font-size: 12px;\n    line-height: 16px;\n    color: #969696;\n}\n\n.header__nav-links {\n    display: flex;\n    justify-content: flex-end;\n    flex-wrap: wrap;\n}\n\n.header__work-info {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.header__nav {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    align-items: center;\n    margin-bottom: 0;\n    padding-bottom: 0;\n}\n\n.header__nav-link {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    padding: 25px 20px;\n    height: 100%;\n    box-sizing: border-box;\n}\n\n.header__nav-link:hover {\n    background: #1F1F1F;\n    opacity: 1;\n}\n\n.header__nav-toggle {\n    display: none;\n}\n\n@media screen and (max-width: 600px) {\n    .header__work-info, .header__nav-links {\n        display: none;\n    }\n\n    .header__nav-links_opened {\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        position: fixed;\n        background: #000;\n        left: 0;\n        right: 0;\n        top: 66px;\n        min-height: calc(100vh - 66px);\n    }\n\n    .header__nav-toggle {\n        display: block;\n        background-color: transparent;\n        position: relative;\n        width: 20px;\n        height: 20px;\n        padding: 0;\n        border: 0;\n        border-top: 1px solid #fff;\n        border-bottom: 1px solid #fff;\n    }\n\n    .header__nav-toggle::before {\n        content: '';\n        position: absolute;\n        display: block;\n        border-bottom: 1px solid #fff;\n        width: 100%;\n        height: 1px;\n        top: 50%;\n        transform: translateY(-50%);\n        left: 0;\n        right: 0;\n    }\n\n    .header__nav-toggle_opened {\n        border: 0;\n        background-image: url('../images/close.svg');\n        background-size: contain;\n        background-repeat: no-repeat;\n        background-position: center center;\n    }\n\n    .header__nav-toggle_opened::before {\n        display: none;\n    }\n\n    .header__nav {\n        padding: 20px;\n        position: fixed;\n        left: 0;\n        right: 0;\n        top: 0;\n        background-color: #000000;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/info.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/info.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/footer-bg.jpg */ "./src/images/footer-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".info {\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: center;\n}\n\n.info__wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.info__body {\n    width: calc(33.333% - 14px);\n}\n\n.info__text {\n    margin: 0;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 150%;\n    color: #FFFFFF;\n}\n\n@media screen and (max-width: 1000px) {\n    .info__wrapper {\n        flex-direction: column;\n    }\n\n    .info__body {\n        width: 100%;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/info.css"],"names":[],"mappings":"AAAA;IACI,yDAAgD;IAChD,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,aAAa;IACb,eAAe;IACf,SAAS;AACb;;AAEA;IACI,2BAA2B;AAC/B;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;AAClB;;AAEA;IACI;QACI,sBAAsB;IAC1B;;IAEA;QACI,WAAW;IACf;AACJ","sourcesContent":[".info {\n    background-image: url('../images/footer-bg.jpg');\n    background-size: cover;\n    background-position: center;\n}\n\n.info__wrapper {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n}\n\n.info__body {\n    width: calc(33.333% - 14px);\n}\n\n.info__text {\n    margin: 0;\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 150%;\n    color: #FFFFFF;\n}\n\n@media screen and (max-width: 1000px) {\n    .info__wrapper {\n        flex-direction: column;\n    }\n\n    .info__body {\n        width: 100%;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/login-list.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/login-list.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".login-list {\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px 0;\n}\n\n.footer .login-list  {\n    padding: 10px;\n    font-size: 12px;\n    line-height: 16px;\n}\n\n.login-list__item:not(:last-child) .body__link {\n    padding: 0 10px;\n}\n\n.login-list__item:last-child .body__link {\n    padding: 0 0 0 10px;\n}\n\n.login-list__item:not(:last-child)::after {\n    content: '/';\n}", "",{"version":3,"sources":["webpack://./src/blocks/login-list.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB","sourcesContent":[".login-list {\n    display: flex;\n    justify-content: flex-end;\n    padding: 5px 0;\n}\n\n.footer .login-list  {\n    padding: 10px;\n    font-size: 12px;\n    line-height: 16px;\n}\n\n.login-list__item:not(:last-child) .body__link {\n    padding: 0 10px;\n}\n\n.login-list__item:last-child .body__link {\n    padding: 0 0 0 10px;\n}\n\n.login-list__item:not(:last-child)::after {\n    content: '/';\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/mailing.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/mailing.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mailing {\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.mailing__error {\n    position: absolute;\n    left: 0;\n    top: calc(100% + 5px);\n    font-size: 10px;\n    line-height: 1;\n}\n\n.mailing__label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 150%;\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n.mailing__input {\n    border-radius: 0;\n    background: rgba(255, 255, 255, 0.4);\n    border: 1px solid transparent;\n    padding: 15px;\n    margin: 0;\n}\n\n.mailing__submit {\n    border: 1px solid transparent;\n    border-radius: 0;\n    cursor: pointer;\n    background: #0F0F0F;\n    font-size: 14px;\n    line-height: 150%;\n    letter-spacing: 0.05em;\n    color: #FFFFFF;\n    transition: 0.3s;\n    padding: 5px 15px;\n    margin: 0;\n}\n\n.mailing__submit_disabled {\n    cursor: default;\n    opacity: 0.5;\n}\n\n.mailing__submit:hover {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.mailing__input::placeholder {\n    color: rgba(255, 255, 255, 0.4);\n}\n\n.mailing__input:focus, .mailing__input:focus-visible {\n    border-radius: 0;\n    outline: 0;\n    border: 1px solid rgba(255, 255, 255, 0.8);\n}", "",{"version":3,"sources":["webpack://./src/blocks/mailing.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,qBAAqB;IACrB,eAAe;IACf,cAAc;AAClB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,oCAAoC;IACpC,6BAA6B;IAC7B,aAAa;IACb,SAAS;AACb;;AAEA;IACI,6BAA6B;IAC7B,gBAAgB;IAChB,eAAe;IACf,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,sBAAsB;IACtB,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,iCAAiC;AACrC;;AAEA;IACI,+BAA+B;AACnC;;AAEA;IACI,gBAAgB;IAChB,UAAU;IACV,0CAA0C;AAC9C","sourcesContent":[".mailing {\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n}\n\n.mailing__error {\n    position: absolute;\n    left: 0;\n    top: calc(100% + 5px);\n    font-size: 10px;\n    line-height: 1;\n}\n\n.mailing__label {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 150%;\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\n.mailing__input {\n    border-radius: 0;\n    background: rgba(255, 255, 255, 0.4);\n    border: 1px solid transparent;\n    padding: 15px;\n    margin: 0;\n}\n\n.mailing__submit {\n    border: 1px solid transparent;\n    border-radius: 0;\n    cursor: pointer;\n    background: #0F0F0F;\n    font-size: 14px;\n    line-height: 150%;\n    letter-spacing: 0.05em;\n    color: #FFFFFF;\n    transition: 0.3s;\n    padding: 5px 15px;\n    margin: 0;\n}\n\n.mailing__submit_disabled {\n    cursor: default;\n    opacity: 0.5;\n}\n\n.mailing__submit:hover {\n    background-color: rgba(0,0,0,0.3);\n}\n\n.mailing__input::placeholder {\n    color: rgba(255, 255, 255, 0.4);\n}\n\n.mailing__input:focus, .mailing__input:focus-visible {\n    border-radius: 0;\n    outline: 0;\n    border: 1px solid rgba(255, 255, 255, 0.8);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (max-width: 600px) {\n    .main {\n        margin-top: 66px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/main.css"],"names":[],"mappings":"AAAA;IACI;QACI,gBAAgB;IACpB;AACJ","sourcesContent":["@media screen and (max-width: 600px) {\n    .main {\n        margin-top: 66px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/popup.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/popup.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/close.svg */ "./src/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".popup {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    background: rgba(0,0,0,0.5);\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 2;\n    visibility: hidden;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.popup_opened {\n    visibility: visible;\n    opacity: 1;\n}\n\n.popup__container {\n    transition: 0.3s;\n    width: 100%;\n    max-width: 1920px;\n    padding: 20px 35vw;\n    box-sizing: border-box;\n    background-color: #000000;\n    position: relative;\n}\n\n.popup__close {\n    display: block;\n    position: absolute;\n    bottom: 102%;\n    left: 70vw;\n    width: 30px;\n    height: 30px;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer;\n}\n\n.popup__input {\n    display: block;\n    width: 100px;\n    min-width: 100%;\n    min-height: 30px;\n    border-radius: 0;\n    border: 1px solid transparent;\n    margin-top: 20px;\n    box-sizing: border-box;\n    outline: none;\n}\n\n.popup__submit {\n    margin-top: 20px;\n}\n\n.popup__error {\n    color: #cc2121;\n    font-size: 13px;\n    line-height: 1;\n    display: block;\n    padding: 3px 0;\n}\n\n.popup__input:focus {\n    border-color: #0e3e57;\n}\n\n.popup__input_style_error, .popup__input_style_error:focus {\n    border-color: #cc2121;\n}\n\n@media screen and (min-width: 1920px) {\n    .popup__container {\n        padding: 10px 700px;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    .popup__container {\n        padding: 10px;\n    }\n\n    .popup__close {\n        left: auto;\n        right: 20px;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/popup.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,2BAA2B;IAC3B,OAAO;IACP,QAAQ;IACR,MAAM;IACN,SAAS;IACT,UAAU;IACV,kBAAkB;IAClB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;IAClB,sBAAsB;IACtB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;IAClB,YAAY;IACZ,UAAU;IACV,WAAW;IACX,YAAY;IACZ,yDAA4C;IAC5C,wBAAwB;IACxB,4BAA4B;IAC5B,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,cAAc;IACd,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,gBAAgB;IAChB,6BAA6B;IAC7B,gBAAgB;IAChB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,eAAe;IACf,cAAc;IACd,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI;QACI,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;;IAEA;QACI,UAAU;QACV,WAAW;IACf;AACJ","sourcesContent":[".popup {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    background: rgba(0,0,0,0.5);\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    z-index: 2;\n    visibility: hidden;\n    opacity: 0;\n    transition: 0.3s;\n}\n\n.popup_opened {\n    visibility: visible;\n    opacity: 1;\n}\n\n.popup__container {\n    transition: 0.3s;\n    width: 100%;\n    max-width: 1920px;\n    padding: 20px 35vw;\n    box-sizing: border-box;\n    background-color: #000000;\n    position: relative;\n}\n\n.popup__close {\n    display: block;\n    position: absolute;\n    bottom: 102%;\n    left: 70vw;\n    width: 30px;\n    height: 30px;\n    background-image: url('../images/close.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n    background-position: center;\n    cursor: pointer;\n}\n\n.popup__input {\n    display: block;\n    width: 100px;\n    min-width: 100%;\n    min-height: 30px;\n    border-radius: 0;\n    border: 1px solid transparent;\n    margin-top: 20px;\n    box-sizing: border-box;\n    outline: none;\n}\n\n.popup__submit {\n    margin-top: 20px;\n}\n\n.popup__error {\n    color: #cc2121;\n    font-size: 13px;\n    line-height: 1;\n    display: block;\n    padding: 3px 0;\n}\n\n.popup__input:focus {\n    border-color: #0e3e57;\n}\n\n.popup__input_style_error, .popup__input_style_error:focus {\n    border-color: #cc2121;\n}\n\n@media screen and (min-width: 1920px) {\n    .popup__container {\n        padding: 10px 700px;\n    }\n}\n\n@media screen and (max-width: 800px) {\n    .popup__container {\n        padding: 10px;\n    }\n\n    .popup__close {\n        left: auto;\n        right: 20px;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/promo-categoties.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/promo-categoties.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/all.jpg */ "./src/images/all.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".promo-categoties {\n    display: flex;\n}\n\n.promo-categoties__slider {\n    width: 60%;\n    min-width: 60%;\n    max-width: 60%;\n    overflow: hidden;\n    padding: 90px 50px 0;\n    box-sizing: border-box;\n}\n\n.promo-categoties__all {\n    width: 40%;\n    min-width: 40%;\n    max-width: 40%;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 16% 10px 10px 10px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n@media screen and (max-width: 1440px) {\n    .promo-categoties__slider {\n        padding: 0;\n        width: calc(60% - 20px);\n        min-width: calc(60% - 20px);;\n        max-width: calc(60% - 20px);;\n    }\n    \n    .promo-categoties__all {\n        width: calc(40% - 20px);;\n        min-width: calc(40% - 20px);;\n        max-width: calc(40% - 20px);;\n        margin-left: 40px;\n        background-position: 0 0;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .promo-categoties {\n        display: block;\n    }\n\n    .promo-categoties__slider {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%;\n        margin-bottom: 20px;\n    }\n    \n    .promo-categoties__all {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%;\n        margin-left: 0;\n    }\n    \n}", "",{"version":3,"sources":["webpack://./src/blocks/promo-categoties.css"],"names":[],"mappings":"AAAA;IACI,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,cAAc;IACd,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,UAAU;IACV,cAAc;IACd,cAAc;IACd,yDAA0C;IAC1C,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,2BAA2B;IAC3B,sBAAsB;IACtB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI;QACI,UAAU;QACV,uBAAuB;QACvB,2BAA2B;QAC3B,2BAA2B;IAC/B;;IAEA;QACI,uBAAuB;QACvB,2BAA2B;QAC3B,2BAA2B;QAC3B,iBAAiB;QACjB,wBAAwB;IAC5B;AACJ;;AAEA;IACI;QACI,cAAc;IAClB;;IAEA;QACI,WAAW;QACX,eAAe;QACf,eAAe;QACf,mBAAmB;IACvB;;IAEA;QACI,WAAW;QACX,eAAe;QACf,eAAe;QACf,cAAc;IAClB;;AAEJ","sourcesContent":[".promo-categoties {\n    display: flex;\n}\n\n.promo-categoties__slider {\n    width: 60%;\n    min-width: 60%;\n    max-width: 60%;\n    overflow: hidden;\n    padding: 90px 50px 0;\n    box-sizing: border-box;\n}\n\n.promo-categoties__all {\n    width: 40%;\n    min-width: 40%;\n    max-width: 40%;\n    background-image: url('../images/all.jpg');\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    padding: 16% 10px 10px 10px;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    align-items: center;\n}\n\n@media screen and (max-width: 1440px) {\n    .promo-categoties__slider {\n        padding: 0;\n        width: calc(60% - 20px);\n        min-width: calc(60% - 20px);;\n        max-width: calc(60% - 20px);;\n    }\n    \n    .promo-categoties__all {\n        width: calc(40% - 20px);;\n        min-width: calc(40% - 20px);;\n        max-width: calc(40% - 20px);;\n        margin-left: 40px;\n        background-position: 0 0;\n    }\n}\n\n@media screen and (max-width: 768px) {\n    .promo-categoties {\n        display: block;\n    }\n\n    .promo-categoties__slider {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%;\n        margin-bottom: 20px;\n    }\n    \n    .promo-categoties__all {\n        width: 100%;\n        min-width: 100%;\n        max-width: 100%;\n        margin-left: 0;\n    }\n    \n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/promo.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/promo.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/promo-bg.jpg */ "./src/images/promo-bg.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".promo {\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    min-height: 800px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.promo__info {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    text-align: center;\n    text-transform: uppercase;\n    border-top: 2px solid #ffffff;\n    padding: 7px 0 0 0;\n    margin: 7px auto 0;\n    box-sizing: border-box;\n}\n\n.promo__wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    border: 2px solid #ffffff;\n    width: 80%;\n    max-width: 320px;\n    aspect-ratio: 1/1;\n    box-sizing: border-box;\n    margin: 0 auto 80px;\n}\n\n.promo__text {\n    margin: 0 auto;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    width: 90%;\n    max-width: 700px;\n}\n\n@media screen and (max-width: 1440px) {\n    .promo {\n        min-height: 45vw;\n    } \n\n    .promo__wrapper {\n        max-width: 200px;\n        margin: 0 auto 30px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .promo {\n        display: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/blocks/promo.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,2BAA2B;IAC3B,4BAA4B;IAC5B,yDAA+C;IAC/C,iBAAiB;IACjB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,yBAAyB;IACzB,6BAA6B;IAC7B,kBAAkB;IAClB,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sBAAsB;IACtB,yBAAyB;IACzB,UAAU;IACV,gBAAgB;IAChB,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,yBAAyB;IACzB,cAAc;IACd,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI;QACI,gBAAgB;IACpB;;IAEA;QACI,gBAAgB;QAChB,mBAAmB;IACvB;AACJ;;AAEA;IACI;QACI,aAAa;IACjB;AACJ","sourcesContent":[".promo {\n    background-size: cover;\n    background-position: center;\n    background-attachment: fixed;\n    background-image: url('../images/promo-bg.jpg');\n    min-height: 800px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    box-sizing: border-box;\n    padding: 20px;\n}\n\n.promo__info {\n    font-weight: 400;\n    font-size: 14px;\n    line-height: 1.2;\n    text-align: center;\n    text-transform: uppercase;\n    border-top: 2px solid #ffffff;\n    padding: 7px 0 0 0;\n    margin: 7px auto 0;\n    box-sizing: border-box;\n}\n\n.promo__wrapper {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    border: 2px solid #ffffff;\n    width: 80%;\n    max-width: 320px;\n    aspect-ratio: 1/1;\n    box-sizing: border-box;\n    margin: 0 auto 80px;\n}\n\n.promo__text {\n    margin: 0 auto;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 150%;\n    text-align: center;\n    text-transform: uppercase;\n    color: #FFFFFF;\n    width: 90%;\n    max-width: 700px;\n}\n\n@media screen and (max-width: 1440px) {\n    .promo {\n        min-height: 45vw;\n    } \n\n    .promo__wrapper {\n        max-width: 200px;\n        margin: 0 auto 30px;\n    }\n}\n\n@media screen and (max-width: 500px) {\n    .promo {\n        display: none;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/small-categoties.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/small-categoties.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".small-categoties {\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n.small-categoties__link {\n    text-transform: lowercase;\n    font-size: 14px;\n    line-height: 150%;\n    color: #D0D0D0;\n    background: #0F0F0F;\n    padding: 10px 20px;\n    display: inline-block;\n}", "",{"version":3,"sources":["webpack://./src/blocks/small-categoties.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,yBAAyB;IACzB,eAAe;IACf,iBAAiB;IACjB,cAAc;IACd,mBAAmB;IACnB,kBAAkB;IAClB,qBAAqB;AACzB","sourcesContent":[".small-categoties {\n    display: flex;\n    gap: 20px;\n    flex-wrap: wrap;\n}\n\n.small-categoties__link {\n    text-transform: lowercase;\n    font-size: 14px;\n    line-height: 150%;\n    color: #D0D0D0;\n    background: #0F0F0F;\n    padding: 10px 20px;\n    display: inline-block;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/blocks/workhours.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/blocks/workhours.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".workhours {\n    padding: 5px 0;\n    display: flex;\n    align-items: baseline;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n}\n\n.workhours__item {\n    white-space: nowrap;\n    padding: 0 10px 0 0;\n}\n\n.workhours__item:not(:last-child) {\n    position: relative;\n}\n\n.workhours__item:not(:first-child) {\n    padding: 0 10px;\n}\n\n.workhours__item:not(:last-child)::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    background-color: #969696;\n}", "",{"version":3,"sources":["webpack://./src/blocks/workhours.css"],"names":[],"mappings":"AAAA;IACI,cAAc;IACd,aAAa;IACb,qBAAqB;IACrB,mBAAmB;IACnB,2BAA2B;IAC3B,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,cAAc;IACd,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,QAAQ;IACR,YAAY;IACZ,UAAU;IACV,yBAAyB;AAC7B","sourcesContent":[".workhours {\n    padding: 5px 0;\n    display: flex;\n    align-items: baseline;\n    flex-direction: row;\n    justify-content: flex-start;\n    flex-wrap: wrap;\n}\n\n.workhours__item {\n    white-space: nowrap;\n    padding: 0 10px 0 0;\n}\n\n.workhours__item:not(:last-child) {\n    position: relative;\n}\n\n.workhours__item:not(:first-child) {\n    padding: 0 10px;\n}\n\n.workhours__item:not(:last-child)::before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    background-color: #969696;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./index.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./src/pages/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/all.jpg":
/*!****************************!*\
  !*** ./src/images/all.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/2cccdd7722844515c810.jpg";

/***/ }),

/***/ "./src/images/cat-bg.jpg":
/*!*******************************!*\
  !*** ./src/images/cat-bg.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d32a611efccddb7a0a14.jpg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/5176ccf03a04af53d28d.svg";

/***/ }),

/***/ "./src/images/footer-bg.jpg":
/*!**********************************!*\
  !*** ./src/images/footer-bg.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/36905e64ce01d1ab292b.jpg";

/***/ }),

/***/ "./src/images/promo-bg.jpg":
/*!*********************************!*\
  !*** ./src/images/promo-bg.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/ebbe7428ddac60251485.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/index.css */ "./src/pages/index.css");
/* harmony import */ var _components_Worktime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Worktime.js */ "./src/scripts/components/Worktime.js");
/* harmony import */ var _components_LoginLinks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/LoginLinks.js */ "./src/scripts/components/LoginLinks.js");
/* harmony import */ var _components_Nav_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Nav.js */ "./src/scripts/components/Nav.js");
/* harmony import */ var _components_Cards_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Cards.js */ "./src/scripts/components/Cards.js");
/* harmony import */ var _components_Brands_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Brands.js */ "./src/scripts/components/Brands.js");
/* harmony import */ var _components_CategoriesList_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CategoriesList.js */ "./src/scripts/components/CategoriesList.js");

const workSchedule = [{
  name: '+972(52)667-29-98',
  link: '+97252667299'
}, {
  name: 'Working 7 days a week',
  link: false
}, {
  name: '9am — 6pm',
  link: false
}];
const loginLinksData = [{
  name: 'Sing in',
  link: '/login',
  data: 'singin'
}, {
  name: 'Sing up',
  link: '/registrayion',
  data: 'singup'
}];
const navLinks = [{
  name: 'Favorites',
  link: '#',
  icon: false
}, {
  name: 'Specials',
  link: '#',
  icon: false
}, {
  name: 'Settings',
  link: '#',
  icon: false
}, {
  name: 'Cart',
  link: '#',
  icon: `<svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.0035 4.81175C18.9192 4.6899 18.8066 4.59031 18.6754 4.5215C18.5441 4.45269 18.3982 4.41672 18.25 4.41667H5.72193L4.66409 1.8775C4.52539 1.54312 4.29052 1.25746 3.98927 1.05673C3.68801 0.856001 3.33393 0.749247 2.97193 0.750004H0.833344V2.58334H2.97193L7.32059 13.0196C7.39025 13.1866 7.50775 13.3292 7.65831 13.4295C7.80887 13.5298 7.98575 13.5834 8.16668 13.5833H15.5C15.8823 13.5833 16.2242 13.3459 16.3589 12.9893L19.1089 5.656C19.1609 5.51724 19.1785 5.36794 19.1601 5.22091C19.1417 5.07387 19.088 4.93348 19.0035 4.81175ZM14.8648 11.75H8.77809L6.48643 6.25H16.9273L14.8648 11.75Z" fill="white"/>
        </svg>
        `
}, {
  name: 'Search',
  link: '#',
  icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.25 15.4167L12.5255 10.6922C13.3989 9.36482 13.7487 7.76053 13.5072 6.18999C13.2657 4.61945 12.4501 3.19437 11.2182 2.19068C9.98634 1.18698 8.42587 0.67606 6.83892 0.756838C5.25197 0.837616 3.75144 1.50434 2.62785 2.62794C1.50425 3.75153 0.837524 5.25206 0.756746 6.83901C0.675968 8.42596 1.18689 9.98643 2.19058 11.2183C3.19428 12.4502 4.61936 13.2658 6.1899 13.5073C7.76044 13.7488 9.36473 13.399 10.6922 12.5256L15.4167 17.2501L17.25 15.4167ZM2.58332 7.16675C2.58332 4.6395 4.63941 2.58341 7.16666 2.58341C9.69391 2.58341 11.75 4.6395 11.75 7.16675C11.75 9.694 9.69391 11.7501 7.16666 11.7501C4.63941 11.7501 2.58332 9.694 2.58332 7.16675Z" fill="white"/>
        </svg>
        `
}];
const mainSliderCards = [{
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Gucci XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Prada XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}];
const newArrivalsCards = [{
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Gucci XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Prada XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
},, {
  name: 'Prada XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
},, {
  name: 'Prada XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}, {
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
},, {
  name: 'Louis XVI ATHOS',
  link: '#',
  price: '6 000',
  currency: '$',
  img: './images/item.png'
}];
const brandsList = [{
  name: 'Brand name',
  link: '/#',
  img: 'url("./images/brand.png")'
}, {
  name: 'Brand name',
  link: '/#',
  img: 'url("./images/brand.png")'
}, {
  name: 'Brand name',
  link: '/#',
  img: 'url("./images/brand.png")'
}, {
  name: 'Brand name',
  link: '/#',
  img: 'url("./images/brand.png")'
}];
const smallCategories = [{
  name: 'Watches',
  link: '/#'
}, {
  name: 'Suits',
  link: '/#'
}, {
  name: 'Belts',
  link: '/#'
}, {
  name: 'Cufflinks',
  link: '/#'
}];
const mailingForm = {
  inputType: 'email',
  method: 'post',
  formName: 'mailing',
  inputName: 'userMail',
  formClass: 'mailing',
  inputClass: 'mailing__input',
  formAction: 'https://httpbin.org/post',
  placeholder: 'Your email'
};







//header top line
const headerTopline = document.querySelector('.header__work-info');
const headerNav = document.querySelector('.header__nav');
const promoSlider = document.querySelector('.promo-categoties__slider');
const newArrivals = document.querySelector('.cards-new-arr');
const brands = document.querySelector('.brands');
const smallCatsWrapper = document.querySelector('.info__body_type_categories');
const mailingWrapper = document.querySelector('.info__body_type_newsletter');
const footer = document.querySelector('.footer');
const workList = new _components_Worktime_js__WEBPACK_IMPORTED_MODULE_1__["default"](workSchedule);
const login = new _components_LoginLinks_js__WEBPACK_IMPORTED_MODULE_2__["default"](loginLinksData);
const loginFooter = new _components_LoginLinks_js__WEBPACK_IMPORTED_MODULE_2__["default"](loginLinksData);
const navigation = new _components_Nav_js__WEBPACK_IMPORTED_MODULE_3__["default"](navLinks);
const sliderCards = new _components_Cards_js__WEBPACK_IMPORTED_MODULE_4__["default"](mainSliderCards);
const newCollectionCards = new _components_Cards_js__WEBPACK_IMPORTED_MODULE_4__["default"](newArrivalsCards);
const footeBrandsList = new _components_Brands_js__WEBPACK_IMPORTED_MODULE_5__["default"](brandsList);
const smallCategoriesList = new _components_CategoriesList_js__WEBPACK_IMPORTED_MODULE_6__["default"](smallCategories);
headerTopline.append(workList.elem);
headerTopline.append(login.elem);
footer.append(loginFooter.elem);
headerNav.append(navigation.elem);
promoSlider.append(sliderCards.elem);
newArrivals.append(newCollectionCards.elem);
brands.append(footeBrandsList.elem);
smallCatsWrapper.append(smallCategoriesList.elem);
function getShowMoreBnt(htmlCollection, number, link) {
  const arr = Array.from(htmlCollection.children);
  const showMore = document.createElement('a');
  if (arr.length > number) {
    arr.forEach((card, i) => {
      if (i >= number) {
        card.remove();
      }
    });
    showMore.href = link;
    showMore.textContent = 'Show more';
    showMore.classList.add('page__link', 'button', 'cards__show-more');
    htmlCollection.append(showMore);
  }
  if (window.innerWidth > 750) {
    showMore.addEventListener('click', function (event) {
      event.preventDefault();
      arr.forEach((card, i) => {
        if (i >= number) {
          card.style.transition = '0.5s';
          htmlCollection.append(card);
        }
      });
      showMore.remove();
    });
  }
}
function createForm(obj, wrapper) {
  let form = document.createElement('form');
  form.name = obj.formName;
  form.classList.add(obj.formClass);
  form.action = obj.formAction;
  form.setAttribute('novalidate', true);
  form.setAttribute('action', 'https://httpbin.org/post');
  form.setAttribute('method', 'post');
  form.innerHTML = `
    <label class="mailing__label" for="${obj.inputName}">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi semper viverra nunc cursus tortor lectus nunc nulla nibh.
    </label>
    <input type="${obj.inputType}" placeholder="${obj.placeholder}" id="${obj.inputName}" class="${obj.inputClass}" name="${obj.inputName}" required autocomplete="off">
    <button type="submit" class="mailing__submit mailing__submit_disabled" disabled>Submit</button>
    `;
  wrapper.append(form);
}
createForm(mailingForm, mailingWrapper);
getShowMoreBnt(newArrivals.querySelector('.cards'), 8, '/#');
(function setFooterInfo() {
  const copywrite = `${new Date().getFullYear()} All rights reserved`;
  const designOwner = 'Design Figma.info';
  const footerLine = document.querySelector('.footer__wrapper');
  footerLine.innerHTML = `<p class="footer__copy-text">${copywrite}</p><p class="footer__copy-text">${designOwner}</p>`;
})();

// form submit
(function () {
  const form = document.forms.mailing;
  const input = form.userMail;
  const errorSpan = document.createElement('span');
  const submitBtn = form.querySelector('.mailing__submit');
  errorSpan.classList.add('mailing__error');
  form.append(errorSpan);
  function showMsg(inputElem) {
    errorSpan.textContent = inputElem;
  }
  function hideMsg() {
    errorSpan.textContent = '';
  }
  function checkInput(event) {
    if (event.target.validity.valid) {
      hideMsg();
      submitBtn.classList.remove('mailing__submit_disabled');
      submitBtn.removeAttribute('disabled', 'false');
    } else {
      showMsg(event.target.validationMessage);
      submitBtn.classList.add('mailing__submit_disabled');
      submitBtn.setAttribute('disabled', 'true');
    }
  }
  function submitSubscriptionForm(event) {
    event.preventDefault();
    if (input.validity.valid) {
      input.value = '';
    } else {
      showMsg(input.validationMessage);
    }
    let formData = new FormData(event.target);
    fetch('https://httpbin.org/post', {
      method: "POST",
      body: formData
    }).then(response => {
      return response.json;
    }).then(() => {
      showMsg('Thank you! :)');
      setTimeout(hideMsg, 3000);
    });
  }
  input.addEventListener('input', checkInput);
  input.addEventListener('focusout', hideMsg);
  form.addEventListener('submit', submitSubscriptionForm);
})();

// header popup
(function () {
  const openPopupButton = document.querySelector('.header__nav-toggle');
  const navWrapper = document.querySelector('.header__nav-links');
  const body = document.querySelector('.body');
  let openPopup = event => {
    event.preventDefault();
    navWrapper.classList.toggle('header__nav-links_opened');
    openPopupButton.classList.toggle('header__nav-toggle_opened');
    if (navWrapper.classList.contains('header__nav-links_opened')) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = '';
    }
  };
  openPopupButton.addEventListener('click', openPopup);
})();

// swipe cards
document.addEventListener('pointerdown', function (event) {
  if (event.target.closest('.card__img')) {
    event.preventDefault();
  }
  if (event.target.closest('.promo-categoties__slider')) {
    const onPointerMove = event => {
      const cards = document.querySelector('.promo-categoties__slider .cards');
      let xPointer = event.clientX - cards.getBoundingClientRect().left;
      cards.scroll({
        top: 0,
        left: xPointer,
        behavior: 'smooth'
      });
    };
    document.addEventListener('pointerup', onPointerMove);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=scripts.91f717a22a6856b17e7d.js.map