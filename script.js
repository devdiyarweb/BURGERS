const product = {
    burgerDream: {
        name: 'Burger Dreams',
        amount: 0,
        price: 5,
        get Summ(){
            return this.price * this.amount
        }
    },
    burgerCali: {
        name: 'Burger Cali',
        amount: 0,
        price: 6,
        get Summ(){
            return this.price * this.amount
        }
    },
    burgerSpicy: {
        name: 'Burger Spicy',
        amount:0,
        price: 7,
        get Summ(){
            return this.price * this.amount
        }
    },
    burgerWaldo: {
        name: 'Burger Waldo',
        amount:0,
        price: 8,
        get Summ(){
            return this.price * this.amount
        }
    },
    burgerBacon: {
        name: 'Burger Bacon Buddy',
        amount:0,
        price: 9,
        get Summ(){
            return this.price * this.amount
        }
    },
    burgerClassic: {
        name: 'Burger Classic',
        amount:0,
        price: 10,
        get Summ(){
            return this.price * this.amount
        }
    }
}

const button = document.querySelectorAll('.link__btn'),
      addCart = document.querySelector('.addCart'),
      receipt = document.querySelector('.receipt'),
      receiptOut = document.querySelector('.receipt__window-out'),
      receiptWindow = document.querySelector('.receipt__window'),
      receiptBtn = document.querySelector('.receipt__window-btn');
      
      for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function(){
            btnAdd(this)
        })          
      }

       function btnAdd(element){
            const parent = element.closest('.card-1'),
            parentId     = parent.getAttribute('id'),
            out          = parent.querySelector('.product-num'),
            price        = parent.querySelector('.product__price span'),
            elemData     = element.getAttribute('data-symbol');
            if (elemData == '+' && product[parentId].amount < 10) {
                price.style = `font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;`
                out.style = `font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;`
                product[parentId].amount++
            } else if(elemData == '+' && product[parentId].amount >= 10){
                product[parentId].amount = product[parentId].amount - 10;
            }
            
            out.innerHTML = product[parentId].amount;
            price.innerHTML = product[parentId].Summ;
        }

        let arrayProduct = [],
        totalName        = '',
        totalPrice       = 0

        addCart.addEventListener('click', function() {
            for (const key in product) {
                const po = product[key]
                console.log(product[key]);
                if(po.amount > 0){
                    arrayProduct.push(po)
                    for (const infokey in po) {
                        if(po[infokey] === true){
                            po.name += '\n'
                        }
                    }
                }
                po.price = po.Summ;
            }
            for (let i = 0; i < arrayProduct.length; i++) {
                const el = arrayProduct[i];
                totalPrice += el.price
                totalName += '\n' + el.name + '\n'
            }
            totalName.style = `font-family: Georgia, 'Times New Roman', Times, serif;`
            receiptOut.innerHTML = `Вы выбрали \n ${totalName} \n Стоимость покупки ${totalPrice} $`
            receipt.style.display = 'flex';
            setTimeout(function() {
                receipt.style.opacity = '1'
            }, 100);
            setTimeout(() => {
                receiptWindow.style.top = '20%'
            }, 200);
        })

        receiptBtn.addEventListener('click', function() {
            location.reload()
            console.log(receiptBtn);
        })