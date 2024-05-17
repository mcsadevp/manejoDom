document.addEventListener("DOMContentLoaded", function() {
    const caja = document.getElementById("caja");
    const btn1 = document.getElementById("btn-1");
    const btn2 = document.getElementById("btn-2");
    const btn3 = document.getElementById("btn-3");
    const btn4 = document.getElementById("btn-4");
    const btn5 = document.getElementById("btn-5");
    const btn6 = document.getElementById("btn-6");

    btn1.addEventListener("click", function() {
        caja.style.backgroundColor = "#e53e3e";
    });

    btn2.addEventListener("click", function() {
        caja.style.backgroundColor = "#dd6b20";
    });

    btn3.addEventListener("click", function() {
        caja.style.backgroundColor = "#faf089";
    });

    btn4.addEventListener("click", function() {
        caja.style.backgroundColor = "#48bb78";
    });

    btn5.addEventListener("click", function() {
        caja.style.backgroundColor = "#81e6d9";
    });

    btn6.addEventListener("click", function() {
        caja.style.backgroundColor = "#d53f8c";
    });
});
