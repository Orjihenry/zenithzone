var listings = [
    {
    id: 1,
    title: "Beautiful Beach House",
    description: "A stunning beach house with ocean views.",
    price: 500000,
    featured: true,
    bedrooms: 4,
    bathrooms: 3,
    status: 'available',
    propertyType: "house",
    contact: "123-456-7890",
    city: "Mount Pearl",
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
    featured: true,
    bedrooms: 2,
    bathrooms: 1,
    status: 'available',
    propertyType: "apartment",
    contact: "987-654-3210",
    city: "Paradise",
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
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    status: 'available',
    propertyType: "condo",
    contact: "555-555-5555",
    city: "Paradise",
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
    featured: false,
    bedrooms: 5,
    bathrooms: 4,
    status: 'available',
    propertyType: "villa",
    contact: "111-222-3333",
    city: "Mount Pearl",
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
            <div class="property" id="details">
                <div class="prop-details" data-id="${listing.id}">
                    <img src="${listing.images[0]}" alt="${listing.title}" class="btn-modal">
                    <div class="prop-info">
                        <h3>${listing.title}</h3>
                        <p>Price: $${listing.price}</p>
                        <p>City: ${listing.city}</p>
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
    const buttons = document.querySelectorAll(".btn-modal");

    // Open modal dialog
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let id = parseInt(e.target.closest(".prop-details").dataset.id);
            let listing = listings.find(listing => listing.id === id);
            if (listing) {
                modalDialog.style.display = "block";
                modalDialog.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2>${listing.title}</h2>
                        <img src="${listing.images[0]}" alt="${listing.title}">
                        <p>Address: ${listing.address}</p>
                        <p>City: ${listing.city}</p>
                        <p>Price: $${listing.price}</p>
                        <p>Bedrooms: ${listing.bedrooms}</p>
                        <p>Bathrooms: ${listing.bathrooms}</p>
                        <p>Contact: ${listing.contact}</p>
                        <p>Property Type: ${listing.propertyType}</p>
                        <p>Description: ${listing.description}</p>
                        <button class="def-btn" id="edit-listing">Edit</button>
                        <button class="def-btn" id="delete-listing">Delete</button>
                    </div>
                `;

                const closeButton = modalDialog.querySelector(".close");
                closeButton.addEventListener("click", () => {
                    modalDialog.style.display = "none";
                });
                window.onclick = function(event) {
                    if (event.target == modalDialog) {
                      modalDialog.style.display = "none";
                    }
                }

            }
            const editButton = modalDialog.querySelector("#edit-listing");
            editButton.addEventListener("click", (e) => {
                e.preventDefault();
                window.location.href = "edit.html?id=" + listing.id;
            });
            var deleteButton = modalDialog.querySelector("#delete-listing");
            deleteButton.addEventListener("click", (e) => {
                listings = listings.filter(listing => listing.id !== id);
                localStorage.setItem("listings", JSON.stringify(listings));
                window.location.href = "listings.html?deleted=true";
            });
        });
    });
}

// Preview images function
// This function allows users to preview images before uploading them
let imagesInput = document.querySelector("#images");
let output = document.querySelector("#image-preview");
let urlParams = new URLSearchParams(window.location.search);
let listingId = parseInt(urlParams.get("id"));

let listing = listings.find(l => l.id === listingId);
let imageUrls = listing?.images ? [...listing.images] : [];

// Handle new image selection
if (imagesInput) {
    imagesInput.addEventListener("change", (e) => {
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            return alert("The File APIs are not fully supported in this browser.");
        }

        let files = e.target.files;
        if (!files.length) return;

        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            if (!file.type.match("image")) continue;

            let reader = new FileReader();
            reader.onload = (e) => {
                const imageUrl = e.target.result;

                const div = document.createElement("div");
                div.classList.add("thumbnail-wrapper");
                div.innerHTML = `
                    <span class="remove">&times;</span>
                    <img class="thumbnail" src="${imageUrl}" title="${file.name}"/>
                `;

                div.querySelector(".remove").addEventListener("click", () => {
                    output.removeChild(div);
                    imageUrls = imageUrls.filter(url => url !== imageUrl);
                });

                output.appendChild(div);
                imageUrls.push(imageUrl);
            };

            reader.readAsDataURL(file);
        }
    });
}

// Handle form submission

function validateForm() {
    const isValid = checkValidation();
    const updateForm = window.location.href.includes("edit");
    const createForm = window.location.href.includes("create");
    
    if (isValid && updateForm) {
        update();
    } else if (isValid && createForm) {
        createListings();
    } else {
        alert("Please fill in all fields and upload at least one image.");
    }

    return false; // prevent default form submission
}

function checkValidation() {
    const title = document.querySelector("#title").value.trim();
    const propertyType = document.querySelector("#property-type").value.trim();
    const description = document.querySelector("#description").value.trim();
    const price = document.querySelector("#price").value.trim();
    const bedrooms = document.querySelector("#bedrooms").value.trim();
    const bathrooms = document.querySelector("#bathrooms").value.trim();
    const status = document.querySelector("#status").value.trim();
    const contact = document.querySelector("#contact").value.trim();
    const city = document.querySelector("#city").value.trim();
    const address = document.querySelector("#address").value.trim();

    const requiredFields = [title, propertyType, description, price, bedrooms, bathrooms, status, contact, city, address];

    const allFilled = requiredFields.every(field => field !== "");

    const hasImages = Array.isArray(imageUrls) && imageUrls.length > 0;

    return allFilled && hasImages;
}

// Create listings function
function createListings() {
    let id = uid();
    let title = document.querySelector("#title").value;
    let propertyType = document.querySelector("#property-type").value;
    let description = document.querySelector("#description").value;
    let price = document.querySelector("#price").value;
    let bedrooms = document.querySelector("#bedrooms").value;
    let bathrooms = document.querySelector("#bathrooms").value;
    let status = document.querySelector("#status").value;
    let featured = false;
    let city = document.querySelector("#city").value;
    let address = document.querySelector("#address").value;
    let images = imageUrls
        images = images.map(image => image.trim());

    var newListings = {
        id: id,
        title: title,
        propertyType: propertyType,
        description: description,
        price: price,
        city: city,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        status: status,
        featured: featured,
        address: address,
        images: images
    };

    listings.push(newListings);
    localStorage.setItem("listings", JSON.stringify(listings));

    window.location.href = "listings.html?created=true";
}

// Edit listings function
function update() {
    let urlParams = new URLSearchParams(window.location.search);
    let listingId = parseInt(urlParams.get("id"));

    let listings = JSON.parse(localStorage.getItem("listings")) || [];
    let index = listings.findIndex(l => l.id === listingId);

    let title = document.querySelector("#title").value;
    let propertyType = document.querySelector("#property-type").value;
    let description = document.querySelector("#description").value;
    let price = document.querySelector("#price").value;
    let bedrooms = document.querySelector("#bedrooms").value;
    let bathrooms = document.querySelector("#bathrooms").value;
    let status = document.querySelector("#status").value;
    let featured = listings[index].featured;
    let city = document.querySelector("#city").value;
    let address = document.querySelector("#address").value;
    let images = imageUrls || [];
        images = images.map(image => image.trim());

    var updatedListing = {
        title: title,
        propertyType: propertyType,
        description: description,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        status: status,
        featured: featured,
        city: city,
        address: address,
        images: images
    };

    listings[index] = { ...listings[index], ...updatedListing };
    localStorage.setItem("listings", JSON.stringify(listings));
    window.location.href = "listings.html?updated=true";

    return false;
}