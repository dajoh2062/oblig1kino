let biletter = [];


function kjopbilett() {
    const film = document.getElementById("velgFilm").value;
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const email = document.getElementById("email").value;

    if (!film || !fornavn || !etternavn || !telefon || !email) {
        alert("Vennligst fyll ut alle feltene");
        return;
    }
    const patternFornavn = /^[A-Za-z]+$/;
    if (!patternFornavn.test(fornavn)) {
        alert("Fornavnet er ikke gyldig");
        return;
    }

    const bilett = { film, fornavn, etternavn, telefon, email };

    biletter.push(bilett);
    visbiletter();
    tomfelter();
}

function visbiletter() {
    const billetListe = document.getElementById("biletter");
    billetListe.innerHTML = "";

    for (let indeks = 0; indeks < biletter.length; indeks++) {
        const bilett = biletter[indeks];

        const li = document.createElement("li");
        li.textContent =
            "Billett " +
            (indeks + 1) +
            ": " +
            bilett.film +
            " - " +
            bilett.fornavn +
            " " +
            bilett.etternavn +
            " (" +
            bilett.email +
            ", +47 " +
            bilett.telefon +
            ")";
        billetListe.appendChild(li);
    }
}

function tomfelter() {
    document.getElementById("antall").value = "";
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
