import '../pages/index.css';
import pageData from './data/data.js';
import Worktime from './components/Worktime.js';
import LoginLinks from './components/LoginLinks.js';
import Nav from './components/Nav.js';
import Cards from './components/Cards.js';
import Brands from './components/Brands.js';
import CategoriesList from './components/CategoriesList.js';

class Main {
    constructor() {}

    render() {
        //header top line
        const headerTopline = document.querySelector('.header__work-info');
        const headerNav = document.querySelector('.header__nav');
        const promoSlider = document.querySelector('.promo-categoties__slider');
        const newArrivals = document.querySelector('.cards-new-arr');
        const brands = document.querySelector('.brands');
        const smallCatsWrapper = document.querySelector('.info__body_type_categories');
        const mailingWrapper = document.querySelector('.info__body_type_newsletter');
        const footer = document.querySelector('.footer');

        const workList = new Worktime(pageData.workSchedule);
        const login = new LoginLinks(pageData.loginLinksData);
        const loginFooter = new LoginLinks(pageData.loginLinksData);
        const navigation = new Nav(pageData.navLinks);
        const sliderCards = new Cards(pageData.mainSliderCards);
        const newCollectionCards = new Cards(pageData.newArrivalsCards);
        const footeBrandsList = new Brands(pageData.brandsList);
        const smallCategoriesList = new CategoriesList(pageData.smallCategories);

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
                })
                showMore.href = link;
                showMore.textContent = 'Show more';
                showMore.classList.add('page__link', 'button', 'cards__show-more')

                htmlCollection.append(showMore);
            }
            if (window.innerWidth > 750) {
                showMore.addEventListener('click', function(event) {
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
    `

            wrapper.append(form);
        }

        createForm(pageData.mailingForm, mailingWrapper);
        getShowMoreBnt(newArrivals.querySelector('.cards'), 8, '/#');

        (function setFooterInfo() {
            const copywrite = `${new Date().getFullYear()} All rights reserved`;
            const designOwner = 'Design Figma.info'

            const footerLine = document.querySelector('.footer__wrapper');
            footerLine.innerHTML = `<p class="footer__copy-text">${copywrite}</p><p class="footer__copy-text">${designOwner}</p>`
        })();

        // form submit
        (function() {
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
                    })
                    .then((response) => {
                        return response.json;
                    })
                    .then(() => {
                        showMsg('Thank you! :)');
                        setTimeout(hideMsg, 3000)
                    });
            }

            input.addEventListener('input', checkInput);
            input.addEventListener('focusout', hideMsg);
            form.addEventListener('submit', submitSubscriptionForm);
        })();


        // header popup
        (function() {
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
        document.addEventListener('pointerdown', function(event) {
            if (event.target.closest('.card__img')) {
                event.preventDefault();
            }
            if (event.target.closest('.promo-categoties__slider')) {
                const onPointerMove = (event) => {
                    const cards = document.querySelector('.promo-categoties__slider .cards');
                    let xPointer = event.clientX - cards.getBoundingClientRect().left;
                    cards.scroll({
                        top: 0,
                        left: xPointer,
                        behavior: 'smooth'
                    })
                }

                document.addEventListener('pointerup', onPointerMove);
            }
        });
    }
}
const page = new Main();
page.render();