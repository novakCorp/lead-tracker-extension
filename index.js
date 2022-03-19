let myLeads = [];
let oldLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const btnDelete = document.getElementById('delete-btn');
const tabBtn = document.getElementById('tab-btn');

const leadStorage = JSON.parse(localStorage.getItem("myLeads")); 
console.log(leadStorage);

// Check if there is data in the localStorage using Truthy and Falsy
if(leadStorage) {
    console.log("There is at least one lead");
    myLeads = leadStorage;
    render(myLeads);
}
else {
    console.log("There are not leads.");
}

// TAB BUTTON
tabBtn.addEventListener('click', function() {
    // Grab the url from the google url
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        render(myLeads);
    });
});

console.log(btnDelete);
// DOUBLE CLICK
btnDelete.addEventListener("dblclick", function() {
    console.log('the double" click is working.');
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});



// ONE CLICK
inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    // convert the myLeads array to a JSON value
    localStorage.setItem("myLeads", JSON.stringify(myLeads)); 
    console.log(localStorage.getItem("myLeads"));
    render(myLeads);
});



function render(leads) {
    let listItems = "";
    for(let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i]  + "'>" + myLeads[i] + "</a> </li>";
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a> 
            </li>`;
    }
    // DOM manipulation come with a cost
    ulEl.innerHTML = listItems;
}


// playing with template strings
const recipient = "James";
const sender = "Miguel"
const email = `Hey 
${recipient}! 
How is it going? 
Cheers ${sender}.`;
// console.log(email);


// Truthy and falsy values
// null -> how you as a developer signalizes emptiness
// undefined -> how javascript signalizes emptiness


// numbers as functions parameters
function numParameters(num1, num2) {
    return console.log(num1 + num2);
}

numParameters(3,4);
numParameters(9,102);


// Arrays as parameters

let arrNumbers = ["you returned the array, first value.",2,3,4,5,6,7];

function backNumbers(bom) {
    console.log(bom[0]);
}

backNumbers(arrNumbers);
