export class Popup {
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
        <input type="email" placeholder="Enter email" required name="email" class="popup__input" autocomplete="off">
        <input type="password" placeholder="Enter password" required name="password" class="popup__input"><button class="button" type="submit" disabled>Submit</button></form>`
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
}