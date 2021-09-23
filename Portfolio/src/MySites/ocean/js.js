document.addEventListener('DOMContentLoaded', () => {

    btns = document.querySelectorAll('.btn');
    body = document.querySelector('body');
    img = document.querySelector('#main__img');
    nav = document.querySelector('.header__navigation');

    btns.forEach( (i) => {
        i.addEventListener('click', (btn) => {
            switch(btn.target.id){
                case ('theme__light'):
                    hiddenElement('theme__dark', 'theme__light');
                    break;
                case ('theme__dark'):
                    hiddenElement('theme__light', 'theme__dark');
                    break;
                case ('burger__close'):
                    hiddenElement('burger__open', 'burger__close');
                    break;
                case ('burger__open'):
                    hiddenElement('burger__close', 'burger__open');
                    break;
            }
        });
    });

    function hiddenElement(activeElement, hiddenElement){
        document.querySelector(`.${activeElement}`).classList.toggle('hidden');
        document.querySelector(`.${hiddenElement}`).classList.toggle('hidden');
        if(activeElement == 'theme__dark'){
            document.documentElement.style.setProperty('--black', "#fff");
            document.documentElement.style.setProperty('--white', "#000");
            document.documentElement.style.setProperty('--modalBlack', "rgba(255, 255, 255, 0.5)");
            document.documentElement.style.setProperty('--modalWhite', "rgba(0, 0, 0, 0.5)");
            img.style.filter = 'invert(1)';
            img.style.mixBlendMode = 'multiply';
        }else if (activeElement == 'theme__light'){
            document.documentElement.style.setProperty('--black', "#000");
            document.documentElement.style.setProperty('--white', "#fff");
            document.documentElement.style.setProperty('--modalBlack', "rgba(0, 0, 0, 0.5)");
            document.documentElement.style.setProperty('--modalWhite', "rgba(255, 255, 255, 0.5)");
            img.style.filter = '';
            img.style.mixBlendMode = '';
        }
        if(activeElement == 'burger__close'){
            nav.style.left = '0';
            body.style.overflow = "hidden";
        }else if(activeElement == 'burger__open'){
            nav.style.left = '';
            body.style.overflow = "";
        }
    }
    

});