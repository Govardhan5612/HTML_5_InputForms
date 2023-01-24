function firstName() {
    /**
     * In this method validate the first name and last name
     */
    let pattern = new RegExp('^[A-Z]{1}[a-z]{2,20}$');
    let input = document.getElementById("Name").value;
    let status = pattern.test(input);
    if (!status) {
        alert("Invalid Name, Enter first letter is upper case and remaining letters are lower case");
    }
}
function email() {
    /**
     * In this method validate E-mail
     */
    let pattern = new RegExp('^[a-z]{3,}[.]{1}[a-z]{0,}[@]{1}[a-z]{2,}[.]{1}[co]{2}[.]{1}[in]{0,2}$');
    let input = document.getElementById("email").value;
    let status = pattern.test(input);
    if (!status) {
        alert("Invalid email, Eg : abc.xyz@bl.co.in");
    }
}
function validationRules() {
    firstName();
    email();
}