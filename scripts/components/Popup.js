export class Popup {
    constructor(data) {
        this.elem = this.#render(data);
        this.data = data;
    }

    #render(data) {
        const template = document.querySelector('#popup').content.cloneNode(true);
        document.body.append(template);
        const popup = document.querySelector('.popup');
        const title = popup.querySelector('.popup__title');
        const container = popup.querySelector('.popup__container');
        const popupBody = popup.querySelector('.popup__body');
        
        if (data && data === 'singin') {
            title.textContent = 'Long time no see :)';
            popupBody.textContent = 'Enter you login and password';
        } else if (data && data === 'singup') {
            title.textContent = 'Welcome :)';
            popupBody.textContent = 'Set you login and password';
        }

        return popup
    }

    open() {
        this.elem.classList.add('popup_opened');
        document.body.classList.add('body_popup-opened');
    }
}