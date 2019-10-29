document.addEventListener('DOMContentLoaded', (event) => { ///load the DOM event
    console.log('DOM fully loaded and parsed');

    let bodyElement = document.body; //creating body
    let element = document.createElement('section'); //creating element
    let elementContent = document.createTextNode('New line begins'); //wrtiting text

    element.appendChild(elementContent); //appending text to element
    bodyElement.appendChild(element); //appending element to body

    //updated the value of progress bar
    document.getElementById('process').value = 0
    // progressTime();

    barProgress(printingResult);

});

function printingResult() {
    console.log('Success')
}

function barProgress(done) {
    let count = 0;
    let timeInterval = setInterval(() => {
        console.log('inside time travel');
        count++;
        document.getElementById('process').value = count * 10;
        if (count == 10) {
            clearInterval(timeInterval);
            done();
        }
    }, 2000);
}