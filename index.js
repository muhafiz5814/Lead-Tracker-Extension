let myLeads = []

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

    $("#ul-el").html(listItems)
}

$("#save-el").on("click", () => {
    myLeads.push($("#input-el").val())
    $("#input-el").val("")
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

$("#tab-btn").on("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        const tab = tabs[0].url
        myLeads.push(tab)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

$("#delete-btn").on("dblclick", () => {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})