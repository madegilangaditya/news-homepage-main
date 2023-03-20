console.log('masuk');
const menuOpen = document.querySelector('.menu-open');
const menuClose = document.querySelector('.menu-close');
const menuWrap = document.querySelector('.menu-wrap');
    


menuOpen.addEventListener('click', function(){
    openMenu('open');
});
menuClose.addEventListener('click', function(){
    openMenu('close');
});

function openMenu(type){
    console.log(type);
    if(type == 'open'){
        menuWrap.classList.add('active');
    }else{
        menuWrap.classList.remove('active');
    }
}

