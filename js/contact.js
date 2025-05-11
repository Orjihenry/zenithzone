
function formValidation() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const city = document.querySelector("#city").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const message = document.querySelector("#message").value.trim();

    const requiredFields = [name, email, city, subject, message];

    const allFilled = requiredFields.every(field => field !== "");

    return allFilled;
}

document.getElementById("contactForm").addEventListener("submit", function sendEmmail(e) {
    e.preventDefault();

    const isValid = formValidation();

    if (!isValid) {
        alert("Please fill in all fields.");
        return;
    }

    var template_params = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone").value,
        city: document.querySelector("#city").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };

    emailjs.send("service_sb8p7gr", "template_xh6wzxd", template_params)
        .then(function () {
            alert("Message sent successfully.");
        }, function () {
            alert("Something went wrong. Please try again.");
        });
    return;
});