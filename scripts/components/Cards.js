export class Cards {
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }
    get render() {
        this.elem = document.createElement('article');
        this.elem.classList.add('card');
        
        this.arr.forEach(item => {
            this.elem.innerHTML = `
                
            `;
        })
        
        return this.elem
    }
}