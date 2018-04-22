console.log('client.js is sourced');

$(document).ready(onReady);

function onReady() {
    console.log('jquery is sourced');
    $('.operationButton').on('click', clickedHandler);
    getArray();
    $('#clearButton').on('click', clearButton);
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

//This ajax method gets history array
function getArray(){
    $.ajax({
        method:'GET',
        url: '/get-array'
    })
    .then(function(response){
        response.forEach(function(array){
            $('#operationHistory').prepend('<p>' + array + '</p>');
        })   
    })
}


// Clear inputs function
function clearButton(){
    $('#xInput').val('');
    $('#yInput').val('');
}
