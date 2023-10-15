'use strict';
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// locastorage
function createStorage(key) {
    const store = JSON.parse(localStorage.getItem(key)) ?? [] // dich mã du lieu JOSN tu locastrorage về wed
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store)) // phiên mã JOSN đẩy lên locastrorage
    }
    
    const storage = {
        // lay du lieu tu locastorage
        get() {
            return store
        },

        // them du lieu tu locastorage
        set(data = undefined) {
            if(data != undefined) {
                store.push(data)
                save()
            }
        },

        // chinh sua du lieu tu locastorage
        edit(data = undefined) {
            if(data != undefined) {
                store.forEach((item,idx) => {
                    if(item.id == id) {
                        
                    }
                })
            }
        },

        // xoa du lieu tu locastorage
        remove(id = undefined) {
            if(id != undefined) {
                store.forEach((item,idx) => {
                    if(item.id == id) {
                        store.splice(idx,1)
                    }
                })
                save()
            }
        }
    }
    return storage
}