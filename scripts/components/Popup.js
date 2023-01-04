export class Popup {
    constructor(data) {
        this.elem = this.#render(data);
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