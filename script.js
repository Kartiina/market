const burger = document.querySelector('.burger');
if (burger){
    const body = document.querySelector('.nav__links');
    burger.addEventListener("click", function(){
        burger.classList.toggle('_active');
        body.classList.toggle('_active');
        console.log(1);
    });
}
(function(){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 250){
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    }
}())