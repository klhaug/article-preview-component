const shareIconContainer = document.getElementById("share-icon-container");
const shareIcon = document.getElementById("share-icon");
const textSection = document.querySelector(".text-container");

shareIconContainer.addEventListener("mouseenter", () => {
    shareIconContainer.style.backgroundColor = "#6E8098";
    shareIcon.firstChild.setAttribute("fill", "#ffffff")
    
    fill.innerHTML = "#ffffff"
    shareIcon.style.color = "lightgrey"
})
shareIconContainer.addEventListener("mouseleave", () => {
    shareIconContainer.style.backgroundColor = "#ECF2F8";
    shareIcon.firstChild.setAttribute("fill", "#6E8098")
})