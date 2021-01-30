if(screen.width > 600) {
  alert("Lebih baik di buka pada tampilan mobile");
}

const _navbar = document.querySelector(".navbar")
window.addEventListener("scroll", function() {
  _navbar.classList.toggle("active", scrollY > 0)
})
