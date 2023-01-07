export default class Popup {
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
        <input type="password" minlength="7" placeholder="Enter password" required name="password" class="popup__input"><span class="popup__error"></span><button class="button popup__submit" type="submit" disabled>Submit</button></form>`
        container.innerHTML = form;

        if (data && data === 'singin') {
            title.textContent = 'Long time no see :)';
            popupBody.textContent = 'Enter you login and password';
        } else if (data && data === 'singup') {
            title.textContent = 'Welcome :)';
            popupBody.textContent = 'Set you login and password to save and check your orders';
        }


        return popup
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

    keydownHandler = (event) => {
        if (event.code === 'Escape') {
          this.close();
        }
    }
    
    closePopup = (event) => {
        if (event.target.closest('.popup__close') || event.target === event.currentTarget) {
            this.close();
        }
    }

    onChange = (event) => {
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
    }

    checkValidity = () => {
        const inputsArr = Array.from(this.elem.querySelectorAll('.popup__input'));
        const formValid = inputsArr.filter(input => input.validity.valid);
        if (formValid.length === inputsArr.length) {
            return true
        } else {
            return false
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.checkValidity()) {
            let formData = new FormData(event.target);
            fetch('https://httpbin.org/post', { method: "POST", body: formData })
            .then((response) => {
                return response.json;
            })
            .then(() => {
                const body = this.elem.querySelector('.popup__inner');
                const popupBody = this.elem.querySelector('.popup__body');
                body.innerHTML = '';
                popupBody.innerHTML = 'Succes!';
                setTimeout(() => {this.close()}, 3000);
            });
        }
    }
}