// Loop = โครงสร้างควบคุมการทำงาน (Control Flow) ที่ใช้สำหรับ ทำคำสั่งเดิมซ้ำๆ จนกว่าจะเป็นไปตามเงื่อนไขที่กำหนด

//for Loop (ใช้เมื่อ รู้จำนวนรอบ)

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// while Loop (ใช้เมื่อ ไม่รู้ว่าจะวนกี่รอบ)

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

// do-while Loop (ต่างจาก while ตรงที่ ทำงานก่อน 1 ครั้ง แล้วค่อยตรวจเงื่อนไข)

let j = 1;

do {
    console.log(i);
    j++;
} while (j <= 5);


// Nested Loop (ลูปซ้อนลูป) = การนำ Loop ไปไว้ข้างในอีก Loop หนึ่ง

for (let t = 1; t <= 3; t++) {
    for (let k = 1; k <= 2; k++) {
        console.log(t + " " + k);
    }
}

// break และ continue ทั้ง break และ continue ใช้สำหรับ ควบคุมการทำงานของ Loop แต่ทำหน้าที่ต่างกัน

// break = เมื่อโปรแกรมเจอ break จะออกจาก Loop ทันทีไม่สนใจว่าเหลืออีกกี่รอบ

for (let l = 1; l <= 10; l++) {

    if (l == 5) {
        break;
    }

    console.log(i);
}

// continue = เมื่อเจอ continue จะข้ามคำสั่งที่เหลือในรอบนั้นแล้วไปเริ่มรอบใหม

for (let p = 1; p <= 5; p++) {

    if (i == 3) {
        continue;
    }

    console.log(i);
}
