function firstName() {
    /**
     * In this method validate the first name and last name
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,20}$');
    let input;
    
        input = document.getElementById("Name").value;
        let status = pattern.test(input);
        if (status) {
            alert("Valid Name");
        }
        else{
            alert("Invalid Name, Enter first letter is upper case and remaining letters are lower case"); 
        }
    
    return input;
}
function validationRules() {
    firstName();
}