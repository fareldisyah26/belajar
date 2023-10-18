// console.log("Kiw Kiw")
// alert("ada notifikasi")
// prompt("Bismillah Sejuta")

// var Promnet = "aura is a fighter"
// console.log(Promnet)
// var Promnet = "aura is a fighter"
// console.log(Promnet)

// console.log(Promnet)
// var Promnet = "Shadow Kill"
// console.log(Promnet)

// let Promnet = "Coding Farel"
// console.log(Promnet)
// let Promnet = "Coding Farel"
// console.log(Promnet)

// const Promnet = "Coding is fun"
// console.log(Promnet)
// const Promnet = "Coding not fun"
// console.log(Promnet)

// let totalPoin = prompt("Massukan Poin Anda")
//     if(totalPoin >= 100){
//         document.write("Keren");
//     }else{
//         document.write("Bismillah Sejuta");
//     }

// let x = 6;
// let y = 3;

//     if(x < 10 && y > 1){
//         document.write("True");
//     }else{
//         doucument.write("False");
//     }
    

//     console.log(x < 10 && y > 1);
//     console.log(x < 10 && y < 1);
//     console.log (x == 5 || y==5);
//     console.log(x==6 || y==5);
//     console.log(! (x==y));

//     document.write(x < 10 && y > 1);
//     document.write("<Br>");
//     document.write(x < 10 && y < 1);
//     document.write("<Br>");
//     document.write(x == 5 || y==5);
//     document.write("<Br>");
//     document.write(x==6 || y==5);
//     document.write("<Br>");
//     document.write(! (x==y));

let p = document.querySelector("P");
let button = document.querySelector("button");
let input = document.querySelector("input");

button.addEventListener('click', function () {
    let isi = input.value;
    console.log(isi);

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    let label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(isi));

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
  
    label.appendChild(deleteButton);

    p.appendChild(label);

    p.appendChild(document.createElement("br"));
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            label.style.textDecoration = 'line-through'; 
        } else {
            label.style.textDecoration = 'none'; 
        }
    });

deleteButton.addEventListener('click', function () {
        p.removeChild(label);
    });

    input.value = "";

});
