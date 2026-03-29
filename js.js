// ================= IMAGE HOVER EFFECT =================
const wrap = document.querySelector(".img-wrap");

if (wrap) {
  const img = wrap.querySelector("img");

  wrap.addEventListener("mousemove", (e) => {
    const rect = wrap.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    img.style.transform = `translate(${px * 10}px, ${py * 10}px)`;
  });

  wrap.addEventListener("mouseleave", () => {
    img.style.transform = "translate(0,0)";
  });
}
  items.forEach(item => {
    item.classList.remove("active");

    if (item.dataset.target === current) {
      item.classList.add("active");
      moveBlob(item);
    }
  });
