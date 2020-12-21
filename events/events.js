// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');
    p.textContent = 'I changed because of an event listener.';
}

const alertText = () => {
    alert('Alert ! Alert !');
}

// Add event handler as a property of the button element
const button = document.querySelector('button');
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);

// you can use anonymous functions
button.addEventListener('click', () => {
    p.textContent = "I was changed few minutes ago ?";
});

// Examples of keyboard events
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);

});

// Pass an event through to a listener
document.addEventListener('keydown', event => {
    var elem = document.querySelector('p');

    // Set variables for each node
    var a = 'KeyA';
    var s = 'KeyS';
    var d = 'KeyD';
    var w = 'KeyW';

    switch(event.code){
        case a:
            elem.textContent = 'Left';
            break;
        case s:
            elem.textContent = 'Down';
            break;
        case d:
            elem.textContent = 'Right';
            break;
        case w:
            elem.textContent = 'Up';
            break;
    }
});