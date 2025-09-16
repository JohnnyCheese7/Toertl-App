import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyCycm98o7t1jhL_mHIu6utA0Eb-wKcF8aU",
    authDomain: "toertl-app.firebaseapp.com",
    projectId: "toertl-app",
    storageBucket: "toertl-app.firebasestorage.app",
    messagingSenderId: "69995772714",
    appId: "1:69995772714:web:fd7ce2c29830c206cd7c53",
    databaseURL: "https://toertl-app-default-rtdb.europe-west1.firebasedatabase.app/"
  }

const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const referenceInDB = ref(database, "shoppinglist")

const newItem = document.getElementById("new-item")
const itemList = document.getElementById("item-list")
const addItemBtn = document.getElementById("add-item-btn")
const deleteAllBtn = document.getElementById("delete-all-btn")

onValue(referenceInDB, function(snapshot) {
    if (snapshot.exists()) {
    const snapshotValues = snapshot.val()
    const items = Object.values(snapshotValues)
    showItems(items)
    } else {
        itemList.innerHTML = ""
    }
    })

function showItems(items) {
    let list = ""
    for (let i = 0; i < items.length; i++) {
        list += `<li>${items[i]}</li>`
    }
    itemList.innerHTML = list
}

addItemBtn.addEventListener("click", function() {
    const value = newItem.value.trim()
    if (!value) return
    push(referenceInDB, value)
    newItem.value = ""
    })

deleteAllBtn.addEventListener("click", function() {
    remove(referenceInDB)
    itemList.innerHTML = ""
    })
