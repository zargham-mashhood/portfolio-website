// Smooth scrolling for in-page navigation links.
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    var target = document.querySelector(link.getAttribute("href"));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Show the current year in the footer.
var footerYear = document.querySelector(".site-footer p");
if (footerYear) {
  footerYear.textContent = footerYear.textContent.replace(
    "2026",
    String(new Date().getFullYear())
  );
}
