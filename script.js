// template for the message object
// https://www.w3schools.com/js/js_classes.asp
// https://www.w3schools.com/js/js_objects.asp
class messageObject {
    constructor(username, message) {
        this.username = username;
        this.message = message;
    }
}

    // messageObject("username", "message");
    // results in the following: 
    // 
    // messageObject {
    // username: "myUsername"
    // message: "myMessage"
    //}



// getting the html form by id
var messageForm = document.getElementById("messageForm");

var messageArr = [];


// https://www.w3schools.com/js/js_arrow_function.asp
// triggered when we submit the form
const addMessage = (event) => {
    // prevents window from refreshing
    // https://www.w3schools.com/jsref/event_preventdefault.asp
    event.preventDefault();

    // adding the object to the list (array)
    // https://www.w3schools.com/jsref/jsref_push.asp
    messageArr.push(
        new messageObject(messageForm.username.value, messageForm.message.value)
    );

    // clears console every time function is triggered
    console.clear();

    // i++ is the same as i + 1
    // loops through messageArr
    for (let i = 0; i < messageArr.length; i++) {
        console.log("message #:", i+1, messageArr[i]);
      }
}

function example(event) {
    // homework: lookup what event.target means
    console.log(event.target);
}


messageForm.addEventListener("submit", addMessage);