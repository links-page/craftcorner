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
    },
    blue: {
        name: 'Синяя',
        icon: 'fas fa-water',
        description: 'Успокаивающая синяя тема'
    },
    green: {
        name: 'Зеленая',
        icon: 'fas fa-leaf',
        description: 'Природная зеленая тема'
    },
    purple: {
        name: 'Фиолетовая',
        icon: 'fas fa-magic',
        description: 'Мистическая фиолетовая тема'
    },
    orange: {
        name: 'Оранжевая',
        icon: 'fas fa-fire',
        description: 'Энергичная оранжевая тема'
    },
    red: {
        name: 'Красная',
        icon: 'fas fa-heart',
        description: 'Страстная красная тема'
    },
    pink: {
        name: 'Розовая',
        icon: 'fas fa-flower',
        description: 'Нежная розовая тема'
    },
    yellow: {
        name: 'Желтая',
        icon: 'fas fa-star',
        description: 'Яркая желтая тема'
    },
    teal: {
        name: 'Бирюзовая',
        icon: 'fas fa-fish',
        description: 'Океанская бирюзовая тема'
    },
    indigo: {
        name: 'Индиго',
        icon: 'fas fa-mountain',
        description: 'Глубокий индиго'
    }
};

// Current theme
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize themes
document.addEventListener('DOMContentLoaded', function() {
    initializeThemes();
    setupThemeSwitcher();
    setupThemeModal();
});

function initializeThemes() {
    // Apply saved theme
    applyTheme(currentTheme);

    // Update theme buttons
    updateThemeButtons();

    // Add theme classes to body
    document.body.classList.add(`theme-${currentTheme}`);
}

function applyTheme(themeName) {
    // Remove all theme classes
    document.body.classList.remove(...Object.keys(themes).map(theme => `theme-${theme}`));

    // Add new theme class
    document.body.classList.add(`theme-${themeName}`);

    // Save to localStorage
    localStorage.setItem('theme', themeName);

    // Update current theme
    currentTheme = themeName;

    // Update theme buttons
    updateThemeButtons();

    // Trigger theme change event
    document.dispatchEvent(new CustomEvent('themechange', { detail: { theme: themeName } }));
}

function updateThemeButtons() {
    // Update theme switcher buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === currentTheme) {
            btn.classList.add('active');
        }
    });

    // Update theme modal buttons if exists
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.remove('active');
        if (option.dataset.theme === currentTheme) {
            option.classList.add('active');
        }
    });
}

function setupThemeSwitcher() {
    // Add click handlers to theme buttons
    document.addEventListener('click', function(e) {
        if (e.target.closest('.theme-btn')) {
            const btn = e.target.closest('.theme-btn');
            const theme = btn.dataset.theme;

            if (theme && theme !== currentTheme) {
                applyTheme(theme);

                // Add animation
                btn.classList.add('bounce');
                setTimeout(() => btn.classList.remove('bounce'), 600);

                // Show notification
                showThemeNotification(theme);
            }
        }
    });
}

function setupThemeModal() {
    // Create theme modal if it doesn't exist
    if (!document.getElementById('themeModal')) {
        createThemeModal();
    }
}

function createThemeModal() {
    const modal = document.createElement('div');
    modal.id = 'themeModal';
    modal.className = 'theme-modal';
    modal.innerHTML = `
        <div class="theme-modal-content">
            <div class="theme-modal-header">
                <h3>Выберите тему оформления</h3>
                <button class="theme-modal-close">&times;</button>
            </div>
            <div class="theme-modal-body">
                <div class="theme-grid">
                    ${Object.entries(themes).map(([key, theme]) => `
                        <div class="theme-option ${key === currentTheme ? 'active' : ''}" data-theme="${key}">
                            <div class="theme-preview theme-${key}">
                                <div class="theme-preview-header"></div>
                                <div class="theme-preview-content">
                                    <div class="theme-preview-card"></div>
                                    <div class="theme-preview-card"></div>
                                </div>
                            </div>
                            <div class="theme-info">
                                <i class="${theme.icon}"></i>
                                <h4>${theme.name}</h4>
                                <p>${theme.description}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Add styles for theme modal
    addThemeModalStyles();

    // Add event listeners
    setupThemeModalEvents(modal);
}

function addThemeModalStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .theme-modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }

        .theme-modal.active {
            opacity: 1;
            visibility: visible;
        }

        .theme-modal-content {
            background: var(--card-bg);
            border-radius: 16px;
            max-width: 90vw;
            max-height: 90vh;
            overflow: hidden;
            transform: scale(0.8);
            transition: transform 0.3s ease;
        }

        .theme-modal.active .theme-modal-content {
            transform: scale(1);
        }

        .theme-modal-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.5rem;
            border-bottom: 1px solid var(--border-color);
        }

        .theme-modal-header h3 {
            margin: 0;
            color: var(--text-color);
        }

        .theme-modal-close {
            background: none;
            border: none;
            color: var(--text-muted);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.5rem;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .theme-modal-close:hover {
            background: var(--bg-secondary);
            color: var(--text-color);
        }

        .theme-modal-body {
            padding: 1.5rem;
            max-height: 70vh;
            overflow-y: auto;
        }

        .theme-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
        }

        .theme-option {
            border: 2px solid var(--border-color);
            border-radius: 12px;
            padding: 1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            background: var(--card-bg);
        }

        .theme-option:hover {
            border-color: var(--primary-color);
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .theme-option.active {
            border-color: var(--primary-color);
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .theme-preview {
            width: 100%;
            height: 80px;
            border-radius: 8px;
            margin-bottom: 1rem;
            overflow: hidden;
            position: relative;
        }

        .theme-preview-header {
            height: 20px;
            background: var(--header-bg);
            border-bottom: 1px solid var(--border-color);
        }

        .theme-preview-content {
            padding: 0.5rem;
            display: flex;
            gap: 0.5rem;
        }

        .theme-preview-card {
            flex: 1;
            height: 20px;
            background: var(--card-bg);
            border: 1px solid var(--border-color);
            border-radius: 4px;
        }

        .theme-info {
            text-align: center;
        }

        .theme-info i {
            font-size: 1.5rem;
            color: var(--primary-color);
            margin-bottom: 0.5rem;
        }

        .theme-info h4 {
            margin: 0 0 0.25rem 0;
            color: var(--text-color);
            font-size: 1rem;
        }

        .theme-info p {
            margin: 0;
            color: var(--text-muted);
            font-size: 0.8rem;
            line-height: 1.3;
        }

        @media (max-width: 768px) {
            .theme-grid {
                grid-template-columns: 1fr;
            }

            .theme-modal-content {
                margin: 1rem;
                max-width: calc(100vw - 2rem);
                max-height: calc(100vh - 2rem);
            }
        }
    `;

    document.head.appendChild(style);
}

function setupThemeModalEvents(modal) {
    // Close modal
    modal.querySelector('.theme-modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });

    // Theme selection
    modal.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            if (theme && theme !== currentTheme) {
                applyTheme(theme);

                // Update active state
                modal.querySelectorAll('.theme-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');

                // Add animation
                option.classList.add('bounce');
                setTimeout(() => option.classList.remove('bounce'), 600);

                // Show notification
                showThemeNotification(theme);

                // Close modal after delay
                setTimeout(() => {
                    modal.classList.remove('active');
                }, 1000);
            }
        });
    });
}

function showThemeModal() {
    const modal = document.getElementById('themeModal');
    if (modal) {
        modal.classList.add('active');
    }
}

function showThemeNotification(themeName) {
    const theme = themes[themeName];
    if (!theme) return;

    // Create notification
    const notification = document.createElement('div');
    notification.className = 'theme-notification';
    notification.innerHTML = `
        <div class="theme-notification-content">
            <i class="${theme.icon}"></i>
            <div class="theme-notification-text">
                <h4>Тема изменена</h4>
                <p>Активна тема: ${theme.name}</p>
            </div>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--card-bg);
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 1rem;
        box-shadow: var(--shadow-lg);
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;

    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add theme button to header if not exists
function addThemeButton() {
    const headerControls = document.querySelector('.header-controls');
    if (!headerControls || headerControls.querySelector('.theme-modal-btn')) return;

    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-modal-btn theme-btn';
    themeBtn.innerHTML = '<i class="fas fa-palette"></i>';
    themeBtn.title = 'Выбрать тему';
    themeBtn.onclick = showThemeModal;

    headerControls.appendChild(themeBtn);
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
    addThemeButton();
});

// Export functions
window.showThemeModal = showThemeModal;
window.applyTheme = applyTheme;