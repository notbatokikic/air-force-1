
const navBtnContainer = document.getElementById("nav-btn-container");
const searchBtn = document.getElementById("search-btn");
const closeBtn = document.getElementById("close-btn");
const searchBox = document.getElementById("search-box");

searchBtn.addEventListener("click", () => {
  searchBox.classList.add("active");
  navBtnContainer.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  searchBox.classList.remove("active");
  navBtnContainer.classList.remove("active");
});



/* const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    // 👇️ this SHOWS the form
    form.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form.style.display = 'none';
  }
}); */





