// CHALLENGES

// Lot out items in an array
let myCourses = ["Learn CSS Animations", "UI Design Fundamentals", "Intro to Clean Code"]

function logArrays(pum) {
    for(let i = 0; i < pum.length; i++) {
        console.log(pum[i]);
    }
}

logArrays(myCourses);


// add event listener to an object in array
const btnJane = document.getElementById('btnJane');
console.log(btnJane);
btnJane.addEventListener('click', function() {
    console.log("This is Jennifer's score");
    console.log(data[0].player);
    console.log(data[0].score);
});

let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
];


