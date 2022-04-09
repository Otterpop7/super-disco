// Variables//
var header = $('.jumbotron')
var date = $('#currentDay')
var container = $('.container')
var timeSlot = $('.time-block')

$(document).ready(function() {
    // Pull times from moment.js
    var current = moment().format('MMMM Do YYYY, h:mm:ss A')
    var hour24 = moment().format('H');
    // sets date text in header
    var dateHeader = (date)
    dateHeader.text(current)

    // Pulls data from local stoarage
    var storedData = JSON.parse(localStorage.getItem('storedData'))
    console.log(storedData)
    if (storedData === null) {
        console.log("no saved data")
        storedData = {}
    } else {
        timeSlot
    }
    for (var hour = 9; hour <= 17; hour++) {
        // index for array use offset from hour
        var index = hour - 9;
    }

    for (var i = 0; i < timeSlot.length; i++) {
        var row = timeSlot[i];
        var rowTime = $(row).attr("data-hour");
        rowTime = parseInt(rowTime);
        hour24 = parseInt(hour24);
        let textData = storedData[rowTime];
        for (v = 0; v < row.childNodes.length; v++) {
            row.childNodes[3].innerText
            row.childNodes[3].innerText = textData
        }
        if (rowTime < hour24) {
            console.log("should be past");
            $(row).addClass("past");
        } else if (rowTime === hour24) {
            console.log("should be present");
            $(row).addClass("present");
        } else if (rowTime > hour24) {
            console.log("should be future");
            $(row).addClass("future");
        } else {
            console.log("for some reason, none of the conditions were filled.");
        }
    };
    // saves to local storage
    // onclick function to listen for user clicks on plan area
    $(document).on('click', 'i', function(event) {
        event.preventDefault();
        var saveIndex = $(this.parentElement.parentElement).attr('data-hour');
        var inputValue = (this.parentElement.parentElement.children[1].value)
        var sValue = inputValue;
        storedData[saveIndex] = sValue;
        localStorage.setItem('storedData', JSON.stringify(storedData));
    });
});