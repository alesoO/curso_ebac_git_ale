$(document).ready(function () {
    $('#lista_corpo').on("click", "li", function () {
        $(this).addClass('text-decoration-line-through');
    })
})

$('#formulario_lista').on('submit', function (e) {
    e.preventDefault();
    nova_lista();
})

function nova_lista() {

    let campo_tarefa = $('#campo_tarefa').val();
    let item = $('<li class="list-group-item"></li>').text(campo_tarefa);
    $('#lista_corpo').append(item);
}

