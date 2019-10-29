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
 let count=0;
   myProgress(count).then(
    function(result){
     console.log(result)
    })

});

function myProgress(count) {
    return new Promise (function(resolve, reject) {

      //  function progressTime() {
            let count = 0;
            let timeInterval = setInterval(() => {
                console.log('inside time travel');
                count++;
                document.getElementById('process').value = count * 10;
                if (count == 10) {
                  resolve("success")
                    clearInterval(timeInterval);
                }
            }, 2000);
       });
    }