function showAlert() {
    alert("Klikkasit minua!");
}

function showTable() {
    const tableContainer = document.getElementById("table-container");

    const tableHTML = `
        <style>
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
        </style>
        <table>
            <thead>
                <tr>
                    <th>Nimi</th>
                    <th>Tehtävä</th>
                    <th>Palkka</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>$170,750</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>$86,000</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>$433,060</td>
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>$162,700</td>
                </tr>
            </tbody>
        </table>
    `;

    tableContainer.innerHTML = tableHTML;
}

document.addEventListener('DOMContentLoaded', () => {
    // Tässä on esimerkki, miten koodi yhdistetään HTML:ään.
    // Oletetaan, että HTML-tiedostossa on seuraavat elementit:
    // <button id="alertButton">Napsauta minua</button>
    // <button id="tableButton">Näytä taulukko</button>
    // <div id="table-container"></div>
    
    // const alertButton = document.getElementById('alertButton');
    // const tableButton = document.getElementById('tableButton');

    // if (alertButton) {
    //     alertButton.addEventListener('click', showAlert);
    // }

    // if (tableButton) {
    //     tableButton.addEventListener('click', showTable);
    // }
});
// Harjoitus 2: onMouseOver-tapahtuma otsikkoon "Harjoitus 2"

// Etsi otsikko (oletetaan id:n olevan 'harjoitus2-otsikko')
const harjoitus2Otsikko = document.getElementById('harjoitus2-otsikko');

// Lisää onmouseover-tapahtuma
if (harjoitus2Otsikko) {
    harjoitus2Otsikko.onmouseover = function() {
        console.log("Stepped over my a mouse!");
    };
}

// Harjoitus 1: addEventListener()-tapahtuma otsikkoon "Exercise 1"

// Etsi otsikko käyttäen querySelectoria (oletetaan luokan olevan 'harjoitus1-otsikko')
const harjoitus1Otsikko = document.querySelector('.harjoitus1-otsikko');

// Lisää click-tapahtumankäsittelijä
if (harjoitus1Otsikko) {
    harjoitus1Otsikko.addEventListener('click', function() {
        // Muuta otsikon väri punaiseksi
        this.style.color = 'red';
        
        // Vaihda otsikon sisältö
        this.innerHTML = "Bye bye mouse!";
    });
}
// Harjoitus 3 - Lomakekäytännöt

document.addEventListener('DOMContentLoaded', () => {

    // Etsi tarvittavat elementit
    const textarea = document.getElementById('tekstialue');
    const charCounter = document.getElementById('charcount');
    const lahetaButton = document.getElementById('laheta');
    const lomake = document.getElementById('yksinkertainen-lomake');

    // 1. Lisää onfocus-tapahtuma tekstialueeseen
    if (textarea) {
        textarea.onfocus = function() {
            console.log("Please fill in the form with proper data.");
            // Valinnainen: taustavärin muuttaminen
            this.style.backgroundColor = '#f0f0f0';
        };

        // Valinnainen: onblur-tapahtuma palauttamaan taustavärin
        textarea.onblur = function() {
            this.style.backgroundColor = '';
        };
    }

    // 2. Lisää onkeydown-tapahtuma, joka laskee merkkimäärän
    if (textarea && charCounter) {
        textarea.onkeydown = function() {
            // Päivitä merkkimäärä jokaisella näppäinpainalluksella
            charCounter.textContent = `${this.value.length + 1}/200`;
        };
    }

    // 3. Validoi lomake painikkeen klikkauksella
    if (lahetaButton && textarea) {
        lahetaButton.onclick = function() {
            if (textarea.value.trim() === "") {
                alert("Tekstikenttä ei voi olla tyhjä. Ole hyvä ja kirjoita tekstiä.");
            } else {
                alert("Lomake lähetetty onnistuneesti!");
                // Tässä voit lisätä toiminnon lomakkeen lähettämiseksi
            }
        };
    }

    // Bonus: Haaste - Vaihtoehtoinen merkkimäärän laskuri ja lähetä-painikkeen hallinta

    // Etsi elementit
    const bonusTextarea = document.getElementById('tekstialue_bonus');
    const bonusCharCounter = document.getElementById('charcount_bonus');
    const bonusLahetaButton = document.getElementById('laheta_bonus');

    if (bonusTextarea && bonusCharCounter && bonusLahetaButton) {
        // Alusta lähetä-painike deaktivoituna
        bonusLahetaButton.disabled = true;

        bonusTextarea.addEventListener('input', () => {
            const currentLength = bonusTextarea.value.length;
            
            // Päivitä merkkimäärä
            bonusCharCounter.textContent = `${currentLength}/200`;

            // Muuta merkkimäärän väriä, jos teksti on liian pitkä
            if (currentLength > 200) {
                bonusCharCounter.style.color = 'red';
            } else {
                bonusCharCounter.style.color = 'black';
            }

            // Aktivoi/deaktivoi lähetä-painike
            if (currentLength === 0 || currentLength > 200) {
                bonusLahetaButton.disabled = true;
            } else {
                bonusLahetaButton.disabled = false;
            }
        });
    }

});
document.addEventListener('DOMContentLoaded', () => {
    // Etsi tarvittavat elementit niiden ID:n perusteella
    const divElement = document.getElementById('liikuteltava-div');
    const koordinaattiElementti = document.getElementById('coordinates');

    // Lisää onMouseMove-tapahtumakäsittelijä DIV-elementtiin
    if (divElement) {
        divElement.onmousemove = function(event) {
            // Ota hiiren X- ja Y-koordinaatit tapahtumaobjektista
            const x = event.clientX;
            const y = event.clientY;

            // Tulosta koordinaatit konsoliin
            console.log(`Hiiren koordinaatit: X=${x}, Y=${y}`);

            // Jos koordinaatti-elementti on olemassa, päivitä sen sisältö
            if (koordinaattiElementti) {
                koordinaattiElementti.innerHTML = `X: ${x}, Y: ${y}`;
            }
        };
    }
});