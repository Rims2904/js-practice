function showOutput(message) {
    document.getElementById('output').innerHTML = message;
}


let greeting = (name) => {
    return `Hello, ${name}!`;
}


document.addEventListener('DOMContentLoaded', () => {
    showOutput('DOM fully loaded and parsed');
    showOutput(greeting('Rima'));

    console.log(greeting('Rima'));
});