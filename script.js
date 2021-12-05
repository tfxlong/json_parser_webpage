function check_if_JSON() {
    //grab the element content by element ID
    var string_input_grab = document.getElementById("string_input")
    
    // console.log(string_input_grab.value);  //for debugging

    //try accept allows both options to function, while allowing us to catch any errors
    try {
        x = JSON.parse(string_input_grab.value);
        // console.log(x); //for debugging

        let result_output_grab = document.getElementById("result_output");
        result_output.style.color='green';
        result_output_grab.value = "YES! THIS IS RECOGNISED AS VALID";

        string_input_grab = document.getElementById("string_input");
        string_input_grab.style.border="4px solid rgb(57, 243, 57)";

        let error_output_grab = document.getElementById("error_output");
        error_output.style.color='green';
        error_output_grab.innerHTML = "!! &nbsp;Awesome &nbsp;!!";
    
    } catch (error) {
       
        // console.log(error); // for debugging
        // console.log(error.message); //for debugging

        let result_output_grab = document.getElementById("result_output");
        result_output.style.color='red';
        result_output_grab.value = "SORRY! THIS IS NOT RECOGNISED AS VALID";

        let string_input_grab = document.getElementById("string_input");
        string_input_grab.style.border="4px solid red";

        let error_output_grab = document.getElementById("error_output");
        error_output.style.color='red';
        error_output_grab.innerHTML = "Check error: " + error.message;

    }
}


