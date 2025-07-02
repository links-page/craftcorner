// Main JavaScript file for CraftCorner

// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
});

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

        // Redirect to download URL (prioritize downloadUrl over affiliateUrl)
        if (downloadUrl) {
            window.open(downloadUrl, '_blank');
        } else if (affiliateUrl) {
            window.open(affiliateUrl, '_blank');
        }

        // Мгновенно увеличить счетчик через GlobalStats
        if (window.GlobalStats) {
            if (type === 'pack') {
                GlobalStats.recordDownload('resourcepacks');
            } else if (type === 'collection') {
                GlobalStats.recordDownload('collections');
            }
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
window.CraftCorner = {
    handleDownload,
    showNotification
};

// Also export handleDownload globally for direct access
window.handleDownload = handleDownload;