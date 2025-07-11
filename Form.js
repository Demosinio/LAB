const GlPojemnik = document.getElementById("Form-div");
const pojemnik = document.getElementById("form");

document.getElementById("main").addEventListener("click", (event) => {
    if (event.target && event.target.id === "zapis") {
        GlPojemnik.style.display = "flex";
        pojemnik.innerHTML = `
            <p class="pp">Imię: </p>
            <input type="text" id="imie" maxlength="30">
            <p class="pp">Nazwisko: </p>
            <input type="text" id="nazwisko" maxlength="30">
            <p class="pp">Email: </p>
            <input type="email" id="email" maxlength="35">
            <button id="Send">Potwierdź</button>
        `;
        
        document.getElementById("Send").addEventListener("click", () => {
            const imie = document.getElementById("imie").value;
            const nazwisko = document.getElementById("nazwisko").value;
            const email = document.getElementById("email").value;

            if (!imie || !nazwisko || !email) {
                alert("Proszę wypełnić wszystkie pola!");
                return;
            }

            pojemnik.innerHTML = "<p id='form-p'>Dziękujemy! Twoje dane zostały zapisane!</p>";
            setTimeout(() => {
                GlPojemnik.style.display = "none";
            }, 2500);
        });
    }
});

GlPojemnik.addEventListener("click", (event) => {
    if (event.target === GlPojemnik) {
        GlPojemnik.style.display = "none";
    }
});
