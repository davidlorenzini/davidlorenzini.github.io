import {openDB} from "idb"

const DB = openDB("list", 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
        if(!db.objectStoreNames.contains("list")) {
            db.createObjectStore("test", {keyPath: "id", autoIncrement: true} )
            console.log("Store created")
        }

    }
})
            
function addToDB (store, key, value){
    DB.then(db => {
        let transaction = db.transaction(store, "readwrite")
        let s = transaction.objectStore(store)
        s.add({
            key, 
            value,
            time: Date.now()
        })
        return transaction.complete
    }).then(res => {
        if (res) console.log("Item added to store")
        else console.log("Item couldnt be addded to store")
    }).catch(e => console.log("Error while adding data: ", e))
}

function getAllFromDB (store){
    return DB.then(async function(db) {
        let transaction = db.transaction(store, "readonly")
        let s = transaction.objectStore(store)
        let items = await s.getAll()
        console.log("Retrieved all items from store")
        return items
    }).catch(e => console.log("Error while retrieving data: ", e))
}

export {DB, addToDB, getAllFromDB}