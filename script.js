const sliderNav=()=>{
    const menubar=document.querySelector(".menu-bar");
    const nav=document.querySelector(".navbar");

    menubar.addEventListener('click',()=>{
        //displaying the navbar list
        nav.classList.toggle('nav-active');

        //closebar
        menubar.classList.toggle('toggle');
    });
}
sliderNav();


const aboutUs=()=>{
    const about=document.querySelector("#aboutus");
    //const section=documnet.querySelector(".about");

    about.addEventListener('click',()=>{
        location.href="#about";
    })
}
aboutUs();