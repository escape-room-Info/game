const ROOMS = [
  { name: "Binary Basement", desc: "Binärcodes und Zahlensysteme knacken" },
  { name: "Algorithm Alley", desc: "Algorithmen, Schleifen und Bedingungen" },
  { name: "Network Nexus",   desc: "Internet, IP-Adressen und Protokolle"  }
];

const ALL_Q = [
  { room:0, q:"Was ist der Dezimalwert von Binärzahl 1010?",
    o:["8","10","12","16"], c:1, e:"1×8 + 0×4 + 1×2 + 0×1 = 10" },
  { room:0, q:"Welche Zahl folgt im Binärsystem auf 0111?",
    o:["0100","1000","1010","0110"], c:1, e:"0111 = 7 → nächste ist 8 = 1000" },
  { room:0, q:"Wie viele Werte kann man mit 4 Bits darstellen?",
    o:["4","8","16","32"], c:2, e:"2⁴ = 16 Werte (0 bis 15)" },
  { room:1, q:"Was ist das Ergebnis?\n  x = 0\n  WIEDERHOLE 5 MAL:\n    x = x + 3\n  AUSGABE x",
    o:["5","8","15","3"], c:2, e:"5 × 3 = 15" },
  { room:1, q:"Was wird ausgegeben?\n  x = 7\n  WENN x > 5 UND x < 10:\n    AUSGABE 'Treffer'\n  SONST:\n    AUSGABE 'Nein'",
    o:["Treffer","Nein","Fehler","Nichts"], c:0, e:"7 > 5 und 7 < 10 → beide wahr → 'Treffer'" },
  { room:1, q:"Was bedeutet O(n²) Komplexität?",
    o:["Laufzeit halbiert sich","Verdoppelt sich bei 2× Eingabe","Vervierfacht sich bei 2× Eingabe","Immer gleich schnell"], c:2, e:"(2n)² = 4n² — also 4× so lang bei 2× Eingabe" },
  { room:1, q:"🔐 HACKER-RÄTSEL: Ich bin gerade, durch 4 teilbar, kleiner als 20, mein Binärwert beginnt mit 11. Wer bin ich?",
    o:["8","12","16","4"], c:1, e:"12 = 1100₂ (beginnt mit 11), gerade, ÷4 = 3, < 20 ✓" },
  { room:2, q:"Was ist eine IP-Adresse?",
    o:["Ein WLAN-Passwort","Eine eindeutige Geräteadresse im Netzwerk","Der Name einer Webseite","Das Betriebssystem des Routers"], c:1, e:"IP identifiziert Geräte eindeutig im Netzwerk" },
  { room:2, q:"Was macht ein DNS-Server?",
    o:["Verbindet Router","Übersetzt Domainnamen in IP-Adressen","Verschlüsselt E-Mails","Speichert Passwörter"], c:1, e:"DNS = Telefonbuch des Internets: google.com → 142.250.x.x" },
  { room:2, q:"Was unterscheidet HTTPS von HTTP?",
    o:["Schnellere Verbindung","Älteres Protokoll","Verschlüsselte sichere Verbindung","Verbindung ohne Passwort"], c:2, e:"S = Secure — TLS/SSL verschlüsselt die Verbindung" },
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
