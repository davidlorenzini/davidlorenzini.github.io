import { addToDB, getAllFromDB} from "./indexedDB"

async function addData(){
    let res = await getAllFromDB("test")
    console.log("Get all: ", res)
    if (res){
        let ul = document.createElement("ul")
        document.body.appendChild(ul)
        res.map(item => {
            let li = document.createElement("li")
            li.innerHTML = JSON.stringify(item)
            ul.appendChild(li)
        })
    }
}
addData()
const button = document.querySelector("button")
button.addEventListener("click", async function(e){
    await e.preventDefault()
    console.log("Button clicked")
    let key = String.fromCharCode(
        Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97),Math.floor(Math.random() * 25 + 97)
    )
    let value = Math.floor(Math.random() * 10000)
    await addToDB("test", key, value)
    //window.location.reload()
})

