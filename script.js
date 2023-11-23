// Function to handle the smoothie order
function orderSmoothie() {
    // Retrieve input values from the form
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var fruit = document.getElementById('fruit').value;
    var milkType = document.getElementById('milkType').value;
    var sweetener = document.getElementById('sweetener').value;
    var iceLevel = document.getElementById('ice').value;
    var sugarLevel = document.getElementById('sugar').value;

    // Create a Smoothie object
    var smoothie = new Smoothie(name, email, phone, fruit, milkType, sweetener, iceLevel, sugarLevel);

    // Display the smoothie details and price
    displaySmoothie(smoothie);
}

// Function to display smoothie details and price
function displaySmoothie(smoothie) {
    // Retrieve the selected size from the form
    var size = document.getElementById('size').value;
    // Calculate the price based on the selected size
    var price = calculatePrice(size);

    // Get the output div to display smoothie details
    var outputDiv = document.getElementById('output');
    // Output div with smoothie details and price
    outputDiv.innerHTML = `<h2>Your Smoothie Ordered:</h2>
                          <p>Name: ${smoothie.name}</p>
                          <p>Email: ${smoothie.email}</p>
                          <p>Phone: ${smoothie.phone}</p>
                          <p>Fruit: ${smoothie.fruit}</p>
                          <p>Milk Type: ${smoothie.milkType}</p>
                          <p>Sweetener: ${smoothie.sweetener}</p>
                          <p>Size: ${size}</p>
                          <p>Ice Level: ${smoothie.iceLevel}%</p>
                          <p>Sugar Level: ${smoothie.sugarLevel}%</p>
                          <p>Total Price: $<span style="color: red; font-size: 35px; font-weight: bold;">${price.toFixed(2)}</span></p>`;
}



// Function to calculate the price based on size
function calculatePrice(size) {
    switch (size) {
        case 'large':
            return 7.50;
        case 'medium':
            return 6.25;
        case 'small':
            return 5.15;
        default:
            return 0;
    }
}

// Class representing a Smoothie object
class Smoothie {
    constructor(name, email, phone, fruit, milkType, sweetener, iceLevel, sugarLevel) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.fruit = fruit;
        this.milkType = milkType;
        this.sweetener = sweetener;
        this.iceLevel = iceLevel;
        this.sugarLevel = sugarLevel;
    }
}

// Slider values dynamically for ice level
document.getElementById('ice').addEventListener('input', function () {
    var iceValue = document.getElementById('ice').value;
    document.getElementById('iceValue').innerText = iceValue;
});

// Slider values dynamically for sugar level
document.getElementById('sugar').addEventListener('input', function () {
    var sugarValue = document.getElementById('sugar').value;
    document.getElementById('sugarValue').innerText = sugarValue;
});
