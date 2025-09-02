document.getElementById("dropdownBtn").onclick = function (e) {
  e.preventDefault(); // Mencegah link melakukan aksi default (misal reload halaman)
  var menu = document.getElementById("dropdownMenu"); // Ambil elemen menu dropdown
  // Toggle tampilan dropdown: jika sudah tampil, sembunyikan; jika tersembunyi, tampilkan
  menu.style.display = menu.style.display === "block" ? "none" : "block";
};
