// ==========================================
// 1. GENERATE STARS BACKGROUND
// ==========================================
const starsContainer = document.getElementById('stars');
if (starsContainer) {
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = Math.random() * 3 + 'px';
        star.style.height = star.style.width;
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// ==========================================
// 2. PLANET SCROLL ANIMATION (planet.html)
// ==========================================
const planetsScrollData = [
    { name: 'MERKURIUS', class: 'planet-mercury', desc: 'Planet terdekat dengan Matahari dan yang terkecil di tata surya. Permukaannya penuh dengan kawah seperti Bulan.', stats: { jarak: '57,9 juta km', suhu: '-173°C s/d 427°C', diameter: '4.879 km', rotasi: '59 hari Bumi' } },
    { name: 'VENUS', class: 'planet-venus', desc: 'Planet terpanas di tata surya dengan suhu mencapai 465°C. Sering disebut "Bintang Kejora" karena sangat terang.', stats: { jarak: '108,2 juta km', suhu: '465°C', diameter: '12.104 km', rotasi: '243 hari Bumi' } },
    { name: 'BUMI', class: 'planet-earth', desc: 'Satu-satunya planet yang diketahui memiliki kehidupan. Memiliki air dalam bentuk cair dan atmosfer yang melindungi.', stats: { jarak: '149,6 juta km', suhu: '-88°C s/d 58°C', diameter: '12.742 km', rotasi: '24 jam' } },
    { name: 'MARS', class: 'planet-mars', desc: 'Dikenal sebagai Planet Merah karena warnanya. Memiliki gunung tertinggi di tata surya, Olympus Mons.', stats: { jarak: '227,9 juta km', suhu: '-140°C s/d 20°C', diameter: '6.779 km', rotasi: '24,6 jam' } },
    { name: 'JUPITER', class: 'planet-jupiter', desc: 'Planet terbesar di tata surya. Memiliki bintik merah raksasa yang merupakan badai yang sudah berlangsung ratusan tahun.', stats: { jarak: '778,5 juta km', suhu: '-108°C', diameter: '139.820 km', rotasi: '9,9 jam' } },
    { name: 'SATURNUS', class: 'planet-saturn', desc: 'Terkenal dengan sistem cincinnya yang indah dan kompleks. Cincinnya terbuat dari partikel es dan batuan.', stats: { jarak: '1,43 miliar km', suhu: '-139°C', diameter: '116.460 km', rotasi: '10,7 jam' } },
    { name: 'URANUS', class: 'planet-uranus', desc: 'Planet yang berotasi miring hampir 98 derajat. Dijuluki "raksasa es" karena komposisinya.', stats: { jarak: '2,87 miliar km', suhu: '-197°C', diameter: '50.724 km', rotasi: '17,2 jam' } },
    { name: 'NEPTUNUS', class: 'planet-neptune', desc: 'Planet terjauh dari Matahari dengan angin tercepat di tata surya, mencapai 2.100 km/jam.', stats: { jarak: '4,5 miliar km', suhu: '-201°C', diameter: '49.244 km', rotasi: '16,1 jam' } }
];

let currentPlanet = 0;

function updatePlanet(index) {
    const planetVisual = document.getElementById('planetVisual');
    const planetInfo = document.getElementById('planetInfo');
    const progressDots = document.querySelectorAll('.progress-dot');
    
    if (!planetVisual || !planetInfo) return;
    
    const planet = planetsScrollData[index];
    planetVisual.className = `planet-visual ${planet.class}`;
    planetInfo.innerHTML = `
        <h2>${planet.name}</h2>
        <p>${planet.desc}</p>
        <div class="planet-stats">
            <div class="stat-box"><strong>Jarak dari Matahari</strong>${planet.stats.jarak}</div>
            <div class="stat-box"><strong>Suhu</strong>${planet.stats.suhu}</div>
            <div class="stat-box"><strong>Diameter</strong>${planet.stats.diameter}</div>
            <div class="stat-box"><strong>Periode Rotasi</strong>${planet.stats.rotasi}</div>
        </div>
    `;
    
    progressDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

if (document.querySelector('.planet-showcase')) {
    window.addEventListener('scroll', () => {
        const planetSection = document.querySelector('.planet-showcase');
        const rect = planetSection.getBoundingClientRect();
        const scrollTop = window.innerHeight - rect.top;
        const totalHeight = planetSection.offsetHeight - window.innerHeight;
        const progress = Math.min(Math.max(scrollTop / totalHeight, 0), 1);
        
        const newIndex = Math.floor(progress * (planetsScrollData.length - 1));
        if (newIndex !== currentPlanet) {
            currentPlanet = newIndex;
            updatePlanet(currentPlanet);
        }
    });

    const progressDots = document.querySelectorAll('.progress-dot');
    progressDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentPlanet = index;
            updatePlanet(currentPlanet);
            const planetSection = document.querySelector('.planet-showcase');
            const totalHeight = planetSection.offsetHeight - window.innerHeight;
            const targetScroll = (index / (planetsScrollData.length - 1)) * totalHeight + planetSection.offsetTop;
            window.scrollTo({ top: targetScroll, behavior: 'smooth' });
        });
    });
    
    updatePlanet(0);
}

// ==========================================
// 3. QUIZ INTERACTIVE (kuis.html)
// ==========================================
const quizData = [
    { q: 'Planet terbesar di Tata Surya adalah?', o: ['Bumi', 'Saturnus', 'Jupiter', 'Neptunus'], a: 2 },
    { q: 'Planet yang dijuluki "Planet Merah"?', o: ['Venus', 'Mars', 'Jupiter', 'Merkurius'], a: 1 },
    { q: 'Planet terdekat dari Matahari?', o: ['Venus', 'Bumi', 'Mars', 'Merkurius'], a: 3 },
    { q: 'Planet dengan cincin paling terkenal?', o: ['Uranus', 'Jupiter', 'Saturnus', 'Neptunus'], a: 2 },
    { q: 'Berapa jumlah planet di Tata Surya?', o: ['7', '8', '9', '10'], a: 1 },
    { q: 'Planet terpanas di Tata Surya?', o: ['Merkurius', 'Venus', 'Mars', 'Bumi'], a: 1 },
    { q: 'Planet yang berotasi miring hampir 98°?', o: ['Neptunus', 'Saturnus', 'Uranus', 'Jupiter'], a: 2 },
    { q: 'Gunung tertinggi di Tata Surya berada di?', o: ['Bumi', 'Venus', 'Mars', 'Jupiter'], a: 2 }
];

let currentQ = 0, score = 0;

function renderQuiz() {
    const quizContent = document.getElementById('quizContent');
    const quizBar = document.getElementById('quizBar');
    if (!quizContent) return;
    
    if (currentQ >= quizData.length) {
        quizBar.style.width = '100%';
        quizContent.innerHTML = `
            <div style="text-align:center;">
                <h2 style="font-family:'Orbitron'; font-size:2rem; margin-bottom:15px;">🎉 Selesai!</h2>
                <p style="font-size:1.2rem; margin-bottom:20px;">Skor kamu: <span style="color:var(--accent); font-weight:700;">${score}/${quizData.length}</span></p>
                <p style="color:#94a3b8; margin-bottom:25px;">${score>=7?'Luar biasa! Kamu astronom handal 🌟':score>=4?'Bagus! Terus belajar ya 🚀':'Ayo coba lagi! 💪'}</p>
                <button class="btn btn-primary" onclick="restartQuiz()">🔄 Main Lagi</button>
            </div>`;
        return;
    }
    quizBar.style.width = ((currentQ / quizData.length) * 100) + '%';
    const q = quizData[currentQ];
    quizContent.innerHTML = `
        <div class="quiz-question">Soal ${currentQ + 1}/${quizData.length}: ${q.q}</div>
        <div class="quiz-options">${q.o.map((opt, i) => `<button class="quiz-option" onclick="answerQuiz(${i})">${opt}</button>`).join('')}</div>`;
}

window.answerQuiz = function(i) {
    const opts = document.querySelectorAll('.quiz-option');
    opts.forEach(o => o.disabled = true);
    if (i === quizData[currentQ].a) { opts[i].classList.add('correct'); score++; }
    else { opts[i].classList.add('wrong'); opts[quizData[currentQ].a].classList.add('correct'); }
    setTimeout(() => { currentQ++; renderQuiz(); }, 1200);
}

window.restartQuiz = function() { currentQ = 0; score = 0; renderQuiz(); }

if (document.getElementById('quizContent')) renderQuiz();

// ==========================================
// 4. MEMORY GAME (games.html)
// ==========================================
// Perbaikan: Menambahkan emoji Bumi (🜨) dan Saturnus (♄) yang sebelumnya kosong
const planetEmojis = ['☿', '♀', '🜨', '♂', '♃', '♄', '⛢', '♆'];
let memCards = [], flipped = [], matches = 0, moves = 0, locked = false;

window.initMemory = function() {
    const grid = document.getElementById('memoryGrid');
    if (!grid) return;
    memCards = [...planetEmojis, ...planetEmojis].sort(() => Math.random() - 0.5);
    flipped = []; matches = 0; moves = 0; locked = false;
    document.getElementById('moves').textContent = 0;
    document.getElementById('matches').textContent = 0;
    grid.innerHTML = memCards.map((e, i) => `
        <div class="memory-card" data-i="${i}" data-e="${e}" onclick="flipCard(this)">
            <div class="memory-face memory-front">?</div>
            <div class="memory-face memory-back">${e}</div>
        </div>`).join('');
}

window.flipCard = function(card) {
    if (locked || card.classList.contains('flipped') || card.classList.contains('matched')) return;
    card.classList.add('flipped');
    flipped.push(card);
    if (flipped.length === 2) {
        moves++; document.getElementById('moves').textContent = moves;
        locked = true;
        if (flipped[0].dataset.e === flipped[1].dataset.e) {
            flipped.forEach(c => c.classList.add('matched'));
            matches++; document.getElementById('matches').textContent = matches;
            flipped = []; locked = false;
            if (matches === 8) setTimeout(() => alert(`🎉 Selesai dalam ${moves} langkah!`), 400);
        } else {
            setTimeout(() => { flipped.forEach(c => c.classList.remove('flipped')); flipped = []; locked = false; }, 900);
        }
    }
}

if (document.getElementById('memoryGrid')) initMemory();

// ==========================================
// 5. FAKTA SERU (fakta.html)
// ==========================================
const facts = [
    "Tata Surya kita memiliki delapan planet yang mengorbit Matahari.",
    "Satu hari di Venus (243 hari Bumi) lebih lama dari satu tahunnya (225 hari Bumi)!",
    "Hujan di Jupiter dan Saturnus bisa berupa berlian karena tekanan atmosfer yang ekstrem.",
    "Gunung tertinggi di Tata Surya adalah Olympus Mons di Mars, tingginya 3x Gunung Everest.",
    "Angin di Neptunus adalah yang tercepat di Tata Surya, mencapai 2.100 km/jam.",
    "Bumi adalah satu-satunya planet yang tidak dinamai berdasarkan dewa Romawi.",
    "Cincin Saturnus terbuat dari miliaran partikel es dan batuan.",
    "Matahari menyumbang 99,86% dari total massa seluruh Tata Surya."
];

const factButton = document.getElementById('factButton');
const factText = document.getElementById('randomFact');

if (factButton && factText) {
    factButton.addEventListener('click', () => {
        factText.style.opacity = '0';
        setTimeout(() => {
            factText.textContent = facts[Math.floor(Math.random() * facts.length)];
            factText.style.opacity = '1';
        }, 300);
    });
    factText.style.transition = 'opacity 0.3s ease';
}

// ==========================================
// 6. PERBANDINGAN PLANET (perbandingan.html)
// ==========================================
const planetsCompareData = [
    { name: 'Merkurius', cls: 'planet-mercury', stats: { diameter: '4.879 km', suhu: '-173°C s/d 427°C', satelit: '0', hari: '59 hari' } },
    { name: 'Venus', cls: 'planet-venus', stats: { diameter: '12.104 km', suhu: '465°C', satelit: '0', hari: '243 hari' } },
    { name: 'Bumi', cls: 'planet-earth', stats: { diameter: '12.742 km', suhu: '-88°C s/d 58°C', satelit: '1', hari: '24 jam' } },
    { name: 'Mars', cls: 'planet-mars', stats: { diameter: '6.779 km', suhu: '-140°C s/d 20°C', satelit: '2', hari: '24,6 jam' } },
    { name: 'Jupiter', cls: 'planet-jupiter', stats: { diameter: '139.820 km', suhu: '-108°C', satelit: '95+', hari: '9,9 jam' } },
    { name: 'Saturnus', cls: 'planet-saturn', stats: { diameter: '116.460 km', suhu: '-139°C', satelit: '146+', hari: '10,7 jam' } },
    { name: 'Uranus', cls: 'planet-uranus', stats: { diameter: '50.724 km', suhu: '-197°C', satelit: '27', hari: '17,2 jam' } },
    { name: 'Neptunus', cls: 'planet-neptune', stats: { diameter: '49.244 km', suhu: '-201°C', satelit: '14', hari: '16,1 jam' } }
];

window.updateCompare = function() {
    const res = document.getElementById('compareResult');
    if (!res) return;
    const p1 = planetsCompareData[document.getElementById('planet1').value];
    const p2 = planetsCompareData[document.getElementById('planet2').value];
    res.innerHTML = `
        <div class="compare-planet">
            <div class="planet-visual ${p1.cls}"></div>
            <h3 style="font-family:'Orbitron'; margin-bottom:10px;">${p1.name}</h3>
            <div class="compare-stats">${Object.entries(p1.stats).map(([k, v]) => `<div class="compare-stat"><span>${k}</span><span>${v}</span></div>`).join('')}</div>
        </div>
        <div class="compare-planet">
            <div class="planet-visual ${p2.cls}"></div>
            <h3 style="font-family:'Orbitron'; margin-bottom:10px;">${p2.name}</h3>
            <div class="compare-stats">${Object.entries(p2.stats).map(([k, v]) => `<div class="compare-stat"><span>${k}</span><span>${v}</span></div>`).join('')}</div>
        </div>`;
}

if (document.getElementById('compareResult')) updateCompare();

// ==========================================
// 7. SOLAR SYSTEM ORBIT ANIMATION (index.html / Dashboard)
// ==========================================
const solarContainer = document.querySelector('.solar-system-container');
if (solarContainer) {
    const pauseBtn = document.getElementById('pauseOrbit');
    const speedBtn = document.getElementById('speedUp');
    const resetBtn = document.getElementById('resetOrbit');
    
    // Ambil semua elemen orbit planet (termasuk bulan)
    const orbitElements = document.querySelectorAll('.solar-mercury, .solar-venus, .solar-earth, .solar-moon, .solar-mars, .solar-jupiter, .solar-saturn, .solar-uranus, .solar-neptune');
    
    let isPaused = false;
    let speedMultiplier = 1;
    
    // Simpan durasi asli animasi agar tidak error saat di-reset
    const originalDurations = new Map();
    orbitElements.forEach(el => {
        originalDurations.set(el, window.getComputedStyle(el).animationDuration);
    });

    // 1. Pause / Play
    if (pauseBtn) {
        pauseBtn.addEventListener('click', () => {
            isPaused = !isPaused;
            orbitElements.forEach(el => {
                el.style.animationPlayState = isPaused ? 'paused' : 'running';
            });
            pauseBtn.textContent = isPaused ? '▶ Play' : '⏸ Pause';
        });
    }

    // 2. Speed Up (1x -> 3x -> 5x -> 1x)
    if (speedBtn) {
        speedBtn.addEventListener('click', () => {
            if (speedMultiplier === 1) speedMultiplier = 3;
            else if (speedMultiplier === 3) speedMultiplier = 5;
            else speedMultiplier = 1;
            
            orbitElements.forEach(el => {
                const original = parseFloat(originalDurations.get(el));
                el.style.animationDuration = (original / speedMultiplier) + 's';
            });
            speedBtn.textContent = speedMultiplier === 1 ? '⚡ Speed Up' : `⚡ ${speedMultiplier}x`;
        });
    }

    // 3. Reset
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            isPaused = false;
            speedMultiplier = 1;
            orbitElements.forEach(el => {
                el.style.animation = 'none';
                // Force reflow
                void el.offsetWidth; 
                el.style.animation = '';
                el.style.animationPlayState = 'running';
            });
            if (pauseBtn) pauseBtn.textContent = '⏸ Pause';
            if (speedBtn) speedBtn.textContent = '⚡ Speed Up';
        });
    }

    // 4. Klik Planet untuk Info
    const planetInfoData = {
        'solar-mercury': { name: 'Merkurius', info: 'Planet terdekat & terkecil' },
        'solar-venus': { name: 'Venus', info: 'Planet terpanas (465°C)' },
        'solar-earth': { name: 'Bumi', info: 'Satu-satunya planet dengan kehidupan' },
        'solar-mars': { name: 'Mars', info: 'Planet Merah, punya gunung tertinggi' },
        'solar-jupiter': { name: 'Jupiter', info: 'Planet terbesar, raksasa gas' },
        'solar-saturn': { name: 'Saturnus', info: 'Terkenal dengan cincin esnya' },
        'solar-uranus': { name: 'Uranus', info: 'Raksasa es yang berotasi miring' },
        'solar-neptune': { name: 'Neptunus', info: 'Planet terjauh, angin tercepat' }
    };

    orbitElements.forEach(planet => {
        planet.addEventListener('click', () => {
            // Cari class yang diawali 'solar-'
            const planetClass = Array.from(planet.classList).find(c => c.startsWith('solar-') && c !== 'solar-moon');
            if (planetClass && planetInfoData[planetClass]) {
                const data = planetInfoData[planetClass];
                alert(`🪐 ${data.name}\n\n${data.info}\n\nKlik "OK" untuk lanjut menjelajah!`);
            } else if (planet.classList.contains('solar-moon')) {
                alert(`🌙 Bulan\n\nSatelit alami satu-satunya milik Bumi!`);
            }
        });
    });
}