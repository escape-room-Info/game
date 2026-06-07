// ── SHARED NAVBAR LOGIC ──
// Einbinden in jede Seite mit: <script type="module" src="navbar.js"></script>
import { initializeApp }                        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase, ref, get }                from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";
import { FIREBASE_CONFIG } from "./firebase-config.js";

const app  = initializeApp(FIREBASE_CONFIG);
const auth = getAuth(app);
const db   = getDatabase(app);

onAuthStateChanged(auth, async user => {
  const nav = document.getElementById('nav-auth-area');
  if (!nav) return;

  if (user) {
    // Get avatar from DB
    let avatar = '🎮';
    try {
      const snap = await get(ref(db, 'users/' + user.uid + '/avatar'));
      if (snap.exists()) avatar = snap.val();
    } catch {}

    const name = user.displayName || user.email.split('@')[0];
    nav.innerHTML = `
      <a href="profile.html" class="nav-profile-btn" title="Profil öffnen">
        <span class="nav-avi">${avatar}</span>
        <span class="nav-uname">${name}</span>
      </a>
      <button class="btn sm r" id="nav-logout-btn">LOGOUT</button>
    `;
    document.getElementById('nav-logout-btn').addEventListener('click', () =>
      signOut(auth).then(() => location.href = 'index.html')
    );
  } else {
    nav.innerHTML = `<a href="auth.html" class="btn sm" id="nav-login-btn">LOGIN</a>`;
  }
});
