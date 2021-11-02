function validateForm(theForm) {
    var isValid = true;
    var errorMessage ='';

    if (theForm.firstname.value == ''){
        isValid = false;
        errorMessage = errorMessage + 'First name is required';
        theForm.firstname.focus();

    } if (theForm.lastname.value =='') {
        if (isValid ==true) {
            isValid = false;
            theForm.lastname.focus(); 
        }
        errorMessage = errorMessage + '\nLast name is required';
    }  if (theForm.email.value =='') {
        if (isValid ==true) {
            isValid = false;
            theForm.email.focus(); 
        }
        errorMessage = errorMessage + '\nEmail is required';
    } if (theForm.phonenumber.value =='') {
        if (isValid ==true) {
            isValid = false;
            theForm.phonenumber.focus();
        }
        errorMessage = errorMessage + '\nPhone number is required';
    }

    if (isValid ==false) {
        alert(errorMessage)
    }

    return isValid
}