// HOME PAGE CONTROLLER
// Handles user input and sends data to phase page
// DOES NOT change phase calculation logic

/*document.addEventListener("DOMContentLoaded", function () {

    const checkBtn = document.getElementById("checkPhaseBtn");

    if (checkBtn) {
        checkBtn.addEventListener("click", function () {

            const startDate = document.getElementById("startDate").value;
            const cycleLength = document.getElementById("cycleLength").value;
            const mood = document.getElementById("mood").value;

            if (!startDate) {
                alert("Please select your period start date.");
                return;
            }

            // Save data
            localStorage.setItem("startDate", startDate);
            localStorage.setItem("cycleLength", cycleLength);
            localStorage.setItem("mood", mood);

            // Go to phase page
            window.location.href = "phase.html";
        });
    }

});
*/