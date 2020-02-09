function validateForm() {

    const awesome = () => console.log('start  validateForm ');

    var x = document.forms.myForm.fname.value;
    if (x === '') {
        alert('First Name must be filled out');
        return false;
    }

    var y = document.forms.myForm.lname.value;
    if (y === '') {
        alert('Last Name must be filled out');
        return false;
    }
}

