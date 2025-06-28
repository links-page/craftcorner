// Main JavaScript file for MineSite

// Global variables
let currentTheme = localStorage.getItem('theme') || 'light';
let totalDownloads = parseInt(localStorage.getItem('totalDownloads')) || 479;
let todayDownloads = parseInt(localStorage.getItem('todayDownloads')) || 23;
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeStats();
    initializeSearch();
    initializeFavorites();
    loadFeaturedContent();

    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
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

            // Add animation
            btn.classList.add('bounce');
            setTimeout(() => btn.classList.remove('bounce'), 600);
        }
    }
});

// Statistics management
function initializeStats() {
    const totalElement = document.getElementById('totalDownloads');
    const todayElement = document.getElementById('todayDownloads');

    if (totalElement) {
        totalElement.textContent = totalDownloads.toLocaleString();
    }

    if (todayElement) {
        todayElement.textContent = todayDownloads.toLocaleString();
    }
}

// Update download statistics
function updateDownloadStats() {
    totalDownloads++;
    todayDownloads++;

    localStorage.setItem('totalDownloads', totalDownloads);
    localStorage.setItem('todayDownloads', todayDownloads);

    // Update display with animation
    const totalElement = document.getElementById('totalDownloads');
    const todayElement = document.getElementById('todayDownloads');

    if (totalElement) {
        totalElement.textContent = totalDownloads.toLocaleString();
        totalElement.classList.add('bounce');
        setTimeout(() => totalElement.classList.remove('bounce'), 600);
    }

    if (todayElement) {
        todayElement.textContent = todayDownloads.toLocaleString();
        todayElement.classList.add('bounce');
        setTimeout(() => todayElement.classList.remove('bounce'), 600);
    }
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
    }
}

function handleSearch(e) {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
        // Show all items if search is too short
        showAllItems();
        return;
    }

    // Search in current page content
    const searchableElements = document.querySelectorAll('.mod-card, .pack-card, .collection-card, .category-card');

    searchableElements.forEach(element => {
        const title = element.querySelector('.mod-title, .pack-title, .collection-title, h3')?.textContent.toLowerCase() || '';
        const description = element.querySelector('.mod-description, .pack-description, .collection-description, p')?.textContent.toLowerCase() || '';
        const tags = Array.from(element.querySelectorAll('.mod-tag, .pack-tag')).map(tag => tag.textContent.toLowerCase());

        const isMatch = title.includes(query) ||
                       description.includes(query) ||
                       tags.some(tag => tag.includes(query));

        if (isMatch) {
            element.style.display = 'block';
            element.classList.add('fade-in');
        } else {
            element.style.display = 'none';
        }
    });
}

function showAllItems() {
    const elements = document.querySelectorAll('.mod-card, .pack-card, .collection-card, .category-card');
    elements.forEach(element => {
        element.style.display = 'block';
    });
}

// Favorites management
function initializeFavorites() {
    updateFavoritesDisplay();
}

function toggleFavorite(itemId, type) {
    const key = `${type}_${itemId}`;
    const index = favorites.indexOf(key);

    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(key);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoritesDisplay();

    // Update button state
    const btn = document.querySelector(`[data-favorite="${key}"]`);
    if (btn) {
        btn.classList.toggle('active');
        btn.classList.add('bounce');
        setTimeout(() => btn.classList.remove('bounce'), 600);
    }
}

function updateFavoritesDisplay() {
    document.querySelectorAll('[data-favorite]').forEach(btn => {
        const key = btn.dataset.favorite;
        if (favorites.includes(key)) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Download functionality with monetization
function handleDownload(itemId, type, downloadUrl, affiliateUrl) {
    // Update statistics
    updateDownloadStats();

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

// Load featured content
function loadFeaturedContent() {
    const featuredContainer = document.getElementById('featuredMods');
    if (!featuredContainer) return;

    // Sample featured mods data
    const featuredMods = [
        {
            id: 1,
            title: 'Industrial Craft 2',
            description: 'Добавляет множество технологических блоков и предметов для автоматизации',
            version: '1.20.1',
            category: 'Технологии',
            downloads: 15420,
            image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=IC2',
            downloadUrl: '#',
            affiliateUrl: 'https://example.com/affiliate/ic2'
        },
        {
            id: 2,
            title: 'Thaumcraft',
            description: 'Магический мод с системой заклинаний и исследования',
            version: '1.19.2',
            category: 'Магия',
            downloads: 12340,
            image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Thaumcraft',
            downloadUrl: '#',
            affiliateUrl: 'https://example.com/affiliate/thaumcraft'
        },
        {
            id: 3,
            title: 'Biomes O\' Plenty',
            description: 'Добавляет множество новых биомов и растений',
            version: '1.20.1',
            category: 'Природа',
            downloads: 9870,
            image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=BOP',
            downloadUrl: '#',
            affiliateUrl: 'https://example.com/affiliate/bop'
        }
    ];

    featuredMods.forEach(mod => {
        const modCard = createModCard(mod);
        featuredContainer.appendChild(modCard);
    });
}

// Create mod card element
function createModCard(mod) {
    const card = document.createElement('div');
    card.className = 'mod-card fade-in';
    card.innerHTML = `
        <div class="mod-image">
            <img src="${mod.image}" alt="${mod.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <i class="fas fa-puzzle-piece" style="display: none;"></i>
        </div>
        <h3 class="mod-title">${mod.title}</h3>
        <p class="mod-description">${mod.description}</p>
        <div class="mod-meta">
            <span class="mod-version">${mod.version}</span>
            <span class="mod-category">${mod.category}</span>
        </div>
        <div class="mod-stats">
            <span class="mod-stat">
                <i class="fas fa-download"></i>
                ${mod.downloads.toLocaleString()}
            </span>
        </div>
        <div class="mod-actions">
            <button class="download-btn" onclick="handleDownload(${mod.id}, 'mod', '${mod.downloadUrl}', '${mod.affiliateUrl}')">
                <i class="fas fa-download"></i>
                Скачать
            </button>
            <button class="favorite-btn" data-favorite="mod_${mod.id}" onclick="toggleFavorite(${mod.id}, 'mod')">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    return card;
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

// Smooth scroll to top
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Add scroll to top button
window.addEventListener('scroll', function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (!scrollBtn) {
        const btn = document.createElement('button');
        btn.id = 'scrollToTop';
        btn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        btn.onclick = scrollToTop;
        btn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            cursor: pointer;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            box-shadow: var(--shadow-lg);
        `;
        document.body.appendChild(btn);
    }

    if (window.pageYOffset > 300) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
    } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
    }
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('fade-in');
        });
    });
});

// Add click outside to close modals
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('preview-modal') || e.target.classList.contains('info-modal')) {
        e.target.classList.remove('active');
    }
});

// Add keyboard support for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active, .preview-modal.active, .info-modal.active');
        if (activeModal) {
            activeModal.classList.remove('active');
        }
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.mod-card, .pack-card, .collection-card, .category-card');
    cards.forEach(card => {
        observer.observe(card);
    });
});

// Add copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showNotification('Ссылка скопирована в буфер обмена!', 'success');
    }).catch(function() {
        showNotification('Не удалось скопировать ссылку', 'error');
    });
}

// Add share functionality
function shareItem(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        });
    } else {
        copyToClipboard(url);
    }
}

// Export functions for use in other files
window.MineSite = {
    handleDownload,
    toggleFavorite,
    showNotification,
    copyToClipboard,
    shareItem,
    updateDownloadStats
};