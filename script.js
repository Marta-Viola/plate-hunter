// 1. DIZIONARIO
const plateDictionary = [
    // TIER 1: Neighbors & Very Common (1 Point)
    // { id: "IT", name: "Italy", flag: "🇮🇹", points: 1, tier: 1 },
    { id: "DE", name: "Germany", flag: "🇩🇪", points: 1, tier: 1 },
    { id: "FR", name: "France", flag: "🇫🇷", points: 1, tier: 1 },
    { id: "CH", name: "Switzerland", flag: "🇨🇭", points: 1, tier: 1 },
    { id: "AT", name: "Austria", flag: "🇦🇹", points: 1, tier: 1 },
    { id: "ES", name: "Spain", flag: "🇪🇸", points: 1, tier: 1 },
    { id: "RO", name: "Romania", flag: "🇷🇴", points: 1, tier: 1 },

    // TIER 2: Common Travelers (3 Points)
    { id: "NL", name: "Netherlands", flag: "🇳🇱", points: 3, tier: 2 },
    { id: "BE", name: "Belgium", flag: "🇧🇪", points: 3, tier: 2 },
    { id: "PL", name: "Poland", flag: "🇵🇱", points: 3, tier: 2 },
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
    isTripActive: false,
    dynamicIds: []
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

    // --- NUOVA LOGICA PER LA NOTIFICA ---
    const msgElement = document.getElementById('last-action-msg');
    if (gameState.history && gameState.history.length > 0) {
        const last = gameState.history[gameState.history.length - 1];
        const playerName = gameState[last.player].name;

        // formattazione dell'ora
        const time = last.time || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        msgElement.innerHTML = `<strong>${playerName}</strong>: ${last.flag} at ${time}`;
        msgElement.style.opacity = "1"; // ben visibile
    } else {
        msgElement.innerText = "← Swipe to change active player →";
        msgElement.style.opacity = "0.4";   // più discreto quando è solo un suggerimento
    }
}

// 4. LOGICA DI GIOCO (RECORD & UNDO)
function recordPlate(country)  {
    if (!gameState.isTripActive) return;

    // controllo di sicurezza: se dynamicIds non esiste per qualche motivo, inizializzalo
    if (!gameState.dynamicIds) {
        gameState.dynamicIds = plateDictionary.filter(c => c.tier !== 1).slice(0, 5).map(c => c.id);
    }

    // logica della coda dinamica
    // se non è tier 1 e non è già tra i 5 visualizzati...
    if (country.tier !== 1 && !gameState.dynamicIds.includes(country.id)) {
        // rimuoviamo il primo e aggiungiamo il nuovo in fondo
        gameState.dynamicIds.shift();
        gameState.dynamicIds.push(country.id);

        // rigeneriamo la griglia per mostrare il cambiamento
        generateGrid();
    }

    // aggiunge punti
    gameState[gameState.activePlayer].score += country.points;

    // salva in cronologia per l'UNDO
    gameState.history.push({
        player: gameState.activePlayer,
        country: country.name,
        points: country.points,
        flag: country.flag,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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

    // prendiamo le 6 nazioni tier 1 (fisse)
    const fixedPlates = plateDictionary.filter(c => c.tier === 1);
    // const top11 = plateDictionary.slice(0, 11);

    // prendiamo gli oggetti nazione corrispondenti agli ID dinamici
    const dynamicPlates = gameState.dynamicIds.map(id =>
        plateDictionary.find(c => c.id === id)
    );

    // uniamo le liste (6 + 5 = 11)
    const combinedPlates = [...fixedPlates, ...dynamicPlates];

    combinedPlates.forEach(country => {
        if (!country) return;   // sicurezza nel caso un ID non venga trovato
        const btn = document.createElement('button');
        btn.className = `plate-btn btn-tier-${country.tier}`;
        btn.innerHTML = `
            <span class="flag">${country.flag}</span>
            <span class="plate-id">${country.id}</span>
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
                <span class="name">${country.name} (${country.id})</span>
                <span class="pts pts-tier-${country.tier}">+${country.points}</span>
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
        isTripActive: true,
        dynamicIds: plateDictionary.filter(c => c.tier !== 1).slice(0, 5).map(c => c.id)
    };

    document.getElementById('start-screen').classList.add('hidden');
    document.getElementById('game-container').classList.remove('hidden');

    generateGrid();
    updateUI();
    saveToStorage();
}

function finishTrip() {
    if (!confirm("Are you sure you wan to to end this trip? It will be saved in your History.")) return;

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

// mostra il LOG dettagliato della partita attuale
function showCurrentLog() {
    const list = document.getElementById('history-list');
    list.innerHTML = "";    // pulisce la lista

    if (gameState.history.length === 0) {
        list.innerHTML = "<p>No Plates spotted yet!</p>";
    } else {
        // mostra chi ha preso cosa e a che ora
        [...gameState.history].reverse().forEach(entry => {
            const item = document.createElement('div');
            item.className = 'history-item';
            const playerName = gameState[entry.player].name;
            item.innerHTML = `
                <div class="list-header">
                    <strong>${playerName}</strong> <span>${entry.time}</span>
                </div>
                <div class="hist-scores">
                    ${entry.flag} ${entry.country} (+${entry.points} pts)
                </div>
            `;
            list.appendChild(item);
        });
    }

    // aggiungo un pulsante in fondo per vedere i viaggi passati anche da qui
    const btnPast = document.createElement('button');
    btnPast.className = 'secondary-btn';
    btnPast.innerText = "View Past Trips";
    btnPast.onclick = showPastTrips;
    list.appendChild(btnPast);

    document.getElementById('history-modal').classList.remove('hidden');
}

// mostra solo i RISULTATI dei viaggi precedenti
function showPastTrips() {
    const pastTrips = JSON.parse(localStorage.getItem('plateHunterHistory') || "[]");
    const list = document.getElementById('history-list');
    // list.innerHTML = "<h3>Past Trips Summary</h3>";

    if (pastTrips.length === 0) {
        list.innerHTML += "<p>No past trips found.</p>";
    } else {
        pastTrips.reverse().forEach(trip => {
            const item = document.createElement('div');
            item.className = 'history-item';

            // logica per determinare il vincitore
            const p1Win = trip.p1.score > trip.p2.score;
            const p2Win = trip.p2.score > trip.p1.score;

            // qui non si salva la cronologia targa per targa, solo i totali
            item.innerHTML = `
                <div class="hist-header">
                    <strong>${trip.title}</strong> <span>${trip.date}</span>
                </div>
                <div class="hist-scores">
                    <span class="${p1Win ? 'winner-highlight' : ''}">
                        ${p1Win ? '🏆 ' : ''}${trip.p1.name}: ${trip.p1.score}
                    </span>
                    |
                    <span class="${p2Win ? 'winner-highlight' : ''}">
                        ${p2Win ? '🏆 ' : ''}${trip.p2.name}: ${trip.p2.score}
                    </span>
                </div>
            `;
            list.appendChild(item);
        });
        document.getElementById('history-modal').classList.remove('hidden');
    }
}

// function showHistory() {
//     const pastTrips = JSON.parse(localStorage.getItem('plateHunterHistory') || "[]");
//     const list = document.getElementById('history-list');
//     list.innerHTML = pastTrips.length ? "" : "<p>No trips saved yet.</p>";

//     pastTrips.reverse().forEach(trip => {
//         const item = document.createElement('div');
//         item.className = 'history-item';
//         item.innerHTML = `
//             <div class="hist-header">
//                 <strong>${trip.title}</strong> <span>${trip.date}</span>
//             </div>
//             <div class="hist-scores">
//                 ${trip.p1.name}: ${trip.p1.score} | ${trip.p2.name}: ${trip.p2.score}
//             </div>
//         `;
//         list.appendChild(item);
//     });

//     document.getElementById('history-modal').classList.remove('hidden');
// }

function setupSwipe() {
    const swipeArea = document.getElementById('player-swipe-area');
    let touchStartX = 0;

    swipeArea.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    });

    swipeArea.addEventListener('touchend', e => {
        let touchEndX = e.changedTouches[0].screenX;

        // switch corretto
        if (touchEndX < touchStartX - 50) switchPlayer('p1');   // swipe sinistra -> P2
        if (touchEndX > touchStartX + 50) switchPlayer('p2');   // swipe destra -> P1
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
    // prima si recuperano i dati salvati
    const saved = localStorage.getItem('plateHunterSave');
    if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.isTripActive) {
            gameState = parsed;
            document.getElementById('start-screen').classList.add('hidden');
            document.getElementById('game-container').classList.remove('hidden');
            // updateUI(); verrà chiamato dopo aver generato la griglia
        }
    }

    // se i dynamicIds sono ancora vuoti (nuovo gioco o primo avvio assoluto)
    // li inizializziamo ORA, prima di generare la griglia
    if (!gameState.dynamicIds || gameState.dynamicIds.length === 0) {
        // prende i primi 5 paesi che NON sono Tier 1 per riempire i posti iniziali
        gameState.dynamicIds = plateDictionary
            .filter(c => c.tier !== 1)
            .slice(0, 5)
            .map(c => c.id);
    }

    // ORA genera la griglia (così avrà i dati pronti)
    generateGrid();

    // aggiorna l'interfaccia
    updateUI();

    // setup delle interazioni
    setupSwipe();

    // collega bottoni
    document.getElementById('start-trip-btn').onclick = startTrip;
    document.getElementById('finish-btn').onclick = finishTrip;
    document.getElementById('undo-btn').onclick = undoLast;

    // il tasto nel gioco mostra il LOG corrente
    document.getElementById('history-btn').onclick = showCurrentLog;

    // il tasto nella start screen mostra i VIAGGI PASSATI
    document.getElementById('view-history-btn').onclick = showPastTrips;

    document.getElementById('close-history-btn').onclick = () => {
        document.getElementById('history-modal').classList.add('hidden');
    };
};