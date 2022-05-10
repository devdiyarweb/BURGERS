class SCROLL {
    constructor(set){
        if (typeof set.el == 'string') {
            this.el = document.querySelector(set.el);
        } else if (set.el instanceof HTMLElement){
            this.el = set.el  
        }
        this.top = set.top
        this.el.style.top = this.scroll()
        this.unit = set.unit
        window.addEventListener('scroll', () => this.scroll());
    }
    scroll(){
        this.window = this.scrollNumber() // -70
        if (pageYOffset == 0) {
            this.el.classList.remove('active');
        }else if(pageYOffset > 80){
            this.el.classList.add('active');
        }
    }
    scrollNumber(){
        if(this.unit == 'px'){
            return this.top >= 0 ? this.top : 0
        } else if (this.unit == '%' || this.unit == undefined){
            // Если еденица измерения проценты или неопределено, то делаем вычисление 
            // ключ обьекта элемента clientHeight - отдает высоту элемента
            // window.innerHeight - отдает высоту видимой области браузера
            return this.calc(window.innerHeight, this.top) - this.el.clientHeight
        }
    }
    calc(height, top){ // calc(760,60) 760 - высота видимой области 
        // height высота видимой области браузера
        // top процент
        return height / 300 * top
    }
}
console.log(pageYOffset);
// let nav = document.querySelector('.nav-2'); 5-строка для того что бы если мы подключаем навигацию с помощью let 
const myScroll = new SCROLL({
    el: '.nav-2',
    top: 100,
    unit: '%',
})
