let myLeads = []
let saveEl = document.getElementById("save-el")
let inputEl = document.getElementById("input-el")
let deleteBtn = document.getElementById("delete-btn")
let ulEl = document.getElementById("ul-el")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listItems = ""
    for(let i = 0; i<leads.length; i++){
        listItems += `
                        <li>
                            <a href="${leads[i]}" target="_blank">
                                ${leads[i]}
                            </a>
                        </li>
                    `
    }

    ulEl.innerHTML = listItems
}

saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})