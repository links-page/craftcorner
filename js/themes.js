// Themes management JavaScript

// Available themes
const themes = {
    light: {
        name: 'Светлая',
        icon: 'fas fa-sun',
        description: 'Классическая светлая тема'
    },
    dark: {
        name: 'Темная',
        icon: 'fas fa-moon',
        description: 'Современная темная тема'
    }
};

// Current theme
let themesCurrentTheme = localStorage.getItem('theme') || 'light';

// Initialize themes
document.addEventListener('DOMContentLoaded', function() {
    initializeThemes();
    setupThemeSwitcher();
});

function initializeThemes() {
    // Apply saved theme
    applyTheme(themesCurrentTheme);

    // Update theme buttons
    updateThemeButtons();

    // Add theme classes to body
    document.body.classList.add(`theme-${themesCurrentTheme}`);
}

function applyTheme(themeName) {
    // Remove all theme classes
    document.body.classList.remove(...Object.keys(themes).map(theme => `theme-${theme}`));

    // Add new theme class
    document.body.classList.add(`theme-${themeName}`);

    // Save to localStorage
    localStorage.setItem('theme', themeName);

    // Update current theme
    themesCurrentTheme = themeName;

    // Update theme buttons
    updateThemeButtons();

    // Trigger theme change event
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: themeName } }));
}

function updateThemeButtons() {
    // Update theme switcher buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === themesCurrentTheme) {
            btn.classList.add('active');
        }
    });
}

function setupThemeSwitcher() {
    // Add click handlers to theme buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.theme-btn')) {
            const btn = e.target.closest('.theme-btn');
            const theme = btn.dataset.theme;

            if (theme && theme !== themesCurrentTheme) {
                applyTheme(theme);
            }
        }
    });
}

// Auto-detect system theme preference
function detectSystemTheme() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if (!localStorage.getItem('theme')) {
            applyTheme('dark');
        }
    }
}

// Listen for system theme changes
if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            applyTheme(e.matches ? 'dark' : 'light');
        }
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function() {
    detectSystemTheme();
});

// Export functions
window.applyTheme = applyTheme;