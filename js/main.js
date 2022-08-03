//////////   Burger   ////////////////////////////////////////////////////////////////////

let mainBody = document.querySelector('body');
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
let menuList = document.querySelector('.menu__list');


let openBurger = () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    mainBody.classList.toggle('lock');
}

burger.addEventListener('click', e => {
    openBurger();
})

menuList.addEventListener('click', e => {
    openBurger();
});


//////////   Hide/Show Textarea   ////////////////////////////////////////////////////////////////////

let comment = document.querySelector('.photodairy__comment');
let commentArea = document.querySelector('.photodairy__textarea');
let commentBtn = document.querySelector('.photodairy__icon_btn');


document.addEventListener('click', comments);


let showTextarea = () => {
    comment.classList.add('inactive');
    commentArea.classList.remove('inactive');
    commentBtn.classList.add('active')
}

let hideTextarea = () => {
    comment.classList.remove('inactive');
    commentArea.classList.add('inactive');
    commentBtn.classList.remove('active')
}

function comments(e) {
    if (e.target.closest('.photodairy__comment')) {
        showTextarea ();
    };
    if (!e.target.closest('.photodairy__comments')) {
        hideTextarea ();
    };
    if (e.target.closest('.photodairy__icon_btn')) {
        hideTextarea ();
    };
}


//////////   Hide/Show More Cards   ////////////////////////////////////////////////////////////////////

let loadmoreCards = document.querySelector('.loadmore__cards');
let loadmoreBtn = document.querySelector('.loadmore__btn');
let load = document.querySelector('.loadmore__load');
let hide = document.querySelector('.loadmore__hide');

loadmoreBtn.addEventListener('click', e = () => {
    loadmoreCards.classList.toggle('inactive');
    load.classList.toggle('inactive');
    hide.classList.toggle('inactive');
});