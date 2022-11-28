export class worktime {
    // creating UL with worktime
    constructor(arr) {
        this.arr = arr;
        this.elem = this.render;
    }
    get render() {
        this.elem = document.createElement('ul');
        this.elem.classList.add('workhours');

        this.arr.forEach((item) => {
            let li = document.createElement('li');
            li.classList.add('workhours__item');
            if (typeof item === `number`) {
                let link = document.createElement('a');
                link.classList.add('body__link')
                link.href = item;
                link.textContent = item;
                console.log(link);
                li.append(link);
                this.elem.append(li);
            } else {
                li.textContent = item
                this.elem.append(li);
            }
        });
        return this.elem
    }
}