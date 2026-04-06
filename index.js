// Karakter dasar
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "~`!@#$%^&*()-_=+[{]}|;:<>,.?/";

// Fungsi generate password
function generatePassword(length = 15, useNumbers = true, useSymbols = true) {
  let chars = letters;
  if (useNumbers) chars += numbers;
  if (useSymbols) chars += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}

// Event tombol generate
document.getElementById("generateBtn").addEventListener("click", () => {
  const pass1 = generatePassword(15, true, true);
  const pass2 = generatePassword(15, true, true);

  // Tambahkan efek jeda fade pada container passwords
  const passwordsContainer = document.querySelector(".passwords");
  passwordsContainer.style.opacity = 0;

  setTimeout(() => {
    document.getElementById("password1").textContent = pass1;
    document.getElementById("password2").textContent = pass2;
    passwordsContainer.style.opacity = 1;
  }, 500); // jeda 0.5 detik sebelum muncul password baru
});

// Copy-on-click
document.querySelectorAll(".password").forEach((el) => {
  el.addEventListener("click", () => {
    const original = el.textContent;
    if (!original) return;

    navigator.clipboard.writeText(original);

    el.textContent = "Copied!";
    setTimeout(() => {
      el.textContent = original;
    }, 1000); // kembali ke password setelah 1 detik
  });
});
