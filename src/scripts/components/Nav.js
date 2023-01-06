export default class Nav  {
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }

    get render() {
        this.elem = document.createElement('ul');
        this.elem.classList.add('header__nav-links', 'body__list');

        this.arr.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.classList.add('header__nav-item');
            listItem.innerHTML = `<a href="" class="header__nav-link body__link"></a>`
            let link = listItem.querySelector('.header__nav-link')
            if (item.icon) {
                listItem.style.fontSize = 0;
                link.innerHTML = item.icon;
            } else {
                link.innerHTML = item.name;
            }
            this.elem.append(listItem);
        });
        return this.elem
    }
}
