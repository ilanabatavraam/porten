export class Brands {
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }
    get render() {
        this.elem = document.createElement('div');
        this.elem.classList.add('brands__items');
        
        this.arr.forEach(item => {
            const link = document.createElement('a');
            link.classList.add('brands__item');
            link.href = item.link;
            link.style.backgroundImage = item.img;
            link.title = item.name;
            this.elem.append(link)
        })
        
        return this.elem
    }
}