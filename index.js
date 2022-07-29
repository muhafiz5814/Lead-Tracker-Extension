let myLeads = []
let saveEl = document.getElementById("save-el")
let inputEl = document.getElementById("input-el")
let ulEl = document.getElementById("ul-el")

saveEl.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    renderLeades()
})

function renderLeades(){
    let listItems = ""
    for(let i = 0; i<myLeads.length; i++){
        listItems += `
                        <li>
                            <a href="${myLeads[i]}" target="_blank">
                                ${myLeads[i]}
                            </a>
                        </li>
                    `
    }

    ulEl.innerHTML = listItems
}