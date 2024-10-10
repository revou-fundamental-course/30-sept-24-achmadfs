//Ini JavaScript

console.log('java script tersambung')

function validateform() {
    console.log('validasi sudah terpangil')
    const inputSuhu = document.getElementById('suhu-celsius').Value;

    if (inputSuhu == '') {
        alert('Input Kosong atau Salah');
    } else {
        validateform(inputSuhu).Value;
    }
}

function calculate(Value) {
    let result (parseInt(Value) * 1,8 + 32);
    document.getElementsById('suhu-celsius').Value = result;
    document.getElementById('cara-kalkulasi').Value = Value + 'x' + 1,8 + = + result;
}

function reset() {
    document.getElementById('suhu-celsius').Value = '';
    document.getElementById('suhu-farenheit').Value = '';
    
    document.getElementById('cara-kalkulasi').Value = '';
    console.log('bawah')
}