let qrinput = document.querySelector('#qr-input');
let qrbutton = document.querySelector('#qr-button');
let qrimg = document.querySelector('#qr-img');

console.log(qrinput, qrbutton, qrimg)
qrbutton.addEventListener('click', () => {
    let inputvalue = qrinput.value;
    console.log(inputvalue)
    if (!inputvalue) {
        alert('pleas enter vaild url')
    } else {
        qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputvalue}`;
        qrimg.alt = `qr code for ${inputvalue}`;
    }
});

qrinput.addEventListener('keyup', () => {
    let inputvalue = qrinput.value;
    if (inputvalue === "") {
        qrimg.src = '';
        qrimg.alt = '';
    }
})