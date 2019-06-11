import './style.scss';

document.querySelector('.container').addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        // https://css-tricks.com/animating-layouts-with-the-flip-technique/
        const elm = e.target.parentNode.parentNode;
        const style = getComputedStyle(elm);
        const first = elm.getBoundingClientRect();

        switch (e.target.value) {
            case 'down': {
                elm.style['grid-row-start'] = Number(style['grid-row-start']) + 1;
                break;
            }
            case 'up': {
                elm.style['grid-row-start'] = Number(style['grid-row-start']) - 1;
                break;
            }
            case 'right': {
                elm.style['grid-column-start'] = Number(style['grid-column-start']) + 1;
                break;
            }
            case 'left': {
                elm.style['grid-column-start'] = Number(style['grid-column-start']) - 1;
                break;
            }
            // Last, Invert, Play: the flip() method does it all
        }
        const last = elm.getBoundingClientRect();
        const deltaX = first.left - last.left;
        const deltaY = first.top - last.top;

        elm.animate([{
            transformOrigin: 'top left',
            transform: `
              translate(${deltaX}px, ${deltaY}px)
            `
          }, {
            transformOrigin: 'top left',
            transform: 'none'
          }], {
            duration: 500,
            easing: 'ease-in-out',
            fill: 'both'
          });
    } else {
        randomImages();
    }
});

function randomImages() {
    const divs = Array.from(document.querySelectorAll('.container>div'));
    console.log(shuffle(divs));
    let count = 0
    for (let r = 1; r <= 3; r++) {
        for (let c = 1; c <= 3; c++) {
            const first = divs[count].getBoundingClientRect();
            divs[count].style['grid-row-start'] = r;
            divs[count].style['grid-column-start'] = c;
            const last = divs[count].getBoundingClientRect();
            const deltaY = first.top - last.top;
            const deltaX = first.left - last.left;
            divs[count].animate([{
                transformOrigin: 'top left',
                transform: `
                  translate(${deltaX}px, ${deltaY}px)
                `
              }, {
                transformOrigin: 'top left',
                transform: 'none'
              }], {
                duration: 500,
                easing: 'ease-in-out',
                fill: 'both'
              });
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