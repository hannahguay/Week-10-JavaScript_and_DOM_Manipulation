document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('new-recipe').value;
    let actions = row.insertCell(4);
    actions.apppendChild(createDeleteButton(id++));
    document.getElementById('new-task').value = '';
});

