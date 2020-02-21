var itemName = document.querySelector('.inputText')
var btnAdd = document.querySelector('.addBtn')
var  newItem = document.querySelector ('.items')

btnAdd.addEventListener('click', ()=>{
let itemNameText = itemName.value
btnAdd = itemNameText
     var newDiv = document.createElement('div')
     var text = document.createElement('p')

     text.innerHTML = itemNameText
     var completeBtn = document.createElement('button')
     completeBtn.classList.add("complete")
     completeBtn.innerHTML = "Complete"
     var deleteBtn = document.createElement('button')
     deleteBtn.classList.add("delete")
     deleteBtn.innerHTML = "Delete"
     newDiv.appendChild(completeBtn)
     newDiv.appendChild(deleteBtn)
     newDiv.appendChild(text)
     newDiv.classList.add("item")
      newItem.appendChild(newDiv)
      console.log(newDiv);
      
      deleteBtn.addEventListener('click', ()=>{
        newDiv.remove()
      })
      completeBtn.addEventListener('click', ()=>{
text.style.textDecoration = "line-through"

      })
      

      
     
     
 



})




















