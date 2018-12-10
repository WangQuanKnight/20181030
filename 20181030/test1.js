function validateEmail(field, err) {
    with (field) {
        var apos = value.indexOf("@");
        var dotpos = value.lastIndexOf(".");
        if (apos < 1 || dotpos == apos < 2) {
            alert(err);
            return false;
        }
        else
            return true;
    }
}
function validateForm(form1) {
    with (form1) {
        if (validateEmail(email, "Not a valid email address") == false) {
            email.focus();
            return false;
        }
        else
            return true;
    }
}