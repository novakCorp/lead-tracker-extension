let myLeads = [];
const inputBtn = document.getElementById('input-btn');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');


console.log(ulEl);

inputBtn.addEventListener('click', function() {
    myLeads.push(inputEl.value);
    inputEl.value = '';
    renderLeads();
});

function renderLeads() {
    let listItems = "";
    for(let i = 0; i < myLeads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i]  + "'>" + myLeads[i] + "</a> </li>";
        listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a> 
            </li>`;
        console.log(listItems);
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
console.log(email);