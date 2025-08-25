function showSection(sectionId) {
    document.querySelectorAll('main section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

// Run when page loads
function loadSectionFromHash() {
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    } else {
        showSection('home'); // default section
    }
}    
// Listen for hash changes (when user clicks nav or manually edits URL)
window.addEventListener('hashchange', loadSectionFromHash);
 
// Run on first page load
window.addEventListener('DOMContentLoaded', loadSectionFromHash);