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