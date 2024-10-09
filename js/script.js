//Ini JavaScript

console.log('java script tersambung')

function validateform() {
    console.log('validasi sudah terpangil')
    const inputSuhu = document.getElementById('suhu-celsius').Value;

    if (inputSuhu == '') {
        alert('Input Kosong atau Salah');
    } else {
        calculate(inputSuhu);
    }
}

function calculate(Value) {
    console.log(parseInt(Value) + 1);
}
