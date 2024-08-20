import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="click-btn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');
    
    // Use Lodash to prevent spamming
    $('#click-btn').on('click', _.debounce(updateCounter, 300));
});

