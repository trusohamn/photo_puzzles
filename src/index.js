import './style.scss';

document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const style = getComputedStyle(e.target.parentNode.parentNode);
        switch (e.target.value) {
            case 'down': {
                e.target.parentNode.parentNode.style['grid-row-start'] = Number(style['grid-row-start']) + 1;
                break;
            }
            case 'up': {
                e.target.parentNode.parentNode.style['grid-row-start'] = Number(style['grid-row-start']) - 1;
                break;
            }
            case 'right': {
                e.target.parentNode.parentNode.style['grid-column-start'] = Number(style['grid-column-start']) + 1;
                break;
            }
            case 'left': {
                e.target.parentNode.parentNode.style['grid-column-start'] = Number(style['grid-column-start']) - 1;
                break;
            }
        }

        //e.target.parentNode.style['grid-area'] = newarea;
    }
});

function randomImages() {
    const divs = Array.from(document.querySelectorAll('.container>div'));
    console.log(shuffle(divs));
    let count = 0
    for (let r = 1; r <= 3; r++) {
        for (let c = 1; c <= 3; c++) {
            divs[count].style['grid-row-start'] = r;
            divs[count].style['grid-column-start'] = c;
            count++;
        }
    }
}


function shuffle(a) {
    for (let i = 0; i < a.length; i++) {
        const j = Math.floor(Math.random() * a.length); //random index j
        [a[i], a[j]] = [a[j], a[i]]; //switch
    }
    return a;
}

window.onload = randomImages();