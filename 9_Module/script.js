const title = document.querySelector("#title");
const btn_load = document.querySelector("#btn_load");
const gallery = document.querySelector("#gallery");
const url = "https://api.thecatapi.com/v1/images/search?limit=10";
const loader = document.getElementById("loader");

const fetchImg = () => {
  loader.style.display = "block";
   fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((e) => {
        gallery.innerHTML += `<img class="gallery_item" src="${e.url}">`;
        // const gallery_elem = document.createElement("div");
        // gallery_elem.classList.add("gallery_item");
        // console.log(e.url);
        // gallery_elem.innerHTML = `<img src="${e.url}">`;
        // gallery.appendChild(gallery_elem);
      });
      loader.style.display = "none";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

btn_load.addEventListener("click", fetchImg);

