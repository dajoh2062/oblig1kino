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
        document.getElementById("fornavnError").textContent="Fornavnet er ikke gyldig";
        return;
    }

    const patternEtternavn = /^[A-Za-z]+$/;
    if (!patternEtternavn.test(etternavn)) {
        document.getElementById("etternavnError").textContent="Etternavnet er ikke gyldig";
        return;
    }

    const patternTelefon = /^\d{8}$/;
    if (!patternTelefon.test(telefon)) {
        document.getElementById("telefonError").textContent="Nummeret er ikke gyldig";
        return;
    }

    const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+[a-zA-Z.]$/;
    if (!patternEmail.test(email)) {
        document.getElementById("emailError").textContent="Eposten er ikke gyldig";
        return;
    }

    const bilett = { film, fornavn, etternavn, telefon, email };

    biletter.push(bilett);
    visbiletter();
    tomfelter();
    fjernError();

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

function fjernError() {
    document.getElementById("fornavnError").textContent = "";
    document.getElementById("etternavnError").textContent = "";
    document.getElementById("telefonError").textContent = "";
    document.getElementById("emailError").textContent = "";}


