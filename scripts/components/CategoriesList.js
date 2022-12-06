export class CategoriesList {
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
            li.innerHTML = `<a class="body__link small-categoties__link" href="${item.link}">${item.name}</a>`
            this.elem.append(li)
        });
        return this.elem
    }
}