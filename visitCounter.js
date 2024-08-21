let visitCount = localStorage.getItem("visitCount");
if (!visitCount) {
    visitCount = 0;
}

visitCount++;
localStorage.setItem("visitCount", visitCount);

// Update the counter element on the page
document.getElementById("visitCounter").textContent = "Visits: " + visitCount;
