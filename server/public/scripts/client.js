console.log('client.js is sourced');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is sourced');
    $('.operationButton').on('click', clickedHandler);
}

function clickedHandler(){
    postOperation($(this).text());
}

function postOperation (type) {
    const newAdd = {
        x: $('#xInput').val(),
        y: $('#yInput').val(),
        type: type
    }
    $.ajax({
        method: 'POST',
        url: '/post',
        data: newAdd
    })
        .then(function (response) {
            getOperation();
        })
}

function getOperation() {
    $.ajax({
        method: 'GET',
        url: '/get',
    })
        .then(function (response) {
            console.log(response);
            $('#operationHistory').empty();
            response.forEach(function(calculation){
                $('#operationHistory').prepend('<p>' + calculation + '</p>');
            });
        });
}

// function subtraction() {
//     const newSubtraction = {
//         x: $('#xInput').val(),
//         y: $('#yInput').val(),
//         type: 'Subtraction'
//     }
//     $.ajax({
//         method: 'POST',
//         url: '/subtraction',
//         data: newSubtraction
//     })
//         .then(function (response) {
//             getSubtractions();
//         })
// }

// function getSubtractions() {
//     $.ajax({
//         method: 'GET',
//         url: '/get-subtraction'
//     })
//         .then(function (response) {
//             console.log(response);
//             let xValue = Number($('#xInput').val());
//             let yValue = Number($('#yInput').val());
//             let difference = xValue - yValue;
//             $('#operationsHistory').empty();
//             $('#operationHistory').prepend('<p>' + xValue + ' - ' + yValue + ' = ' + difference + '</p>');
//         })
// }

