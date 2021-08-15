var a = {
    name: "Muhammad Usama",
    age: 26,
    contact: '03442377000',
    institute: "SAIMS",
    result: 0,
}
var b = {
    name: "Muhammad Arif",
    age: 28,
    contact: '03442377765',
    institute: "SAIMS",
    result: 1,
}
var c = {
    name: "Muhammad Sajid",
    age: 30,
    contact: '03442377000',
    institute: "Al-Habib Institute",
    result: 0,
}
var d = {
    name: "Muhammad Ather",
    age: 24,
    contact: '0323333333',
    institute: "Al-Majid Institute",
    result: 1,
}
var e = {
    name: "Muhammad Anus",
    age: 20,
    contact: '03442377000',
    institute: "Sagacity Institute",
    result: 0,
}
var f = {
    name: "Zahir Shah",
    age: 22,
    contact: '03442377777',
    institute: "Commerce World",
    result: 1,
}
var g = {
    name: "Muhammad Shahrukh",
    age: 30,
    contact: '03442377111',
    institute: "Commerce World",
    result: 0,
}
var h = {
    name: "Muhammad Owais",
    age: 24,
    contact: '03442377444',
    institute: "Commerce World",
    result: 0,
}
var i = {
    name: "Muhammad Shahool",
    age: 30,
    contact: "03442377666",
    institute: "Bahria Institute",
    result: 0,
}
var j = {
    name: "Muhammad Ahmed",
    age: 29,
    contact: '03442377777',
    institute: "Al-Habib Institute",
    result: 1,
}
list = [a, b, c, d, e, f, g, h, i, j];

for (var k = 0; k < list.length; k++) {
    list[k].RollNo = 699991 + k
}

var inp = document.getElementById("inp-num");
var btn = document.getElementById("btn");
var stuName = document.getElementById("student-name");
var roll = document.getElementById("roll-no");
var cont = document.getElementById("cont");
var instit = document.getElementById("insitute");
var res = document.getElementById("result");
var myElement = document.querySelector(".sty");

function search() {
    for (var k = 0; k < list.length; k++) {
        if (inp.value == list[k].RollNo) {
            myElement.style.display = "block";
            if (list[k].result) {
                stuName.innerHTML = `<i class="fas fa-user-graduate"></i>` + " : " + list[k].name;
                roll.innerHTML = `<i class="fas fa-id-badge"></i>` + " : " + list[k].RollNo;
                cont.innerHTML = `<i class="fas fa-phone"></i>` + " : " + list[k].contact;
                instit.innerHTML = `<i class="fas fa-university"></i>` + " : " + list[k].institute;
                res.innerHTML = `<i class="fas fa-poll-h"></i>` + " : " + " Pass ";
            } else {
                stuName.innerHTML = `<i class="fas fa-user-graduate"></i>` + " : " + list[k].name;
                roll.innerHTML = `<i class="fas fa-id-badge"></i>` + " : " + list[k].RollNo;
                cont.innerHTML = `<i class="fas fa-phone"></i>` + " : " + list[k].contact;
                instit.innerHTML = `<i class="fas fa-university"></i>` + " : " + list[k].institute;
                res.innerHTML = `<i class="fas fa-poll-h"></i>` + " : " + " Fail ";

            }
        }
    }
}
