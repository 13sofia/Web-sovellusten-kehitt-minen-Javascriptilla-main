// Apu-funktio, joka luo ja näyttää HTML-taulukon
function showTable() {
    const tableContainer = document.getElementById("taulukonPaikka");
    const tableHTML = `
        <table border="1">
            <thead>
                <tr>
                    <th>Nimi</th>
                    <th>Tehtävä</th>
                    <th>Palkka</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>Tiger Nixon</td><td>System Architect</td><td>$320,800</td></tr>
                <tr><td>Garrett Winters</td><td>Accountant</td><td>$170,750</td></tr>
                <tr><td>Ashton Cox</td><td>Junior Technical Author</td><td>$86,000</td></tr>
                <tr><td>Cedric Kelly</td><td>Senior Javascript Developer</td><td>$433,060</td></tr>
                <tr><td>Airi Satou</td><td>Accountant</td><td>$162,700</td></tr>
            </tbody>
        </table>
    `;
    tableContainer.innerHTML = tableHTML;
}

// Odottaa DOM-puun latautumista ennen kuin skriptiä ajetaan
document.addEventListener('DOMContentLoaded', () => {

    // --- Harjoitus 1 ---
    const buttons = document.querySelectorAll('p button');
    const alertBtn = buttons[0];
    const showTableBtn = buttons[1];
    
    if (alertBtn) {
        alertBtn.addEventListener('click', () => {
            alert("Klikkasit minua!");
        });
    }

    if (showTableBtn) {
        showTableBtn.addEventListener('click', showTable);
    }

    // --- Harjoitus 2 ---
    // HUOM: otsikoillasi ei ole ID:tä, joten ne etsitään järjestyksessä
    const harjoitus2Otsikko = document.querySelector('h2:nth-of-type(2)');
    const exercise1Otsikko = document.querySelector('h2:nth-of-type(1)');

    if (harjoitus2Otsikko) {
        harjoitus2Otsikko.addEventListener('mouseover', () => {
            console.log("Stepped over my a mouse!");
        });
    }

    if (exercise1Otsikko) {
        exercise1Otsikko.addEventListener('click', function() {
            this.style.color = 'red';
            this.innerHTML = "Bye bye mouse!";
        });
    }

    // --- Harjoitus 3 ---
    const textarea = document.getElementById('textdata');
    const charcount = document.getElementById('charcount');
    const formButton = document.querySelector('form button');

    if (textarea) {
        textarea.addEventListener('focus', () => {
            console.log("Please fill in the form with proper data.");
            textarea.style.backgroundColor = '#f0f0f0';
        });

        textarea.addEventListener('blur', () => {
            textarea.style.backgroundColor = '';
        });

        // onkeydown ja bonus-tehtävä (merkkimäärä ja painikkeen tila)
        textarea.addEventListener('input', () => {
            const charCount = textarea.value.length;
            if (charcount) {
                charcount.textContent = `${charCount}/200`;
                charcount.style.color = charCount > 200 ? 'red' : 'black';
            }
            if (formButton) {
                formButton.disabled = charCount === 0 || charCount > 200;
            }
        });

        // Lomakkeen validointi
        if (formButton) {
            formButton.addEventListener('click', (event) => {
                event.preventDefault();
                if (textarea.value.trim() === "") {
                    alert("Tekstikenttä ei voi olla tyhjä. Ole hyvä ja kirjoita tekstiä.");
                } else {
                    alert("Lomake lähetetty onnistuneesti!");
                }
            });
        }
    }

    // --- Harjoitus 4 ---
    const coordinatesDiv = document.getElementById('coordinates');
    
    if (coordinatesDiv) {
        // Tämän DIVin sisälle pitäisi olla hiirellä liikuteltava alue
        // Asetetaan sille koko
        coordinatesDiv.style.width = '200px';
        coordinatesDiv.style.height = '200px';
        coordinatesDiv.style.border = '1px solid black';

        coordinatesDiv.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;
            console.log(`Hiiren koordinaatit: X=${x}, Y=${y}`);
            
            coordinatesDiv.innerHTML = `X: ${x}, Y: ${y}`;
        });
    }

    // --- Bonus-tehtävä (sijainti) ---
    const sijaintiBtn = document.getElementById('sijaintiBtn');
    
    if (sijaintiBtn) {
        sijaintiBtn.addEventListener('click', () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lon = position.coords.longitude;
                        console.log(`Sijainti: Lat: ${lat}, Lon: ${lon}`);

                        // Avaa Google Maps uudessa välilehdessä
                        window.open(`https://www.google.com/maps/@${lat},${lon},15z`, '_blank');
                    },
                    (error) => {
                        console.error('Sijainnin hakeminen epäonnistui:', error);
                        alert('Sijaintia ei voitu hakea. Varmista, että olet sallinut sijaintipalvelut.');
                    }
                );
            } else {
                alert('Selaimesi ei tue Geolocation API:a.');
            }
        });
    }
});