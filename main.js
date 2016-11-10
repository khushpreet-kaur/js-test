var tasks = ["code", "read", "sleep"];

function addItem(event) {
	event.preventDefault();
	var task = $('#input').val();
	if (task != "") {    
        var todos = $('<div />', {id: 'todo' + tasks.length , class: 'row col-md-8'});
		$('<input />', {type: 'checkbox', id: '', class:'col-sm-1 checkbox', 
			name: 'checkbox', value: task, click: done}).appendTo(todos);
        $('<label>', {for:'checkbox', class: 'col-sm-6'}).text(task).appendTo(todos);
        $('#todolist').append(todos);
        $('#input').val('');
        tasks.push(task);
	}
	else {
		alert("Enter task");
	}
}

function done() {
    if($(this).is(':checked')) {
     	$(this).parent().css('color', 'red');
    } 
    else {
        $(this).parent().css('color', '');
    }
}

$('#todo-form').submit(addItem);