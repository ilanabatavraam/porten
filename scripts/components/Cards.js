export class Cards {
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }
    get render() {
        this.elem = document.createElement('div');
        this.elem.classList.add('cards');
        
        this.arr.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <a href="${item.link}" class="card__link body__link">
                    <img class="card__img" alt="${item.name}" src="${item.img}">
                </a>
                <div>
                <a href="${item.link}" class="card__link body__link">
                    ${item.name}
                </a>
                <p class="card__price">${item.currency} ${item.price}</p>
                </div>  
            `;
            this.elem.append(card)
        })
        
        return this.elem
    }
}