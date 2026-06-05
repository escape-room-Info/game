const ALL_Q = [

room: 0,

q: "Wofür steht die Zahl 1 im Binärsystem eines Computers meistens?",

o: ["Aus (kein Strom)", "An (Strom fließt / wahr)", "Fehler", "Zwei"],

c: 1,

e: "Ein Bit kennt nur zwei Zustände: 0 steht für aus/falsch, 1 steht für an/wahr."

},

{

room: 0,

q: "Aus wie vielen unterschiedlichen Ziffern besteht das Binärsystem?",

o: ["Aus 2 Ziffern (0 und 1)", "Aus 10 Ziffern (0 bis 9)", "Aus unendlich vielen", "Aus 8 Ziffern"],

c: 0,

e: "Bi- steht für zwei. Das Binärsystem nutzt nur die Ziffern 0 und 1."

},

{

room: 0,

q: "Wie nennt man eine einzelne Speicherstelle für eine 0 oder 1?",

o: ["Byte", "Megabyte", "Bit", "Bug"],

c: 2,

e: "Ein 'Bit' (Binary Digit) ist die kleinste Informationseinheit im Computer."

},


// --- ROOM 1: Algorithm Alley (Algorithmen, Schleifen & Bedingungen) ---

{

room: 1,

q: "Was beschreibt das Wort 'Algorithmus' in der Informatik am besten?",

o: ["Einen Computervirus", "Ein wichtiges Kabel", "Eine genaue Schritt-für-Schritt-Anleitung", "Ein langes Passwort"],

c: 2,

e: "Ein Algorithmus ist wie ein Kochrezept eine logische Abfolge von Anweisungen."

},

{

room: 1,

q: "Was passiert bei einer 'Schleife' (Loop) in einem Programm?",

o: ["Der Computer stürzt ab", "Ein Code-Teil wird mehrfach wiederholt", "Der Bildschirm wird gesperrt", "Das Programm wird gelöscht"],

c: 1,

e: "Schleifen nutzt man, um Befehle mehrmals hintereinander auszuführen, ohne sie doppelt zu schreiben."

},

{

room: 1,

q: "Was ist das Ergebnis von diesem Code?\n x = 2\n WENN x > 5:\n AUSGABE 'Groß'\n SONST:\n AUSGABE 'Klein'",

o: ["Groß", "Klein", "2", "Fehler"],

c: 1,

e: "Da 2 nicht größer als 5 ist, springt das Programm in den SONST-Teil und gibt 'Klein' aus."

},


// --- ROOM 2: Network Nexus (Internet, IP-Adressen & Protokolle) ---

{

room: 2,

q: "Wofür steht die bekannte Abkürzung 'WWW'?",

o: ["World Wide Web", "World Wide Word", "Wichtiges Web Wissen", "WLAN Ohne Kabel"],

c: 0,

e: "WWW steht für World Wide Web (weltweites Netz), über das wir Webseiten aufrufen."

},

{

room: 2,

q: "Womit werden Computer im Internet eindeutig identifiziert, damit Daten richtig ankommen?",

o: ["Mit dem Namen des Besitzers", "Mit einer IP-Adresse", "Mit der Telefonnummer", "Mit dem WLAN-Passwort"],

c: 1,

e: "Die IP-Adresse funktioniert wie eine Postadresse im Internet."

},

{

room: 2,

q: "Welches Gerät leitet die Datenpakete zu Hause an die richtigen Geräte im Netzwerk weiter?",

o: ["Der Monitor", "Die Tastatur", "Der Router", "Die Festplatte"],

c: 2,

e: "Der Router (oft die FritzBox o.ä.) verteilt das Internet und verbindet die Geräte zu Hause mit der Welt."

}

];

// FÜGE DIE SHUFFLE-FUNKTION DIREKT HIER UNTER DEN FRAGEN EIN:
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
