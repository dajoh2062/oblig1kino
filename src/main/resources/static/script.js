

let biletter = [];

function kjopbilett() {
    const film = document.getElementById("velgFilm").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;

    if (!film || !fornavn || !etternavn || !telefon || !email) {
        alert("Vennligst fyll ut alle feltene")
        return;
    }
    const bilett = {film, fornavn, etternavn, telefon, email}

    biletter.push(bilett);

    visbiletter();
    tomfelter();

}
function visbiletter() {
    const billetListe = document.getElementById('biletter');
    billetListe.innerHTML = "";

    for (let indeks = 0; indeks < biletter.length; indeks++) {
        const bilett = biletter[indeks];

        const li = document.createElement('li');
        li.textContent = "Billett " + (indeks + 1) + ": " + bilett.film + " - " + bilett.fornavn + bilett.etternavn + " (" + bilett.email + ", " + bilett.telefon + ")";
        billetListe.appendChild(li);
    }



}
function tomfelter() {
    document.getElementById("velgFilm").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("email").value = "";

}

function slettBiletter() {
    biletter = [];
    visbiletter();
}
function validateInput(input) {
    const errorSpan = input.nextElementSibling; // Assuming the error span follows the input
    const isValid = input.checkValidity();

    if (!isValid) {
        input.setCustomValidity(input.title);
    } else {
        input.setCustomValidity("");
        errorSpan.textContent = "Wrong";
    }
}