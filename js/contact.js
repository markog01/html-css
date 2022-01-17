// function validateFormNumber() {
//   var x;
//   var text;

//   x = document.getElementById("year").value; // Uzmi vrednost in polja koje ima id="age"
//   var parsed = parseInt(x);
//   console.log(parsed);

//   // Ako x nije broj (NaN - Not a Number) ili ako je manje od 1 ili ako je veće od 10. Ako je jedan od ovih uslova ispunjen uradi sledeće:
//   if (isNaN(parsed) || parsed < 1 || parsed > 10) {
//     text = "Broj nije validan"; // promenljivoj text dodeli vrednost string "Broj nije validan"
//     document.getElementById("tekst2").style.color = "red"; // dodaj CSS atribut color:red na tag koji sadrži id "tekst" (paragraf "contact.html" linija koda 79). Boja teksta je sada crvena.
//     document.getElementById("tekst2").innerHTML = text; // Prikaži vrednost promenljive "text" u HTML elementu koji ima id "tekst".
//     return false; // Prekini slanje podataka iz forme
//   } else {
//     text = "Broj je ok, nalazi se u odgovarajućem opsegu";
//     document.getElementById("tekst2").style.color = "green";
//     document.getElementById("tekst2").innerHTML = text;
//   }
// }

function fullFormValidation() {
  var text;
  const textreset = "";
  var x = document.getElementById("year").value;
  console.log(x);
  var parsed = parseInt(x);
  console.log(parsed);

  if (document.forma.fname.value == "") {
    text = "Unesite ime";
    document.getElementById("tekst").style.color = "red";
    document.getElementById("tekst").innerHTML = text;

    document.getElementById("info-tekst1").innerHTML = textreset;

    return false;
  } else {
    text = "forma sadrži ime";
    document.getElementById("info-tekst1").style.color = "green";
    document.getElementById("info-tekst1").innerHTML = text;
  }

  if (document.forma.fyear.value == "") {
    text = "Unesite godiste";

    document.getElementById("tekst").style.color = "red";
    document.getElementById("tekst").innerHTML = text;

    document.getElementById("info-tekst2").innerHTML = textreset;

    return false;
  } else if (isNaN(parsed) || parsed < 1 || parsed > 10) {
    text = "Broj nije validan"; // promenljivoj text dodeli vrednost string "Broj nije validan"
    document.getElementById("tekst2").style.color = "red"; // dodaj CSS atribut color:red na tag koji sadrži id "tekst" (paragraf "contact.html" linija koda 79). Boja teksta je sada crvena.
    document.getElementById("tekst2").innerHTML = text; // Prikaži vrednost promenljive "text" u HTML elementu koji ima id "tekst".
    return false; // Prekini slanje podataka iz forme
  } else {
    text = "Broj je ok, nalazi se u odgovarajućem opsegu";
    document.getElementById("tekst2").style.color = "green";
    document.getElementById("tekst2").innerHTML = text;

    text = "forma sadrži godiste";

    document.getElementById("info-tekst2").style.color = "green";
    document.getElementById("info-tekst2").innerHTML = text;
  }

  if (document.forma.femail.value == "") {
    text = "Unesite vašu email adresu";
    document.getElementById("tekst").style.color = "red";
    document.getElementById("tekst").innerHTML = text;

    document.getElementById("info-tekst3").innerHTML = textreset;

    return false;
  } else {
    text = "forma sadrži email adresu";
    document.getElementById("info-tekst3").style.color = "green";
    document.getElementById("info-tekst3").innerHTML = text;
  }

  if (document.forma.fporuka.value == "") {
    text = "Unesite poruku";
    document.getElementById("tekst").style.color = "red";
    document.getElementById("tekst").innerHTML = text;

    document.getElementById("info-tekst4").innerHTML = textreset;

    return false;
  } else {
    text = "forma sadrži poruku";
    document.getElementById("info-tekst4").style.color = "green";
    document.getElementById("info-tekst4").innerHTML = text;

    text = "Forma sadrži sve parametre";
    alert(text);
  }
}
