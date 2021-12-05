## Task 1 - JSON parsing
---

This tasks pulls the data from the text field and runs a JSON.parse function, which will only work if the file is in an appropriate JSON string format. As such, we can use a 'try' and 'catch' method, where the JavaScript will attempt to JSON.parse and register success (if in the correct format) or throw an error (if not in the correct format).

While not a specific request for this assignment, it is noted that the error can be caught and then outputted, to give the user a clue where the error is. The example provided in the assignment description also provided an error message, so we can duplicate this. Furthermore, we can add our own text to this, such as "Check Error: " and then concatenate and display only the .message portion of the error. 

It is also noteworthy that the input in the textfield is received as a string by JavaScript, so will include single quotation marks to enclose it. If we add additional quotation marks, then it will throw an error. It is thus worth adding comments to our webpage for the user to avoid this.

Finally, using @keyframes allows us to create a few animations, such as the moving button and the pulsing shadow effect. This was largely done to practice CSS and makes the page a bit more fun! We can reuse some of our structures from last assignment, and modify to suit the specifics of this task. 

As per usual, HTML tags are semantic where able, and id's/classes are self-descriptive. 
