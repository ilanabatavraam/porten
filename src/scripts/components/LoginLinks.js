import Popup from './Popup.js';
export default class LoginLinks {
    constructor(arr) {
        this.arr = arr;
        this.elem = this.#render();
        this.setEventListeners();
    }

    #render() {
        this.elem = document.createElement('ul');
        this.elem.classList.add('login-list', 'body__list');

        this.arr.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.classList.add('login-list__item');
            if (item.link) {
                let link = `<a href="${item.link}" class="body__link" data-link="${item.data}">${item.name}</a>`
                listItem.innerHTML = link;
            } else {
                listItem.textContent = item.name;
            }
            this.elem.append(listItem);
        });
        return this.elem
    }

    setEventListeners() {
        this.elem.addEventListener('click', function(event) {
            if (event.target.closest('a')) {
                event.preventDefault();
                const popup = new Popup(event.target.dataset.link);
                popup.open();
            }
        });
    }
}
