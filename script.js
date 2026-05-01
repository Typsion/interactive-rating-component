let selectedRating  = 0;
    
function showCard() {
    if(selectedRating === 0){
      alert("Please select a rating before submitting!");
      document.getElementById("btn").style.backgroundColor = "hsl(25, 97%, 53%)";
      return;
    }
    document.getElementById("ratingCard").style.display = "none";
    document.getElementById("thankyouCard").style.display = "block";
    document.getElementById("ratingValue").textContent = selectedRating;
}
    
function clickedPoint(value, element) {
    selectedRating = value;
    const points = document.querySelectorAll(".point");

    points.forEach(el => {
        el.classList.remove("active");
        el.setAttribute("aria-checked", "false");
    });
    element.classList.add("active");
    element.setAttribute("aria-checked", "true");
}
