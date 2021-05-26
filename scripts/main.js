window.onload = function() {
    const webDesign = document.querySelector('section#webDesign a');
    const text = 'https://www...'.split('');

    let index = 0;
    function add() {
        if (index < text.length) {
            webDesign.textContent += text[index++];
        } else {
            webDesign.textContent = 'h';
            index = 1;
        }
    }
    setInterval(add, 400);
}
