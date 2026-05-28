async function loadUsers() {
    try {
        const response = await fetch("../data/users.json");

        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier users.json");
        }

        const data = await response.json();
        return data.users; // Retourne le tableau d’utilisateurs
    } catch (error) {
        console.error("Erreur:", error);
        alert("Impossible de charger la base des utilisateurs !");
        return [];
    }}

// --- Gestion du formulaire de connexion ---
const loginForm = document.querySelector(".login-container form");





if (loginForm) {
    const errorMsg = document.createElement("p");
    errorMsg.style.color = "red";
    errorMsg.style.textAlign = "center";
    loginForm.appendChild(errorMsg);

    loginForm.addEventListener("submit", async (event) => {
        event.preventDefault(); // empeche la page de se rafraichir

        const emailInput = loginForm.querySelector('input[type="text"]').value.trim();
        const passwordInput = loginForm.querySelector('input[type="password"]').value.trim();

        // --- Charger la liste des utilisateurs depuis le JSON ---
        const users = await loadUsers();
        console.log("✅ Utilisateurs chargés :", users);

        // --- Vérifier l’utilisateur ---
        const user = users.find(
            u =>
                (u.email === emailInput ||
                 `${u.prenom.toLowerCase()}.${u.nom.toLowerCase()}`.includes(emailInput.toLowerCase())) &&
                u.password === passwordInput
        );

        if (user) {
            // --- Sauvegarde dans le localStorage ---
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("currentUser", JSON.stringify(user));

            // --- ✅ Redirection vers index.html ---
            window.location.href = "../index.html";
        } else {
            errorMsg.textContent = "Email ou mot de passe incorrect.";
        }
    });
}



// =============================
// GESTION DE LA DÉCONNEXION
// =============================
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        window.location.href = "login.html";
    });
}

// =============================
// PROTECTION DES PAGES (index.html)
// =============================
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("isLoggedIn") !== "true") {
        // Pas connecté → redirection vers login
        window.location.href = "login.html";
    } else {
        // Connecté → afficher les infos de l'utilisateur
        const user = JSON.parse(localStorage.getItem("currentUser"));
        const leftDiv = document.querySelector(".left");

        if (user && leftDiv) {
            leftDiv.innerHTML = `
                <div class="user-info" style="text-align:center; margin-top:20px;">
                    <img src="${user.avatar}" alt="${user.prenom}" class="avatar" 
                        style="border-radius:50%; width:100px; height:100px;">
                    <p><strong>${user.prenom} ${user.nom}</strong></p>
                    <p>${user.role}</p>
                </div>
            `;
        }
    }
}
