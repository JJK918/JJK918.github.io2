function changeImage() {
    var selector = document.getElementById('imageSelector');
    var selectedImage = document.getElementById('selectedImage');

    var selectedValue = selector.options[selector.selectedIndex].value;
    selectedImage.src = selectedValue;
}