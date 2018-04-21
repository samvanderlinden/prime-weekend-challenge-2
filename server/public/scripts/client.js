console.log('client.js is sourced');

$(document).ready(onReady);

function onReady(){
    console.log('jquery is sourced');
    $('#addition').on('click', addition);
    $('#subtraction').on('click', subtraction);
}

function addition() {
    const newAdd = {
        x: ($('#xInput').val()),
        y: ($('#yInput').val()),
        type: 'Add'
    }
    $.ajax({
        method: 'post',
        url: '/addition',
        data: newAdd
    })
    .then(function(response) {
        getAdditions();
    })
}

function getAdditions() {
    $.ajax({
        method: 'GET',
        url: '/get-addition',
    })
    .then(function(response){
        console.log(response);
        let xValue = Number($('#xInput').val());
        let yValue = Number($('#yInput').val());
        let sum = xValue + yValue;
        $('#operationsHistory').empty();
        $('#operationHistory').prepend('<p>' + xValue + ' + ' + yValue + ' = ' + sum + '</p>');
    })
}

function subtraction() {
    const newSubtraction = {
        x: ($('#xInput').val()),
        y: ($('#yInput').val()),
        type: 'Subtraction'
    }
    $.ajax({
        method: 'post',
        url: '/subtraction',
        data: newSubtraction
    })
    .then(function(response){
        getSubtractions();
    })
}

function getSubtractions() {
    $.ajax({
        method: 'GET', 
        url: '/get-subtraction'
    })
    .then(function(response){
        console.log(response);
        let xValue = Number($('#xInput').val());
        let yValue = Number($('#yInput').val());
        let difference = xValue - yValue;
        $('#operationsHistory').empty();
        $('#operationHistory').prepend('<p>' + xValue + ' - ' + yValue + ' = ' + difference + '</p>');
    })
}
