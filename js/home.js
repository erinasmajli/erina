var slideIndex = 1;

function showSlides(n){
    var i;
    var slides = document.getElementsByClassName('slide')

    for(i=0; i<slides.length; i++){
        slides[i].style.display = "none"
    }

    if(n>slides.length){
        slideIndex = 1
    }
    if(n<1){
        slideIndex = slides.length
    }

    slides[slideIndex-1].style.display = "block"
}

showSlides(1)

function plusSlides(n){
    slideIndex += n
    showSlides(slideIndex)
}

setInterval(plusSlides, 3000, 1)











const searchSuggestions = ["Dresses", "Tops", "T-Shirts", "Shirts","Sweatshirts","Jackets","Blazers", "Crop Tops", "Jeans","Skirts", "Shoes", "Bags","Swimwear"];

function showSuggestions() {
    const input = document.getElementById('searchBar');
    const filter = input.value.toLowerCase();
    const suggestionsBox = document.getElementById('suggestions');
    
    // Clear previous suggestions
    suggestionsBox.innerHTML = '';
    
    if (filter) {
        const filteredSuggestions = searchSuggestions.filter(item => item.toLowerCase().includes(filter));
        
        filteredSuggestions.forEach(suggestion => {
            const suggestionItem = document.createElement('div');
            suggestionItem.textContent = suggestion;
            suggestionItem.onclick = function() {
                input.value = suggestion;
                suggestionsBox.innerHTML = '';
                suggestionsBox.style.display = 'none';
            };
            suggestionsBox.appendChild(suggestionItem);
        });

        suggestionsBox.style.display = filteredSuggestions.length > 0 ? 'block' : 'none';
    } else {
        suggestionsBox.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    const suggestionsBox = document.getElementById('suggestions');
    if (!event.target.closest('.nav-search')) {
        suggestionsBox.style.display = 'none';
    }
});
