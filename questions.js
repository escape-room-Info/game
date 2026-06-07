const ROOMS = [
  { name: "Binary Basement", desc: "Binärzahlen und Zahlensysteme" },
  { name: "Algorithm Alley", desc: "Einfache Algorithmen und Logik" },
  { name: "Network Nexus",   desc: "Internet & Computer-Grundlagen" }
];

const ALL_Q = [
  // RAUM 1 — Binär
  { room:0, q:"Was bedeutet 'Bit'?",
    o:["Ein kleines Gerät","Die kleinste Informationseinheit (0 oder 1)","Ein Computerprogramm","Ein Speichertyp"],
    c:1, e:"Ein Bit ist die kleinste Einheit — es kann nur 0 oder 1 sein." },
  { room:0, q:"Wie viele Bits hat ein Byte?",
    o:["4","8","16","2"], c:1,
    e:"1 Byte = 8 Bit — eine der wichtigsten Grundregeln der Informatik!" },
  { room:0, q:"Was ist der Dezimalwert von Binärzahl 0101?",
    o:["3","4","5","6"], c:2,
    e:"0×8 + 1×4 + 0×2 + 1×1 = 4 + 1 = 5" },
  // RAUM 2 — Algorithmen
  { room:1, q:"Was ist ein Algorithmus?",
    o:["Ein Computervirus","Eine Schritt-für-Schritt Anleitung zur Problemlösung","Eine Programmiersprache","Ein Betriebssystem"],
    c:1, e:"Ein Algorithmus ist wie ein Rezept — genaue Schritte zum Ziel." },
  { room:1, q:"Was macht eine Schleife in einem Programm?",
    o:["Sie beendet das Programm","Sie wiederholt Anweisungen mehrmals","Sie speichert Daten","Sie zeigt Text an"],
    c:1, e:"Eine Schleife (Loop) wiederholt Code — z.B. 'Wiederhole 10 Mal: drucke Hallo'" },
  { room:1, q:"Was ist eine Variable?",
    o:["Ein Fehler im Code","Eine Schleife","Ein Speicherplatz mit einem Namen für einen Wert","Ein Druckbefehl"],
    c:2, e:"Eine Variable ist wie eine Box mit Namen — z.B. alter = 13" },
  { room:1, q:"Was gibt dieses Programm aus?\n  x = 5\n  x = x + 3\n  AUSGABE x",
    o:["5","3","8","53"], c:2,
    e:"x startet bei 5, dann +3 → x = 8" },
  // RAUM 3 — Netzwerk
  { room:2, q:"Was bedeutet 'WWW'?",
    o:["World Wide Web","World Wide Windows","Wide Web World","Web World Wide"],
    c:0, e:"WWW = World Wide Web — das weltweite Netz aus verlinkten Webseiten." },
  { room:2, q:"Was ist ein Browser?",
    o:["Ein Betriebssystem","Ein Programm zum Surfen im Internet","Ein Antivirusprogramm","Eine Suchmaschine"],
    c:1, e:"Ein Browser (z.B. Chrome, Firefox) zeigt Webseiten an." },
  { room:2, q:"Was bedeutet 'WLAN'?",
    o:["Kabelnetzwerk","Drahtloses lokales Netzwerk","Weltweites Netzwerk","Sicheres Netzwerk"],
    c:1, e:"WLAN = Wireless Local Area Network — drahtloses Internet per Funk." },
];

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length-1; i>0; i--) {
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]]=[a[j],a[i]];
  }
  return a;
}
