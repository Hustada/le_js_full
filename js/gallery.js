function activateGallery() {
  // get main image inside div with CSS id 'gallery-photo'
	let thumbnails = document.querySelector("#gallery-thumbs").querySelectorAll("img")
	let mainImage = document.querySelector("#gallery-photo img");

	thumbnails.forEach(function(thumbnail) {
		thumbnail.addEventListener("click", function() {
			//select clicked image as main image
			let newImageSrc = thumbnail.dataset.largeVersion;
			mainImage.setAttribute("src", newImageSrc);

      let currentClass = "current";
      //change which image is current(move orange "border" to selected image)
      document.querySelector(".current").classList.remove(currentClass);
      thumbnail.parentNode.classList.add(currentClass);

      // Update image info.
      let galleryInfo = document.querySelector("#gallery-info");
      let title       = galleryInfo.querySelector(".title");
      let description = galleryInfo.querySelector(".description");

      title.innerHTML       = thumbnail.dataset.title;
      description.innerHTML = thumbnail.dataset.description;

		});
	});
}