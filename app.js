var list = [];

function addToList()
{
    var item = document.querySelector('#item').value;
    if(item != '')
        list.push(item);

    updateToDoList();

    document.querySelector('#item').value = '';
}
function updateToDoList()
{
    const todolist = document.querySelector('#todo-list');
    todolist.innerHTML = '';
    for(var i = 0; i < list.length; i++)
        todolist.innerHTML +='<li onclick = removeItem('+ i +')>' + list[i]+ '</li>';
}
function removeItem(index)
{
    list.splice(index,1);

    updateToDoList();
}