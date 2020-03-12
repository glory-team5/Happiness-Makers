function clickButton() {
    var Email = document.getElementById('email').value;
    var firstName = document.getElementById('name').value;
    var lastName = document.getElementById('name2').value;
    var duration = document.getElementsByClassName('duration').value;
    var mony = document.getElementsByClassName('mony').value;
    var messageHeader = document.getElementById('messageHeader');
    var content = document.getElementById('content');

    messageHeader.textContent = `Dear ${firstName} ${lastName}`;
    content.textContent = `Thank you for your great generosity, together we are making a difference! Your support of our mission is deeply gratifying to us, and we hope it is the same for you. Your gift has already started to impact.`;
}