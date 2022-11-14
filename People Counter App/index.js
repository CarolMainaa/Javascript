 let saveEl= document.getElementById("save-el")

 let countEl= document.getElementById("count-el")

 let count =  0

function increment(){
    count+= 1
    countEl.textContent = count
}

function save(){
    let s= count  + "-"

    saveEl.textContent += s

    console.log(count)

    countEl.textContent = 0
    count=0

}

let myPoints = 3 

function add3Points(){
    myPoints +=3
    

}

function removePoint(){
    myPoints -=1
   

}
add3Points()
add3Points()
add3Points()
removePoint()
removePoint()

console.log(myPoints)

