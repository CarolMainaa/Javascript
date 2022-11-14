// chrome://extensions/
let myLeads = []
let tabs = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

 if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
 }

 const tab = [
  {url: "https://www.linkedin.com/in/per-Harald-borgen/"}
]

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true , currentWindow: true}, function(tabs){
    myLeads.push(tab[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

 function render(leads){
  let listItems =""
  for (let i =0; i < leads.length; i++) {
  //template string
    listItems += `
      <li>
        <a target='_blank' href='${leads[i]}'>
          ${leads[i]}
       <a/>
      </li>
      `
  //console.log(listItems)
  }
  ulEl.innerHTML = listItems
 }

 deleteBtn.addEventListener("dblclick", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)

 })

 inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = " "
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    
})


