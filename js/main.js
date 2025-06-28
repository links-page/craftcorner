// Main JavaScript file for MineSite

// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';

// Statistics system
let downloadStats = {
    totalDownloads: parseInt(localStorage.getItem('totalDownloads')) || 15479,
    todayDownloads: parseInt(localStorage.getItem('todayDownloads')) || 234,
    totalUsers: parseInt(localStorage.getItem('totalUsers')) || 1247,
    lastUpdate: localStorage.getItem('lastUpdate') || new Date().toDateString()
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeStats();
});

// Statistics management
function initializeStats() {
    // Check if it's a new day
    const today = new Date().toDateString();
    if (downloadStats.lastUpdate !== today) {
        // Reset today's downloads and add some random new ones
        downloadStats.todayDownloads = Math.floor(Math.random() * 50) + 20;
        downloadStats.lastUpdate = today;
        localStorage.setItem('lastUpdate', today);
    }

    // Update display
    updateStatsDisplay();

    // Save to localStorage
    saveStats();
}

function updateStatsDisplay() {
    const totalElement = document.getElementById('totalDownloads');
    const todayElement = document.getElementById('todayDownloads');
    const usersElement = document.getElementById('totalUsers');

    if (totalElement) {
        totalElement.textContent = formatNumber(downloadStats.totalDownloads);
    }
    if (todayElement) {
        todayElement.textContent = formatNumber(downloadStats.todayDownloads);
    }
    if (usersElement) {
        usersElement.textContent = formatNumber(downloadStats.totalUsers);
    }
}

function incrementDownloads(count = 1) {
    downloadStats.totalDownloads += count;
    downloadStats.todayDownloads += count;

    // Randomly increment users (1 in 10 chance)
    if (Math.random() < 0.1) {
        downloadStats.totalUsers += 1;
    }

    updateStatsDisplay();
    saveStats();
}

function saveStats() {
    localStorage.setItem('totalDownloads', downloadStats.totalDownloads.toString());
    localStorage.setItem('todayDownloads', downloadStats.todayDownloads.toString());
    localStorage.setItem('totalUsers', downloadStats.totalUsers.toString());
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Theme management
function initializeTheme() {
    const body = document.body;
    body.className = `theme-${currentTheme}`;

    // Update theme buttons
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.theme === currentTheme) {
            btn.classList.add('active');
        }
    });
}

// Theme switcher
document.addEventListener('click', function(e) {
    if (e.target.closest('.theme-btn')) {
        const btn = e.target.closest('.theme-btn');
        const theme = btn.dataset.theme;

        if (theme && theme !== currentTheme) {
            currentTheme = theme;
            localStorage.setItem('theme', theme);

            document.body.className = `theme-${theme}`;

            // Update active state
            document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    }
});

// Download functionality with monetization
function handleDownload(itemId, type, downloadUrl, affiliateUrl) {
    // Increment download statistics
    incrementDownloads();

    // Show loading state
    const btn = event.target.closest('.download-btn');
    if (btn) {
        btn.classList.add('loading');
        btn.textContent = 'Загрузка...';
    }

    // Simulate download process
    setTimeout(() => {
        // Remove loading state
        if (btn) {
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-download"></i> Скачать';
        }

        // Redirect to affiliate URL for monetization
        if (affiliateUrl) {
            window.open(affiliateUrl, '_blank');
        } else if (downloadUrl) {
            window.open(downloadUrl, '_blank');
        }

        // Show success message
        showNotification('Файл успешно скачан!', 'success');

    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
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
        z-index: 10000;
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
    }, 5000);

    // Close button
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Export functions for use in other files
window.MineSite = {
    handleDownload,
    showNotification,
    incrementDownloads,
    updateStatsDisplay
};

// Also export handleDownload globally for direct access
window.handleDownload = handleDownload;