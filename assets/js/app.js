/* ============================================
   Quiz Game — Crypto & Ekonomi Makro
   Main Application Script
   Extracted from index.html
   ============================================ */

/* ================================================================
   SVG ICON HELPER
   ================================================================ */
function svgIcon(type, size) {
  size = size || 18;
  const icons = {
    check: '<polyline points="20 6 9 17 4 12"/>',
    xmark: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    clock: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
    star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
    bolt: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
    info: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>',
    trophy: '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'
  };
  const stroke = 'currentColor';
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 24 24" fill="none" stroke="'+stroke+'" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="vertical-align:-3px">'+( icons[type]||'')+'</svg>';
}

/* ================================================================
   QUIZ DATA — 21 SOAL
   ================================================================ */
const quizData = [
  /* ====== TIPE A — SEBAB-AKIBAT (7 soal) ====== */
  {
    id:1, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Bitcoin Halving mengurangi laju inflasi supply Bitcoin secara signifikan.",
    alasan:"Setiap halving, reward penambang dipotong setengah sehingga jumlah BTC baru yang masuk ke sirkulasi berkurang.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Halving memangkas reward penambang (dari 6.25 ke 3.125 BTC di 2024), sehingga laju suplai baru turun drastis. Ini merupakan hubungan sebab-akibat langsung — penurunan reward menyebabkan inflasi supply berkurang.",
    skor_penuh:4
  },
  {
    id:2, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Ketika The Fed menaikkan suku bunga acuan (Fed Funds Rate), harga Bitcoin cenderung turun.",
    alasan:"Kenaikan suku bunga membuat aset berisiko lebih menarik karena imbal hasil obligasi pemerintah meningkat.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["B"],
    penjelasan:"Pernyataan benar — historis menunjukkan BTC turun saat The Fed hawkish. Alasan juga benar bahwa yield obligasi naik, namun hubungannya bukan sebab langsung. Mekanisme utamanya adalah kenaikan suku bunga mengurangi likuiditas dan appetite terhadap aset berisiko, bukan sekadar obligasi menjadi lebih menarik.",
    skor_penuh:4
  },
  {
    id:3, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"De-peg pada stablecoin algoritmik dapat memicu efek domino mirip bank run di pasar kripto.",
    alasan:"Stablecoin algoritmik dijamin penuh oleh cadangan dolar AS di bank sentral.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["C"],
    penjelasan:"Pernyataan benar — kasus UST/LUNA (2022) menunjukkan bagaimana de-peg memicu panic selling berantai. Alasan SALAH karena stablecoin algoritmik tidak dijamin cadangan dolar di bank sentral, melainkan menggunakan mekanisme minting/burning dengan token pendamping (seperti LUNA terhadap UST).",
    skor_penuh:4
  },
  {
    id:4, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Yield curve inversion (imbal hasil obligasi jangka pendek lebih tinggi dari jangka panjang) sering menjadi indikator awal resesi.",
    alasan:"Investor memindahkan dana ke obligasi jangka panjang karena mengantisipasi perlambatan ekonomi di masa depan.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Pernyataan benar — yield curve inversion (misal 2Y vs 10Y Treasury) telah memprediksi hampir semua resesi AS sejak 1950-an. Alasan juga benar dan merupakan sebab yang tepat: investor membeli obligasi jangka panjang (mendorong yield turun) karena ekspektasi ekonomi akan melambat, sehingga yield jangka panjang jatuh di bawah jangka pendek.",
    skor_penuh:4
  },
  {
    id:5, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Menyediakan likuiditas di DeFi liquidity pool dapat menyebabkan kerugian yang disebut impermanent loss.",
    alasan:"Impermanent loss terjadi karena rasio token dalam pool berubah mengikuti harga pasar, sehingga nilai aset penyedia likuiditas bisa lebih rendah dibanding hanya hold.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan berhubungan sebab-akibat langsung. AMM (Automated Market Maker) seperti Uniswap menjaga rasio konstan (x*y=k). Ketika harga salah satu token berubah drastis, arbitraseur menyeimbangkan pool, menyebabkan penyedia likuiditas memiliki lebih banyak token yang murah dan lebih sedikit yang mahal — inilah impermanent loss.",
    skor_penuh:4
  },
  {
    id:6, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Quantitative Tightening (QT) oleh bank sentral cenderung memicu bear market pada aset berisiko termasuk kripto.",
    alasan:"QT mengurangi jumlah uang beredar dengan membiarkan obligasi jatuh tempo tanpa reinvestasi, sehingga likuiditas pasar menurun.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan merupakan sebab-akibat langsung. QT (kebalikan QE) mengecilkan neraca bank sentral dengan tidak memperbarui obligasi yang jatuh tempo, menarik likuiditas dari sistem keuangan. Berkurangnya likuiditas menekan valuasi aset berisiko termasuk saham dan kripto.",
    skor_penuh:4
  },
  {
    id:7, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Adopsi Layer-2 (seperti Arbitrum, Optimism) menyebabkan gas fee di jaringan utama Ethereum turun secara signifikan.",
    alasan:"Layer-2 memproses transaksi di luar mainnet Ethereum dan hanya mengirim bukti (proof) ke Layer-1, sehingga mengurangi kompetisi ruang blok di mainnet.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan merupakan hubungan sebab-akibat langsung. Solusi Layer-2 seperti rollup (Optimistic & ZK) mengeksekusi transaksi off-chain lalu mengunggah bukti ke Ethereum. Ini mengalihkan volume transaksi dari mainnet, mengurangi permintaan ruang blok, dan menurunkan gas fee secara signifikan.",
    skor_penuh:4
  },

  /* ====== TIPE B — MCMA (14 soal) ====== */
  {
    id:8, tipe:"mcma", topik:"Ekonomi Makro",
    pertanyaan:"Manakah yang merupakan indikator inflasi yang umum digunakan oleh bank sentral?",
    opsi:[
      {id:"A",teks:"Consumer Price Index (CPI)"},
      {id:"B",teks:"Producer Price Index (PPI)"},
      {id:"C",teks:"Personal Consumption Expenditures (PCE)"},
      {id:"D",teks:"Gross Domestic Product (GDP) Deflator"},
      {id:"E",teks:"Market Capitalization Index"}
    ],
    jawaban_benar:["A","B","C","D"],
    penjelasan:"CPI, PPI, PCE, dan GDP Deflator adalah indikator inflasi resmi. PCE terutama digunakan The Fed sebagai target inflasi. Market Capitalization Index bukan indikator inflasi — itu mengukur nilai pasar saham.",
    skor_penuh:3
  },
  {
    id:9, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Apa saja ciri-ciri Bear Market di pasar kripto?",
    opsi:[
      {id:"A",teks:"Harga aset turun lebih dari 20% dari puncak tertinggi"},
      {id:"B",teks:"Volume perdagangan meningkat drastis dengan banyak pembeli baru"},
      {id:"C",teks:"Sentimen pasar dominan fear dan pessimis"},
      {id:"D",teks:"Dominasi Bitcoin cenderung meningkat saat altcoin melemah"},
      {id:"E",teks:"Banyak proyek crypto yang menghentikan pengembangan atau bangkrut"}
    ],
    jawaban_benar:["A","C","D","E"],
    penjelasan:"Bear market ditandai penurunan >20%, sentimen fear, dominasi BTC naik (flight to quality dalam crypto), dan banyak proyek gagal. Volume perdagangan yang meningkat dengan banyak pembeli baru justru ciri bull market.",
    skor_penuh:3
  },
  {
    id:10, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Manakah pernyataan yang benar tentang mekanisme konsensus Proof-of-Stake (PoS)?",
    opsi:[
      {id:"A",teks:"Validator dipilih berdasarkan jumlah token yang di-stake"},
      {id:"B",teks:"Membutuhkan daya komputasi besar untuk menyelesaikan puzzle matematika"},
      {id:"C",teks:"Lebih hemat energi dibanding Proof-of-Work"},
      {id:"D",teks:"Validator yang berperilaku jahat dapat kehilangan stake (slashing)"},
      {id:"E",teks:"Ethereum mengadopsi PoS melalui event The Merge pada September 2022"}
    ],
    jawaban_benar:["A","C","D","E"],
    penjelasan:"PoS memilih validator berdasarkan stake, lebih hemat energi dari PoW (~99.95% lebih efisien), memiliki mekanisme slashing, dan Ethereum berpindah ke PoS via The Merge. Opsi B adalah deskripsi Proof-of-Work, bukan PoS.",
    skor_penuh:3
  },
  {
    id:11, tipe:"mcma", topik:"Ekonomi Makro",
    pertanyaan:"Apa dampak dari kebijakan moneter kontraktif yang diterapkan bank sentral?",
    opsi:[
      {id:"A",teks:"Suku bunga pinjaman naik sehingga kredit berkurang"},
      {id:"B",teks:"Inflasi cenderung terkendali atau menurun"},
      {id:"C",teks:"Pertumbuhan ekonomi biasanya meningkat pesat"},
      {id:"D",teks:"Nilai tukar mata uang domestik cenderung menguat"},
      {id:"E",teks:"Harga aset berisiko seperti saham dan kripto cenderung tertekan"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"Kebijakan kontraktif (naik suku bunga, QT) menekan kredit, mengendalikan inflasi, menguatkan mata uang, dan menekan aset berisiko. Namun justru memperlambat pertumbuhan ekonomi, bukan meningkatkannya.",
    skor_penuh:3
  },
  {
    id:12, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Kondisi apa saja yang dapat memicu terjadinya Altseason (musim altcoin)?",
    opsi:[
      {id:"A",teks:"Dominasi Bitcoin menurun signifikan"},
      {id:"B",teks:"Bitcoin mengalami rally besar dan kemudian sideways/konsolidasi"},
      {id:"C",teks:"The Fed menaikkan suku bunga secara agresif"},
      {id:"D",teks:"Narasi dan hype seputar sektor tertentu (AI, DePIN, Gaming)"},
      {id:"E",teks:"Likuiditas global meningkat dan risk appetite tinggi"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"Altseason dipicu oleh penurunan dominasi BTC, BTC yang sudah rally lalu sideways (profit berputar ke altcoin), narasi sektor baru, dan likuiditas global tinggi. Kenaikan suku bunga agresif justru menekan semua aset berisiko dan tidak kondusif untuk altseason.",
    skor_penuh:3
  },
  {
    id:13, tipe:"mcma", topik:"Ekonomi Makro",
    pertanyaan:"Manakah yang termasuk instrumen hedging terhadap risiko ekonomi makro?",
    opsi:[
      {id:"A",teks:"Emas dan obligasi pemerintah (government bonds)"},
      {id:"B",teks:"Membeli aset kripto dengan leverage tinggi"},
      {id:"C",teks:"Diversifikasi portofolio lintas kelas aset"},
      {id:"D",teks:"Menggunakan kontrak derivatif seperti futures dan options"},
      {id:"E",teks:"Menyimpan seluruh kekayaan dalam stablecoin tanpa bunga"}
    ],
    jawaban_benar:["A","C","D"],
    penjelasan:"Emas, obligasi pemerintah, diversifikasi, dan derivatif adalah instrumen hedging klasik. Leverage tinggi justru memperbesar risiko, dan menyimpan di stablecoin tanpa bunga terkena risiko inflasi dan de-peg.",
    skor_penuh:3
  },
  {
    id:14, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Apa saja karakteristik Bitcoin yang mendukung posisinya sebagai 'store of value' (penyimpan nilai)?",
    opsi:[
      {id:"A",teks:"Supply terbatas hanya 21 juta BTC"},
      {id:"B",teks:"Bersifat desentralisasi dan tidak bisa disita oleh satu pihak"},
      {id:"C",teks:"Nilainya stabil dan tidak fluktuatif"},
      {id:"D",teks:"Dapat diverifikasi oleh siapa saja (open-source dan transparan)"},
      {id:"E",teks:"Semakin diterima oleh institusi besar sebagai aset cadangan"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"BTC memiliki supply cap 21 juta, desentralisasi, open-source, dan adopsi institusional (MicroStrategy, ETF). Namun, BTC sangat fluktuatif — volatilitasnya jauh lebih tinggi dari emas, sehingga opsi C salah.",
    skor_penuh:3
  },
  {
    id:15, tipe:"mcma", topik:"Ekonomi Makro",
    pertanyaan:"Apa alasan bank sentral mempertimbangkan penerbitan Central Bank Digital Currency (CBDC)?",
    opsi:[
      {id:"A",teks:"Meningkatkan efisiensi sistem pembayaran domestik"},
      {id:"B",teks:"Memberikan akses keuangan bagi populasi yang unbanked"},
      {id:"C",teks:"Menghilangkan sepenuhnya kebutuhan akan uang tunai fisik"},
      {id:"D",teks:"Memperkuat kedaulatan moneter di tengah maraknya stablecoin swasta dan kripto"},
      {id:"E",teks:"Memungkinkan implementasi kebijakan moneter yang lebih tepat sasaran"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"CBDC bertujuan meningkatkan efisiensi pembayaran, inklusi keuangan, menjaga kedaulatan moneter, dan memungkinkan kebijakan moneter presisi. Namun tidak bertujuan menghilangkan uang tunai sepenuhnya — banyak negara berkomitmen tetap menyediakan uang tunai.",
    skor_penuh:3
  },
  {
    id:16, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Faktor-faktor apa yang secara signifikan menggerakkan harga Ethereum?",
    opsi:[
      {id:"A",teks:"Tingkat adopsi dan aktivitas di jaringan (TVL, jumlah transaksi)"},
      {id:"B",teks:"Biaya gas fee yang selalu nol"},
      {id:"C",teks:"Upgrade protokol (seperti The Merge, Dencun)"},
      {id:"D",teks:"Regulasi terkait DeFi dan smart contract"},
      {id:"E",teks:"Pertumbuhan ekosistem Layer-2 yang built on top Ethereum"}
    ],
    jawaban_benar:["A","C","D","E"],
    penjelasan:"Harga ETH dipengaruhi adopsi jaringan, upgrade protokol, regulasi, dan ekosistem L2. Gas fee Ethereum TIDAK nol — justru sering mahal saat congestion tinggi, dan biaya gas ini merupakan cost yang mempengaruhi ekonomi jaringan.",
    skor_penuh:3
  },
  {
    id:17, tipe:"mcma", topik:"Ekonomi Makro",
    pertanyaan:"Apa dampak Quantitative Easing (QE) terhadap pasar keuangan?",
    opsi:[
      {id:"A",teks:"Likuiditas pasar meningkat karena bank sentral membeli aset"},
      {id:"B",teks:"Imbal hasil (yield) obligasi cenderung turun"},
      {id:"C",teks:"Investor beralih ke aset berisiko untuk mencari return lebih tinggi"},
      {id:"D",teks:"Nilai mata uang domestik selalu menguat drastis"},
      {id:"E",teks:"Dapat menyebabkan inflasi aset (asset price inflation)"}
    ],
    jawaban_benar:["A","B","C","E"],
    penjelasan:"QE meningkatkan likuiditas, menekan yield obligasi, mendorong investor ke aset berisiko (search for yield), dan menyebabkan inflasi aset. Namun QE cenderung melemahkan mata uang domestik (bukan menguatkan) karena peningkatan suplai uang.",
    skor_penuh:3
  },
  {
    id:18, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Manakah yang merupakan risiko utama di ekosistem DeFi dibandingkan CeFi?",
    opsi:[
      {id:"A",teks:"Risiko bug pada smart contract yang dapat dieksploitasi"},
      {id:"B",teks:"Rug pull dan proyek scam tanpa tim yang terverifikasi"},
      {id:"C",teks:"Risiko counterparty dari satu entitas terpusat"},
      {id:"D",teks:"Risiko impermanent loss pada liquidity pool"},
      {id:"E",teks:"Risiko oracle manipulation yang memberikan data harga salah"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"DeFi menghadapi risiko smart contract bug, rug pull, impermanent loss, dan oracle manipulation. Risiko counterparty dari satu entitas terpusat adalah ciri CeFi (seperti FTX, Celsius), bukan DeFi yang justru bertujuan menghilangkan perantara terpusat.",
    skor_penuh:3
  },
  {
    id:19, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Indikator on-chain mana yang umumnya dianggap sinyal bullish untuk Bitcoin?",
    opsi:[
      {id:"A",teks:"Exchange reserve BTC menurun (banyak BTC keluar dari exchange)"},
      {id:"B",teks:"Jumlah active address meningkat konsisten"},
      {id:"C",teks:"MVRV ratio sangat tinggi (>3.5)"},
      {id:"D",teks:"Long-term holder supply terus bertambah"},
      {id:"E",teks:"Hash rate jaringan mencapai all-time high baru"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"BTC keluar exchange (supply shock), active address naik, long-term holder accumulation, dan hash rate ATH semuanya sinyal bullish. Namun MVRV ratio >3.5 justru sinyal overheated/potensi top — historis menunjukkan MVRV tinggi berkorelasi dengan puncak siklus.",
    skor_penuh:3
  },
  {
    id:20, tipe:"mcma", topik:"Ekonomi Makro",
    pertanyaan:"Apa peran IMF dan World Bank dalam menangani krisis ekonomi makro global?",
    opsi:[
      {id:"A",teks:"IMF memberikan pinjaman darurat kepada negara yang mengalami krisis neraca pembayaran"},
      {id:"B",teks:"World Bank fokus pada proyek pembangunan jangka panjang dan pengentasan kemiskinan"},
      {id:"C",teks:"IMF dapat mencetak uang sendiri untuk menstimulasi ekonomi global"},
      {id:"D",teks:"IMF memberikan rekomendasi kebijakan fiskal dan moneter sebagai syarat pinjaman"},
      {id:"E",teks:"World Bank memberikan technical assistance dan capacity building kepada negara berkembang"}
    ],
    jawaban_benar:["A","B","D","E"],
    penjelasan:"IMF memberikan pinjaman darurat dengan syarat reformasi kebijakan (conditionalities), World Bank fokus pembangunan jangka panjang, dan keduanya memberikan technical assistance. Namun IMF TIDAK bisa mencetak uang — hanya bank sentral yang memiliki kewenangan itu.",
    skor_penuh:3
  },
  {
    id:21, tipe:"mcma", topik:"Crypto",
    pertanyaan:"Manakah jenis stablecoin berdasarkan mekanisme peg-nya yang benar?",
    opsi:[
      {id:"A",teks:"Fiat-collateralized: dijamin 1:1 oleh cadangan fiat (contoh: USDT, USDC)"},
      {id:"B",teks:"Crypto-collateralized: dijamin oleh aset kripto dengan over-collateralization (contoh: DAI)"},
      {id:"C",teks:"Algoritmik: menggunakan algoritma minting/burning tanpa jaminan penuh (contoh: UST)"},
      {id:"D",teks:"Commodity-backed: dijamin oleh komoditas fisik seperti emas (contoh: PAXG)"}
    ],
    jawaban_benar:["A","B","C","D"],
    penjelasan:"Keempat jenis stablecoin tersebut valid. Fiat-collateralized (USDT/USDC), crypto-collateralized (DAI via MakerDAO), algoritmik (UST yang gagal), dan commodity-backed (PAXG dijamin emas) adalah kategori yang diakui dalam industri.",
    skor_penuh:3
  },

  /* ====== TIPE C — BENAR/SALAH HOTS (7 soal) ====== */
  {
    id:22, tipe:"benar-salah", topik:"Ekonomi Makro",
    pertanyaan:"Evaluasi pernyataan berikut tentang inflasi dan indikator ekonomi:",
    pernyataan:[
      {teks:"CPI mengukur perubahan harga rata-rata sekumpulan barang dan jasa yang dikonsumsi rumah tangga.",benar:true},
      {teks:"Core inflation mengecualikan harga makanan dan energi karena volatilitasnya tinggi.",benar:true},
      {teks:"PPI mengukur inflasi dari perspektif konsumen akhir (end consumer).",benar:false},
      {teks:"Target inflasi The Fed sebesar 2% diukur menggunakan PCE Price Index.",benar:true}
    ],
    jawaban_benar:["T","T","S","T"],
    penjelasan:"CPI dan PCE mengukur inflasi dari sisi konsumen, sedangkan PPI mengukur dari sisi produsen (bukan konsumen akhir). Core inflation memang mengecualikan makanan dan energi. The Fed menggunakan PCE sebagai target inflasi 2%.",
    skor_penuh:2
  },
  {
    id:23, tipe:"benar-salah", topik:"Crypto",
    pertanyaan:"Evaluasi pernyataan berikut tentang stablecoin Tether (USDT):",
    pernyataan:[
      {teks:"USDT adalah stablecoin dengan market capitalization terbesar di dunia.",benar:true},
      {teks:"Cadangan USDT terdiri dari US Treasury Bills, repo agreements, dan instrumen lainnya.",benar:true},
      {teks:"Tether bersifat fully decentralized dan tidak bisa dibekukan oleh pihak manapun.",benar:false},
      {teks:"De-peg USDT dapat memicu efek domino likuiditas di seluruh pasar kripto.",benar:true},
      {teks:"Tether secara rutin bekerja sama dengan penegak hukum untuk membekukan alamat yang terlibat kejahatan.",benar:true}
    ],
    jawaban_benar:["T","T","S","T","T"],
    penjelasan:"USDT memang stablecoin terbesar. Cadangannya terdiri dari T-Bills dan instrumen lain. Namun Tether BUKAN decentralized — Tether Limited memiliki kontrol terpusat dan bisa membekukan alamat atas permintaan penegak hukum. De-peg USDT akan berdampak sistemik pada likuiditas kripto.",
    skor_penuh:2
  },
  {
    id:24, tipe:"benar-salah", topik:"Crypto",
    pertanyaan:"Evaluasi pernyataan berikut tentang Bitcoin halving dan dampaknya:",
    pernyataan:[
      {teks:"Bitcoin halving terjadi setiap 210.000 blok atau sekitar 4 tahun sekali.",benar:true},
      {teks:"Setiap halving dalam sejarah Bitcoin selalu diikuti bull run dalam 12-18 bulan.",benar:false},
      {teks:"Halving mengurangi biaya operasional penambang secara proporsional.",benar:false},
      {teks:"Stock-to-flow ratio Bitcoin meningkat setelah setiap halving.",benar:true},
      {teks:"Dampak halving terhadap harga semakin besar secara persentase setiap siklus.",benar:false}
    ],
    jawaban_benar:["T","S","S","T","S"],
    penjelasan:"Halving memang setiap ~4 tahun. Namun tidak 'selalu' diikuti bull run (meski historis menunjukkan demikian, korelasi ≠ kausalitas). Halving TIDAK mengurangi biaya operasional penambang — justru memotong pendapatan sementara biaya tetap. S2F ratio memang meningkat. Dampak persentase justru MENURUN setiap siklus karena market cap semakin besar.",
    skor_penuh:2
  },
  {
    id:25, tipe:"benar-salah", topik:"Ekonomi Makro",
    pertanyaan:"Evaluasi pernyataan berikut tentang kebijakan moneter dan pasar tenaga kerja:",
    pernyataan:[
      {teks:"Nonfarm Payrolls (NFP) adalah salah satu indikator ketenagakerjaan yang paling diperhatikan pasar.",benar:true},
      {teks:"Kurva Phillips menunjukkan hubungan terbalik antara pengangguran dan inflasi dalam jangka pendek.",benar:true},
      {teks:"Hukum Okun menyatakan setiap kenaikan 1% pengangguran berkorelasi dengan penurunan ~2% GDP.",benar:true},
      {teks:"Full employment berarti tingkat pengangguran sama dengan nol.",benar:false},
      {teks:"Wage-push inflation terjadi ketika kenaikan upah mendorong harga barang dan jasa naik.",benar:true}
    ],
    jawaban_benar:["T","T","T","S","T"],
    penjelasan:"NFP, Phillips Curve, dan Okun's Law adalah konsep makro standar. Namun full employment BUKAN berarti pengangguran nol — ekonomi selalu memiliki natural rate of unemployment (NAIRU) yang mencakup friksional dan struktural, biasanya 3-5%. Wage-push inflation adalah fenomena nyata.",
    skor_penuh:2
  },
  {
    id:26, tipe:"benar-salah", topik:"Crypto",
    pertanyaan:"Evaluasi pernyataan berikut tentang altseason dan dinamika pasar altcoin:",
    pernyataan:[
      {teks:"Altseason biasanya dimulai setelah Bitcoin rally besar dan dominasi BTC mulai menurun.",benar:true},
      {teks:"Selama altseason, dominasi Bitcoin terhadap total market cap kripto menurun signifikan.",benar:true},
      {teks:"Altseason hanya bisa terjadi jika Ethereum memimpin kenaikan terlebih dahulu.",benar:false},
      {teks:"Meme coins dan token naratif cenderung mengalami lonjakan harga selama altseason.",benar:true},
      {teks:"Volume transaksi on-chain di jaringan Ethereum dan L2 meningkat selama altseason.",benar:true}
    ],
    jawaban_benar:["T","T","S","T","T"],
    penjelasan:"Altseason memang dipicu setelah BTC rally lalu sideways dan dominasi turun. Namun Ethereum TIDAK harus memimpin dulu — altseason bisa didorong narasi sektor lain (AI, DePIN, Gaming). Meme coins dan on-chain activity memang meningkat selama altseason.",
    skor_penuh:2
  },
  {
    id:27, tipe:"benar-salah", topik:"Ekonomi Makro",
    pertanyaan:"Evaluasi pernyataan berikut tentang siklus utang dan krisis keuangan:",
    pernyataan:[
      {teks:"Ray Dalio membedakan antara short-term debt cycle (5-10 tahun) dan long-term debt cycle (50-75 tahun).",benar:true},
      {teks:"Dalam short-term debt cycle, bank sentral dapat mengendalikan resesi dengan menurunkan suku bunga.",benar:true},
      {teks:"Long-term debt crisis selalu dapat diselesaikan oleh bank sentral tanpa perlu deleveraging.",benar:false},
      {teks:"Deleveraging dapat terjadi melalui austerity, debt restructuring, money printing, atau wealth transfer.",benar:true},
      {teks:"Rasio utang terhadap GDP Indonesia relatif aman dibanding negara-negara maju.",benar:true}
    ],
    jawaban_benar:["T","T","S","T","T"],
    penjelasan:"Framework Ray Dalio tentang debt cycle sudah diterima luas. Short-term cycle memang bisa dikelola bank sentral. Namun long-term debt crisis TIDAK selalu bisa diselesaikan tanpa deleveraging — di titik ini suku bunga sudah di zero lower bound. Deleveraging punya 4 jalur. Debt-to-GDP Indonesia ~38% memang relatif rendah.",
    skor_penuh:2
  },
  {
    id:28, tipe:"benar-salah", topik:"Crypto",
    pertanyaan:"Evaluasi pernyataan berikut tentang Bitcoin ETF dan adopsi institusional:",
    pernyataan:[
      {teks:"Spot Bitcoin ETF pertama disetujui SEC pada Januari 2024.",benar:true},
      {teks:"BlackRock IBIT menjadi ETF tercepat dalam sejarah AS yang mencapai AUM $10 miliar.",benar:true},
      {teks:"ETF Bitcoin spot menghilangkan sepenuhnya risiko custody kripto bagi investor.",benar:false},
      {teks:"MicroStrategy mengakumulasi BTC menggunakan strategi leverage melalui penerbitan obligasi dan saham.",benar:true},
      {teks:"Adopsi institusional cenderung meningkatkan korelasi Bitcoin dengan pasar saham tradisional.",benar:true}
    ],
    jawaban_benar:["T","T","S","T","T"],
    penjelasan:"Spot BTC ETF disetujui Januari 2024. IBIT BlackRock memang memecahkan rekor AUM. Namun ETF TIDAK menghilangkan sepenuhnya risiko custody — investor tetap bergantung pada custodian (Coinbase, dll) yang memiliki risiko counterparty. MicroStrategy dan korelasi dengan saham adalah fakta.",
    skor_penuh:2
  },

  /* ====== TIPE D — SEBAB-AKIBAT HOTS TAMBAHAN (14 soal) ====== */
  {
    id:29, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Kenaikan suku bunga acuan secara agresif oleh bank sentral dapat memicu perlambatan ekonomi.",
    alasan:"Suku bunga tinggi meningkatkan biaya pinjaman bagi bisnis dan konsumen, mengurangi investasi dan konsumsi.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan berhubungan langsung. Kenaikan suku bunga meningkatkan cost of borrowing → mengurangi capital expenditure bisnis dan konsumsi rumah tangga → aggregate demand turun → ekonomi melambat. Ini adalah mekanisme transmisi kebijakan moneter standar.",
    skor_penuh:4
  },
  {
    id:30, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Inflasi yang persisten dan tinggi dapat mengikis kepercayaan publik terhadap bank sentral.",
    alasan:"Bank sentral yang gagal mengendalikan inflasi dianggap tidak kredibel, membuat ekspektasi inflasi menjadi unanchored.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Kredibilitas bank sentral bergantung pada kemampuan mengendalikan inflasi. Ketika inflasi persisten tinggi (seperti 2022), publik kehilangan kepercayaan → ekspektasi inflasi tidak lagi ter-anchored → wage-price spiral → inflasi semakin sulit dikendalikan.",
    skor_penuh:4
  },
  {
    id:31, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Bond yield memiliki hubungan terbalik dengan harga obligasi yang sudah beredar.",
    alasan:"Ketika yield pasar naik, obligasi lama dengan kupon lebih rendah menjadi kurang menarik sehingga harganya turun.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Hubungan terbalik yield-harga adalah prinsip fundamental fixed income. Ketika yield baru naik (misal 5%), obligasi lama dengan kupon 3% harus dijual dengan diskon agar yield-to-maturity-nya kompetitif. Ini adalah mekanisme pricing obligasi standar.",
    skor_penuh:4
  },
  {
    id:32, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Quantitative Easing (QE) yang berlebihan dapat menyebabkan inflasi aset tanpa memicu inflasi barang konsumsi secara proporsional.",
    alasan:"Likuiditas dari QE cenderung mengalir ke aset keuangan (saham, properti, kripto) karena pelaku pasar mencari return lebih tinggi.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Periode QE 2008-2020 menunjukkan inflasi aset (saham, real estate) jauh lebih tinggi dari CPI. Mekanisme: likuiditas berlebih → financial institutions mencari yield → dana mengalir ke aset → harga aset naik. Efek wealth inequality meningkat karena pemilik aset diuntungkan.",
    skor_penuh:4
  },
  {
    id:33, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Bear market kripto cenderung berlangsung lebih lama dan lebih dalam dibanding bear market saham tradisional.",
    alasan:"Pasar kripto beroperasi 24/7 tanpa circuit breaker, memiliki leverage tinggi yang tersebar luas, dan didominasi investor retail.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. BTC pernah turun >80% (2018, 2022). Faktor: 24/7 trading tanpa circuit breaker memungkinkan panic selling tanpa henti, leverage tinggi menyebabkan liquidation cascade, dan dominasi retail (yang cenderung panic sell) memperdalam penurunan.",
    skor_penuh:4
  },
  {
    id:34, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Dominasi Bitcoin cenderung meningkat saat pasar memasuki fase bear market.",
    alasan:"Investor melakukan flight to quality dalam ekosistem kripto, menjual altcoin yang lebih berisiko dan kembali ke Bitcoin.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. BTC dominance naik dari ~40% ke ~60%+ selama bear market 2022. Mekanisme: risk-off sentiment → altcoin turun lebih dalam dari BTC → investor rotasi ke BTC sebagai 'blue chip' kripto → dominance naik.",
    skor_penuh:4
  },
  {
    id:35, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Indeks Dolar AS (DXY) yang menguat cenderung menekan harga komoditas global.",
    alasan:"Sebagian besar komoditas diperdagangkan dalam dolar AS, sehingga dollar yang lebih kuat membuat komoditas lebih mahal bagi pembeli non-USD.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Komoditas (minyak, emas, tembaga) di-price dalam USD. Dollar kuat → harga efektif naik bagi pembeli EUR/CNY/JPY → demand turun → harga komoditas tertekan. Ini dikenal sebagai 'dollar wrecking ball' effect.",
    skor_penuh:4
  },
  {
    id:36, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Persetujuan ETF Bitcoin spot oleh SEC membuka akses bagi investor institusional tradisional.",
    alasan:"ETF menyediakan wrapper investasi yang teregulasi, memungkinkan dana pensiun dan wealth manager mengalokasikan ke Bitcoin tanpa custody langsung.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. ETF spot (Januari 2024) memberikan akses regulated melalui broker tradisional. Dana pensiun, endowment, dan RIA yang sebelumnya terbatas oleh mandate sekarang bisa alokasi ke BTC via ETF → inflow miliaran dolar dalam bulan-bulan pertama.",
    skor_penuh:4
  },
  {
    id:37, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Yield curve inversion telah secara historis memprediksi hampir semua resesi AS sejak 1950-an.",
    alasan:"Ketika investor mengantisipasi perlambatan ekonomi, mereka membeli obligasi jangka panjang sehingga yield jangka panjang turun di bawah jangka pendek.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Yield curve inversion (2Y > 10Y) memprediksi hampir semua resesi AS. Mekanismenya: ekspektasi resesi → demand obligasi jangka panjang naik → yield jangka panjang turun → inversion. Ini mencerminkan market pricing in future rate cuts.",
    skor_penuh:4
  },
  {
    id:38, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Real yield (yield nominal dikurangi ekspektasi inflasi) yang tinggi cenderung menekan valuasi aset pertumbuhan.",
    alasan:"Discount rate yang lebih tinggi mengurangi present value dari arus kas masa depan yang menjadi basis valuasi growth stocks.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Real yield = nominal yield - inflation expectations. Growth stocks valued berdasarkan DCF (discounted cash flow). Discount rate naik → present value future earnings turun → valuation compression. Ini menjelaskan mengapa tech stocks tertekan saat real yield naik 2022-2023.",
    skor_penuh:4
  },
  {
    id:39, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Meningkatnya adopsi stablecoin di negara berkembang berkaitan dengan kelemahan mata uang lokal dan kontrol modal.",
    alasan:"Warga di negara dengan mata uang yang terdepresiasi atau kontrol modal ketat menggunakan stablecoin sebagai alternatif dollar AS digital.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Negara seperti Argentina, Turki, Nigeria menunjukkan adopsi stablecoin tinggi. Mekanisme: mata uang lokal lemah + kontrol modal → kebutuhan akan USD → stablecoin sebagai akses digital ke dollar tanpa perlu rekening bank AS → adopsi meningkat.",
    skor_penuh:4
  },
  {
    id:40, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Siklus likuiditas global memiliki korelasi kuat dengan performa aset berisiko termasuk kripto.",
    alasan:"Ekspansi likuiditas (QE, pemotongan suku bunga) mendorong modal ke aset berisiko karena investor mencari yield di luar instrumen safe-haven.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Global liquidity cycle (diukur M2 global) berkorelasi tinggi dengan BTC, saham, dan aset risiko lainnya. Mekanisme: likuiditas naik → safe-haven yields rendah → search for yield → dana mengalir ke aset risiko → harga naik. Sebaliknya, kontraksi likuiditas menekan semua aset risiko.",
    skor_penuh:4
  },
  {
    id:41, tipe:"sebab-akibat", topik:"Crypto",
    pernyataan:"Peristiwa The Merge (September 2022) mengurangi konsumsi energi Ethereum secara drastis.",
    alasan:"Transisi dari Proof-of-Work ke Proof-of-Stake menghilangkan kebutuhan komputasi intensif untuk mining, menurunkan konsumsi energi sekitar 99.95%.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. The Merge (15 Sep 2022) mengganti PoW dengan PoS. PoW membutuhkan miner dengan GPU/ASIC yang mengonsumsi listrik besar. PoS hanya butuh validator dengan stake → konsumsi energi turun ~99.95% (dari setara konsumsi sebuah negara kecil menjadi setara jaringan komputer biasa).",
    skor_penuh:4
  },
  {
    id:42, tipe:"sebab-akibat", topik:"Ekonomi Makro",
    pernyataan:"Kebijakan moneter kontraktif cenderung menguatkan nilai tukar mata uang domestik terhadap mata uang asing.",
    alasan:"Suku bunga yang lebih tinggi menarik aliran modal asing (capital inflow) yang mencari yield lebih tinggi, meningkatkan demand terhadap mata uang domestik.",
    opsi:[
      {id:"A",teks:"Pernyataan BENAR, Alasan BENAR, dan Alasan merupakan sebab yang tepat"},
      {id:"B",teks:"Pernyataan BENAR, Alasan BENAR, tetapi Alasan BUKAN sebab yang tepat"},
      {id:"C",teks:"Pernyataan BENAR, Alasan SALAH"},
      {id:"D",teks:"Pernyataan SALAH, Alasan BENAR"},
      {id:"E",teks:"Pernyataan SALAH, Alasan SALAH"}
    ],
    jawaban_benar:["A"],
    penjelasan:"Keduanya benar dan sebab-akibat langsung. Rate hike → yield domestik naik → foreign investors beli obligasi domestik → butuh mata uang lokal → demand naik → nilai tukar menguat. Contoh: USD menguat signifikan 2022 saat The Fed agresif menaikkan suku bunga sementara bank sentral lain lebih dovish.",
    skor_penuh:4
  }
];

/* ================================================================
   GAME STATE
   ================================================================ */
let state = {
  questions: [],
  currentIndex: 0,
  score: 0,
  skorHots: 0,
  skorMcma: 0,
  answers: [],
  timerInterval: null,
  timeLeft: 0,
  soundEnabled: true,
  submitted: false
};

/* ================================================================
   FISHER-YATES SHUFFLE
   ================================================================ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function prepareQuestions() {
  // HOTS pool: original 7 + 7 benar/salah + 14 new sebab-akibat = 28 total
  const hotsIds = [1,2,3,4,5,6,7, 22,23,24,25,26,27,28, 29,30,31,32,33,34,35,36,37,38,39,40,41,42];
  const mcmaIds = [8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  const shuffledHots = shuffle(hotsIds);
  const shuffledMcma = shuffle(mcmaIds);
  // Select 7 HOTS + 14 MCMA = 21 per game
  const positions = new Array(21);
  const hotsPositions = [0,3,6,9,12,15,18];
  const mcmaPositions = [1,2,4,5,7,8,10,11,13,14,16,17,19,20];
  hotsPositions.forEach((pos, i) => { positions[pos] = shuffledHots[i]; });
  mcmaPositions.forEach((pos, i) => { positions[pos] = shuffledMcma[i]; });
  state.questions = positions.map(id => quizData.find(q => q.id === id));
}

/* ================================================================
   SCREEN MANAGEMENT
   ================================================================ */
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

/* ================================================================
   USERNAME VALIDATION
   ================================================================ */
function validateUsername(name) {
  const blocked = [
    /\b(gmail|yahoo|hotmail|email|password|pass|pw|@)\b/i,
    /(.)\1{4,}/,
    /^[^a-zA-Z]/,
    /[^a-zA-Z0-9_.\- ]/,
    /^\s*$/,
    /\b(qwerty|asdf|test|xxx|123|abc)\b/i
  ];
  return !blocked.some(r => r.test(name));
}

/* ================================================================
   START QUIZ
   ================================================================ */
function startQuiz() {
  const usernameInput = document.getElementById('input-username');
  const usernameError = document.getElementById('username-error');
  const username = usernameInput.value.trim();

  if (!validateUsername(username)) {
    usernameInput.classList.add('is-invalid');
    usernameError.textContent = 'Gunakan nama asli atau username media sosial kamu. Hindari nama asal-asalan, karakter berulang, atau data sensitif.';
    return;
  }

  usernameInput.classList.remove('is-invalid');
  usernameError.textContent = '';
  sessionStorage.setItem('quizUsername', username);

  prepareQuestions();
  state.currentIndex = 0;
  state.score = 0;
  state.skorHots = 0;
  state.skorMcma = 0;
  state.answers = [];
  showScreen('screen-quiz');
  renderQuestion();
}

/* ================================================================
   RENDER QUESTION
   ================================================================ */
function renderQuestion() {
  const q = state.questions[state.currentIndex];
  const i = state.currentIndex;
  state.submitted = false;

  // Badge
  const badge = document.getElementById('badge-tipe');
  if (q.tipe === 'sebab-akibat') {
    badge.className = 'badge-tipe badge-hots';
    badge.textContent = 'HOTS Sebab-Akibat';
  } else if (q.tipe === 'benar-salah') {
    badge.className = 'badge-tipe badge-hots';
    badge.textContent = 'HOTS Benar/Salah';
  } else {
    badge.className = 'badge-tipe badge-mcma';
    badge.textContent = 'MCMA';
  }

  // Counter
  document.getElementById('soal-counter').textContent = 'Soal ' + (i+1) + ' / 21';

  // Progress
  document.getElementById('progress-bar').style.width = ((i+1)/21*100) + '%';

  // Score
  document.getElementById('current-score').textContent = state.score;

  // Topic
  document.getElementById('question-topik').textContent = q.topik;

  // Content
  const content = document.getElementById('question-content');
  if (q.tipe === 'sebab-akibat') {
    content.innerHTML =
      '<div class="mb-3 p-3 rounded-3" style="background:rgba(0,245,160,.05);border-left:3px solid var(--accent-green)">' +
        '<div style="font-size:.78rem;color:var(--accent-green);font-weight:600;margin-bottom:4px">PERNYATAAN</div>' +
        '<div style="font-size:.95rem;line-height:1.6">' + q.pernyataan + '</div>' +
      '</div>' +
      '<div class="mb-2 p-3 rounded-3" style="background:rgba(123,97,255,.05);border-left:3px solid var(--accent-purple)">' +
        '<div style="font-size:.78rem;color:var(--accent-purple);font-weight:600;margin-bottom:4px">ALASAN</div>' +
        '<div style="font-size:.95rem;line-height:1.6">' + q.alasan + '</div>' +
      '</div>' +
      '<div class="mt-3 opacity-60" style="font-size:.85rem">Pilih hubungan yang tepat antara Pernyataan dan Alasan:</div>';
  } else if (q.tipe === 'benar-salah') {
    var stmtHtml = '<div style="font-size:1.05rem;line-height:1.6;font-weight:500">' + q.pertanyaan + '</div>';
    q.pernyataan.forEach(function(s, idx) {
      stmtHtml += '<div class="mt-2 p-2 rounded-3" style="background:rgba(255,255,255,.03);font-size:.92rem;line-height:1.5"><span style="color:var(--accent-purple);font-weight:700">' + (idx+1) + '.</span> ' + s.teks + '</div>';
    });
    stmtHtml += '<div class="mt-3 opacity-60" style="font-size:.82rem">Pilih pernyataan yang <strong style="color:var(--accent-green)">BENAR</strong> (biarkan tidak terpilih jika menurutmu SALAH):</div>';
    content.innerHTML = stmtHtml;
  } else {
    content.innerHTML =
      '<div style="font-size:1.05rem;line-height:1.6;font-weight:500">' + q.pertanyaan + '</div>' +
      '<div class="mt-2 opacity-60" style="font-size:.82rem">Pilih semua jawaban yang benar (bisa lebih dari satu):</div>';
  }

  // Options
  const optContainer = document.getElementById('options-container');
  optContainer.innerHTML = '';
  if (q.tipe === 'benar-salah') {
    q.pernyataan.forEach(function(s, idx) {
      var div = document.createElement('div');
      div.className = 'option-card';
      div.setAttribute('data-id', String(idx + 1));
      div.innerHTML = '<div class="checkbox-indicator"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text"><span style="color:var(--accent-purple);font-weight:600">Pernyataan ' + (idx+1) + ':</span> ' + s.teks + '</div>';
      div.addEventListener('click', function() { selectOption(String(idx + 1), q.tipe); });
      optContainer.appendChild(div);
    });
  } else {
    q.opsi.forEach(function(opt, idx) {
      var div = document.createElement('div');
      div.className = 'option-card';
      div.setAttribute('data-id', opt.id);
      if (q.tipe === 'sebab-akibat') {
        div.innerHTML = '<div class="option-label">(' + opt.id + ')</div><div class="option-text">' + opt.teks + '</div>';
      } else {
        div.innerHTML = '<div class="checkbox-indicator"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div><div class="option-text">' + opt.teks + '</div>';
      }
      div.addEventListener('click', function() { selectOption(opt.id, q.tipe); });
      optContainer.appendChild(div);
    });
  }

  // Keyboard shortcuts hint — update existing element, never duplicate
  let keyHint = document.getElementById('keyboard-hint');
  if (q.tipe === 'sebab-akibat') {
    keyHint.textContent = 'Keyboard: tekan 1-5 untuk memilih, Enter untuk submit';
  } else if (q.tipe === 'benar-salah') {
    keyHint.textContent = 'Keyboard: tekan 1-' + q.pernyataan.length + ' toggle Benar/Salah, Enter untuk submit, Space toggle semua';
  } else {
    keyHint.textContent = 'Keyboard: tekan 1-5 toggle opsi, Enter untuk submit, Space toggle semua';
  }

  // Buttons
  document.getElementById('btn-submit').style.display = '';
  document.getElementById('btn-submit').disabled = true;
  document.getElementById('btn-next').style.display = 'none';
  document.getElementById('feedback-container').style.display = 'none';

  // Timer
  startTimer(q.tipe === 'sebab-akibat' ? 45 : 60);

  // Animation
  const container = document.getElementById('question-container');
  container.classList.remove('question-slide-in');
  void container.offsetWidth;
  container.classList.add('question-slide-in');

  window.scrollTo({top: 0, behavior: 'smooth'});
}

/* ================================================================
   OPTION SELECTION
   ================================================================ */
function selectOption(optId, tipe) {
  if (state.submitted) return;
  const q = state.questions[state.currentIndex];
  if (tipe === 'sebab-akibat') {
    document.querySelectorAll('#options-container .option-card').forEach(c => c.classList.remove('selected'));
    document.querySelector('#options-container .option-card[data-id="'+optId+'"]').classList.add('selected');
    document.getElementById('btn-submit').disabled = false;
  } else {
    // MCMA and benar-salah both use toggle selection
    const card = document.querySelector('#options-container .option-card[data-id="'+optId+'"]');
    card.classList.toggle('selected');
    const anySelected = document.querySelectorAll('#options-container .option-card.selected').length > 0;
    document.getElementById('btn-submit').disabled = !anySelected;
  }
}

function getSelectedOptions() {
  const selected = [];
  document.querySelectorAll('#options-container .option-card.selected').forEach(c => {
    selected.push(c.getAttribute('data-id'));
  });
  return selected;
}

/* ================================================================
   SCORING ENGINE
   ================================================================ */
function hitungSkor(tipe, jawabanUser, jawabanBenar, q) {
  if (tipe === 'sebab-akibat') {
    if (jawabanUser.length === 0) return 0;
    if (jawabanUser[0] === jawabanBenar[0]) return 4;
    return -1;
  }
  if (tipe === 'benar-salah' && q) {
    // Granular per-statement: selected=Benar, not selected=Salah
    var score = 0;
    q.pernyataan.forEach(function(s, idx) {
      var stmtId = String(idx + 1);
      var userSaysBenar = jawabanUser.includes(stmtId);
      var isBenar = s.benar;
      if (userSaysBenar === isBenar) {
        score += 2; // correct
      } else {
        score -= 1; // wrong
      }
    });
    return score;
  }
  if (tipe === 'mcma') {
    if (jawabanUser.length === 0) return 0;
    const hasWrong = jawabanUser.some(a => !jawabanBenar.includes(a));
    if (hasWrong) return 0;
    const allCorrect = jawabanBenar.every(a => jawabanUser.includes(a));
    if (allCorrect) return 3;
    return 1;
  }
  return 0;
}

/* ================================================================
   TIMER
   ================================================================ */
function startTimer(seconds) {
  clearInterval(state.timerInterval);
  state.timeLeft = seconds;
  const maxTime = seconds;
  updateTimerDisplay(maxTime);
  state.timerInterval = setInterval(() => {
    state.timeLeft--;
    updateTimerDisplay(maxTime);
    if (state.timeLeft <= 0) {
      clearInterval(state.timerInterval);
      autoSubmitTimeout();
    }
  }, 1000);
}

function updateTimerDisplay(maxTime) {
  const el = document.getElementById('timer-text');
  const bar = document.getElementById('timer-bar');
  el.textContent = state.timeLeft + 's';
  const pct = (state.timeLeft / maxTime) * 100;
  bar.style.width = pct + '%';
  if (state.timeLeft <= 5) {
    bar.style.background = 'var(--danger)';
    el.classList.add('timer-danger');
  } else if (state.timeLeft <= 15) {
    bar.style.background = '#ffd166';
    el.classList.remove('timer-danger');
  } else {
    bar.style.background = 'var(--accent-green)';
    el.classList.remove('timer-danger');
  }
}

function autoSubmitTimeout() {
  if (state.submitted) return;
  const q = state.questions[state.currentIndex];
  const userAns = getSelectedOptions();
  showFeedback(q, userAns, true);
}

/* ================================================================
   SUBMIT ANSWER
   ================================================================ */
function submitAnswer() {
  if (state.submitted) return;
  clearInterval(state.timerInterval);
  const q = state.questions[state.currentIndex];
  const userAns = getSelectedOptions();
  showFeedback(q, userAns, false);
}

function showFeedback(q, userAns, isTimeout) {
  state.submitted = true;
  const skor = isTimeout && userAns.length === 0 ? 0 : hitungSkor(q.tipe, userAns, q.jawaban_benar, q);
  state.score += skor;
  if (q.tipe === 'sebab-akibat' || q.tipe === 'benar-salah') state.skorHots += skor;
  else state.skorMcma += skor;

  state.answers.push({
    question: q,
    userAnswer: userAns,
    score: skor,
    timeout: isTimeout && userAns.length === 0
  });

  document.getElementById('current-score').textContent = state.score;

  // Highlight correct/wrong options
  document.querySelectorAll('#options-container .option-card').forEach(card => {
    const id = card.getAttribute('data-id');
    card.classList.add('disabled');
    if (q.tipe === 'benar-salah') {
      // For benar-salah: idx is statement index, check per-statement
      var idx = parseInt(id) - 1;
      var isBenar = q.pernyataan[idx] && q.pernyataan[idx].benar;
      var userSaysBenar = userAns.includes(id);
      if (isBenar && userSaysBenar) card.classList.add('correct');
      else if (!isBenar && !userSaysBenar) card.classList.add('correct');
      else card.classList.add('wrong');
    } else {
      if (q.jawaban_benar.includes(id)) {
        card.classList.add('correct');
      } else if (userAns.includes(id)) {
        card.classList.add('wrong');
      }
    }
  });

  const fb = document.getElementById('feedback-container');
  let fbClass, fbIcon, fbTitle;
  if (isTimeout && userAns.length === 0) {
    fbClass = 'feedback-timeout';
    fbIcon = svgIcon('clock', 20);
    fbTitle = 'Waktu Habis! (Skor: 0)';
  } else if (skor > 0) {
    fbClass = 'feedback-correct';
    fbIcon = svgIcon('check', 20);
    var maxSkorQ = q.tipe==='sebab-akibat' ? 4 : q.tipe==='benar-salah' ? q.pernyataan.length*2 : 3;
    fbTitle = (skor === maxSkorQ) ? 'Sempurna! (+' + skor + ' poin)' : 'Sebagian Benar (+' + skor + ' poin)';
  } else {
    fbClass = 'feedback-wrong';
    fbIcon = svgIcon('xmark', 20);
    fbTitle = 'Salah (' + skor + ' poin)';
  }

  // Build per-statement breakdown for benar-salah
  var breakdownHtml = '';
  if (q.tipe === 'benar-salah') {
    breakdownHtml = '<div class="mt-2 mb-2" style="font-size:.88rem">';
    q.pernyataan.forEach(function(s, idx) {
      var stmtId = String(idx + 1);
      var userSaysBenar = userAns.includes(stmtId);
      var isBenar = s.benar;
      var isCorrect = (userSaysBenar === isBenar);
      var icon = isCorrect ? '\u2705' : '\u274C';
      var label = isBenar ? 'Benar' : 'Salah';
      var yourLabel = userSaysBenar ? 'Benar' : 'Salah';
      breakdownHtml += '<div style="padding:4px 0">' + icon + ' <strong>P' + (idx+1) + ':</strong> Jawaban = <em>' + label + '</em>, Kamu = <em>' + yourLabel + '</em></div>';
    });
    breakdownHtml += '</div>';
  }

  fb.style.display = '';
  fb.innerHTML = '<div class="feedback-box ' + fbClass + '">' +
    '<div class="d-flex align-items-center gap-2 mb-2 fw-bold">' + fbIcon + ' ' + fbTitle + '</div>' +
    breakdownHtml +
    '<div style="font-size:.9rem;line-height:1.6;opacity:.85">' +
      '<strong>Penjelasan:</strong> ' + q.penjelasan +
    '</div>' +
  '</div>';

  if (state.soundEnabled) playSound(skor > 0 ? 'correct' : 'wrong');

  document.getElementById('btn-submit').style.display = 'none';
  document.getElementById('btn-next').style.display = '';
}

/* ================================================================
   NEXT QUESTION
   ================================================================ */
function nextQuestion() {
  state.currentIndex++;
  if (state.currentIndex >= state.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

/* ================================================================
   GRADE MAP — single source of truth for grade titles & colors
   ================================================================ */
const gradeMap = {
  A: { title: 'Crypto Expert \u{1F680}', css: 'grade-a', color: '#00F5A0' },
  B: { title: 'DeFi Analyst \u{1F4CA}',  css: 'grade-b', color: '#7B61FF' },
  C: { title: 'Hodler Sejati \u{1F48E}',  css: 'grade-c', color: '#FFD700' },
  D: { title: 'Blockchain Learner \u{1F4DA}', css: 'grade-d', color: '#64B5F6' },
  E: { title: 'Back to Basics \u{1F504}', css: 'grade-e', color: '#FF4C6A' }
};

/* ================================================================
   RESULTS
   ================================================================ */
function showResults() {
  clearInterval(state.timerInterval);
  showScreen('screen-result');
  // Dynamic max score based on actual questions in this session
  const maxSkor = state.questions.reduce(function(sum, q) {
    if (q.tipe === 'sebab-akibat') return sum + 4;
    if (q.tipe === 'benar-salah') return sum + q.pernyataan.length * 2;
    return sum + 3; // MCMA
  }, 0);
  const maxHots = state.questions.reduce(function(sum, q) {
    if (q.tipe === 'sebab-akibat') return sum + 4;
    if (q.tipe === 'benar-salah') return sum + q.pernyataan.length * 2;
    return sum;
  }, 0);
  const pct = Math.round((state.score / maxSkor) * 100);
  let grade, gradeTitle, gradeClass;
  if (pct >= 90) { grade='A'; }
  else if (pct >= 75) { grade='B'; }
  else if (pct >= 60) { grade='C'; }
  else if (pct >= 45) { grade='D'; }
  else { grade='E'; }
  gradeTitle = gradeMap[grade].title;
  gradeClass = gradeMap[grade].css;

  state.grade = grade;

  const badge = document.getElementById('grade-badge');
  badge.className = 'grade-badge ' + gradeClass;
  badge.textContent = grade;

  document.getElementById('final-score').textContent = state.score + ' / ' + maxSkor;
  document.getElementById('final-pct').textContent = pct + '% benar';
  document.getElementById('grade-title').textContent = gradeTitle;
  document.getElementById('grade-title').style.color = gradeMap[grade].color;

  document.getElementById('skor-hots').textContent = state.skorHots + '/' + maxHots;
  document.getElementById('skor-mcma').textContent = state.skorMcma + '/42';

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';
  state.answers.forEach((ans, idx) => {
    const q = ans.question;
    const maxQ = q.tipe==='sebab-akibat' ? 4 : q.tipe==='benar-salah' ? q.pernyataan.length*2 : 3;
    const isCorrect = ans.score > 0 && ans.score === maxQ;
    const statusColor = ans.timeout ? '#ffc107' : isCorrect ? 'var(--accent-green)' : 'var(--danger)';
    const statusText = ans.timeout ? 'Timeout' : isCorrect ? 'Benar' : (ans.score > 0 ? 'Parsial' : 'Salah');

    const acc = document.createElement('div');
    acc.className = 'review-accordion';
    var reviewContent = '';
    if (q.tipe === 'sebab-akibat') {
      reviewContent = '<div class="mb-2"><strong>Pernyataan:</strong> '+q.pernyataan+'</div><div class="mb-2"><strong>Alasan:</strong> '+q.alasan+'</div>';
    } else if (q.tipe === 'benar-salah') {
      reviewContent = '<div class="mb-2"><strong>Pertanyaan:</strong> '+q.pertanyaan+'</div>';
      q.pernyataan.forEach(function(s, sIdx) {
        var stmtId = String(sIdx + 1);
        var userSaysBenar = ans.userAnswer.includes(stmtId);
        var isBenar = s.benar;
        var isOk = (userSaysBenar === isBenar);
        var icon = isOk ? '\u2705' : '\u274C';
        var correctLabel = isBenar ? 'Benar' : 'Salah';
        var userLabel = userSaysBenar ? 'Benar' : 'Salah';
        reviewContent += '<div style="padding:2px 0;font-size:.88rem">' + icon + ' <strong>P'+(sIdx+1)+':</strong> '+s.teks+' <br><span style="opacity:.7;font-size:.82rem">Jawaban: <em>'+correctLabel+'</em> | Kamu: <em>'+userLabel+'</em></span></div>';
      });
    } else {
      reviewContent = '<div class="mb-2"><strong>Pertanyaan:</strong> '+q.pertanyaan+'</div>';
    }
    var jawabanBenarDisplay = q.tipe === 'benar-salah' ?
      q.pernyataan.map(function(s){ return s.benar ? 'Benar' : 'Salah'; }).join(', ') :
      q.jawaban_benar.join(', ');
    acc.innerHTML =
      '<div class="review-header" onclick="this.nextElementSibling.classList.toggle(\'open\')">' +
        '<div><span style="color:'+statusColor+';font-weight:600">['+statusText+']</span> Soal '+(idx+1)+': '+q.topik+' — '+q.tipe+'</div>' +
        '<div style="font-weight:600;color:'+statusColor+'">'+ans.score+' pts</div>' +
      '</div>' +
      '<div class="review-body">' +
        reviewContent +
        '<div class="mb-2"><strong>Jawaban Anda:</strong> '+(ans.userAnswer.length?ans.userAnswer.join(', '):'<em>Tidak dijawab</em>')+'</div>' +
        '<div class="mb-2"><strong>Jawaban Benar:</strong> <span style="color:var(--accent-green)">'+jawabanBenarDisplay+'</span></div>' +
        '<div style="opacity:.8;font-size:.88rem"><strong>Penjelasan:</strong> '+q.penjelasan+'</div>' +
      '</div>';
    reviewList.appendChild(acc);
  });

  // Save score to Firestore
  const username = sessionStorage.getItem('quizUsername');
  if (username && window._db && window._db.saveScore) {
    window._db.saveScore(username, state.score, grade).catch(function(err) {
      console.warn('Failed to save score:', err);
    });
  }
}

function toggleAllReviews() {
  const bodies = document.querySelectorAll('.review-body');
  const anyOpen = Array.from(bodies).some(b => b.classList.contains('open'));
  bodies.forEach(b => { anyOpen ? b.classList.remove('open') : b.classList.add('open'); });
}

function restartQuiz() {
  startQuiz();
}

function goToIntro() {
  showScreen('screen-intro');
}

/* ================================================================
   LEADERBOARD
   ================================================================ */
let unsubscribeLeaderboard = null;

function showLeaderboard() {
  showScreen('screen-leaderboard');
  const tableContainer = document.getElementById('leaderboard-table');
  tableContainer.innerHTML = '<div class="text-center py-4 opacity-50">Memuat data...</div>';

  if (!window._db || !window._db.onLeaderboard) {
    tableContainer.innerHTML = '<div class="text-center py-4 opacity-50">Leaderboard tidak tersedia</div>';
    return;
  }

  if (unsubscribeLeaderboard) unsubscribeLeaderboard();

  unsubscribeLeaderboard = window._db.onLeaderboard(function(entries) {
    console.log('[Leaderboard] render called, entries:', entries ? entries.length : 0);
    if (!entries || entries.length === 0) {
      tableContainer.innerHTML = '<div class="text-center py-4 opacity-50">Belum ada data</div>';
      return;
    }

    // Client-side tiebreak: same score → earlier timestamp ranks higher
    entries.sort(function(a, b) {
      if (b.data.score !== a.data.score) return b.data.score - a.data.score;
      var ta = a.data.timestamp ? (a.data.timestamp.toMillis ? a.data.timestamp.toMillis() : 0) : 0;
      var tb = b.data.timestamp ? (b.data.timestamp.toMillis ? b.data.timestamp.toMillis() : 0) : 0;
      return ta - tb;
    });

    const currentUser = sessionStorage.getItem('quizUsername');

    let html = '<div class="lb-table">';
    html += '<div class="lb-row lb-header">';
    html += '<div class="lb-rank">Rank</div>';
    html += '<div class="lb-username">Username</div>';
    html += '<div class="lb-score">Skor</div>';
    html += '<div class="lb-grade">Grade</div>';
    html += '</div>';

    entries.forEach(function(entry, idx) {
      const data = entry.data;
      const isCurrentUser = data.username === currentUser;
      const rowClass = 'lb-row' + (isCurrentUser ? ' lb-highlight' : '');
      const g = gradeMap[data.grade] || { title: data.grade, color: '#adb5bd' };

      html += '<div class="' + rowClass + '">';
      html += '<div class="lb-rank">' + (idx + 1) + '</div>';
      html += '<div class="lb-username">' + data.username + (isCurrentUser ? ' <span style="color:var(--accent-green);font-size:.75rem">(You)</span>' : '') + '</div>';
      html += '<div class="lb-score">' + data.score + '</div>';
      html += '<div class="lb-grade"><span class="lb-grade-badge" style="background:' + g.color + '">' + data.grade + '</span><div class="lb-grade-title">' + g.title + '</div></div>';
      html += '</div>';
    });

    html += '</div>';
    tableContainer.innerHTML = html;
  });
}

/* ================================================================
   SOUND EFFECTS (Web Audio API — no external files)
   ================================================================ */
let audioCtx = null;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = 0.15;
    if (type === 'correct') {
      osc.frequency.value = 880;
      osc.type = 'sine';
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.3);
      osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else {
      osc.frequency.value = 220;
      osc.type = 'square';
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.4);
      osc.start(); osc.stop(audioCtx.currentTime + 0.4);
    }
  } catch(e) {}
}

function toggleSound() {
  state.soundEnabled = !state.soundEnabled;
  document.getElementById('icon-sound-on').style.display = state.soundEnabled ? '' : 'none';
  document.getElementById('icon-sound-off').style.display = state.soundEnabled ? 'none' : '';
}

/* ================================================================
   KEYBOARD SHORTCUTS
   ================================================================ */
document.addEventListener('keydown', function(e) {
  // Username input — Enter to start
  const introScreen = document.getElementById('screen-intro');
  if (introScreen && introScreen.classList.contains('active')) {
    const usernameInput = document.getElementById('input-username');
    if (document.activeElement === usernameInput && e.key === 'Enter') {
      e.preventDefault();
      startQuiz();
      return;
    }
  }

  const quizScreen = document.getElementById('screen-quiz');
  if (!quizScreen.classList.contains('active')) return;

  const q = state.questions[state.currentIndex];
  if (!q) return;

  if (e.key >= '1' && e.key <= '5') {
    e.preventDefault();
    const optIdx = parseInt(e.key) - 1;
    if (!state.submitted) {
      if (q.tipe === 'benar-salah') {
        if (optIdx < q.pernyataan.length) selectOption(String(optIdx + 1), q.tipe);
      } else if (optIdx < q.opsi.length) {
        selectOption(q.opsi[optIdx].id, q.tipe);
      }
    }
  }

  if (e.key === 'Enter') {
    e.preventDefault();
    if (!state.submitted) {
      if (!document.getElementById('btn-submit').disabled) submitAnswer();
    } else {
      nextQuestion();
    }
  }

  if (e.key === ' ' && (q.tipe === 'mcma' || q.tipe === 'benar-salah') && !state.submitted) {
    e.preventDefault();
    const cards = document.querySelectorAll('#options-container .option-card');
    const allSelected = cards.length > 0 && document.querySelectorAll('#options-container .option-card.selected').length === cards.length;
    cards.forEach(card => {
      if (allSelected) card.classList.remove('selected');
      else card.classList.add('selected');
    });
    const anySelected = document.querySelectorAll('#options-container .option-card.selected').length > 0;
    document.getElementById('btn-submit').disabled = !anySelected;
  }
});

/* ================================================================
   INITIALIZATION
   ================================================================ */
(function() {
  const savedUsername = sessionStorage.getItem('quizUsername');
  if (savedUsername) {
    const input = document.getElementById('input-username');
    if (input) input.value = savedUsername;
  }
})();
