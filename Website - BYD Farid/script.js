const btn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

btn.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  btn.classList.toggle('open', open);
  btn.setAttribute('aria-expanded', open);
});

menu.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    menu.classList.remove('open');
    btn.classList.remove('open');
    btn.setAttribute('aria-expanded', false);
  })
);
/* ===== PRODUK ===== */
(function () {
  // Ganti dengan nomor WA Farid: format 6282129852914, tanpa 0 / + di depan
  const NOMOR_WA = "6282129852914";
  const SALES = "Farid";

  const PRODUK = [
    { id: "atto-1", nama: "BYD Atto 1", judul: "Energy in Motion",
      desc: "Mobil listrik compact dengan desain modern untuk aktivitas sehari-hari.",
      img: "image/atto1.webp",
      spek: [["380", "KM Jarak"], ["135", "NM Torsi"], ["38.88", "kWh Baterai"]] },

    { id: "m6-dm", nama: "BYD M6 DM", judul: "Drive The Future",
      desc: "Teknologi Plug-in Hybrid. Bisa menggunakan bensin maupun tenaga listrik.",
      img: "image/BYD M6 DM.webp",
      spek: [["1.300", "KM Kombinasi"], ["110", "Mode EV"], ["1.500", "Mesin Bensin"]] },

    { id: "m6-ev", nama: "BYD M6 EV", judul: "Electric Family Journey",
      desc: "MPV listrik modern dengan kabin luas dan kenyamanan untuk keluarga.",
      img: "image/m6ev.webp",
      spek: [["600", "KM Jarak"], ["310", "NM Torsi"], ["60.48", "kWh Baterai"]] },

    { id: "atto-3", nama: "BYD Atto 3", judul: "Power Your Journey",
      desc: "SUV listrik dengan desain sporty, teknologi modern dan performa bertenaga.",
      img: "image/atto3.webp",
      spek: [["410", "KM Jarak"], ["310", "NM Torsi"], ["49.92", "kWh Baterai"]],
      galeri: [
        ["image/atto3-interior.webp", "Interior"],
        ["image/atto3-sunroof.webp", "Sunroof"],
        ["image/atto3-wireless.webp", "Wireless Charging"],
        ["image/atto3-guitar.webp", "Guitar"]
      ] },

    { id: "dolphin", nama: "BYD Dolphin", judul: "Live Electric",
      desc: "Hatchback listrik dengan karakter stylish dan desain dinamis.",
      img: "image/dolphin.webp",
      spek: [["410–490", "KM Jarak"], ["310", "NM Torsi"], ["60.48", "kWh Baterai"]] },

    { id: "seal", nama: "BYD Seal", judul: "The Ocean Aesthetics Electric Sedan",
      desc: "Sedan listrik premium dengan desain elegan dan performa dinamis.",
      img: "image/seal.webp",
      spek: [["580–650", "KM Jarak"], ["670", "NM Torsi"], ["82.56", "kWh Baterai"]] },

    { id: "denza-d9", nama: "Denza D9", judul: "The Art of Luxury",
      desc: "Luxury MPV dengan kenyamanan dan kemewahan untuk perjalanan premium.",
      img: "image/denza-d9.webp",
      spek: [["730", "KM Jarak"], ["426", "NM Torsi"], ["430", "kWh Baterai"]] }
  ];

  const wa = (jenis, p) =>
    "https://wa.me/" + NOMOR_WA + "?text=" +
    encodeURIComponent("Halo " + SALES + ", saya ingin " + jenis + " " + p.nama);

  const src = (path) => encodeURI(path); // aman untuk nama file ada spasi

  const spek = (p) =>
    '<div class="prd-spek">' +
    p.spek.map((s) => "<div><b>" + s[0] + "</b><small>" + s[1] + "</small></div>").join("") +
    "</div>";

  const tombol = (p) =>
    '<div class="prd-2">' +
    '<a class="prd-btn prd-btn-outline" target="_blank" rel="noopener" href="' + wa("Trade-In", p) + '">Trade-In</a>' +
    '<a class="prd-btn prd-btn-outline" target="_blank" rel="noopener" href="' + wa("Test Drive", p) + '">Test Drive</a>' +
    "</div>" +
    '<a class="prd-btn prd-btn-wa" target="_blank" rel="noopener" href="' + wa("konsultasi", p) + '">Konsultasi WhatsApp</a>';

  // Daftar produk (disusun ke bawah)
  const list = document.getElementById("prd-list");
  list.innerHTML = PRODUK.map((p, i) =>
    '<article class="prd-card">' +
      '<img class="prd-img" loading="lazy" alt="' + p.nama + '" src="' + src(p.img) + '">' +
      '<div class="prd-body">' +
        '<div class="prd-top"><span class="prd-nama">' + p.nama + '</span>' +
        '<span class="prd-no">0' + (i + 1) + " / 0" + PRODUK.length + "</span></div>" +
        "<h3>" + p.judul + "</h3>" +
        '<p class="prd-desc">' + p.desc + "</p>" +
        spek(p) +
        '<a class="prd-btn prd-btn-detail" href="' + ({"atto-1":"atto1.html","m6-dm":"m6dm.html","m6-ev":"m6ev.html","atto-3":"atto3.html","dolphin":"dolphin.html","seal":"byd-seal.html","denza-d9":"denza-d9.html"})[p.id] + '">Lihat Detail Mobil →</a>' +
        tombol(p) +
      "</div></article>"
  ).join("");

  // Halaman detail
  const detail = document.getElementById("prd-detail");

  function tampilDetail(p) {
    const galeri = p.galeri
      ? '<div class="prd-galeri">' +
        p.galeri.map((g) =>
          '<figure><img loading="lazy" alt="' + g[1] + '" src="' + src(g[0]) + '"><figcaption>' + g[1] + "</figcaption></figure>"
        ).join("") + "</div>"
      : "";

    detail.innerHTML =
      '<div class="prd-dwrap">' +
        '<a class="prd-back" href="#produk">← Semua Produk</a>' +
        '<article class="prd-card">' +
          '<img class="prd-img" alt="' + p.nama + '" src="' + src(p.img) + '">' +
          '<div class="prd-body">' +
            '<span class="prd-nama">' + p.nama + "</span>" +
            "<h3>" + p.judul + "</h3>" +
            '<p class="prd-desc">' + p.desc + "</p>" +
            spek(p) + galeri +
            '<div class="prd-info">Untuk harga, varian, dan promo terbaru ' + p.nama + ", silakan hubungi kami lewat WhatsApp.</div>" +
            tombol(p) +
          "</div>" +
        "</article>" +
      "</div>";
    detail.hidden = false;
    detail.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  function route() {
    const m = location.hash.match(/^#detail-(.+)$/);
    const p = m && PRODUK.find((x) => x.id === m[1]);
    if (p) {
      tampilDetail(p);
    } else {
      detail.hidden = true;
      document.body.style.overflow = "";
    }
  }

  window.addEventListener("hashchange", route);
  route();
})();
/* ===== SIMULASI CICILAN ===== */
(function () {
  const NOMOR_WA = "6282129852914"; // 082129852914
  const SALES = "Farid";

  const form  = document.getElementById("sim-form");
  const model = document.getElementById("sim-model");
  const dp    = document.getElementById("sim-dp");
  const tenor = document.getElementById("sim-tenor");
  const nama  = document.getElementById("sim-nama");
  const error = document.getElementById("sim-error");
  const fields = [model, dp, tenor, nama];

  fields.forEach((f) =>
    f.addEventListener("input", () => {
      f.classList.remove("invalid");
      error.hidden = true;
    })
  );

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let kosong = false;
    fields.forEach((f) => {
      const salah = !f.value.trim();
      f.classList.toggle("invalid", salah);
      if (salah) kosong = true;
    });

    if (kosong) {
      error.textContent = "Mohon lengkapi semua data yang bertanda *.";
      error.hidden = false;
      return;
    }

    const pesan =
      "Halo " + SALES + ", saya ingin simulasi cicilan " + model.value + ".\n\n" +
      "Nama: " + nama.value.trim() + "\n" +
      "Model: " + model.value + "\n" +
      "DP: " + dp.value + "\n" +
      "Tenor: " + tenor.value + "\n\n" +
      "Mohon dibantu hitungkan estimasi angsurannya. Terima kasih.";

    window.open(
      "https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan),
      "_blank",
      "noopener"
    );
  });
})();

(function () {
  var NOMOR_WA = "6282129852914";
  var tombol = document.getElementById("td-kirim");
  if (!tombol) return;

  var nama = document.getElementById("td-nama");
  var model = document.getElementById("td-model");
  var tgl = document.getElementById("td-tgl");
  var jam = document.getElementById("td-jam");
  var error = document.getElementById("td-error");

  // Tanggal sebelum hari ini tidak bisa dipilih
  var hariIni = new Date();
  tgl.min = hariIni.getFullYear() + "-" +
    String(hariIni.getMonth() + 1).padStart(2, "0") + "-" +
    String(hariIni.getDate()).padStart(2, "0");

  tombol.addEventListener("click", function () {
    var wajib = [nama, model, tgl];
    var lengkap = true;
    wajib.forEach(function (el) {
      var kosong = !el.value.trim();
      el.classList.toggle("td-invalid", kosong);
      if (kosong) lengkap = false;
    });
    error.hidden = lengkap;
    if (!lengkap) return;

    var pesan =
      "Halo BYD Bandung, saya ingin test drive.\n" +
      "Nama: " + nama.value.trim() + "\n" +
      "Model: " + model.value + "\n" +
      "Tanggal: " + tgl.value + "\n" +
      "Jam: " + (jam.value || "fleksibel");

    window.open("https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent(pesan), "_blank");
  });
})();
