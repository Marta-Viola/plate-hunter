// 1. DIZIONARIO
const plateDictionary = [
    // TIER 1: Neighbors & Very Common (1 Point)
    { id: "IT", name: "Italy", flag: "🇮🇹", points: 1, tier: 1 },
    { id: "DE", name: "Germany", flag: "🇩🇪", points: 1, tier: 1 },
    { id: "FR", name: "France", flag: "🇫🇷", points: 1, tier: 1 },
    { id: "CH", name: "Switzerland", flag: "🇨🇭", points: 1, tier: 1 },
    { id: "AT", name: "Austria", flag: "🇦🇹", points: 1, tier: 1 },

    // TIER 2: Common Travelers (3 Points)
    { id: "ES", name: "Spain", flag: "🇪🇸", points: 3, tier: 2 },
    { id: "NL", name: "Netherlands", flag: "🇳🇱", points: 3, tier: 2 },
    { id: "BE", name: "Belgium", flag: "🇧🇪", points: 3, tier: 2 },
    { id: "PL", name: "Poland", flag: "🇵🇱", points: 3, tier: 2 },
    { id: "RO", name: "Romania", flag: "🇷🇴", points: 3, tier: 2 },
    { id: "HR", name: "Croatia", flag: "🇭🇷", points: 3 , tier: 2 },
    { id: "SI", name: "Slovenia", flag: "🇸🇮", points: 3, tier: 2 },
    { id: "HU", name: "Hungary", flag: "🇭🇺", points: 3, tier: 2 },

    // TIER 3: The Long Haul (5 Points)
    { id: "GB", name: "United Kingdom", flag: "🇬🇧", points: 5, tier: 3 },
    { id: "PT", name: "Portugal", flag: "🇵🇹", points: 5, tier: 3 },
    { id: "SE", name: "Sweden", flag: "🇸🇪", points: 5, tier: 3 },
    { id: "GR", name: "Greece", flag: "🇬🇷", points: 5, tier: 3 },
    { id: "UA", name: "Ukraine", flag: "🇺🇦", points: 5, tier: 3 },
    { id: "AL", name: "Albania", flag: "🇦🇱", points: 5, tier: 3 },
    { id: "BA", name: "Bosnia & Herzegovina", flag: "🇧🇦", points: 5, tier: 3 },
    { id: "BG", name: "Bulgaria", flag: "🇧🇬", points: 5, tier: 3 },
    { id: "CZ", name: "Czechia", flag: "🇨🇿", points: 5, tier: 3 },
    { id: "DK", name: "Denmark", flag: "🇩🇰", points: 5, tier: 3 },
    { id: "IE", name: "Ireland", flag: "🇮🇪", points: 5, tier: 3 },
    { id: "LV", name: "Latvia", flag: "🇱🇻", points: 5, tier: 3 },
    { id: "MK", name: "North Macedonia", flag: "🇲🇰", points: 5, tier: 3 },
    { id: "MD", name: "Moldova", flag: "🇲🇩", points: 5, tier: 3 },
    { id: "RU", name: "Russia", flag: "🇷🇺", points: 5, tier: 3 },
    { id: "RS", name: "Serbia", flag: "🇷🇸", points: 5, tier: 3 },
    { id: "SK", name: "Slovakia", flag: "🇸🇰", points: 5, tier: 3 },
    { id: "TR", name: "Turkiye", flag: "🇹🇷", points: 5, tier: 3 },

    // TIER 4: The Unicorns (10 Points)
    { id: "SM", name: "San Marino", flag: "🇸🇲", points: 10, tier: 4 },
    { id: "VA", name: "Vatican City", flag: "🇻🇦", points: 10, tier: 4 },
    { id: "MC", name: "Monaco", flag: "🇲🇨", points: 10, tier: 4 },
    { id: "IS", name: "Iceland", flag: "🇮🇸", points: 10, tier: 4 },
    { id: "AD", name: "Andorra", flag: "🇦🇩", points: 10, tier: 4 },
    { id: "AM", name: "Armenia", flag: "🇦🇲", points: 10, tier: 4 },
    { id: "AZ", name: "Azerbaigian", flag: "🇦🇿", points: 10, tier: 4 },
    { id: "BY", name: "Belarus", flag: "🇧🇾", points: 10, tier: 4 },
    { id: "CY", name: "Cyprus", flag: "🇨🇾", points: 10, tier: 4 },
    { id: "EE", name: "Estonia", flag: "🇪🇪", points: 10 , tier: 4 },
    { id: "FI", name: "Finland", flag: "🇫🇮", points: 10, tier: 4 },
    { id: "GE", name: "Georgia", flag: "🇬🇪", points: 10, tier: 4 },
    { id: "KZ", name: "Kazakhstan", flag: "🇰🇿", points: 10, tier: 4 },
    { id: "LI", name: "Liechtenstein", flag: "🇱🇮", points: 10, tier: 4 },
    { id: "LT", name: "Lithuania", flag: "🇱🇹", points: 10, tier: 4 },
    { id: "LU", name: "Luxembourg", flag: "🇱🇺", points: 10, tier: 4 },
    { id: "MT", name: "Malta", flag: "🇲🇹", points: 10, tier: 4 },
    { id: "ME", name: "Montenegro", flag: "🇲🇪", points: 10, tier: 4 },
    { id: "NO", name: "Norway", flag: "🇳🇴", points: 10, tier: 4 }
];

// 2. STATO DEL GIOCO
let gameState = {
    tripTitle: "",
    p1: { name: "Player 1", score: 0 },
    p2: { name: "Player 2", score: 0 },
    activePlayer: 'p1',
    history: [],
    isTripActive: false
};

// 3. AGGIORNAMENTO UI
function updateUI() {
    // aggiorna punteggi
    document.getElementById('p1-score').innerText = gameState.p1.score;
    document.getElementById('p2-score').innerText = gameState.p2.score;

    // aggiorna nomi
    document.getElementById('p1-name-display').innerText = gameState.p1.name;
    document.getElementById('p2-name-display').innerText = gameState.p2.name;

    // titolo viaggio
    document.getElementById('current-trip-display').innerText = gameState.tripTitle;

    // evidenzia giocatore attivo
    document.getElementById('p1-area').classList.toggle('active', gameState.activePlayer === 'p1');
    document.getElementById('p2-area').classList.toggle('active', gameState.activePlayer === 'p2');
}

// 4. LOGICA DI GIOCO (RECORD & UNDO)
function recordPlate(country)  {
    if (!gameState.isTripActive) return;

    // aggiunge punti
    gameState[gameState.activePlayer].score += country.points;

    // salva in cronologia per l'UNDO
    gameState.history.push({
        player: gameState.activePlayer,
        country: country.name,
        points: country.points,
        flag: country.flag
    });

    updateUI();
    saveToStorage();
}

function undoLast() {
    const lastAction = gameState.history.pop();
    if (lastAction) {
        gameState[lastAction.player].score -= lastAction.points;
        updateUI();
        saveToStorage();
    }
}

// 5. GENERAZIONE INTERFACCIA
function generateGrid() {
    const grid = document.getElementById('plate-grid');
    grid.innerHTML = "";

    // prendiamo solo i primi 9 paesi (i più comuni)
    const top9 = plateDictionary.slice(0, 9);

    top9.forEach(country => {
        const btn = document.createElement('button');
        btn.className = `plate-btn btn-tier-${country.tier}`;
        btn.innerHTML = `
            <span class="flag">${country.flag}</span>
            <span class="pts">+${country.points}</span>
        `;
        btn.onclick = () => recordPlate(country);
        grid.appendChild(btn);
    });

    // Tasto "MORE" per aprire la lista completa
    const moreBtn = document.createElement('button');
    moreBtn.className = 'plate-btn';
    moreBtn.style.background = '#333';
    moreBtn.innerHTML = `<span class="flag">➕</span><span class="pts">MORE</span>`;
    moreBtn.onclick = showFullList;
    grid.appendChild(moreBtn);
}

// funzione per mostrare la lista completa e ricercabile
function showFullList() {
    const modal = document.createElement('div');
    modal.id = 'full-list-overlay';
    modal.className = 'overlay';
    modal.innerHTML = `
        <div class="modal full-list-modal">
            <input type="text" id="country-search" placeholder="Search country..." autofocus>
            <div id="searchable-list"></div>
            <button id="close-list-btn" class="secondary-btn">Back to Game</button>
        </div>
    `;
    document.body.appendChild(modal);

    const searchInput = document.getElementById('country-search');
    const listContainer = document.getElementById('searchable-list');

    // funzione interna per filtrare la lista
    const renderList = (term = "") => {
        listContainer.innerHTML = "";
        const filtered = plateDictionary.filter(c =>
            c.name.toLowerCase().includes(term.toLowerCase())
        );

        filtered.forEach(country => {
            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `
                <span class="flag">${country.flag}</span>
                <span class="name">${country.name}</span>
                <span class="pts">+${country.points}</span>
            `;
            item.onclick = () => {
                recordPlate(country);
                document.body.removeChild(modal);   // chiude dopo la selezione
            };
            listContainer.appendChild(item);
        });
    };

    searchInput.oninput = (e) => renderList(e.target.value);
    document.getElementById('close-list-btn').onclick = () => document.body.removeChild(modal);
    renderList();   // inizializza la lista
}

// 6. GESTIONE VIAGGIO (START & FINISH)
function startTrip() {
    const title = document.getElementById('trip-title').value || "Summer Trip";
    const name1 = document.getElementById('p1-input').value || "Player 1";
    const name2 = document.getElementById('p2-input').value || "Player 2";

    gameState = {
        tripTitle: title,
        p1: { name: name1, score: 0 },
        p2: { name: name2, score: 0 },
        activePlayer: 'p1',
        history: [],
        isTripActive: true
    };

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');

    updateUI();
    saveToStorage();
}

function finishTrip() {
    if (!confirm("Are you sure you wanto to end this trip? It will be saved in your History.")) return;

    // salva nei viaggi passati
    const pastTrips = JSON.parse(localStorage.getItem('plateHunterHistory') || "[]");
    pastTrips.push({
        title: gameState.tripTitle,
        p1: gameState.p1,
        p2: gameState.p2,
        date: new Date().toLocaleDateString()
    });
    localStorage.setItem('plateHunterHistory', JSON.stringify(pastTrips));

    // pulisce il viaggio attuale e ricarica la pagina
    localStorage.removeItem('plateHunterSave');
    location.reload();
}

// 7. STORIA & SWIPE
function showHistory() {
    const pastTrips = JSON.parse(localStorage.getItem('plateHunterHistory') || "[]");
    const list = document.getElementById('history-list');
    list.innerHTML = pastTrips.length ? "" : "<p>No trips saved yet.</p>";

    pastTrips.reverse().forEach(trip => {
        const item = document.createElement('div');
        item.className = 'history-item';
        item.innerHTML = `
            <div class="hist-header">
                <strong>${trip.title}</strong> <span>${trip.date}}</span>
            </div>
            <div class="hist-scores">
                ${trip.p1.name}: ${trip.p1.score} | ${trip.p2.name}: ${trip.p2.score}
            </div>
        `;
        list.appendChild(item);
    });

    document.getElementById('history-modal').classList.remove('hidden');
}

function setupSwipe() {
    const swipeArea = document.getElementById('player-swipe-area');
    let touchStartX = 0;
    swipeArea.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });
    swipeArea.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;
        if (touchEndX < touchStartX - 50) switchPlayer('p2');   // swipe sinistra -> P2
        if (touchEndX > touchStartX + 50) switchPlayer('p1');   // swipe destra -> P1
    });
}

function switchPlayer(player) {
    gameState.activePlayer = player;
    updateUI();
    saveToStorage();
}

// 8. PERSISTENZA & INIT
function saveToStorage() {
    localStorage.setItem('plateHunterSave', JSON.stringify(gameState));
}

window.onload = () => {
    generateGrid();
    setupSwipe();

    const saved = localStorage.getItem('plateHunterSave');
    if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.isTripActive) {
            gameState = parsed;
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('game-container').classList.remove('hidden');
            updateUI();
        }
    }

    // collega bottoni
    document.getElementById('start-trip-btn').onclick = startTrip;
    document.getElementById('finish-btn').onclick = finishTrip;
    document.getElementById('undo-btn').onclick = undoLast;
    document.getElementById('history-btn').onclick = showHistory;
    document.getElementById('view-history-btn').onclick = showHistory;
    document.getElementById('close-history-btn').onclick = () => {
        document.getElementById('history-modal').classList.add('hidden');
    };
};