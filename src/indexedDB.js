import {openDB} from "idb"

export const DB_NAME = "list"
export const STORE_NAME = "test"


export const DB = openDB(DB_NAME, 1, {
    upgrade(db, oldVersion, newVersion, transaction) {
        if(!db.objectStoreNames.contains(DB_NAME)) {
            db.createObjectStore(STORE_NAME, {keyPath: "id", autoIncrement: true} )
            console.log("Store created")
        }

    }
})
            
export async function add(store = STORE_NAME, key, value){
    try { 
        const db = await DB
        let tx = db.transaction(store, "readwrite")
        await Promise.all([
            tx.store.add({
                key, 
                value,
                time: Date.now()
            }),
            tx.done
        ])
        return true
    } catch(e) {
        console.error(`Error while adding [${key}]: `, e)
        return false
    }
}

export async function update(store = STORE_NAME, key, newValue){
    try { 
        const db = await DB
        let tx = db.transaction(store, "readwrite")
        await Promise.all([
            tx.store.put(newValue, key),
            tx.done
        ])
        return true
    } catch(e) {
        console.error(`Error while updating [${key}]: `, e)
        return false
    }
}

export async function getAll(store = STORE_NAME){
    try { 
        const db = await DB
        let tx = db.transaction(store, "readonly")
        const items = await tx.store.getAll()
        await tx.done
        return items
    } catch(e) {
        console.error(`Error while retrieving all data: `, e)
        return false
    }
}

export async function get(store = STORE_NAME, key){
    try { 
        const db = await DB
        let tx = db.transaction(store, "readonly")
        const item = await tx.store.get(key)
        await tx.done
        if (item === undefined) return false 
        return item
    } catch(e) {
        console.error(`Error while retrieving [${key}]: `, e)
        return false
    }
}

export async function remove(store = STORE_NAME, key){
    try { 
        const db = await DB
        let tx = db.transaction(store, "readwrite")
        await Promise.all([
            tx.store.delete(key),
            tx.done
        ])
        return true
    } catch(e) {
        console.error(`Error while deleting [${key}]:`, e)
        return false
    }
}