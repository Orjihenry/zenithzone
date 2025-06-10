let nameValue = "";
let categoryValue = "all";
let cityValue = "all";

function filterByName(event) {
    nameValue = event.target.value.toLowerCase();
    filterListings();
}

function filterByCategory(event) {
    categoryValue = event.target.value.toLowerCase();
    filterListings();
}

function filterByLocation(event) {
    cityValue = event.target.value.toLowerCase();
    filterListings();
}

function filterListings() {
    const noListings = document.querySelector(".no-listings");
    const changeTarget = document.querySelectorAll("#details");

    let noItem = false;

    changeTarget.forEach(target => {
        const recentSection = target.closest(".recent");
        const listingId = parseInt(target.dataset.id);
        const listing = listings.find(listing => listing.id === listingId);
        const propertyType = listing.propertyType.toLowerCase();
        const city = listing.city.toLowerCase();
        const title = listing.title.toLowerCase();

        if (recentSection && recentSection.dataset.exclude === "true") {
            return;
        }

        const filterByName = nameValue === "" || title.includes(nameValue);
        const filterByCategory = categoryValue === "all" || propertyType === categoryValue;
        const filterByCity = cityValue === "all" || city.includes(cityValue);

        if (filterByName && filterByCategory && filterByCity) {
            target.style.display = "revert";
            noItem = true;
        } else {
            target.style.display = "none";
        }
    });

    noListings.style.display = noItem ? "none" : "block";
}