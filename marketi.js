const STORAGE_KEY = 'techstore_users';
const CURRENT_KEY = 'techstore_current_email';


// Helpers for LocalStorage user records
function getUsers() {
try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; }
catch { return []; }
}
function saveUsers(list) { localStorage.setItem(STORAGE_KEY, JSON.stringify(list)); }
function findUserByEmail(email) { return getUsers().find(u => u.email === email.toLowerCase()); }


// Lightweight (not secure) obfuscation to avoid plain text
function encode(pw) { return btoa(unescape(encodeURIComponent(pw))); }
function decode(pw) { try { return decodeURIComponent(escape(atob(pw))); } catch { return ''; } }


function setCurrent(email) { localStorage.setItem(CURRENT_KEY, email.toLowerCase()); }
function getCurrent() { return localStorage.getItem(CURRENT_KEY); }
function clearCurrent() { localStorage.removeItem(CURRENT_KEY); }


// Validation rules
const validators = {
name: (v) => v.trim().length >= 2 || 'სახელი მინ. 2 სიმბოლოა',
email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v) || 'ელფოსტა არასწორია',
password: (v) => /^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(v) || 'პაროლი: მინ. 6, ასო + ციფრი',
confirm: (pw, v) => v === pw || 'პაროლები არ ემთხვევა',
terms: (checked) => checked || 'გთხოვთ, დაეთანხმოთ წესებს',
};


function setError(el, msg) {
const box = el.closest('.field');
const hint = box.querySelector('.error');
if (msg === true) { hint.textContent = ''; box.dataset.valid = '1'; }
else { hint.textContent = msg; box.dataset.valid = '0'; }
}


function togglePassword(btn, input) {
btn.addEventListener('click', () => {
input.type = input.type === 'password' ? 'text' : 'password';
btn.textContent = input.type === 'password' ? 'მაჩვენე' : 'დამალე';
});
}


// Attach to Register page
export function initRegister() {
const form = document.querySelector('#registerForm');
if (!form) return;


const fullName = form.querySelector('#fullName');
const email = form.querySelector('#email');
const password = form.querySelector('#password');
const confirm = form.querySelector('#confirm');
const terms = form.querySelector('#terms');
const submit = form.querySelector('button[type="submit"]');


togglePassword(form.querySelector('#togglePw'), password);
togglePassword(form.querySelector('#toggleCp'), confirm);


// Real-time validation
fullName.addEventListener('input', () => setError(fullName, validators.name(fullName.value)));
email.addEventListener('input', () => setError(email, validators.email(email.value)));
password.addEventListener('input', () => setError(password, validators.password(password.value)));
confirm.addEventListener('input', () => setError(confirm, validators.confirm(password.value, confirm.value)));
terms.addEventListener('change', () => setError(terms, validators.terms(terms.checked)));


form.addEventListener('input', () => {
const ok = [...form.querySelectorAll('.field')].every(f => f.dataset.valid === '1');
submit.disabled = !ok;
});


form.addEventListener('submit', (e) => {
e.preventDefault();
const nameOk = validators.name(fullName.value);
const mailOk = validators.email(email.value);
const passOk = validators.password(password.value);
const confOk = validators.confirm(password.value, confirm.value);
const termsOk = validators.terms(terms.checked);


box.querySel}  