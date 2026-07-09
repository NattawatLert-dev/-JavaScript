// const = ตัวแปรที่ไม่สามารถเปลี่ยนแปลงค่าได้หลังจากกำหนดค่าแล้ว

const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function () {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH1").textContent = "The circumference is " + circumference;
}