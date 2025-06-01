
// Filter function
function filterByName(event) {
    let noItem = false;
    let inputVal = event.target.value.toLowerCase();
    const noListings = document.querySelector(".no-listings");
    let inputTarget = document.querySelectorAll("#details");

    inputTarget.forEach( (item) => {
        const recentSection = target.closest(".recent");
        item.style.display = "revert";
        if (recentSection && recentSection.dataset.exclude === "true") {
            return;
        }
        if (!item.innerText.toLowerCase().includes(inputVal)) {
            item.style.display = "none";
        }
    });

    // Check if there are any items displayed
    inputTarget.forEach( (item) => {
        if (item.style.display === "revert") {
            noItem = true;
        }
    }
    );
    // If no items are displayed, show the "no listings" message
    if (!noItem) {
        noListings.style.display = "block";
    } else {
        noListings.style.display = "none";
    }


}

function filterByCategory(event) {
    let noItem = false;
    let changeVal = event.target.value;
    const noListings = document.querySelector(".no-listings");
    let changeTarget = document.querySelectorAll("#details");

    changeTarget.forEach( (target) => {
        const recentSection = target.closest(".recent");
        target.style.display = "revert";
        if (recentSection && recentSection.dataset.exclude === "true") {
            return;
        }
        if (changeVal === "all") {
            return;
        }
        if (!target.innerText.includes(changeVal)) {
            target.style.display = "none";
        }
    });

    changeTarget.forEach( (target) => {
        if (target.style.display === "revert") {
            noItem = true;
        }
    });
    if (!noItem) {
        noListings.style.display = "block";
    }
    else {
        noListings.style.display = "none";
    }
}

function filterByLocation(event) {
    let noItem = false;
    let changeVal = event.target.value;
    const noListings = document.querySelector(".no-listings");
    let changeTarget = document.querySelectorAll("#details");
    

    changeTarget.forEach( (target) => {
        const recentSection = target.closest(".recent");
        target.style.display = "revert";
        if (recentSection && recentSection.dataset.exclude === "true") {
            return;
        }
        if (changeVal === "all") {
            return;
        }
        if (!target.innerText.includes(changeVal)) {
            target.style.display = "none";
        }
    });

    changeTarget.forEach( (target) => {
        if (target.style.display === "revert") {
            noItem = true;
        }
    });
    if (!noItem) {
        noListings.style.display = "block";
    }
    else {
        noListings.style.display = "none";
    }
    
}

// Combine filter functions
function filter(event) {
    var nameFilter = filterByName(event);
    var locationFilter = filterByLocation(event);
    var categoryFilter = filterByCategory(event);

    if (!nameFilter && !locationFilter && !categoryFilter) {
        return true;
    }
    return false;
}