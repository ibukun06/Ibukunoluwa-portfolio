// --- THEME LOGIC ---
function toggleTheme() {
    const body = document.body;
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
    
    // Icon Rotation
    const icon = document.getElementById('theme-icon');
    icon.style.transform = 'rotate(180deg)';
    setTimeout(() => {
        icon.className = body.dataset.theme === 'dark' ? 'fa-solid fa-moon' : 'fa-solid fa-sun';
        icon.style.transform = 'rotate(0deg)';
    }, 200);
}

if (localStorage.getItem('theme') === 'dark') {
    document.body.dataset.theme = 'dark';
    document.getElementById('theme-icon').className = 'fa-solid fa-moon';
}

// --- MODAL LOGIC ---
function openModal(id) {
    const modal = document.getElementById(id);
    if(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('active'));
    document.body.style.overflow = 'auto';
}

function openFullImage(src) {
    document.getElementById('full-image-src').src = src;
    openModal('modal-fullscreen');
}

window.onclick = function(event) {
    if (event.target.classList.contains('modal-overlay')) closeModal();
}
window.onkeydown = function(event) {
    if (event.key === "Escape") closeModal();
}

// --- ANIMATION ON SCROLL ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) entry.target.classList.add('active');
    });
});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));