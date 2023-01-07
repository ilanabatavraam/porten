export default class Worktime {
    // creating UL with worktime
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }
    get render() {
        this.elem = document.createElement('ul');
        this.elem.classList.add('workhours', 'body__list');

        this.arr.forEach((item) => {
            let listItem = document.createElement('li');
            listItem.classList.add('workhours__item');
            if (item.link) {
                let link = `<a href="tel:${item.link}" class="body__link">${item.name}</a>`
                listItem.innerHTML = link;
            } else {
                listItem.textContent = item.name;
            }
            this.elem.append(listItem);
        });
        return this.elem
    }
}
