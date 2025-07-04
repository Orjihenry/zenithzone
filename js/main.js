var listings = [
    {
    id: 1,
    title: "Beautiful Beach House",
    description: "A stunning beach house with ocean views.",
    price: 500000,
    featured: false,
    bedrooms: 4,
    bathrooms: 3,
    garage: 2,
    lotArea: 1720,
    buildYear: 2011,
    status: 'available',
    propertyType: "house",
    contact: "123-456-7890",
    city: "Mount Pearl",
    aptNumber: '',
    streetNumber: '456',
    streetName: 'Elm St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/beach-house.jpg",
        "assets/dump/beach-house-interior-2.jpg",
        "assets/dump/beach-house-4.jpg"
    ]
},
{
    id: 2,
    title: "Modern Apartment",
    description: "A sleek modern apartment in the city.",
    price: 300000,
    featured: false,
    bedrooms: 2,
    bathrooms: 1,
    garage: 2,
    lotArea: 1878,
    buildYear: 2016,
    status: 'available',
    propertyType: "apartment",
    contact: "987-654-3210",
    city: "Paradise",
    aptNumber: '',
    streetNumber: '123',
    streetName: 'Main St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/house-3.jpg",
        "assets/dump/house-2.jpg",
        "assets/dump/house-1.jpg"
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
    garage: 2,
    lotArea: 1942,
    buildYear: 2008,
    status: 'available',
    propertyType: "condo",
    contact: "555-555-5555",
    city: "Paradise",
    aptNumber: '',
    streetNumber: '789',
    streetName: 'Maple St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/cottage-2.jpg",
        "assets/dump/cottage-1.jpg",
        "assets/dump/cottage-3.jpg"
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
    garage: 2,
    lotArea: 1720,
    buildYear: 2013,
    status: 'available',
    propertyType: "house",
    contact: "111-222-3333",
    city: "St. John's",
    aptNumber: '',
    streetNumber: '321',
    streetName: 'Oak St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/villa-2.jpg",
        "assets/dump/villa-interior.jpg",
        "assets/dump/villa-5.jpg"
    ]
},
{
    id: 5,
    title: "Rustic Cabin",
    description: "A rustic cabin nestled in the woods.",
    price: 150000,
    featured: true,
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    lotArea: 1720,
    buildYear: 2010,
    status: 'available',
    propertyType: "house",
    contact: "444-555-6666",
    city: "Paradise",
    aptNumber: '',
    streetNumber: '987',
    streetName: 'Pine St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/cabin.jpg",
        "assets/dump/cabin-3.jpg",
        "assets/dump/cabin-interior.jpg"
    ]
},
{
    id: 6,
    title: "Luxury Villa",
    description: "A luxurious villa with a private pool.",
    price: 1000000,
    featured: false,
    bedrooms: 5,
    bathrooms: 4,
    garage: 3,
    lotArea: 2520,
    buildYear: 2011,
    status: 'available',
    propertyType: "house",
    contact: "111-222-3333",
    city: "Mount Pearl",
    aptNumber: '',
    streetNumber: '321',
    streetName: 'Oak St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/villa.jpg",
        "assets/dump/villa-2.jpg",
        "assets/dump/villa-6.jpg"
    ]
},
{
    id: 7,
    title: "Minimalist Apartment",
    description: "A minimalist apartment in the city.",
    price: 150000,
    featured: false,
    bedrooms: 2,
    bathrooms: 1,
    garage: 0,
    lotArea: 1483,
    buildYear: 2015,
    status: 'available',
    propertyType: "apartment",
    contact: "444-555-6666",
    city: "Paradise",
    aptNumber: '',
    streetNumber: '987',
    streetName: 'Pine St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/apartment-2.jpg",
        "assets/dump/apartment-1.jpg",
        "assets/dump/apartment-3.jpg"
    ]
},
{
    id: 8,
    title: "Luxury Condo",
    description: "A charming condo in the countryside.",
    price: 200000,
    featured: true,
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    lotArea: 1379,
    buildYear: 2019,
    status: 'available',
    propertyType: "condo",
    contact: "555-555-5555",
    city: "St. John's",
    aptNumber: '',
    streetNumber: '789',
    streetName: 'Maple St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/condo-1.jpg",
        "assets/dump/condo-3.jpg",
        "assets/dump/condo-4.jpg"
    ]
},
{
    id: 9,
    title: "Beachfront Villa",
    description: "A luxurious villa with a private beachfront.",
    price: 1200000,
    featured: false,
    bedrooms: 5,
    bathrooms: 4,
    garage: 2,
    lotArea: 2720,
    buildYear: 2010,
    status: 'available',
    propertyType: "cottage",
    contact: "111-222-3333",
    city: "St. John's",
    aptNumber: '',
    streetNumber: '321',
    streetName: 'Oak St.',
    province: 'Newfoundland & Labrador',
    country: 'Canada',
    images: [
        "assets/dump/beach-villa-1.jpg",
        "assets/dump/beach-villa-2.jpg",
        "assets/dump/beach-villa-3.jpg"
    ]
}
];

let viewedListings = JSON.parse(localStorage.getItem("viewedListings")) || [];

var storedListings = JSON.parse(localStorage.getItem("listings"));
if (storedListings && storedListings.length > 0) {
    listings = storedListings;
} else {
    localStorage.setItem("listings", JSON.stringify(listings));
}

let highestId = listings.reduce((max, listing) => Math.max(max, listing.id), 0);

const uid = (() => {let id = highestId + 1; return () => id++;})();


const priceFormat = new Intl.NumberFormat('en-US');
let price = priceFormat.format(listings.price);

// Gets the listings container element
var listingsContainer = document.getElementById("listings");

// Display listings function
function displayListings() {

    if (listings.length > 0) {
        let reversed = [...listings].reverse();
        reversed.forEach((listing) => {
            const priceFormat = new Intl.NumberFormat('en-US');
            let price = priceFormat.format(listing.price);
            let lotArea = priceFormat.format(listing.lotArea);
            // Build HTML structure
            let html = `
                <div class="property prop-details cols btn-modal ${listing.featured ? "featListing" : "non-featured"}" id="details" data-id="${listing.id}">
                    <div class="img" style="background-image: url('${listing.images[0]}');"></div>
                    <div class="text">
                        <p class="price">
                            <span class="orig-price">$${price}</span>
                        </p>

                        <ul class="property_list">
                            <li><span class="flaticon-bed"></span><i class="fi fi-tr-bed-alt"></i>${listing.bedrooms}</li>
                            <li><span class="flaticon-bathtub"></span><i class="fi fi-tr-bath"></i>${listing.bathrooms}</li>
                            <li><span class="flaticon-floor-plan"></span><i class="fi fi-tr-ruler-triangle"></i>${lotArea} sqft</li>
                        </ul>

                        <h3>${listing.title}</h3>
                        <span class="location">${listing.city}</span>
                        <a class="btn-modal def-btn d-flex align-items-center justify-content-center btn-custom">
                            <span class="ion-ios-link"><i class="fi fi-tr-link-alt"></i></span>
                        </a>
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
    const buttons = document.querySelectorAll(".btn-modal");

    // Open modal dialog
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let id = parseInt(e.target.closest(".prop-details").dataset.id);
            let listing = listings.find(listing => listing.id === id);
            let imageUrls = listing.images;
            if (listing) {
                modalDialog.style.display = "block";
                const priceFormat = new Intl.NumberFormat('en-US');
                let price = priceFormat.format(listing.price);
                let lotArea = priceFormat.format(listing.lotArea);
                modalDialog.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2>${listing.title}</h2>
                        <div class="image-container">
                            <ul class="modal-images">
                                ${imageUrls.map(imageUrl => `<li><img src="${imageUrl}" onerror="this.onerror=null; this.src='assets/rental.jpg'" alt="${listing.title}" class="inactive"></li>`).join("")}
                            </ul>
                            <button class="btn-prev prev">‹</button>
                            <button class="btn-next next">›</button>
                        </div>
                        <div class="info-cat">
                            <h4 class="info-feat info-active">Features</h4>
                            <h4 class="info-desc">Description</h4>
                            <h4 class="info-map">Map</h4>
                        </div>

                        <div class="info-left-feat">
                            <ul>
                                <li><i class="fi fi-sr-check"></i><span>Address:</span> ${listing.aptNumber || ''} ${listing.streetNumber} ${listing.streetName}</li>
                                <li><i class="fi fi-sr-check"></i><span>City:</span> ${listing.city}</li>
                                <li><i class="fi fi-sr-check"></i><span>Build Year:</span> ${listing.buildYear} </li>
                                <li><i class="fi fi-sr-check"></i><span>Lot Area:</span> ${lotArea} sqft</li>
                            </ul>
                            <ul>
                                <li><i class="fi fi-sr-check"></i><span>Listed in:</span> June 2025 </li>
                                <li><i class="fi fi-sr-check"></i><span>Listed For:</span> $${price}</li>
                                <li><i class="fi fi-sr-check"></i><span>Garage:</span> ${listing.garage} </li>
                                <li><i class="fi fi-sr-check"></i><span>Bedrooms:</span> ${listing.bedrooms}</li>
                            </ul>
                            <ul>
                                <li><i class="fi fi-sr-check"></i><span>Bathrooms:</span> ${listing.bathrooms}</li>
                                <li><i class="fi fi-sr-check"></i><span>Contact:</span> ${listing.contact}</li>
                            </ul>
                        </div>

                        <div class="info-intro-desc">
                            <p>
                               ${listing.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita placeat voluptatum qui, itaque ut reprehenderit accusamus sint quae laudantium modi. Perspiciatis id corrupti aliquid earum magnam corporis. Minus veritatis provident ratione.
                            </p>
                        </div>

                        <div class="info-intro-map" style="width: 100%;">
                            <div id="map" style="height: 250px"></div>
                        </div>
                        <div class="action-buttons">
                            <button class="def-btn" id="edit-listing">Edit</button>
                            <button class="def-btn cancel-btn" id="delete-listing">Delete</button>
                        </div>
                    </div>
                `;

                let mapBtn = document.querySelector('.info-map');
                let featBtn = document.querySelector('.info-feat');
                let descBtn = document.querySelector('.info-desc');
                let mapElement = document.querySelector('.info-intro-map');
                let featElement = document.querySelector('.info-left-feat');
                let descElement = document.querySelector('.info-intro-desc');

                var infoCatBtns = [
                    { button: mapBtn, element: mapElement, display: 'block' },
                    { button: featBtn, element: featElement, display: 'flex' },
                    { button: descBtn, element: descElement, display: 'block' }
                ];

                infoCatBtns.forEach(item => {
                    item.button.addEventListener('click', () => {
                        infoCatBtns.forEach(s => {
                            s.element.style.display = 'none';
                            s.button.classList.remove('info-active');
                        });

                        item.element.style.display = item.display;
                        item.button.classList.add('info-active');
                    });
                });

                mapBtn.addEventListener('click', () => {
                    console.log('clicked');
                    const map = L.map('map').setView([47.5615, -52.7126], 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; OpenStreetMap contributors'
                    }).addTo(map);

                    L.marker([47.5615, -52.7126]).addTo(map)
                        .bindPopup(listing.title)
                        .openPopup();
                })

                const modalImages = modalDialog.querySelectorAll(".modal-images li");
                const prevButton = modalDialog.querySelector(".btn-prev");
                const nextButton = modalDialog.querySelector(".btn-next");

                let currentIndex = 0;
                updateCarousel();

                prevButton.addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
                    updateCarousel();
                });

                nextButton.addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % modalImages.length;
                    updateCarousel();
                });

                function updateCarousel() {
                    modalImages.forEach((image, index) => {
                        image.style.display = index === currentIndex ? "flex" : "none";
                    });
                }

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
                Swal.fire({
                    title: "Are you sure you want to delete this listing?",
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    icon: "question",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        listings = listings.filter(listing => listing.id !== id);
                        localStorage.setItem("listings", JSON.stringify(listings));
                        window.location.href = "listings.html?deleted=true";
                        removeFromRecentlyViewed(id);
                    } else {
                        Swal.fire({
                            html: `<p>Action canceled!</p>
                                    <p>No changes were made.</p>`,
                            icon: "info"
                        });
                    }
                });

                
            });
        });
    });
}

function trackViewedListings() {
    let buttons = document.querySelectorAll(".btn-modal");
    
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let id = parseInt(e.target.closest(".prop-details")?.dataset?.id);
            let recentlyViewed = JSON.parse(localStorage.getItem("viewedListings")) || [];
            let listing = listings.find(listing => listing.id === id);
            
            recentlyViewed = recentlyViewed.filter(item => item.id !== listing.id);
            recentlyViewed.unshift(listing);

            if (recentlyViewed.length > 3) {
                recentlyViewed = recentlyViewed.slice(0, 3);
            }

            localStorage.setItem("viewedListings", JSON.stringify(recentlyViewed));
            renderRecentlyViewed(recentlyViewed);
        });
    });
}

function removeFromRecentlyViewed(id) {
    let viewedListings = JSON.parse(localStorage.getItem("viewedListings")) || [];
    viewedListings = viewedListings.filter(listing => listing.id !== id);
    localStorage.setItem("viewedListings", JSON.stringify(viewedListings));
}

function renderRecentlyViewed() {
    const container = document.querySelector(".recently-viewed");
    var noListings = document.querySelector(".no-recent-listings");
    
    container.innerHTML = "";
    
    var recentlyViewed = JSON.parse(localStorage.getItem("viewedListings")) || [];
    if (!container || viewedListings.length === 0) return;
    recentlyViewed.forEach(listing => {
        const priceFormat = new Intl.NumberFormat('en-US');
        let price = priceFormat.format(listing.price);
        let lotArea = priceFormat.format(listing.lotArea);
        let html = `
        <div class="property prop-details cols btn-modal ${listing.featured ? "featListing" : "non-featured"}" id="details" data-id="${listing.id}">
                    <div class="img" style="background-image: url('${listing.images[0]}');"></div>
                    <div class="text">
                        <p class="price">
                            <span class="orig-price">$${price}</span>
                        </p>

                        <ul class="property_list">
        					<li><span class="flaticon-bed"></span><i class="fi fi-tr-bed-alt"></i>${listing.bedrooms}</li>
        					<li><span class="flaticon-bathtub"></span><i class="fi fi-tr-bath"></i>${listing.bathrooms}</li>
        					<li><span class="flaticon-floor-plan"></span><i class="fi fi-tr-ruler-triangle"></i>${lotArea} sqft</li>
        				</ul>

                        <h3>${listing.title}</h3>
                        <span class="location">${listing.city}</span>
                        <a class="btn-modal def-btn d-flex align-items-center justify-content-center btn-custom">
        					<span class="ion-ios-link"><i class="fi fi-tr-link-alt"></i></span>
        				</a>
                    </div>
            </div>
        `;
        container.innerHTML += html;
    });

    noListings.style.display = viewedListings.length === 0 ? "block" : "none";

    // Add event listeners to the buttons
    const modalDialog = document.querySelector(".modal");
    const buttons = document.querySelectorAll(".btn-modal");

    // Open modal dialog
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            let id = parseInt(e.target.closest(".prop-details").dataset.id);
            let listing = listings.find(listing => listing.id === id);
            let imageUrls = listing.images;
            if (listing) {
                modalDialog.style.display = "block";
                const priceFormat = new Intl.NumberFormat('en-US');
                let price = priceFormat.format(listing.price);
                let lotArea = priceFormat.format(listing.lotArea);
                modalDialog.innerHTML = `
                    <div class="modal-content">
                        <span class="close">&times;</span>
                        <h2>${listing.title}</h2>
                        <div class="image-container">
                            <ul class="modal-images">
                                ${imageUrls.map(imageUrl => `<li><img src="${imageUrl}" onerror="this.onerror=null; this.src='assets/rental.jpg'" alt="${listing.title}" class="inactive"></li>`).join("")}
                            </ul>
                            <button class="btn-prev prev">‹</button>
                            <button class="btn-next next">›</button>
                        </div>
                        <div class="info-cat">
                            <h4 class="info-feat info-active">Features</h4>
                            <h4 class="info-desc">Description</h4>
                            <h4 class="info-map">Map</h4>
                        </div>

                        <div class="info-left-feat">
                            <ul>
                                <li><i class="fi fi-sr-check"></i><span>Address:</span> ${listing.aptNumber || ''} ${listing.streetNumber} ${listing.streetName}</li>
                                <li><i class="fi fi-sr-check"></i><span>City:</span> ${listing.city}</li>
                                <li><i class="fi fi-sr-check"></i><span>Build Year:</span> ${listing.buildYear} </li>
                                <li><i class="fi fi-sr-check"></i><span>Lot Area:</span> ${lotArea} sqft</li>
                            </ul>
                            <ul>
                                <li><i class="fi fi-sr-check"></i><span>Listed in:</span> June 2025 </li>
                                <li><i class="fi fi-sr-check"></i><span>Listed For:</span> $${price}</li>
                                <li><i class="fi fi-sr-check"></i><span>Garage:</span> ${listing.garage} </li>
                                <li><i class="fi fi-sr-check"></i><span>Bedrooms:</span> ${listing.bedrooms}</li>
                            </ul>
                            <ul>
                                <li><i class="fi fi-sr-check"></i><span>Bathrooms:</span> ${listing.bathrooms}</li>
                                <li><i class="fi fi-sr-check"></i><span>Contact:</span> ${listing.contact}</li>
                            </ul>
                        </div>

                        <div class="info-intro-desc">
                            <p>
                               ${listing.description} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita placeat voluptatum qui, itaque ut reprehenderit accusamus sint quae laudantium modi. Perspiciatis id corrupti aliquid earum magnam corporis. Minus veritatis provident ratione.
                            </p>
                        </div>

                        <div class="info-intro-map" style="width: 100%;">
                            <div id="map" style="height: 250px"></div>
                        </div>
                        <div class="action-buttons">
                            <button class="def-btn" id="edit-listing">Edit</button>
                            <button class="def-btn cancel-btn" id="delete-listing">Delete</button>
                        </div>
                    </div>
                `;

                let mapBtn = document.querySelector('.info-map');
                let featBtn = document.querySelector('.info-feat');
                let descBtn = document.querySelector('.info-desc');
                let mapElement = document.querySelector('.info-intro-map');
                let featElement = document.querySelector('.info-left-feat');
                let descElement = document.querySelector('.info-intro-desc');

                var infoCatBtns = [
                    { button: mapBtn, element: mapElement, display: 'block' },
                    { button: featBtn, element: featElement, display: 'flex' },
                    { button: descBtn, element: descElement, display: 'block' }
                ];

                infoCatBtns.forEach(item => {
                    item.button.addEventListener('click', () => {
                        infoCatBtns.forEach(s => {
                            s.element.style.display = 'none';
                            s.button.classList.remove('info-active');
                        });

                        item.element.style.display = item.display;
                        item.button.classList.add('info-active');
                    });
                });

                mapBtn.addEventListener('click', () => {

                    // let getCords = `https://nominatim.openstreetmap.org/search?q=${listing.streetNumber}+${listing.streetName},+${listing.city},+${listing.province},+Canada&format=json&addressdetails=1&limit=1`;


                    let fullAddress = `${listing.streetNumber} ${listing.streetName}, ${listing.city}, ${listing.province}, Canada`;
                    let getCords = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(fullAddress)}&format=json&addressdetails=1&limit=1`;


                    console.log(getCords);
                })

                mapBtn.addEventListener('click', () => {
                    console.log('clicked');
                    const map = L.map('map').setView([47.5615, -52.7126], 13);

                    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                        attribution: '&copy; OpenStreetMap contributors'
                    }).addTo(map);

                    L.marker([47.5615, -52.7126]).addTo(map)
                        .bindPopup(listing.title)
                        .openPopup();
                })

                const modalImages = modalDialog.querySelectorAll(".modal-images li");
                const prevButton = modalDialog.querySelector(".btn-prev");
                const nextButton = modalDialog.querySelector(".btn-next");

                let currentIndex = 0;
                updateCarousel();

                prevButton.addEventListener("click", () => {
                    currentIndex = (currentIndex - 1 + modalImages.length) % modalImages.length;
                    updateCarousel();
                });

                nextButton.addEventListener("click", () => {
                    currentIndex = (currentIndex + 1) % modalImages.length;
                    updateCarousel();
                });

                function updateCarousel() {
                    modalImages.forEach((image, index) => {
                        image.style.display = index === currentIndex ? "flex" : "none";
                    });
                }

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
                Swal.fire({
                    title: "Are you sure you want to delete this listing?",
                    showCancelButton: true,
                    confirmButtonText: "Save",
                    icon: "question",
                    }).then((result) => {
                    if (result.isConfirmed) {
                        listings = listings.filter(listing => listing.id !== id);
                        localStorage.setItem("listings", JSON.stringify(listings));
                        window.location.href = "listings.html?deleted=true";
                        removeFromRecentlyViewed(id);
                    } else {
                        Swal.fire({
                            html: `<p>Action canceled!</p>
                                    <p>No changes were made.</p>`,
                            icon: "info"
                        });
                    }
                });

                
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
        Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `<p>Something went wrong!</p>
                    <small>Please fill in all fields and upload at least one image.</small>`,
            draggable: true
        });
    }

    return false; // prevent default form submission
}

function checkValidation() {
    const title = document.querySelector("#title");
    const propertyType = document.querySelector("#property-type");
    const description = document.querySelector("#description");
    const price = document.querySelector("#price");
    const bedrooms = document.querySelector("#bedrooms");
    const bathrooms = document.querySelector("#bathrooms");
    const garage = document.querySelector("#garage");
    const lotArea = document.querySelector("#lot-area");
    const buildYear = document.querySelector("#build-year");
    const status = document.querySelector("#status");
    const contact = document.querySelector("#contact");
    const city = document.querySelector("#city");
    const streetNumber = document.querySelector('#street-number');
    const streetName = document.querySelector('#street-name');
    const province = document.querySelector('#province');
    const country = document.querySelector('#country');

    let emptyField = false;

    const requiredFields = [title, propertyType, description, price, bedrooms, bathrooms, garage, lotArea, buildYear, status, contact, city, streetNumber, streetName, province, country];

    requiredFields.forEach(field => {
    if (field.value.trim() === '') {
        console.log(`${field.id} is empty`);
        emptyField = true;
        field.classList.add('error');
    } else {
        field.classList.remove('error');
    }
    });

    const allFilled = requiredFields.every(field => field.value.trim() !== "");

    const hasImages = Array.isArray(imageUrls) && imageUrls.length > 0;

    if (!emptyField) {
        return allFilled && hasImages;
    }

}

// Create listings function here
function createListings() {
    let id = uid();
    let title = document.querySelector("#title").value;
    let propertyType = document.querySelector("#property-type").value;
    let description = document.querySelector("#description").value;
    let price = document.querySelector("#price").value;
    let bedrooms = document.querySelector("#bedrooms").value;
    let bathrooms = document.querySelector("#bathrooms").value;
    let garage = document.querySelector("#garage").value;
    let lotArea = document.querySelector("#lot-area").value;
    let buildYear = document.querySelector("#build-year").value;
    let status = document.querySelector("#status").value;
    let featured = false;
    let city = document.querySelector("#city").value;
    let aptNumber = document.querySelector('#apt-number').value;
    let streetNumber = document.querySelector('#street-number').value;
    let streetName = document.querySelector('#street-name').value;
    let province = document.querySelector('#province').value;
    let country = document.querySelector('#country').value;
    let images = imageUrls
        images = images.map(image => image.trim());

    var newListings = {
        id: id,
        title: title,
        propertyType: propertyType,
        description: description,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        garage: garage,
        lotArea: lotArea,
        buildYear: buildYear,
        status: status,
        featured: featured,
        city: city,
        aptNumber: aptNumber,
        streetNumber: streetNumber,
        streetName: streetName,
        province: province,
        country: country,
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
    let garage = document.querySelector("#garage").value;
    let lotArea = document.querySelector("#lot-area").value;
    let buildYear = document.querySelector("#build-year").value;
    let status = document.querySelector("#status").value;
    let featured = listings[index].featured;
    let city = document.querySelector("#city").value;
    let aptNumber = document.querySelector('#apt-number').value;
    let streetNumber = document.querySelector('#street-number').value;
    let streetName = document.querySelector('#street-name').value;
    let province = document.querySelector('#province').value;
    let country = document.querySelector('#country').value;
    let images = imageUrls || [];
        images = images.map(image => image.trim());

    var updatedListing = {
        title: title,
        propertyType: propertyType,
        description: description,
        price: price,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        garage: garage,
        lotArea: lotArea,
        buildYear: buildYear,
        status: status,
        featured: featured,
        city: city,
        aptNumber: aptNumber,
        streetNumber: streetNumber,
        streetName: streetName,
        province: province,
        country: country,
        images: images
    };

    listings[index] = { ...listings[index], ...updatedListing };
    localStorage.setItem("listings", JSON.stringify(listings));
    window.location.href = "listings.html?updated=true";

    return false;
}

// For mobile-screen navbar
const checkbox = document.getElementById('checkbox');
const logo = document.querySelector('.logo-div');
checkbox.addEventListener('change', () => {
    let added = checkbox.parentElement.classList.toggle('active', checkbox.checked);
    if (added) {
        logo.classList.add('box-active');
        logo.addEventListener('click', e => e.preventDefault());
    } else {
        logo.classList.remove('box-active')
        logo.removeEventListener('click', e => e.preventDefault());
    }
});