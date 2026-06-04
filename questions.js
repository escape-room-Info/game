const ALL_Q = [
  // ==========================================
  // ROOM 0: HARDWARE & GRUNDLAGEN (15 Fragen)
  // ==========================================
  {
    room: 0,
    q: "Welches Teil im Computer wird oft als das 'Gehirn' des PCs bezeichnet?",
    o: ["Die Festplatte", "Der Prozessor (CPU)", "Die Maus", "Der Monitor"],
    c: 1,
    e: "Der Prozessor (CPU) steuert alle Berechnungen und verarbeitet die Daten."
  },
  {
    room: 0,
    q: "Was ist ein Beispiel für ein 'Eingabegerät'?",
    o: ["Der Drucker", "Die Tastatur", "Der Lautsprecher", "Der Monitor"],
    c: 1,
    e: "Mit der Tastatur gibst du Daten IN den Computer ein."
  },
  {
    room: 0,
    q: "Wo werden deine Bilder und Spiele dauerhaft gespeichert, auch wenn der PC aus ist?",
    o: ["Im Arbeitsspeicher (RAM)", "Auf der Festplatte (HDD/SSD)", "Im Stromkabel", "Auf dem Mauspad"],
    c: 1,
    e: "Die Festplatte verliert ihre Daten nicht, wenn der Strom abgeschaltet wird."
  },
  {
    room: 0,
    q: "Was passiert mit den Daten im Arbeitsspeicher (RAM), wenn man den PC ausschaltet?",
    o: ["Sie werden ausgedruckt", "Sie werden gelöscht", "Sie werden verdoppelt", "Nichts, sie bleiben da"],
    c: 1,
    e: "Der Arbeitsspeicher ist ein Kurzzeitgedächtnis und wird beim Ausschalten geleert."
  },
  {
    room: 0,
    q: "Welches Gerät gehört zur 'Hardware'?",
    o: ["Ein Computerspiel", "Der Monitor", "Ein Webbrowser", "Das Betriebssystem"],
    c: 1,
    e: "Hardware ist alles am Computer, was man anfassen kann."
  },
  {
    room: 0,
    q: "Was ist 'Software'?",
    o: ["Ein weiches Kabel", "Programme und Apps", "Das Gehäuse des PCs", "Die PC-Maus"],
    c: 1,
    e: "Software sind die Programme, die auf der Hardware laufen."
  },
  {
    room: 0,
    q: "Welches dieser Programme ist ein Betriebssystem?",
    o: ["Windows", "Google Chrome", "WhatsApp", "Minecraft"],
    c: 0,
    e: "Windows (oder auch macOS/Linux) verwaltet den gesamten Computer."
  },
  {
    room: 0,
    q: "Wie nennt man den Hauptbildschirm nach dem Starten von Windows?",
    o: ["Küche", "Desktop", "Keller", "Browser"],
    c: 1,
    e: "Der Desktop ist deine digitale Schreibtisch-Oberfläche."
  },
  {
    room: 0,
    q: "Mit welcher Tastenkombination kann man Text kopieren?",
    o: ["Strg + C", "Strg + V", "Strg + X", "Alt + F4"],
    c: 0,
    e: "Strg + C steht für 'Copy' (Kopieren)."
  },
  {
    room: 0,
    q: "Mit welcher Tastenkombination fügt man kopierten Text wieder ein?",
    o: ["Strg + C", "Strg + V", "Strg + P", "Strg + Z"],
    c: 1,
    e: "Strg + V fügt den Inhalt aus der Zwischenablage ein."
  },
  {
    room: 0,
    q: "Was bedeutet die Abkürzung 'PC'?",
    o: ["Personal Computer", "Plastik Computer", "Prima Code", "Power Central"],
    c: 0,
    e: "Personal Computer bedeutet übersetzt 'persönlicher Rechner'."
  },
  {
    room: 0,
    q: "Welches Symbol im Windows-Explorer zeigt dir, wo gelöschte Dateien landen?",
    o: ["Der Papierkorb", "Die Festplatte", "Der Download-Ordner", "Das Netzwerksymbol"],
    c: 0,
    e: "Gelöschte Dateien wandern zuerst in den Papierkorb, falls man sie zurückholen will."
  },
  {
    room: 0,
    q: "Was ist ein 'Pixel'?",
    o: ["Ein kleines Computertier", "Ein einzelner Bildpunkt auf dem Bildschirm", "Ein langes Kabel", "Eine Taste auf der Tastatur"],
    c: 1,
    e: "Bildschirme setzen Bilder aus Millionen winziger Farbpunkte (Pixel) zusammen."
  },
  {
    room: 0,
    q: "Wie nennt man das Gehäuse, in dem alle wichtigen PC-Teile stecken?",
    o: ["Computer-Tower / Gehäuse", "Monitor", "Drucker", "Mausstation"],
    c: 0,
    e: "Im Gehäuse (Tower) geschützt liegen Mainboard, CPU und Festplatte."
  },
  {
    room: 0,
    q: "Warum sollte man USB-Sticks am PC 'sicher entfernen'?",
    o: ["Damit der Stick nicht weggeworfen wird", "Um Datenverlust beim Schreiben zu verhindern", "Damit der PC nicht explodiert", "Weil es schneller lädt"],
    c: 1,
    e: "Wenn der PC noch heimlich Daten überträgt und man ihn rauszieht, können Dateien kaputtgehen."
  },

  // ==========================================
  // ROOM 1: SICHERHEIT & PASSWÖRTER (15 Fragen)
  // ==========================================
  {
    room: 1,
    q: "Welches Passwort ist am sichersten?",
    o: ["123456", "passwort", "Mmein!Hund?2026", "geheim"],
    c: 2,
    e: "Ein gutes Passwort hat Groß-/Kleinstreibeung, Zahlen und Sonderzeichen."
  },
  {
    room: 1,
    q: "Wem darfst du deine Passwörter verraten?",
    o: ["Meinem besten Freund", "Niemandem (außer evtl. meinen Eltern)", "Jedem, der nett fragt", "In den Klassen-Chat schreiben"],
    c: 1,
    e: "Passwörter sind absolut geheim, um deine Konten zu schützen."
  },
  {
    room: 1,
    q: "Was ist eine 'Phishing-Mail'?",
    o: ["Eine Mail über das Angeln", "Eine gefälschte Mail, die Passwörter stehlen will", "Eine Einladung zu einem Spiel", "Eine Nachricht vom Lehrer"],
    c: 1,
    e: "Phishing kommt von 'fishing' (Angeln) nach deinen geheimen Daten."
  },
  {
    room: 1,
    q: "Was macht ein Computervirus?",
    o: ["Er bringt den Nutzer zum Husten", "Er kann Daten beschädigen oder den PC verlangsamen", "Er reinigt den Bildschirm", "Er schaltet das Licht im Zimmer aus"],
    c: 1,
    e: "Ein Virus ist ein böswilliges Programm, das dem Computer schadet."
  },
  {
    room: 1,
    q: "Welches Programm schützt deinen Computer vor Viren?",
    o: ["Ein Antiviren-Programm (Firewall/Scanner)", "Ein Videoplayer", "Ein Schreibprogramm", "Ein Computerspiel"],
    c: 0,
    e: "Virenscanner überprüfen Dateien und blockieren Gefahren."
  },
  {
    room: 1,
    q: "Warum sollte man Updates für Apps und Windows direkt installieren?",
    o: ["Weil sie Speicherplatz sparen", "Weil sie Sicherheitslücken schließen", "Damit das Design bunter wird", "Weil der PC sonst ausgeht"],
    c: 1,
    e: "Updates reparieren Fehler, durch die Hacker in den PC einbrechen könnten."
  },
  {
    room: 1,
    q: "Darf man Fotos von Mitschülern ohne deren Erlaubnis im Internet posten?",
    o: ["Ja, wenn es lustig ist", "Nein, das verletzt das Recht am eigenen Bild", "Ja, im Klassen-Chat darf man alles", "Nur, wenn man befreundet ist"],
    c: 1,
    e: "Jeder Mensch darf selbst entscheiden, ob Bilder von ihm im Netz landen."
  },
  {
    room: 1,
    q: "Was versteht man unter 'Cybermobbing'?",
    o: ["Ein neues Online-Spiel", "Das Beleidigen oder Ausgrenzen von Personen im Internet", "Ein schnelles Elektrofahrrad", "Das Kaufen von Apps"],
    c: 1,
    e: "Mobbing im Internet (z.B. in Chats) nennt man Cybermobbing und es ist verboten."
  },
  {
    room: 1,
    q: "Ein Unbekannter schreibt dich in einem Spiel an und fragt nach deiner Adresse. Was tust du?",
    o: ["Die Adresse sofort senden", "Ignorieren, blockieren und den Eltern/Lehrern Bescheid sagen", "Lügen und die Adresse vom Nachbarn senden", "Ihn als Freund hinzufügen"],
    c: 1,
    e: "Gib niemals private Daten wie Name, Adresse oder Schule an Fremde weiter."
  },
  {
    room: 1,
    q: "Was ist ein 'Trojaner' in der Informatik?",
    o: ["Ein Pferdespiel", "Ein harmlos aussehendes Programm, das heimlich Schadcode enthält", "Ein sehr schneller Computer", "Ein Antiviren-Programm"],
    c: 1,
    e: "Wie das Trojanische Pferd aus der Geschichte tarnt sich dieser Virus als nützliches Programm."
  },
  {
    room: 1,
    q: "Warum sollte man beim Verlassen eines Schul-PCs 'Abmelden' klicken?",
    o: ["Damit der PC schneller abkühlt", "Damit der nächste Schüler nicht in deinem Account Unfug macht", "Weil der PC sonst kaputtgeht", "Damit der Strom gespart wird"],
    c: 1,
    e: "Bleibst du angemeldet, kann jeder unter deinem Namen Nachrichten schreiben."
  },
  {
    room: 1,
    q: "Was bedeutet das kleine Schloss-Symbol in der Adresszeile des Browsers?",
    o: ["Die Webseite ist gesperrt", "Die Verbindung zur Webseite ist verschlüsselt und sicherer", "Die Webseite kostet Geld", "Das Internet ist ausgelastet"],
    c: 1,
    e: "Das Schloss zeigt eine HTTPS-Verbindung, bei der niemand deine Eingaben mitlesen kann."
  },
  {
    room: 1,
    q: "Darf man Musik oder Filme von illegalen Seiten kostenlos herunterladen?",
    o: ["Ja, im Internet ist alles gratis", "Nein, das ist eine Urheberrechtsverletzung", "Ja, solange es keiner merkt", "Ja, aber nur am Wochenende"],
    c: 1,
    e: "Künstler müssen für ihre Arbeit bezahlt werden. Illegale Downloads sind strafbar."
  },
  {
    room: 1,
    q: "Was ist ein 'Spam-Ordner' im E-Mail-Postfach?",
    o: ["Ein Ordner für wichtige Hausaufgaben", "Ein Sammelplatz für unerwünschte Werbung und Werbemails", "Ein Ordner für gelöschte Bilder", "Ein Ordner für geheime Nachrichten"],
    c: 1,
    e: "Spam sind unerwünschte Massenmails, die der Mailanbieter direkt aussortiert."
  },
  {
    room: 1,
    q: "Warum sollte man bei kostenlosen Gewinnspielen im Internet misstrauisch sein?",
    o: ["Man gewinnt dort sowieso immer", "Sie wollen oft nur an deine persönlichen Daten kommen", "Weil sie den Computer langsamer machen", "Weil sie verboten sind"],
    c: 1,
    e: "Die Veranstalter wollen meistens Adressen sammeln, um Werbung zu verschicken."
  },

  // ==========================================
  // ROOM 2: INTERNET & SUCHMASCHINEN (15 Fragen)
  // ==========================================
  {
    room: 2,
    q: "Welches Programm brauchst du, um Webseiten überhaupt erst anzuzeigen?",
    o: ["Einen Webbrowser (z.B. Chrome, Edge, Firefox)", "Ein Schreibprogramm", "Einen Taschenrechner", "Ein Bildbearbeitungsprogramm"],
    c: 0,
    e: "Ein Browser übersetzt den Code von Webseiten in Bilder und Text."
  },
  {
    room: 2,
    q: "Wofür nutzt man eine Suchmaschine wie Google oder FragFinn?",
    o: ["Zum Schreiben von Briefen", "Zum gezielten Suchen nach Informationen im Internet", "Zum Ausschalten des PCs", "Zum Malen von Bildern"],
    c: 1,
    e: "Suchmaschinen durchforsten das Internet nach Begriffen, die du eingibst."
  },
  {
    room: 2,
    q: "Ist jede Information, die im Internet steht, automatisch wahr?",
    o: ["Ja, im Internet darf man nicht lügen", "Nein, jeder kann Dinge im Internet behaupten (Fake News)", "Ja, Google prüft alles", "Nur was auf sozialen Medien steht"],
    c: 1,
    e: "Man muss Informationen immer prüfen, da viele Falschmeldungen (Fake News) existieren."
  },
  {
    room: 2,
    q: "Was ist ein 'Hyperlink' (oder einfach Link)?",
    o: ["Ein langes Verbindungskabel", "Eine klickbare Verknüpfung zu einer anderen Webseite", "Ein Computerspiel", "Ein Benutzername"],
    c: 1,
    e: "Ein Link verbindet Webseiten miteinander. Klickt man drauf, springt man weiter."
  },
  {
    room: 2,
    q: "Was bedeutet das 'WLAN'-Symbol auf dem Smartphone?",
    o: ["Der Akku ist voll", "Drahtlose Verbindung mit einem lokalen Netzwerk / Internet", "Die Kamera ist an", "Der Ton ist stummgeschaltet"],
    c: 1,
    e: "WLAN verbindet Geräte per Funk statt mit einem Kabel."
  },
  {
    room: 2,
    q: "Wo gibt man die genaue Adresse einer Webseite (z. B. www.schule.at) ein?",
    o: ["In der Suchzeile bei YouTube", "In der Adresszeile ganz oben im Browser", "Im Windows-Suchfeld", "In einer E-Mail"],
    c: 1,
    e: "Die Adresszeile führt dich direkt zur eingegebenen URL."
  },
  {
    room: 2,
    q: "Was ist ein 'Download'?",
    o: ["Das Herunterladen von Daten aus dem Internet auf deinen PC", "Das Ausschalten des Monitors", "Das Löschen einer Datei", "Das Hochladen eines Bildes ins Netz"],
    c: 0,
    e: "Beim Download holst du dir Daten von einem Server auf dein eigenes Gerät."
  },
  {
    room: 2,
    q: "Was ist das Gegenteil von 'Download'?",
    o: ["Sideload", "Upload", "Offload", "Reload"],
    c: 1,
    e: "Beim Upload (Hochladen) schickst du Daten von deinem Gerät ins Internet."
  },
  {
    room: 2,
    q: "Was ist eine 'E-Mail'?",
    o: ["Ein elektronischer Brief", "Ein Paket von der Post", "Ein Anruf auf dem Festnetz", "Ein USB-Kabel"],
    c: 0,
    e: "E-Mail steht für 'electronic mail' und ersetzt den klassischen Brief."
  },
  {
    room: 2,
    q: "Was ist das Internet im Grunde genommen?",
    o: ["Ein riesiger Computer im Weltall", "Ein weltweites Netz aus Millionen miteinander verbundenen Computern", "Eine große Festplatte in Amerika", "Ein Fernsehsender"],
    c: 1,
    e: "Das Internet verbindet Computer weltweit, damit sie Daten austauschen können."
  },
  {
    room: 2,
    q: "Was bedeutet das '@'-Zeichen in einer E-Mail-Adresse?",
    o: ["Es trennt den Namen vom Namen des Mail-Anbieters (at / bei)", "Es bedeutet 'Achtung'", "Es löscht den Text danach", "Es schützt vor Viren"],
    c: 0,
    e: "Das @-Zeichen spricht man 'ät' aus und es bedeutet 'bei'."
  },
  {
    room: 2,
    q: "Wie nennt man die erste, startende Seite einer Website?",
    o: ["Endseite", "Homepage / Startseite", "Backpage", "Suchseite"],
    c: 1,
    e: "Die Homepage empfängt die Besucher einer Website."
  },
  {
    room: 2,
    q: "Warum kosten viele 'kostenlose' Handy-Spiele im Nachhinein doch Geld?",
    o: ["Weil man für das Laden Strom braucht", "Wegen In-App-Käufen für Extras oder virtuelle Währung", "Weil der Akku schneller leer wird", "Sie kosten nie etwas"],
    c: 1,
    e: "Das Spiel ist zwar gratis, aber Upgrades oder virtuelle Währungen kosten echtes Geld."
  },
  {
    room: 2,
    q: "Was ist ein 'Cloud-Speicher'?",
    o: ["Ein Speicher im Gehirn", "Speicherplatz auf Servern im Internet", "Eine Festplatte aus Plastik", "Ein kaputter USB-Stick"],
    c: 1,
    e: "In der Cloud speichert man Daten im Internet, um von überall darauf zuzugreifen."
  },
  {
    room: 2,
    q: "Welche Suchmaschine ist speziell für Kinder und Schulen sicher aufbereitet?",
    o: ["FragFinn (oder Blinde Kuh)", "Google Hauptsuche", "Amazon", "Wikipedia"],
    c: 0,
    e: "Kindersuchmaschinen filtern ungeeignete Inhalte für Jugendliche sofort heraus."
  }
];
