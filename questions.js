const ALL_Q = [

    // Definition der Räume für das Spiel
const ROOMS = [
    "Room 0: Binary Basement",
    "Room 1: Algorithm Alley",
    "Room 2: Network Nexus",
    "Room 3: Cyber Security Sanctum",
    "Room 4: Hardware & Web Lab"
];

// =========================================================================
// --- ROOM 0: Binary Basement (Binärcodes, Bits & Zahlensysteme) ---
// =========================================================================
{
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
{
room: 0,
q: "Wie viele Bits ergeben zusammen genau ein 'Byte'?",
o: ["4 Bits", "8 Bits", "10 Bits", "1024 Bits"],
c: 1,
e: "8 Bits werden zu einem Byte zusammengefasst, um ein Zeichen (wie einen Buchstaben) zu speichern."
},
{
room: 0,
q: "Welche Dezimalzahl (normale Zahl) stellt der Binärcode '0101' dar?",
o: ["1", "3", "5", "10"],
c: 2,
e: "Die Stellen von rechts nach links sind 1, 2, 4, 8. Da bei 1 und 4 eine '1' steht: 1 + 4 = 5."
},
{
room: 0,
q: "Welches Zahlensystem nutzt neben den Ziffern 0-9 auch die Buchstaben A-F?",
o: ["Dezimalsystem", "Binärsystem", "Hexadezimalsystem", "Oktalsystem"],
c: 2,
e: "Das Hexadezimalsystem hat die Basis 16 (0-9 und A-F für 10-15)."
},
{
room: 0,
q: "Was bedeutet die Abkürzung 'ASCII' im Computerbereich?",
o: ["Ein Standard zur Codierung von Zeichen", "Ein Dateiformat für Videos", "Ein Antivirenprogramm", "Ein Netzwerkkabel"],
c: 0,
e: "Der ASCII-Code ordnet Zahlen (wie im Binärsystem) bestimmten Buchstaben und Zeichen zu."
},
{
room: 0,
q: "Wie stellt ein Computer die Zahl 2 im Binärsystem dar?",
o: ["0002", "0010", "0011", "0100"],
c: 1,
e: "Die zweite Stelle von rechts steht für die Zwei. Also ist '10' im Binärsystem gleich 2."
},
{
room: 0,
q: "Warum rechnen Computer im Binärsystem und nicht wie Menschen im Dezimalsystem?",
o: ["Weil es weniger Platz verbraucht", "Weil Transistoren nur zwei Zustände (Strom an/aus) kennen", "Weil es mathematisch unmöglich ist", "Weil Microsoft das so bestimmt hat"],
c: 1,
e: "Hardware besteht aus Milliarden winziger Schalter (Transistoren). Strom an oder aus ist technisch am sichersten zu messen."
},

// =========================================================================
// --- ROOM 1: Algorithm Alley (Algorithmen, Schleifen & Logik) ---
// =========================================================================
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
{
room: 1,
q: "Wie nennt man eine Endlosschleife, die niemals aufhört zu laufen?",
o: ["Infinite Loop", "Deadlock", "Crash-Schleife", "Break-Loop"],
c: 0,
e: "Eine 'Infinite Loop' läuft unendlich weiter, bis das Programm abgebrochen oder der Arbeitsspeicher voll ist."
},
{
room: 1,
q: "Was versteht man unter 'Debugging'?",
o: ["Das Herunterladen von Spielen", "Das Suchen und Beheben von Fehlern im Code", "Das Verschlüsseln einer Festplatte", "Das Installieren von Treibern"],
c: 1,
e: "Der Begriff kommt von 'Bug' (Käfer/Fehler). Debugging bedeutet, Fehler im Programm zu jagen."
},
{
room: 1,
q: "Welches logische Element gibt NUR DANN 'Wahr' zurück, wenn BEIDE Bedingungen erfüllt sind?",
o: ["ODER (OR)", "NICHT (NOT)", "UND (AND)", "VIELLEICHT"],
c: 2,
e: "Die UND-Bedingung erfordert, dass Bedingung A UND Bedingung B gleichzeitig wahr sind."
},
{
room: 1,
q: "Was macht der Befehl 'break' in einer Schleife?",
o: ["Er pausiert das gesamte Betriebssystem", "Er beendet die Schleife sofort vorzeitig", "Er löscht die Variablen", "Er startet den Computer neu"],
c: 1,
e: "Mit 'break' kann man eine Schleife sofort verlassen, selbst wenn die eigentliche Bedingung noch erfüllt wäre."
},
{
room: 1,
q: "Was ist ein 'Syntaxfehler' in der Programmierung?",
o: ["Ein Hardware-Defekt am Monitor", "Ein Grammatikfehler im Code, den der Computer nicht versteht", "Ein Hacker-Angriff", "Eine zu langsame Internetverbindung"],
c: 1,
e: "Die Syntax sind die Grammatikregeln einer Programmiersprache. Vergisst man z.B. eine Klammer, versteht der Computer den Code nicht."
},
{
room: 1,
q: "Welcher Datentyp speichert NUR die Werte 'True' (Wahr) oder 'False' (Falsch)?",
o: ["String", "Integer", "Boolean", "Float"],
c: 2,
e: "Ein 'Boolean' (boolescher Wert) kann exakt nur zwei Zustände annehmen: True oder False."
},

// =========================================================================
// --- ROOM 2: Network Nexus (Internet, IP-Adressen & Protokolle) ---
// =========================================================================
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
},
{
room: 2,
q: "Was macht ein 'DNS-Server' im Internet?",
o: ["Er schützt vor Computerviren", "Er übersetzt Web-Adressen (wie google.com) in IP-Adressen", "Er speichert Passwörter", "Er misst die Internetgeschwindigkeit"],
c: 1,
e: "DNS steht für Domain Name System. Es ist das Telefonbuch des Internets, das lesbare Namen in Computer-Zahlen-Adressen übersetzt."
},
{
room: 2,
q: "Wofür steht das 'S' am Ende von 'HTTPS://' im Browser?",
o: ["Schnell (Speed)", "Sicher (Secure / Verschlüsselt)", "Standard", "Server"],
c: 1,
e: "Das 'S' signalisiert, dass die Verbindung zwischen dir und der Website verschlüsselt und abhörsicher ist."
},
{
room: 2,
q: "Was ist die Hauptaufgabe einer 'Firewall'?",
o: ["Den PC vor Überhitzung schützen", "Unerlaubte Netzwerkzugriffe von außen blockieren", "Den Drucker installieren", "Daten schneller herunterladen"],
c: 1,
e: "Eine Firewall überwacht den Netzwerkverkehr und blockiert potenziell gefährliche Verbindungen von außen."
},
{
room: 2,
q: "Wie nennt man die kleinen Datenmengen, in die eine Datei zerlegt wird, um sie über das Internet zu senden?",
o: ["Datenbrösel", "Datenpakete", "Sektoren", "Bits-Ketten"],
c: 1,
e: "Große Dateien werden im Internet in viele kleine Datenpakete zerlegt, separat verschickt und beim Empfänger wieder zusammengesetzt."
},
{
room: 2,
q: "Welches Protokoll sorgt dafür, dass Webseiten vom Server zum Browser übertragen werden?",
o: ["FTP", "SMTP", "HTTP", "IMAP"],
c: 2,
e: "HTTP (Hypertext Transfer Protocol) ist die Standard-Sprache für das Laden von Websites."
},
{
room: 2,
q: "Was unterscheidet IPv4 von IPv6?",
o: ["IPv6 ist nur für Smartphones", "IPv6 bietet viel mehr mögliche IP-Adressen als IPv4", "IPv4 ist sicherer", "IPv6 braucht kein Internetkabel"],
c: 1,
e: "Weil es weltweit immer mehr Internet-Geräte gibt, gingen die alten IPv4-Adressen aus. IPv6 löst dieses Problem mit gigantisch vielen Adressen."
},

// =========================================================================
// --- ROOM 3: Cyber Security Sanctum (Sicherheit, Viren & Passwörter) ---
// =========================================================================
{
room: 3,
q: "Was beschreibt der Begriff 'Phishing'?",
o: ["Das Angeln in Videospielen", "Gefälschte E-Mails, die Passwörter oder Bankdaten stehlen wollen", "Das schnelle Tippen auf der Tastatur", "Das Löschen alter Dateien"],
c: 1,
e: "Beim Phishing 'fischen' Kriminelle mit täuschend echten Fake-Mails nach deinen privaten Zugangsdaten."
},
{
room: 3,
q: "Was macht ein starkes Passwort aus?",
o: ["Es sollte kurz sein", "Es kombiniert Groß-/Kleinbuchstaben, Zahlen und Sonderzeichen und ist lang", "Es sollte der eigene Name sein", "Es besteht nur aus Zahlen"],
c: 1,
e: "Länge und Zeichenvielfalt machen es automatisierten Hacker-Tools extrem schwer, Passwörter zu erraten."
},
{
room: 3,
q: "Was versteht man unter 'Zwei-Faktor-Authentifizierung' (2FA)?",
o: ["Zwei Passwörter nacheinander eingeben", "Identität durch zwei verschiedene Wege bestätigen (z.B. Passwort + SMS-Code)", "Zwei Monitore am PC nutzen", "Zweimal den Benutzernamen eintippen"],
c: 1,
e: "2FA bietet doppelten Schutz: Selbst wenn jemand dein Passwort kennt, fehlt ihm der zweite Faktor (z.B. dein Smartphone)."
},
{
room: 3,
q: "Was ist eine 'Ransomware'?",
o: ["Ein Programm, das den PC schneller macht", "Erpresser-Software, die deine Daten verschlüsselt und Geld fordert", "Ein Werbebanner", "Ein Tool zum Musikhören"],
c: 1,
e: "Ransomware sperrt den Computer oder verschlüsselt Dateien und verlangt Lösegeld (Ransom) für die Freischaltung."
},
{
room: 3,
q: "Wer oder was ist ein 'Trojaner' (Trojanisches Pferd) in der IT?",
o: ["Ein historisches PC-Spiel", "Ein nützlich getarntes Programm, das heimlich Schadcode enthält", "Ein besonders dickes Kabel", "Ein Antiviren-Scanner"],
c: 1,
e: "Wie in der Sage tarnt sich der Trojaner als nützliche Software, schleust aber Schadfunktionen am Schutzsystem vorbei."
},
{
room: 3,
q: "Warum sollte man Updates für das Betriebssystem oder Apps regelmäßig installieren?",
o: ["Damit der PC bunter wird", "Um neu entdeckte Sicherheitslücken zu schließen", "Weil sonst die Garantie erlischt", "Um Speicherplatz freizumachen"],
c: 1,
e: "Updates beheben oft kritische Sicherheitslücken, die Hacker ansonsten ausnutzen könnten, um den PC anzugreifen."
},
{
room: 3,
q: "Was ist ein 'Keylogger'?",
o: ["Ein USB-Stick für Musik", "Spionage-Software, die heimlich alle Tastatureingaben mitfilmt", "Ein Passwort-Manager", "Ein Tool für Minecraft-Server"],
c: 1,
e: "Ein Keylogger zeichnet jeden Tastendruck auf. So können Angreifer Passwörter und Kreditkartendaten mitlesen."
},
{
room: 3,
q: "Wie verhält man sich am besten, wenn man eine E-Mail von einem unbekannten Absender mit einem Anhang erhält?",
o: ["Sofort öffnen", "Den Anhang auf keinen Fall öffnen und die Mail löschen", "An alle Freunde weiterleiten", "Den Computer ausschalten"],
c: 1,
e: "Anhänge von Fremden enthalten sehr oft Schadsoftware (Malware). Niemals unbedacht öffnen!"
},
{
room: 3,
q: "Was macht ein Schadprogramm zu einem 'Wurm' (Computerwurm)?",
o: ["Er frisst die Festplatte auf", "Er kann sich selbstständig über Netzwerke auf andere Computer verbreiten", "Er funktioniert nur auf Apple-Geräten", "Er ist harmlos"],
c: 1,
e: "Im Gegensatz zu einem normalen Virus braucht ein Wurm kein Wirtsprogramm und verbreitet sich rasant von ganz alleine über das Internet."
},

// =========================================================================
// --- ROOM 4: Hardware & Web Lab (Hardware, HTML & Web-Grundlagen) ---
// =========================================================================
{
room: 4,
q: "Welches Bauteil gilt als das 'Gehirn' des Computers?",
o: ["Die Festplatte", "Der Arbeitsspeicher (RAM)", "Der Prozessor (CPU)", "Die Grafikkarte"],
c: 2,
e: "Die CPU (Central Processing Unit) berechnet alle Befehle und steuert den Computer."
},
{
room: 4,
q: "Was passiert mit den Daten im Arbeitsspeicher (RAM), wenn der PC ausgeschaltet wird?",
o: ["Sie werden dauerhaft gespeichert", "Sie werden komplett gelöscht", "Sie werden auf den USB-Stick verschoben", "Sie werden komprimiert"],
c: 1,
e: "Der RAM ist ein flüchtiger Speicher. Ohne Strom verliert er alle geladenen Daten sofort."
},
{
room: 4,
q: "Wofür steht die Abkürzung 'HTML'?",
o: ["Hypertext Markup Language", "High Tech Modern Language", "Hyper Tool Multi Language", "Heim Text Modus Logik"],
c: 0,
e: "HTML ist die Standardsprache, um die Struktur und den Text einer Webseite aufzubauen."
},
{
room: 4,
q: "Mit welcher Sprache bestimmt man das Design (Farben, Layout, Schriftart) einer Website?",
o: ["HTML", "CSS", "SQL", "Python"],
c: 1,
e: "CSS (Cascading Style Sheets) ist exakt für das Aussehen und Styling von Webseiten zuständig."
},
{
room: 4,
q: "Welches Hardware-Bauteil speichert Daten auch ohne Strom dauerhaft ab?",
o: ["RAM", "Festplatte (HDD / SSD)", "Prozessor", "Netzteil"],
c: 1,
e: "Festplatten nutzen Magnetismus oder Flash-Speicher, um Fotos, Spiele und das System dauerhaft zu sichern."
},
{
room: 4,
q: "Was ist ein 'Browser'?",
o: ["Ein Antivirenprogramm", "Ein Programm zum Anzeigen von Webseiten (z.B. Chrome, Firefox)", "Ein Betriebssystem", "Ein Bauteil im PC"],
c: 1,
e: "Ein Webbrowser übersetzt den HTML-, CSS- und JS-Code von Servern in die bunte Website, die du siehst."
},
{
room: 4,
q: "Welches HTML-Tag nutzt man, um einen Zeilenumbruch (neue Zeile) zu erzeugen?",
o: ["<p>", "<lb>", "<br>", "<next>"],
c: 2,
e: "<br> steht für 'Line Break' und bricht den Text in die nächste Zeile um."
},
{
room: 4,
q: "Was ist der Vorteil einer modernen SSD gegenüber einer alten HDD-Festplatte?",
o: ["Sie ist billiger", "Sie ist viel schneller, leiser und robuster", "Sie verbraucht mehr Strom", "Sie ist viel größer und schwerer"],
c: 1,
e: "SSDs haben keine beweglichen Teile (wie die rotierenden Scheiben einer HDD) und lesen/schreiben Daten rasant schnell."
},
{
room: 4,
q: "Was bewirkt JavaScript auf einer modernen Website?",
o: ["Es macht die Website sicher vor Hackern", "Es sorgt für Interaktivität, Dynamik und Logik (z.B. Spiele-Logik)", "Es druckt die Seite aus", "Es erstellt das Layout"],
c: 1,
e: "Während HTML den Text liefert und CSS das Design macht, haucht JavaScript der Seite Leben und Funktionalität ein."
}

];

// Die funktionierende Shuffle-Funktion bleibt erhalten!
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
