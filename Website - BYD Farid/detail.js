(function () {
  var NOMOR_WA = "6282129852914";
  var SALES = "Farid";

  var MOBIL = {
    atto1: {
      nama: "BYD Atto 1", judul: "Energy in Motion",
      desc: "Mobil listrik compact dengan desain modern untuk aktivitas sehari-hari.",
      img: "image/atto1.webp",
      ringkas: [["380", "KM Jarak"], ["135", "NM Torsi"], ["38.88", "kWh Baterai"]],
      tipe: [
        { nama: "Standard", harga: "Rp205.000.000",
          spek: [["Jarak tempuh", "300 KM"], ["Kapasitas baterai", "30 kWh"], ["Airbag", "2"], ["Layar", "10,1 inci"]],
          fitur: ["Kamera belakang"] },
        { nama: "Dynamic", harga: "Rp216.000.000",
          spek: [["Jarak tempuh", "300 KM"], ["Kapasitas baterai", "30 kWh"], ["Airbag", "4"], ["Layar", "10,1 inci"]],
          fitur: ["Lampu LED", "TPMS dan sensor parkir belakang"] },
        { nama: "Premium", harga: "Rp251.000.000",
          spek: [["Jarak tempuh", "380 KM"], ["Kapasitas baterai", "38,8 kWh"], ["Airbag", "6"], ["Layar", "12,8 inci"]],
          fitur: ["Kamera 360 derajat", "Wireless charging"] }
      ],
      dimensi: [["Panjang", "3.780 mm"], ["Lebar", "1.715 mm"], ["Tinggi", "1.540 mm"], ["Jarak sumbu roda", "2.500 mm"]],
      unggul: [
        "Jarak tempuh hingga 380 KM pada tipe Premium",
        "Tipe Premium dilengkapi 6 airbag",
        "Kamera 360 derajat dan wireless charging pada tipe Premium",
        "Layar infotainment hingga 12,8 inci",
        "Ukuran compact, mudah dibawa di jalan kota dan parkir sempit",
        "Tiga pilihan tipe sesuai kebutuhan dan budget"
      ]
    },
    m6dm: {
      nama: "BYD M6 DM", judul: "Drive The Future",
      desc: "Teknologi Plug-in Hybrid. Bisa menggunakan bensin maupun tenaga listrik.",
      img: "image/BYD M6 DM.webp",
      ringkas: [["1.300", "KM Kombinasi"], ["100", "Mode EV"], ["1.500", "Mesin Bensin"]],
      tipe: [
        { nama: "Classic Standard", harga: "Rp307.900.000",
          spek: [["Baterai", "7,4 kWh"], ["EV Range", "45 km"], ["Penumpang", "7 orang"]], fitur: [] },
        { nama: "Classic Dynamic", harga: "Rp327.900.000",
          spek: [["Baterai", "7,4 kWh"], ["EV Range", "45 km"], ["Penumpang", "7 orang"]], fitur: [] },
        { nama: "Cross Advance", harga: "Rp369.900.000",
          spek: [["Baterai", "18,3 kWh"], ["EV Range", "100 km"], ["Penumpang", "7 orang"]], fitur: [] },
        { nama: "Cross Superior", harga: "Rp389.900.000",
          spek: [["Baterai", "18,3 kWh"], ["EV Range", "100 km"], ["Penumpang", "7 orang"]], fitur: [] },
        { nama: "Cross Superior Captain Seat", harga: "Rp399.900.000",
          spek: [["Baterai", "18,3 kWh"], ["EV Range", "100 km"], ["Penumpang", "6 orang"]], fitur: [] }
      ],
      banding: {
        kolom: ["Classic Standard", "Classic Dynamic", "Cross Advance", "Cross Superior", "Superior Captain Seat"],
        baris: [
          ["Harga Bandung", ["307,9 jt", "327,9 jt", "369,9 jt", "389,9 jt", "399,9 jt"]],
          ["Kapasitas Baterai", ["7,4 kWh", "7,4 kWh", "18,3 kWh", "18,3 kWh", "18,3 kWh"]],
          ["Jarak Tempuh EV", ["45 km", "45 km", "100 km", "100 km", "100 km"]],
          ["Kapasitas Penumpang", ["7 orang", "7 orang", "7 orang", "7 orang", "6 orang"]],
          ["Spion Lipat Elektrik", [false, true, true, true, true]],
          ["NFC Card", [false, true, true, true, true]],
          ["Voice Command", [false, true, true, true, true]],
          ["BYD App", [false, true, true, true, true]],
          ["Koneksi 4G", [false, true, true, true, true]],
          ["Roof Rack", [false, false, true, true, true]],
          ["Fender", [false, false, true, true, true]],
          ["Panel Instrumen", ["Analog", "Analog", "Digital", "Digital", "Digital"]],
          ["Head Unit", ["10,1 inci", "10,1 inci", "12,8 inci", "12,8 inci", "12,8 inci"]],
          ["Material Jok", ["Fabric hitam", "Fabric hitam", "Synthetic leather", "Synthetic leather", "Captain seat"]],
          ["Pengaturan Kursi", ["Manual", "Manual", "Elektrik", "Elektrik", "Elektrik"]],
          ["Ukuran Velg", ["16 inci", "16 inci", "17 inci", "17 inci", "17 inci"]],
          ["AC & DC Charging", ["AC", "AC", "AC & DC", "AC & DC", "AC & DC"]],
          ["Kamera", ["Belakang", "360°", "360°", "360°", "360°"]],
          ["ADAS", [false, false, false, true, true]],
          ["Electric Tailgate", [false, false, false, true, true]],
          ["Wireless Charging", [false, false, false, true, true]],
          ["Panoramic Glass Roof", [false, false, false, false, true]]
        ]
      },
      dimensi: [["Panjang", "4.680 mm"], ["Lebar", "1.810 mm"], ["Tinggi", "1.695 mm"], ["Jarak sumbu roda", "2.800 mm"], ["Ground clearance", "170 mm"]],
      unggul: [
        "Teknologi Plug-in Hybrid: bisa memakai bensin maupun tenaga listrik",
        "Jarak tempuh EV hingga 100 km pada varian Cross",
        "Baterai 18,3 kWh pada varian Cross",
        "Lima pilihan varian, dari Classic Standard hingga Cross Superior Captain Seat",
        "Varian Cross Superior dilengkapi ADAS, electric tailgate, dan wireless charging",
        "Panoramic glass roof pada varian Captain Seat"
      ]
    },
    m6ev: {
      nama: "BYD M6 EV", judul: "Electric Family Journey",
      desc: "MPV listrik modern dengan kabin luas dan kenyamanan untuk keluarga.",
      img: "image/m6ev.webp",
      ringkas: [["600", "KM Jarak"], ["310", "NM Torsi"], ["75.6", "kWh Baterai"]],
      tipe: [
        { nama: "Standard", harga: "Rp405.000.000",
          spek: [["Jarak tempuh", "450 KM"], ["Kapasitas baterai", "57,9 kWh"], ["Teknologi", "100% Electric"]], fitur: [] },
        { nama: "Superior", harga: "Rp445.000.000",
          spek: [["Jarak tempuh", "600 KM"], ["Kapasitas baterai", "75,6 kWh"], ["Teknologi", "100% Electric"]], fitur: [] },
        { nama: "Captain Seat", harga: "Rp455.000.000",
          spek: [["Jarak tempuh", "600 KM"], ["Kapasitas baterai", "75,6 kWh"], ["Teknologi", "100% Electric"]],
          fitur: ["Kursi captain seat"] }
      ],
      dimensi: [["Panjang", "4.710 mm"], ["Lebar", "1.810 mm"], ["Tinggi", "1.690 mm"], ["Jarak sumbu roda", "2.800 mm"], ["Ground clearance", "170 mm"]],
      unggul: [
        "100% listrik, tanpa bensin",
        "Jarak tempuh hingga 600 KM pada tipe Superior dan Captain Seat",
        "Baterai 75,6 kWh pada tipe Superior dan Captain Seat",
        "Tiga pilihan varian sesuai kebutuhan perjalanan keluarga",
        "Tipe Captain Seat dengan kursi captain untuk kenyamanan penumpang"
      ]
    },
    atto3: {
      nama: "BYD Atto 3", judul: "Power Your Journey",
      desc: "SUV listrik dengan desain sporty, teknologi modern dan performa bertenaga.",
      img: "image/atto3.webp",
      ringkas: [["410", "KM Jarak"], ["310", "NM Torsi"], ["49.92", "kWh Baterai"]],
      tipe: [
        { nama: "Advanced", harga: "Rp425.000.000",
          spek: [["Kapasitas baterai", "49,92 kWh"], ["Jarak tempuh", "410 km"]], fitur: [] }
      ],
      spekUtama: [
        ["Panjang", "4.455 mm"], ["Lebar", "1.875 mm"], ["Tinggi", "1.615 mm"],
        ["Wheelbase", "2.720 mm"], ["Ground Clearance", "175 mm"], ["Kapasitas Penumpang", "5 Orang"],
        ["Tenaga Maksimum", "204 hp"], ["Torsi Maksimum", "310 Nm"], ["Akselerasi 0–100 km/jam", "7,9 Detik"],
        ["Kecepatan Maksimum", "160 km/jam"], ["Sistem Penggerak", "FWD"], ["Jenis Motor", "Permanent Magnet"]
      ],
      galeri: [
        ["image/atto3-interior.webp", "Touchscreen 15,6 Inci", "Layar sentuh utama mendukung Android dan Apple CarPlay."],
        ["image/atto3-sunroof.webp", "Panoramic Sunroof", "Memberikan kesan kabin lebih luas dengan pemandangan langit yang lebih terbuka."],
        ["image/atto3-guitar.webp", "Desain Interior Unik", "Trim pintu dengan desain menyerupai senar gitar yang memberikan karakter khas."],
        ["image/atto3-wireless.webp", "Wireless Smartphone Charging", "Mengisi daya smartphone dengan praktis tanpa perlu menggunakan kabel."]
      ],
      kenyamanan: ["Automatic Climate Control", "Kabin modern dan ergonomis", "Kapasitas 5 penumpang"],
      keselamatan: [
        ["Airbag", "6–7 Airbag"], ["Sistem Pengereman", "ABS"], ["Stabilitas Elektronik", "ESP"],
        ["Lane Keeping Assist", "LKA"], ["Adaptive Cruise Control", "ACC"], ["Kamera Parkir", "360 Derajat"]
      ],
      performa: {
        judul: "e-Platform 3.0",
        desc: "BYD Atto 3 menggunakan teknologi e-Platform 3.0 dengan motor listrik Permanent Magnet Synchronous Motor dan sistem penggerak roda depan (FWD).",
        poin: [
          "Tenaga 204 hp (150 kW)",
          "Torsi 310 Nm",
          "Akselerasi 0–100 km/jam dalam 7,9 detik",
          "Kecepatan maksimum 160 km/jam",
          "Baterai berkapasitas 49,92 kWh",
          "Jarak tempuh hingga 410 km berdasarkan data NEDC"
        ]
      }
    },
    dolphin: {
      nama: "BYD Dolphin", judul: "Live Electric",
      desc: "Hatchback listrik dengan karakter stylish dan desain dinamis.",
      img: "image/dolphin.webp",
      ringkas: [["410–490", "KM Jarak"], ["310", "NM Torsi"], ["60.48", "kWh Baterai"]],
      tipe: [
        { nama: "Dynamic", harga: "Rp381.000.000",
          spek: [["Jarak tempuh NEDC", "410 km"], ["Kapasitas baterai", "44,9 kWh"], ["Tenaga maksimum", "70 kW"], ["Torsi maksimum", "180 Nm"]],
          fitur: ["Suspensi belakang Torsion Beam"] },
        { nama: "Premium", harga: "Rp445.000.000",
          spek: [["Jarak tempuh NEDC", "490 km"], ["Kapasitas baterai", "60,48 kWh"], ["Tenaga maksimum", "150 kW"], ["Torsi maksimum", "310 Nm"]],
          fitur: ["Suspensi belakang Multi-link", "Panoramic sunroof", "Ventilated front seats"] }
      ],
      banding: {
        kolom: ["Dynamic", "Premium"],
        baris: [
          ["Harga OTR Bandung", ["Rp381.000.000", "Rp445.000.000"]],
          ["Kapasitas Baterai", ["44,9 kWh", "60,48 kWh"]],
          ["Jarak Tempuh NEDC", ["410 km", "490 km"]],
          ["Jarak Tempuh WLTP", ["340 km", "427 km"]],
          ["Tenaga Maksimum", ["70 kW", "150 kW"]],
          ["Torsi Maksimum", ["180 Nm", "310 Nm"]],
          ["Akselerasi 0–100 km/jam", ["12,3 detik", "7 detik"]],
          ["Suspensi Belakang", ["Torsion Beam", "Multi-link"]],
          ["Pengaturan Jok Elektrik", ["Konfirmasi varian", true]],
          ["Panoramic Sunroof", ["Konfirmasi varian", true]],
          ["Wireless Smartphone Charger", ["Konfirmasi varian", true]],
          ["Ventilated Front Seats", ["Konfirmasi varian", true]]
        ]
      },
      dimensi: [["Platform", "e-Platform 3.0"], ["Panjang", "4.290 mm"], ["Lebar", "1.770 mm"], ["Tinggi", "1.570 mm"], ["Jarak sumbu roda", "2.700 mm"], ["Ground clearance", "130 mm"]],
      kenyamanan: [
        "Intelligent Rotating Touch Screen 12,8 inci, mendukung Apple CarPlay dan Android Auto",
        "Digital Instrument Cluster 5 inci",
        "Vegan Leather Seats",
        "Flat Rear Floor untuk kenyamanan penumpang",
        "Kapasitas bagasi 345 liter, hingga 1.310 liter saat jok belakang dilipat 60:40",
        "NFC Key: buka dan kunci pintu lewat spion luar",
        "Vehicle-to-Load (V2L) untuk menyalurkan daya ke perangkat eksternal"
      ],
      keselamatan: [
        ["Airbag", "6 Titik"], ["Kamera", "360 Derajat"], ["ADAS", "Driver Assistance"]
      ],
      garansi: [
        ["Garansi Kendaraan", "6 Tahun / 150.000 km"],
        ["Garansi Blade Battery", "8 Tahun / 160.000 km"]
      ],
      unggul: [
        "Jarak tempuh hingga 490 km (NEDC) pada tipe Premium",
        "Tenaga 150 kW dan torsi 310 Nm pada tipe Premium",
        "Akselerasi 0–100 km/jam hanya 7 detik pada tipe Premium",
        "Layar putar 12,8 inci dengan Apple CarPlay dan Android Auto",
        "Fitur V2L untuk menyalurkan listrik ke perangkat eksternal",
        "Garansi Blade Battery 8 tahun / 160.000 km"
      ]
    },
    seal: {
      nama: "BYD Seal", judul: "The Ocean Aesthetics Electric Sedan",
      desc: "Sedan listrik premium dengan desain elegan dan performa dinamis.",
      img: "image/seal.webp",
      ringkas: [["580–650", "KM Jarak"], ["670", "NM Torsi"], ["82.56", "kWh Baterai"]],
      tipe: [
        { nama: "Performance AWD", harga: "Rp766.000.000",
          spek: [["Tenaga", "530 hp (390 kW)"], ["Torsi", "670 Nm"], ["Penggerak", "Semua roda (AWD)"], ["Jarak tempuh NEDC", "Sekitar 580 km"], ["Akselerasi 0–100 km/jam", "3,8 detik"]],
          fitur: [] },
        { nama: "Premium (Extended Range)", harga: "Rp893.500.000",
          spek: [["Tenaga", "313 hp (230 kW)"], ["Torsi", "360 Nm"], ["Penggerak", "Roda belakang (RWD)"], ["Jarak tempuh NEDC", "Hingga 650 km"], ["Akselerasi 0–100 km/jam", "5,9 detik"]],
          fitur: [] }
      ],
      banding: {
        kolom: ["Performance AWD", "Premium (Extended Range)"],
        baris: [
          ["Harga OTR Bandung", ["Rp766.000.000", "Rp893.500.000"]],
          ["Tenaga", ["530 hp (390 kW)", "313 hp (230 kW)"]],
          ["Torsi", ["670 Nm", "360 Nm"]],
          ["Penggerak", ["Semua roda (AWD)", "Roda belakang (RWD)"]],
          ["Kapasitas Baterai", ["82,56 kWh", "82,56 kWh"]],
          ["Jarak Tempuh NEDC", ["Sekitar 580 km", "Hingga 650 km"]],
          ["Akselerasi 0–100 km/jam", ["3,8 detik", "5,9 detik"]]
        ]
      },
      dimensi: [["Panjang", "4.800 mm"], ["Lebar", "1.875 mm"], ["Tinggi", "1.460 mm"], ["Jarak sumbu roda", "2.920 mm"], ["Ground clearance", "120 mm"], ["Kapasitas penumpang", "5 orang"]],
      performa: {
        judul: "Teknologi Unggulan",
        desc: "Teknologi canggih untuk pengalaman berkendara terbaik.",
        poin: [
          "e-Platform 3.0: platform khusus kendaraan listrik yang dirancang untuk mendukung efisiensi, performa, dan kenyamanan",
          "Cell-to-Body (CTB): integrasi baterai dengan struktur bodi kendaraan untuk meningkatkan kekakuan struktur",
          "Blade Battery: teknologi baterai BYD yang dirancang untuk keamanan, daya tahan, dan efisiensi"
        ]
      },
      kenyamanan: [
        "Layar sentuh 15,6 inci yang dapat diputar",
        "W-HUD: Head-Up Display untuk informasi berkendara",
        "Panoramic Sunroof: kesan kabin lebih luas dan terbuka",
        "Dynaudio 12 Speaker: sistem audio premium untuk pengalaman suara lebih baik"
      ],
      keselamatan: [
        ["Suspensi depan", "Double Wishbone"], ["Suspensi belakang", "Multi-link"], ["Kendali torsi", "iTAC"],
        ["Cruise control", "Adaptive (ACC)"], ["Airbag", "9 SRS Airbags"]
      ],
      bagian: [
        { judul: "Pengisian Daya", desc: "Mendukung pengisian daya cepat dan teknologi listrik modern.",
          grid: [["DC Fast Charging", "Hingga 150 kW"], ["Vehicle-to-Load (V2L)", "Hingga 3.600 W"], ["Baterai", "82,56 kWh"]] }
      ],
      unggul: [
        "Jarak tempuh hingga 650 km (NEDC) pada tipe Premium",
        "Tenaga 530 hp dan torsi 670 Nm pada tipe Performance AWD",
        "Akselerasi 0–100 km/jam hanya 3,8 detik pada tipe Performance AWD",
        "Layar sentuh putar 15,6 inci dan Head-Up Display (W-HUD)",
        "Audio Dynaudio 12 speaker dan panoramic sunroof",
        "Pengisian DC hingga 150 kW dan V2L hingga 3.600 W"
      ]
    },
    "denza-d9": {
      nama: "Denza D9", judul: "The Art of Luxury",
      desc: "Luxury MPV dengan kenyamanan dan kemewahan untuk perjalanan premium.",
      img: "image/denza-d9.webp",
      ringkas: [["730", "KM Jarak"], ["340", "kW Tenaga"], ["±115", "kWh Baterai"]],
      tipe: [
        { nama: "7-Seater", harga: "Rp1.092.000.000",
          spek: [["Tenaga maksimum", "340 kW (456 HP / 462 PS)"], ["Teknologi baterai", "BYD Blade Battery Gen 2"], ["Kapasitas baterai", "±115 kWh"], ["Jarak tempuh", "Hingga 730 km"], ["Kapasitas penumpang", "7 orang"]],
          fitur: [] }
      ],
      spekUtama: [
        ["Panjang", "5.250 mm"], ["Lebar", "1.960 mm"], ["Tinggi", "1.920 mm"],
        ["Wheelbase", "3.110 mm"], ["Kapasitas Penumpang", "7 Orang"], ["Platform", "BYD Electric Platform"]
      ],
      bagianAwal: [
        { judul: "Performa & Tenaga", desc: "Performa bertenaga untuk perjalanan premium.",
          grid: [["Tenaga Maksimum", "340 kW"], ["Tenaga Horsepower", "456 HP / 462 PS"]] },
        { judul: "Blade Battery Generasi Kedua", desc: "Teknologi baterai untuk jarak tempuh lebih jauh.",
          grid: [["Teknologi Baterai", "BYD Blade Battery Gen 2"], ["Kapasitas Baterai", "±115 kWh"], ["Jarak Tempuh", "Hingga 730 km"]],
          catatan: "Jarak tempuh mengikuti metode pengujian dan konfigurasi kendaraan yang digunakan." },
        { judul: "Teknologi Flash Charging", desc: "Pengisian daya berkecepatan tinggi dengan teknologi Tcharge.",
          grid: [["Pengisian 10% – 70%", "Sekitar 5 menit (klaim)"], ["Pengisian Penuh", "Sekitar 9 menit (klaim)"]],
          catatan: "Waktu pengisian merupakan klaim teknologi pengisian khusus dan bergantung pada infrastruktur charger, kondisi baterai, serta kondisi operasional." },
        { judul: "Kemewahan Kabin Denza D9", desc: "Dirancang untuk kenyamanan seluruh penumpang.",
          list: [
            "<b>7-Seater Configuration:</b> konfigurasi kabin 7 penumpang yang memberikan ruang nyaman untuk perjalanan bersama keluarga",
            "<b>Electronic Sliding Door:</b> pintu geser elektrik untuk akses masuk dan keluar kabin yang lebih praktis",
            "<b>Electric Captain Seat:</b> kursi baris kedua model captain seat dengan pengaturan elektrik",
            "<b>10-Point Massage:</b> fitur pijat 10 titik pada kursi baris kedua untuk menunjang kenyamanan perjalanan",
            "<b>Dual Wireless Charging 50W:</b> pengisian daya smartphone secara nirkabel dengan daya hingga 50 watt",
            "<b>Refrigerator Baris Kedua:</b> kulkas di area baris kedua untuk memberikan kemudahan selama perjalanan",
            "<b>Panoramic Sunroof:</b> atap panoramic yang memberikan kesan kabin lebih luas dan terbuka",
            "<b>Layar Head Unit Besar:</b> sistem layar hiburan modern untuk menunjang pengalaman di dalam kabin"
          ] }
      ],
      keselamatan: [
        ["Sistem Keselamatan", "ADAS"], ["Airbag", "9 SRS Airbag"]
      ],
      unggul: [
        "Jarak tempuh hingga 730 km dengan BYD Blade Battery Gen 2",
        "Tenaga 340 kW (456 HP / 462 PS)",
        "Teknologi Flash Charging: 10%–70% sekitar 5 menit (klaim)",
        "Kabin 7 penumpang dengan electronic sliding door",
        "Electric captain seat dengan 10-point massage dan refrigerator baris kedua",
        "Dilengkapi ADAS dan 9 SRS airbag"
      ]
    }
  };

  var app = document.getElementById("app");
  if (!app) return;
  var m = MOBIL[document.body.getAttribute("data-mobil")];
  if (!m) { app.innerHTML = '<p class="d-kosong">Data mobil tidak ditemukan.</p>'; return; }

  document.title = m.nama + " | BYD Bandung";
  var pendek = m.nama.replace("BYD ", "");
  var tipe = m.tipe || [];

  function src(p) { return encodeURI(p); }
  function wa(teks) {
    return "https://wa.me/" + NOMOR_WA + "?text=" + encodeURIComponent("Halo " + SALES + ", saya ingin " + teks);
  }
  function judul(h, p) {
    return '<div class="d-sec"><h2>' + h + "</h2>" + (p ? "<p>" + p + "</p>" : "") + "</div>";
  }
  function grid(list) {
    return '<div class="d-dim">' + list.map(function (d) {
      return "<div><small>" + d[0] + "</small><b>" + d[1] + "</b></div>";
    }).join("") + "</div>";
  }
  function centang(list) {
    return '<ul class="d-unggul">' + list.map(function (u) { return "<li>" + u + "</li>"; }).join("") + "</ul>";
  }
  function sel(v) {
    if (v === true) return '<span class="ya">✓</span>';
    if (v === false) return '<span class="tidak">✕</span>';
    return v;
  }
  function bagianHtml(list) {
    var o = "";
    list.forEach(function (bg) {
      o += judul(bg.judul, bg.desc || "") + (bg.grid ? grid(bg.grid) : centang(bg.list || []));
      if (bg.catatan) o += '<p class="d-note2">' + bg.catatan + "</p>";
    });
    return o;
  }

  var html =
    '<img class="d-hero" alt="' + m.nama + '" src="' + src(m.img) + '">' +
    '<div class="d-intro"><h1>' + m.nama + "</h1><p>" + m.desc + "</p></div>";

  if (tipe.length) {
    if (tipe.length > 1) {
      html += judul("Pilih Tipe " + pendek, "Tentukan pilihan sesuai kebutuhan dan budget Anda.");
    } else {
      html += judul(m.nama + " " + tipe[0].nama, "Harga OTR Bandung");
    }
    html += tipe.map(function (t) {
      var isi = t.spek.map(function (s) { return "<li>" + s[0] + ": " + s[1] + "</li>"; }).join("") +
                t.fitur.map(function (f) { return "<li>" + f + "</li>"; }).join("");
      return '<div class="d-card"><h3>' + pendek + " " + t.nama + "</h3>" +
        '<div class="d-harga">' + t.harga + "</div><ul>" + isi + "</ul>" +
        '<a class="d-btn" target="_blank" rel="noopener" href="' + wa("tanya " + m.nama + " " + t.nama) + '">Tanya ' + t.nama + "</a></div>";
    }).join("");

    if (m.banding) {
      var b = m.banding;
      html += judul("Perbandingan Fitur", "Kenali perbedaan " + b.kolom.length + " varian " + m.nama + ".");
      html += '<div class="d-scroll"><table class="d-tabel d-lebar"><tr><th>Fitur</th>' +
        b.kolom.map(function (k) { return "<th>" + k + "</th>"; }).join("") + "</tr>" +
        b.baris.map(function (r) {
          return "<tr><td>" + r[0] + "</td>" + r[1].map(function (v) { return "<td>" + sel(v) + "</td>"; }).join("") + "</tr>";
        }).join("") + "</table></div>";
      html += '<p class="d-note2">Geser tabel ke kanan dan kiri untuk melihat seluruh perbedaan fitur.</p>';
    } else if (tipe.length > 1) {
      var kepala = "<tr><th>Fitur</th>" + tipe.map(function (t) { return "<th>" + t.nama + "</th>"; }).join("") + "</tr>";
      var baris = [["Harga", tipe.map(function (t) { return t.harga; })]];
      tipe[0].spek.forEach(function (s, i) {
        baris.push([s[0], tipe.map(function (t) { return t.spek[i] ? t.spek[i][1] : "-"; })]);
      });
      baris.push(["Fitur tambahan", tipe.map(function (t) { return t.fitur.length ? t.fitur.join(", ") : "-"; })]);
      html += judul("Perbedaan Tiap Tipe", "Kenali perbedaan setiap tipe " + m.nama + ".");
      html += '<div class="d-scroll"><table class="d-tabel">' + kepala +
        baris.map(function (r) {
          return "<tr><td>" + r[0] + "</td>" + r[1].map(function (v) { return "<td>" + v + "</td>"; }).join("") + "</tr>";
        }).join("") + "</table></div>";
    }
  } else {
    html += judul("Spesifikasi", "");
    html += '<div class="d-scroll"><table class="d-tabel" style="min-width:0">' +
      m.ringkas.map(function (r) { return "<tr><td>" + r[1] + "</td><td>" + r[0] + "</td></tr>"; }).join("") +
      "</table></div>";
    html += '<div class="d-sec"><p>Informasi tipe dan harga: hubungi kami lewat WhatsApp.</p></div>';
  }

  if (m.dimensi && m.dimensi.length) {
    html += judul("Dimensi Kendaraan", "") + grid(m.dimensi);
  }
  if (m.spekUtama && m.spekUtama.length) {
    html += judul("Spesifikasi Utama", "Kenali performa dan dimensi " + m.nama + ".") + grid(m.spekUtama);
  }
  if (m.galeri && m.galeri.length) {
    html += judul("Interior & Fitur Unggulan", "Teknologi dan kenyamanan untuk pengalaman berkendara modern.");
    html += '<div class="d-gal">' + m.galeri.map(function (g) {
      return '<figure><img loading="lazy" alt="' + g[1] + '" src="' + src(g[0]) + '"><figcaption><b>' + g[1] + "</b><span>" + g[2] + "</span></figcaption></figure>";
    }).join("") + "</div>";
  }
  if (m.performa) {
    html += judul("Performa & Teknologi", "");
    html += '<div class="d-box"><h3>' + m.performa.judul + "</h3><p>" + m.performa.desc + "</p>" + centang(m.performa.poin) + "</div>";
  }
  if (m.bagianAwal && m.bagianAwal.length) {
    html += bagianHtml(m.bagianAwal);
  }
  if (m.kenyamanan && m.kenyamanan.length) {
    html += judul("Fitur Kenyamanan Lainnya", "") + centang(m.kenyamanan);
  }
  if (m.keselamatan && m.keselamatan.length) {
    html += judul("Keselamatan & ADAS", "Teknologi keselamatan untuk mendukung perjalanan lebih percaya diri.") + grid(m.keselamatan);
  }
  if (m.garansi && m.garansi.length) {
    html += judul("Garansi", "Garansi mengikuti ketentuan resmi BYD dan batas waktu atau jarak tempuh yang tercapai lebih dahulu.") + grid(m.garansi);
  }
  if (m.bagian && m.bagian.length) {
    html += bagianHtml(m.bagian);
  }
  if (m.unggul && m.unggul.length) {
    html += judul("Keunggulan " + m.nama, "") + centang(m.unggul);
  }

  html += '<div class="d-cta"><div class="d-2">' +
    '<a class="d-btn" target="_blank" rel="noopener" href="' + wa("Trade-In " + m.nama) + '">Trade-In</a>' +
    '<a class="d-btn" target="_blank" rel="noopener" href="' + wa("Test Drive " + m.nama) + '">Test Drive</a></div>' +
    '<a class="d-btn d-navy" href="index.html#simulasi">Hitung Simulasi Cicilan</a>' +
    '<a class="d-btn d-wa" target="_blank" rel="noopener" href="' + wa("konsultasi " + m.nama) + '">Konsultasi WhatsApp</a></div>';

  app.innerHTML = html;
})();