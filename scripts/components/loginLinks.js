export class loginLinks {
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }

    get render() {
        this.elem = document.createElement('ul');
        this.elem.classList.add('login-list', 'body__list');

        this.arr.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.classList.add('login-list__item');
            if (item.link) {
                let link = `<a href="${item.link}" class="body__link">${item.name}</a>`
                listItem.innerHTML = link;
            } else {
                listItem.textContent = item.name;
            }
            this.elem.append(listItem);
        });
        return this.elem
    }
}