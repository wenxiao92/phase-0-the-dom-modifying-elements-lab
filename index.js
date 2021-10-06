// Write your code here!
//no longer has DOM node 'main#main'
const removeMain = document.getElementById("main")
removeMain.remove()

//has a 'newHeader' variable that points to node 'h1#victory'
const newHeader = document.createElement("h1")

newHeader.id = "victory"

//has has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside
newHeader.innerHTML = "Wen is the champion"

document.body.append(newHeader)