// NodeList = คอลเลกชัน (Collection) แบบคงที่ (Static)
//            ของ Element ใน HTML ที่ค้นหาได้จาก id, class หรือชื่อแท็ก (element)
//            สามารถสร้างได้ด้วยเมธอด querySelectorAll()
//            มีลักษณะคล้าย Array แต่ไม่มีเมธอดบางตัว เช่น map(), filter() และ reduce()
//            NodeList จะไม่อัปเดตอัตโนมัติเมื่อมีการเปลี่ยนแปลง Element ในหน้าเว็บ

let buttons = document.querySelectorAll(".myButtons");

// ADD HTML/CSS PROPERTIES
/*
buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent = "Hi";
}); */


// CLICK event listener

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.style.backgroundColor = "tomato";

    });
});

// MOUSEOVER + MOUSEOUT event listener

buttons.forEach(button => {
    button.addEventListener("mouseover", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
    });
});

buttons.forEach(button => {
    button.addEventListener("mouseout", event => {
        event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
    });
});

// ADD AN ELEMENT

const newButton = document.createElement("button"); // STEP 1
newButton.textContent = "Button 5"; // STEP 2
newButton.classList = "myButtons";
document.body.appendChild(newButton); // STEP 3

buttons = document.querySelectorAll(".myButtons");
console.log(buttons);

// REMOVE AN ELEMENT
/*
buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        button.document.querySelectorAll(".myButtons");
        console.log(button);
    });
});
*/