var overallPrice = 0;
var numberOfSeats = 0;

const container = document.querySelector(".container");
var seats = container.querySelectorAll(".seat");

makeOccupied();

seats.forEach((element) => {
    element.addEventListener("click", () => {
        selectSeat(element);
        var price = document.getElementById("movie").value;
        overallPrice = countOverallPrice(numberOfSeats, price);
        displayText(); // refresh info about seats and cost of tickets
    });
});

movieSelect.addEventListener("change", event => {
    var price = event.value;
    overallPrice = countOverallPrice(numberOfSeats, price);
    displayText(); // refresh ticket price info
});


function selectSeat(element) {
    if (!element.classList.contains("occupied")) { // if seat is not occupied

        if (element.classList.contains("selected")) {
            element.className = "seat";
            numberOfSeats--;
        }

        else {
            element.className = "seat selected";
            numberOfSeats++; // if seat is selected, then number of seats to buy ticket is increased
        }
    }
}


function displayText() {
    document.getElementById("count").innerHTML = numberOfSeats;
    document.getElementById("sum").innerHTML = overallPrice;
}

function countOverallPrice(places, cost) {

    if (places != 0) {
        return places * cost;
    }
    return 0;
}

function makeOccupied() {
    var num = 10; // say 10 places to be occupied already
    var indexArray = []

    for (var i = 0; i < 10; i++) {
        var index = Math.floor(Math.random() * seats.length);
        seats[index].className = "seat occupied";
    }

}