const money = document.getElementById('money');
const branches = document.getElementById('branches');
const cost = document.getElementById('cost');

// Button
const buy_auto_clicker = document.getElementById('buy_auto_clicker');
const selling_tofu = document.getElementById('selling_tofu');
const confirm_buy_auto_clicker = document.getElementById('confirm_buy_auto_clicker');
const cancel_buy_auto_clicker  = document.getElementById('cancel_buy_auto_clicker');
const buy_multiplier = document.getElementById('buy_multiplier');
const modal_auto_clicker = document.getElementById('modal_auto_clicker');

const click_object = document.getElementById('click_object');
const auto_click_info = document.getElementById('auto_click_info');

let moneyValue = 0;
let initiaValue = 1;
let costAutoCLicker = 10;
let autoClicker = 0;
let initial_cabang = 0;


click_object.addEventListener('click', () => {
    moneyValue += initiaValue;
    money.innerHTML = moneyValue
})

// Auto Clicker

const autoClick = (value) => {
    moneyValue += value;
    money.innerHTML = moneyValue
}
confirm_buy_auto_clicker.addEventListener('click', () => {
    if (moneyValue >= costAutoCLicker) {
        moneyValue -= costAutoCLicker;
        money.innerHTML = moneyValue;
        alert('Success, you have bought an auto clicker')
        autoClicker += 1;
        auto_click_info.innerHTML = autoClicker;
        modal_auto_clicker.style.display = 'none';

        let timer = setInterval(() => {
            autoClick(initiaValue)
        }, 1000)


        // Stop Timer after 10 seconds
        setTimeout(() => {
            clearInterval(timer)
        }, autoClicker * 1000)
    }
    else {
       alert('You don\'t have enough money')
       modal_auto_clicker.style.display = 'none';
    }
})

cancel_buy_auto_clicker.addEventListener('click', () => {
    modal_auto_clicker.style.display = 'none';
})

buy_auto_clicker.addEventListener('click', () => {
    modal_auto_clicker.style.display = 'block';
})

// End Auto Clicker

// Multiplier

const modal_multiplier = document.getElementById('modal_multiplier');
const confirm_buy_multiplier = document.getElementById('confirm_buy_multiplier');
const cancel_buy_multiplier = document.getElementById('cancel_buy_multiplier');
const cabang_info = document.getElementById('cabang_info');


buy_multiplier.addEventListener('click', () => {
    modal_multiplier.style.display = 'block';
})

confirm_buy_multiplier.addEventListener('click', () => {
    if (moneyValue >= 50) {
        moneyValue -= 50;
        money.innerHTML = moneyValue;
        alert('Success, you have bought a multiplier')
        modal_multiplier.style.display = 'none';
        initial_cabang += 1;
        cabang_info.innerHTML = initial_cabang;
        
        // add 1 to initiaValue for 5 seconds
        initiaValue += initial_cabang;
        setTimeout(() => {
            initiaValue -= initial_cabang;
            initial_cabang = 0;
            cabang_info.innerHTML = initial_cabang;
        }, 5000)

    }else{
        alert('You don\'t have enough money')
        modal_multiplier.style.display = 'none';
    }
})

cancel_buy_multiplier.addEventListener('click', () => {
    modal_multiplier.style.display = 'none';
}
)

// End Multiplier

// Jual Pooding

const jual_pooding = document.getElementById('jual_pooding');
const modal_jual_pooding = document.getElementById('modal_jual_pooding');
const confirm_jual_pooding = document.getElementById('confirm_jual_pooding');
const cancel_jual_pooding = document.getElementById('cancel_jual_pooding');

jual_pooding.addEventListener('click', () => {
    modal_jual_pooding.style.display = 'block';
})

confirm_jual_pooding.addEventListener('click', () => {
    if (moneyValue >= 500) {
        moneyValue -= 500;
        money.innerHTML = moneyValue;
        alert('Success, you have sold a pooding')
        modal_jual_pooding.style.display = 'none';
        initiaValue += 1;

    }else{
        alert('You don\'t have enough money')
        modal_jual_pooding.style.display = 'none';
    }
})

cancel_jual_pooding.addEventListener('click', () => {
    modal_jual_pooding.style.display = 'none';
})

// Jual Cendol

// const jual_cendol = document.getElementById('jual_cendol');
// const modal_jual_cendol = document.getElementById('modal_jual_cendol');
// const confirm_jual_cendol = document.getElementById('confirm_jual_cendol');
// const cancel_jual_cendol = document.getElementById('cancel_jual_cendol');

// jual_cendol.addEventListener('click', () => {
//     modal_jual_cendol.style.display = 'block';
// })

// confirm_jual_cendol.addEventListener('click', () => {
//     if (moneyValue >= 40) {
//         moneyValue -= 40;
//         money.innerHTML = moneyValue;
//         alert('Success, you have sold a cendol')
//         modal_jual_cendol.style.display = 'none';
//         initiaValue += 1;
//     }else{
//         alert('You don\'t have enough money')
//         modal_jual_cendol.style.display = 'none';
//     }
// })

// cancel_jual_cendol.addEventListener('click', () => {
//     modal_jual_cendol.style.display = 'none';
// })

// humburger menu
const humburger = document.getElementById('humburger');
const sidenav = document.querySelector('.sidenav');

humburger.addEventListener('click', () => {
    sidenav.classList.toggle('active');
})


// START
const start = document.getElementById('start');
const container_game = document.getElementById('container_game');
const main_page = document.getElementById('main_page');
const hero = document.querySelector('.hero');
const overlay = document.querySelector('.overlay');

start.addEventListener('click', () => {
    overlay.style.transform = 'translateY(0)';
    overlay.style.height = '100vh';
    setTimeout(() => {
        
        main_page.style.display = 'none';
        container_game.style.display = 'block';
        hero.style.backgroundImage = 'url(./img/background-opening.gif)';
        hero.style.backgroundSize = 'cover';
        hero.style.backgroundRepeat = 'no-repeat';
        hero.style.backgroundPosition = 'center';
        hero.style.height = '100%';
        hero.style.width = '100vw';
        overlay.style.opacity = '0';
        overlay.style.transition = 'all .9s ease-in-out';
        overlay.style.transform = 'translateY(-100%)';
    }, 3000)
})







