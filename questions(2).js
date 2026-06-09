// ═══════════════════════════════════════════════════════
//  ESCAPE://SYSTEM — Fragenpakete
//  Paket A: Informatik-Grundlagen (Original)
//  Paket B: Cybersecurity & Hacking (NEU)
// ═══════════════════════════════════════════════════════

// ── RAUM-DEFINITIONEN ──────────────────────────────────
const ROOMS = [
  // Paket A — Informatik
  { name: "Binary Basement",  desc: "Binärzahlen und Zahlensysteme",         pack: "A" },
  { name: "Algorithm Alley",  desc: "Einfache Algorithmen und Logik",         pack: "A" },
  { name: "Network Nexus",    desc: "Internet & Computer-Grundlagen",          pack: "A" },
  // Paket B — Cybersecurity
  { name: "Crypto Catacombs", desc: "Verschlüsselung & Passwörter",           pack: "B" },
  { name: "Hack Hub",         desc: "Angriffsmethoden & Social Engineering",   pack: "B" },
  { name: "Defense Domain",   desc: "Schutzmaßnahmen & Sicherheitskonzepte",  pack: "B" },
];

// ── ALLE FRAGEN ────────────────────────────────────────
const ALL_Q = [

  // ════════════════════════════════
  //  PAKET A — INFORMATIK GRUNDLAGEN
  // ════════════════════════════════

  // RAUM 0 — Binary Basement
  { room:0, pack:"A", q:"Was bedeutet 'Bit'?",
    o:["Ein kleines Gerät","Die kleinste Informationseinheit (0 oder 1)","Ein Computerprogramm","Ein Speichertyp"],
    c:1, e:"Ein Bit ist die kleinste Einheit — es kann nur 0 oder 1 sein." },

  { room:0, pack:"A", q:"Wie viele Bits hat ein Byte?",
    o:["4","8","16","2"], c:1,
    e:"1 Byte = 8 Bit — eine der wichtigsten Grundregeln der Informatik!" },

  { room:0, pack:"A", q:"Was ist der Dezimalwert von Binärzahl 0101?",
    o:["3","4","5","6"], c:2,
    e:"0×8 + 1×4 + 0×2 + 1×1 = 4 + 1 = 5" },

  { room:0, pack:"A", q:"Wie viele Bytes hat ein Kilobyte (KB)?",
    o:["100","512","1024","2048"], c:2,
    e:"1 KB = 1024 Byte — die Informatik rechnet in Zweierpotenzen." },

  { room:0, pack:"A", q:"Was ist der Binärwert von der Dezimalzahl 10?",
    o:["1010","1001","1100","0110"], c:0,
    e:"8+2 = 10 → 1×8 + 0×4 + 1×2 + 0×1 = 1010₂" },

  // RAUM 1 — Algorithm Alley
  { room:1, pack:"A", q:"Was ist ein Algorithmus?",
    o:["Ein Computervirus","Eine Schritt-für-Schritt Anleitung zur Problemlösung","Eine Programmiersprache","Ein Betriebssystem"],
    c:1, e:"Ein Algorithmus ist wie ein Rezept — genaue Schritte zum Ziel." },

  { room:1, pack:"A", q:"Was macht eine Schleife in einem Programm?",
    o:["Sie beendet das Programm","Sie wiederholt Anweisungen mehrmals","Sie speichert Daten","Sie zeigt Text an"],
    c:1, e:"Eine Schleife (Loop) wiederholt Code — z.B. 'Wiederhole 10 Mal: drucke Hallo'" },

  { room:1, pack:"A", q:"Was ist eine Variable?",
    o:["Ein Fehler im Code","Eine Schleife","Ein Speicherplatz mit einem Namen für einen Wert","Ein Druckbefehl"],
    c:2, e:"Eine Variable ist wie eine Box mit Namen — z.B. alter = 13" },

  { room:1, pack:"A", q:"Was gibt dieses Programm aus?\n  x = 5\n  x = x + 3\n  AUSGABE x",
    o:["5","3","8","53"], c:2,
    e:"x startet bei 5, dann +3 → x = 8" },

  { room:1, pack:"A", q:"Was bedeutet 'if' in Programmiersprachen?",
    o:["Schleife starten","Funktion aufrufen","Bedingte Verzweigung (wenn … dann …)","Variable speichern"],
    c:2, e:"'if' prüft eine Bedingung: wenn true → führe Code aus, sonst nicht." },

  // RAUM 2 — Network Nexus
  { room:2, pack:"A", q:"Was bedeutet 'WWW'?",
    o:["World Wide Web","World Wide Windows","Wide Web World","Web World Wide"],
    c:0, e:"WWW = World Wide Web — das weltweite Netz aus verlinkten Webseiten." },

  { room:2, pack:"A", q:"Was ist ein Browser?",
    o:["Ein Betriebssystem","Ein Programm zum Surfen im Internet","Ein Antivirusprogramm","Eine Suchmaschine"],
    c:1, e:"Ein Browser (z.B. Chrome, Firefox) zeigt Webseiten an." },

  { room:2, pack:"A", q:"Was bedeutet 'WLAN'?",
    o:["Kabelnetzwerk","Drahtloses lokales Netzwerk","Weltweites Netzwerk","Sicheres Netzwerk"],
    c:1, e:"WLAN = Wireless Local Area Network — drahtloses Internet per Funk." },

  { room:2, pack:"A", q:"Was ist eine IP-Adresse?",
    o:["Ein Passwort","Eine eindeutige Adresse eines Geräts im Netzwerk","Ein Programmcode","Ein Dateiformat"],
    c:1, e:"Die IP-Adresse (z.B. 192.168.0.1) identifiziert jedes Gerät im Netzwerk eindeutig." },

  { room:2, pack:"A", q:"Wofür steht HTTP?",
    o:["High Transfer Text Protocol","HyperText Transfer Protocol","Host Transfer Terminal Protocol","HyperText Terminal Process"],
    c:1, e:"HTTP = HyperText Transfer Protocol — das Protokoll für Webseiten-Übertragung." },


  // ════════════════════════════════════
  //  PAKET B — CYBERSECURITY & HACKING
  // ════════════════════════════════════

  // RAUM 3 — Crypto Catacombs
  { room:3, pack:"B", q:"Was ist Verschlüsselung (Encryption)?",
    o:["Dateien löschen","Daten in eine unleserliche Form umwandeln","Passwörter erraten","Internet abschalten"],
    c:1, e:"Verschlüsselung wandelt Daten so um, dass nur Berechtigte sie lesen können." },

  { room:3, pack:"B", q:"Was bedeutet HTTPS im Browser?",
    o:["Die Seite lädt schneller","Die Verbindung ist verschlüsselt und sicher","Die Seite ist kostenlos","Der Server ist in Deutschland"],
    c:1, e:"HTTPS = HTTP Secure — die Verbindung wird mit TLS/SSL verschlüsselt. Immer auf das 🔒 achten!" },

  { room:3, pack:"B", q:"Welches dieser Passwörter ist am sichersten?",
    o:["password123","Max2010","xK!9#mLq@2vZ","12345678"],
    c:2, e:"Lange Passwörter mit Zahlen, Sonderzeichen und Groß-/Kleinbuchstaben sind am sichersten." },

  { room:3, pack:"B", q:"Was ist ein 'Hash'?",
    o:["Ein Hacker-Werkzeug","Eine Einweg-Fingerabdruck-Funktion für Daten","Ein Netzwerkprotokoll","Eine Art Virus"],
    c:1, e:"Ein Hash (z.B. SHA-256) wandelt beliebige Daten in einen fixen Fingerabdruck um — nicht rückgängig machbar." },

  { room:3, pack:"B", q:"Was ist Zwei-Faktor-Authentifizierung (2FA)?",
    o:["Zwei Passwörter eingeben","Login mit Passwort + zweitem Beweis (z.B. SMS-Code)","Doppelte Verschlüsselung","Zwei Benutzerkonten"],
    c:1, e:"2FA = etwas das du weißt (Passwort) + etwas das du hast (SMS, App). Viel sicherer!" },

  { room:3, pack:"B", q:"Was speichert ein Passwort-Manager?",
    o:["Deine Kreditkartennummern","Alle deine Passwörter verschlüsselt an einem Ort","Deinen Browserverlauf","Deine E-Mails"],
    c:1, e:"Passwort-Manager (z.B. Bitwarden) speichern alle Passwörter sicher — du brauchst nur ein Masterpasswort." },

  // RAUM 4 — Hack Hub
  { room:4, pack:"B", q:"Was ist 'Phishing'?",
    o:["Einen Fisch fangen","Gefälschte E-Mails/Seiten um Daten zu stehlen","Netzwerk-Geschwindigkeit messen","Viren entfernen"],
    c:1, e:"Phishing täuscht echte Seiten/Mails nach — Ziel ist es, Passwörter oder Kreditkartendaten zu stehlen." },

  { room:4, pack:"B", q:"Was ist 'Social Engineering'?",
    o:["Soziale Netzwerke programmieren","Menschen manipulieren um an Informationen zu kommen","Netzwerke aufbauen","Eine Programmiersprache"],
    c:1, e:"Social Engineering nutzt menschliche Schwächen statt technischer — z.B. als IT-Support ausgeben." },

  { room:4, pack:"B", q:"Was ist ein 'Trojanisches Pferd' in der IT?",
    o:["Ein sehr schneller Computer","Eine Schadsoftware die sich als nützliches Programm tarnt","Ein Firewall-Typ","Ein Verschlüsselungsverfahren"],
    c:1, e:"Trojaner sehen wie echte Programme aus, führen aber heimlich Schadcode aus — wie das antike Pferd." },

  { room:4, pack:"B", q:"Was ist 'Ransomware'?",
    o:["Software zum Sichern von Daten","Schadsoftware die Dateien verschlüsselt und Lösegeld fordert","Ein Antivirusprogramm","Ein Backup-Tool"],
    c:1, e:"Ransomware (Erpressungssoftware) verschlüsselt deine Dateien und fordert Zahlung — oft in Kryptowährung." },

  { room:4, pack:"B", q:"Was bedeutet 'Brute-Force-Angriff'?",
    o:["Physischer Einbruch in ein Rechenzentrum","Systematisches Ausprobieren aller möglichen Passwörter","Netzwerküberlastung","E-Mail-Spam"],
    c:1, e:"Bei Brute-Force probiert ein Computer automatisch alle Kombinationen — ein kurzes Passwort kann in Sekunden geknackt werden!" },

  { room:4, pack:"B", q:"Was ist ein 'Man-in-the-Middle'-Angriff?",
    o:["Ein Angriff auf das Rechenzentrum","Jemand liest heimlich die Kommunikation zwischen zwei Parteien mit","Ein Virus im RAM","Zu viele Loginversuche"],
    c:1, e:"Bei MitM schaltet sich ein Angreifer zwischen zwei Kommunikationspartner — deshalb ist HTTPS so wichtig!" },

  // RAUM 5 — Defense Domain
  { room:5, pack:"B", q:"Was macht eine Firewall?",
    o:["Feuer löschen","Unerwünschten Netzwerkverkehr blockieren","Dateien komprimieren","Viren entfernen"],
    c:1, e:"Eine Firewall überwacht und filtert Netzwerkverkehr — sie ist die erste Schutzlinie deines Systems." },

  { room:5, pack:"B", q:"Was ist ein 'Software-Update' aus Sicherheitssicht?",
    o:["Nur neue Features hinzufügen","Auch Sicherheitslücken schließen (Patches)","Das Programm langsamer machen","Daten löschen"],
    c:1, e:"Updates schließen bekannte Sicherheitslücken (Vulnerabilities) — veraltete Software ist ein Hauptangriffsziel." },

  { room:5, pack:"B", q:"Was bedeutet 'Datensparsamkeit'?",
    o:["Festplatte aufräumen","Nur die wirklich notwendigen Daten sammeln und speichern","Internet-Speed drosseln","Passwörter kürzer machen"],
    c:1, e:"Datensparsamkeit = Privacy by Design: je weniger Daten gesammelt werden, desto weniger kann gestohlen werden." },

  { room:5, pack:"B", q:"Was ist ein VPN?",
    o:["Ein Virus-Programm","Sehr schnelles Netzwerk","Verschlüsselter Tunnel für Internetverbindungen","Ein Browser"],
    c:2, e:"VPN = Virtual Private Network — dein Datenverkehr läuft verschlüsselt durch einen Tunnel, ideal für öffentliches WLAN." },

  { room:5, pack:"B", q:"Was sollte man bei verdächtigen E-Mail-Anhängen tun?",
    o:["Sofort öffnen um zu sehen was drin ist","Nicht öffnen, Absender prüfen, ggf. IT-Support kontaktieren","An Freunde weiterleiten","Ausdrucken"],
    c:1, e:"Verdächtige Anhänge NIEMALS öffnen — die meisten Malware-Infektionen starten per E-Mail-Anhang." },
];

// ── PAKET-FILTER HELPER ────────────────────────────────
// Gibt alle Fragen eines Pakets zurück (gefiltert nach room-Bereich)
function getPackQuestions(pack) {
  return ALL_Q.filter(q => q.pack === pack);
}

// ── SHUFFLE ────────────────────────────────────────────
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
