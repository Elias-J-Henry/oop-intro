// template for the message object

/* important:
         https://www.w3schools.com/js/js_classes.asp
         https://www.w3schools.com/js/js_objects.asp
*/

/* good to know for interviews:
        https://www.w3schools.blog/oops-concepts-in-java
*/

/* just read through this one, don't worry about taking detailed notes right now:
        https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming
*/

/* look up examples of what they talk about here: 
          https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming#oop_and_javascript
*/

class messageObject {
    constructor(username, message) {
        this.username = username;
        this.message = message;
    }
}

/* ex:

messageObject("username", "message");

results in the following: 

messageObject {
  username: "myUsername"
  message: "myMessage"
}
*/



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
        // https://www.w3schools.com/js/js_array_methods.asp  (focus on push and pull)
            
    messageArr.push(
        new messageObject(messageForm.username.value, messageForm.message.value)
    );

    // clears console every time function is triggered
    console.clear();

    // i++ is the same as i + 1
    // loops through messageArr
    for (let i = 0; i < messageArr.length; i++) {
        // `${}` allows you to insert js into a string
        // good for inserting numbers or data
        console.log(`message #${i+1}:`, messageArr[i]);
    }
}

function example(event) {
    // homework: lookup what event.target means
    console.log(event.target);
}


messageForm.addEventListener("submit", addMessage);