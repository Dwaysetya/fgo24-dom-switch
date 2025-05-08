const items = document.querySelectorAll(".gelas");

items.forEach((gelas) => {
  gelas.addEventListener("click", function () {
    if (gelas.classList.contains("kosong")) return;

    const kosong = document.querySelector(".kosong");

    const isi = gelas.textContent;
    const kelas = gelas.classList[1];
    const id = gelas.id;

    kosong.textContent = isi;
    kosong.classList.remove("kosong");
    kosong.classList.add(kelas);
    kosong.id = id;

    gelas.textContent = "";
    gelas.classList.remove(kelas);
    gelas.classList.add("kosong");
    gelas.id = "kosong";
  });
});
