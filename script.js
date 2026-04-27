let selectedRating  = 0;
    
function pokazKarte() {
    if(selectedRating === 0){
      alert("Please select a rating before submitting!");
      document.getElementById(".btn").style.backgroundColor = "hsl(25, 97%, 53%)";
      return;
    }
    document.querySelector(".card:not(.card--new)").style.display = "none";
    document.getElementById("nowaKarta").style.display = "block";
    document.getElementById("ratingValue").textContent = selectedRating;
}
    
function clickedPoint(value, element) {
    selectedRating = value;
    const points = document.querySelectorAll(".point");
    points.forEach(el => el.classList.remove("active"));
    element.classList.add("active");
}