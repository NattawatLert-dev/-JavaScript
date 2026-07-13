// ---------- EXAMPLE 1 <h1> -----------

// STEP 1 CREATE THE ELEMENT

const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "red";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);                    // เพิ่มท้าย
document.body.prepend(newH1);                   // เพิ่มหัว
// document.getElementById("box1").append(newH1);  // เพิ่มในกล่องส่วนหัว
// document.getElementById("box1").prepend(newH1); // เพิ่มในกล่องส่วนท้าย

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);        // อยุ่บน box 2

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[0]);    // เพิ่มตามที่กำหนด

// REMOVE HTML ELEMENT

// document.getElementById("box1").removeChild(newH1);



// ---------- EXAMPLE 2 <li> -----------

// STEP 1 CREATE THE ELEMENT

const newListItem = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById("fruits").append(newListItem);
// document.getElementById("fruits").prepend(newListItem);

// const orange = document.getElementById("orange");
// document.getElementById("fruits").insertBefore(newListItem, orange);

const listItem = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem, listItem[0]);

// REMOVE HTML ELEMENT
// document.getElementById("fruits").removeChild(newListItem);