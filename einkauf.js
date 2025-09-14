const itemList = document.getElementById("item-list")
const addItemBtn = document.getElementById("add-item-btn")
const deleteAllBtn = document.getElementById("delete-all-btn")

addItemBtn.addEventListener("click", function() {
    const newItem = document.getElementById("new-item")
    const value = newItem.value.trim()
    if (!value) return
    itemList.innerHTML += `<li>${value}</li>`
    newItem.value = ""
    })

deleteAllBtn.addEventListener("click", function() {
    itemList.innerHTML = ""
    })
