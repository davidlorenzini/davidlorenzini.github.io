import { add, getAll} from "./indexedDB"
import registerServiceWorker from "./serviceWorker/registerSW"

registerServiceWorker()

async function addData(){
    let res = await getAll("test")
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
    let key = String.fromCharCode(
        ...Array(8).fill().map(() => Math.floor(Math.random() * 25 + 97))
    )
    let value = Math.floor(Math.random() * 10000)
    await add("test", key, value)
    //window.location.reload()
})

