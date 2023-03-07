const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

const generateTemplate = todo => {
   const html = `
         <li class="list-group-item d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
        </li>
    `;

    list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addForm.add.value.trim(); // removes whitespace
    if(todo.length) {
        generateTemplate(todo);
        addForm.reset(); // reset all the inputs inside a form
    }
});


// delete todos
list.addEventListener('click', e => {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
})

//filter method will return a new array with the values that are true
//but the callback function will be fired for each element in the ul to see which element is true and which is false

const filterTodos = (term) => {
    Array.from(list.children)
    .filter((li) => {
        // console.log('LI', !li.textContent.toLocaleUpperCase().includes(term))
       //adding the elements that don't include the term
        return !li.textContent.toUpperCase().includes(term)
    }).forEach((li) => {
        li.classList.add('filtered');
    })

    Array.from(list.children)
    .filter((li) => {
        console.log('filter', li)
        return li.textContent.toUpperCase().includes(term)
    }).forEach((li) => {
         console.log('forEach', li)
        li.classList.remove('filtered');
    })
}

// keyup event
search.addEventListener('keyup', () => {
    const term = search.value.trim().toUpperCase();
    filterTodos(term)
    
});
