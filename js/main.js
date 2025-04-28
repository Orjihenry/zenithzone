var listings = [
    {
    id: 1,
    title: "Beautiful Beach House",
    description: "A stunning beach house with ocean views.",
    price: 500000,
    location: "California",
    address: "456 Elm St, Cityville, CA 12345",
    images: [
        "assets/property.jpg",
        "beach-house2.jpg",
        "beach-house3.jpg"
    ]
},
{
    id: 2,
    title: "Modern Apartment",
    description: "A sleek modern apartment in the city.",
    price: 300000,
    location: "New York",
    address: "123 Main St, Cityville, NY 10001",
    images: [
        "assets/property.jpg",
        "apartment2.jpg",
        "apartment3.jpg"
    ]
},
{
    id: 3,
    title: "Cozy Cottage",
    description: "A charming cottage in the countryside.",
    price: 200000,
    location: "Vermont",
    address: "789 Maple St, Cityville, VT 05601",
    images: [
        "assets/property.jpg",
        "cottage2.jpg",
        "cottage3.jpg"
    ]
},
{
    id: 4,
    title: "Luxury Villa",
    description: "A luxurious villa with a private pool.",
    price: 1000000,
    location: "Florida",
    address: "321 Oak St, Cityville, FL 33101",
    images: [
        "assets/property.jpg",
        "villa2.jpg",
        "villa3.jpg"
    ]
}
];

var storedListings = JSON.parse(localStorage.getItem("listings"));
if (storedListings && storedListings.length > 0) {
    listings = storedListings;
} else {
    localStorage.setItem("listings", JSON.stringify(listings));
}

let highestId = listings.reduce((max, listing) => Math.max(max, listing.id), 0);

const uid = (() => {let id = highestId + 1; return () => id++;})();

// Gets the listings container element
var listingsContainer = document.getElementById("listings");

// Display listings function
function displayListings() {

    if (listings.length > 0) {
        listings.forEach((listing) => {
            // Build HTML structure
            let html = `
            <div class="property">
                <div class="prop-details">
                    <img src="${listing.images[0]}" alt="${listing.title}">
                    <div class="prop-info">
                        <h3>${listing.title}</h3>
                        <p>Price: $${listing.price}</p>
                        <p>Location: ${listing.location}</p>
                        <p>Address: ${listing.address}</p>
                        <button class="def-btn btn-modal">View More</button>
                    </div>
                </div>
            </div>
            `;
        
            listingsContainer.innerHTML += html;
        });
    } else {
        const noListings = document.querySelector(".no-listings");
        noListings.style.display = "block";
    }
    
    // Add event listeners to the buttons
    const modalDialog = document.querySelector(".modal");
    const button = document.querySelector(".btn-modal");
    var span = document.getElementsByClassName("close")[0];
    
    const buttons = document.querySelectorAll(".btn-modal");
    
    // Open modal function
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            modalDialog.style.display = "block";
        });
    });
    
    // Close modal function
    span.onclick = function() {
        modalDialog.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modalDialog) {
          modalDialog.style.display = "none";
        }
    }
}

// Create listings function
function createListings() {
    let id = uid();
    let title = document.querySelector("#title").value;
    let listingType = document.querySelector("#property-type").value;
    let description = document.querySelector("#description").value;
    let price = document.querySelector("#price").value;
    let location = document.querySelector("#location").value;
    let address = document.querySelector("#address").value;
    let images = document.querySelector("#images").value.split(",");
        images = images.map(image => image.trim());

    var newListings = {
        id: id,
        title: title,
        listingType: listingType,
        description: description,
        price: price,
        location: location,
        address: address,
        images: images
    };

    listings.push(newListings);

    const newListing = document.createElement("div");
    newListing.classList.add("property");
    newListing.dataset.id = id;
    newListing.innerHTML = `
        <div class="prop-details">
            <img src="${newListings.images[0]}" alt="${newListings.title}">
            <div class="prop-info">
                <h3>${newListings.title}</h3>
                <p>Price: $${newListings.price}</p>
                <p>Location: ${newListings.location}</p>
                <p>Address: ${newListings.address}</p>
                <button class="def-btn btn-modal">View More</button>
            </div>
        </div>
    `;
    
    localStorage.setItem("listings", JSON.stringify(listings));

    window.location.href = "listings.html";
}

// Edit listings function
function editListings(id) {
    let listing = listings.find(listing => listing.id == id);
    if (listing) {
        document.querySelector("#title").value = listing.title;
        document.querySelector("#property-type").value = listing.listingType;
        document.querySelector("#description").value = listing.description;
        document.querySelector("#price").value = listing.price;
        document.querySelector("#location").value = listing.location;
        document.querySelector("#address").value = listing.address;
        document.querySelector("#images").value = listing.images.join(", ");
    }
}