// get element from the DOM


//toggle display navigation menu onclick of the hamburger button
let toggleMenu = document.querySelector('.toggleMenu');

let menu = document.querySelector('.nav-menu');

let toggleMenuDisplay = false;


let toggle = () => {
    // if (toggleMenuDisplay) {
    //     toggleMenuDisplay=!toggleMenuDisplay;
    //     menu.style.left = '100vw';
    // } else {
    //     toggleMenuDisplay=!toggleMenuDisplay;
    //     menuOpen = () => {
    //         menu.style.left = '15vw';
    //     }
    //     menuOpen();
    // }
    menu.classList.toggle('toggleM');
}

// onclick scroll events

let route1 = document.querySelector('.route1');

scroll1 =()=>{
console.log(window.screenX);
}
