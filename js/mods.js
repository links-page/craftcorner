// Mods page JavaScript

// Sample mods data
const modsData = [
    {
        id: 1,
        code: 'IC2',
        title: 'Industrial Craft 2',
        description: 'Добавляет множество технологических блоков и предметов для автоматизации производства',
        version: '1.20.1',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPklDMjwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/ic2',
        tags: ['Технологии', 'Автоматизация', 'Энергия'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 2,
        code: 'THAUM',
        title: 'Thaumcraft',
        description: 'Магический мод с системой заклинаний, исследования и магических устройств',
        version: '1.19.2',
        category: 'magic',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRoYXVtY3JhZnQ8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/thaumcraft',
        tags: ['Магия', 'Заклинания', 'Исследования'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 3,
        code: 'BOP',
        title: 'Biomes O\' Plenty',
        description: 'Добавляет множество новых биомов, растений и природных объектов',
        version: '1.20.1',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJPUDwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/bop',
        tags: ['Природа', 'Биомы', 'Растения'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 4,
        code: 'AE2',
        title: 'Applied Energistics 2',
        description: 'Система цифрового хранения и автоматизации с использованием энергии',
        version: '1.20.1',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFFMjwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/ae2',
        tags: ['Технологии', 'Хранение', 'Автоматизация'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 5,
        code: 'BOTANIA',
        title: 'Botania',
        description: 'Магический мод, основанный на природной магии и цветах',
        version: '1.19.2',
        category: 'magic',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvdGFuaWE8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/botania',
        tags: ['Магия', 'Природа', 'Цветы'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 6,
        code: 'CHISEL',
        title: 'Chisel',
        description: 'Добавляет множество декоративных блоков и инструменты для их создания',
        version: '1.20.1',
        category: 'decoration',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNoaXNlbDwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/chisel',
        tags: ['Декор', 'Блоки', 'Строительство'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 7,
        code: 'JOURNEYMAP',
        title: 'JourneyMap',
        description: 'Карта мира в реальном времени с множеством полезных функций',
        version: '1.20.1',
        category: 'utility',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkpvdXJuZXlNYXA8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/journeymap',
        tags: ['Карта', 'Навигация', 'Утилиты'],
        requirements: ['Forge', 'Java 17+']
    },
    {
        id: 8,
        code: 'TINKERS',
        title: 'Tinkers Construct',
        description: 'Система создания инструментов с множеством материалов и улучшений',
        version: '1.19.2',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRpbmtlcnM8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/tinkers',
        tags: ['Инструменты', 'Крафтинг', 'Материалы'],
        requirements: ['Forge', 'Java 17+']
    }
];

// Current page state
let modsCurrentPage = 1;
let modsItemsPerPage = 8;
let filteredMods = [...modsData];
let modsCurrentFilters = {
    search: '',
    version: '',
    category: '',
    sort: 'popular'
};

// Initialize mods page
document.addEventListener('DOMContentLoaded', function() {
    initializeModsPage();
    loadMods();
    initializeFilters();
});

function initializeModsPage() {
    // Add event listeners for filters
    const searchInput = document.getElementById('modSearchInput');
    const versionFilter = document.getElementById('versionFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleModSearch, 300));
    }

    if (versionFilter) {
        versionFilter.addEventListener('change', handleFilterChange);
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilterChange);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreMods);
    }
}

function initializeFilters() {
    // Set default values
    modsCurrentFilters = {
        search: '',
        version: '',
        category: ''
    };
}

function handleModSearch(e) {
    modsCurrentFilters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    modsCurrentFilters[filterType] = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredMods = modsData.filter(mod => {
        // Search filter
        if (modsCurrentFilters.search) {
            const searchMatch = mod.title.toLowerCase().includes(modsCurrentFilters.search) ||
                               mod.description.toLowerCase().includes(modsCurrentFilters.search) ||
                               mod.code.toLowerCase().includes(modsCurrentFilters.search) ||
                               mod.tags.some(tag => tag.toLowerCase().includes(modsCurrentFilters.search));
            if (!searchMatch) return false;
        }

        // Version filter
        if (modsCurrentFilters.version && mod.version !== modsCurrentFilters.version) {
            return false;
        }

        // Category filter
        if (modsCurrentFilters.category && mod.category !== modsCurrentFilters.category) {
            return false;
        }

        return true;
    });

    // Reset to first page
    modsCurrentPage = 1;
    loadMods();
}

function loadMods() {
    const modsGrid = document.getElementById('modsGrid');
    if (!modsGrid) return;

    // Clear existing mods
    modsGrid.innerHTML = '';

    // Calculate pagination
    const startIndex = (modsCurrentPage - 1) * modsItemsPerPage;
    const endIndex = startIndex + modsItemsPerPage;
    const modsToShow = filteredMods.slice(startIndex, endIndex);

    if (modsToShow.length === 0) {
        showEmptyState();
        return;
    }

    // Create mod cards
    modsToShow.forEach(mod => {
        const modCard = createModCard(mod);
        modsGrid.appendChild(modCard);
    });

    // Update load more button
    updateLoadMoreButton();
}

function createModCard(mod) {
    const card = document.createElement('div');
    card.className = 'mod-card fade-in';

    card.innerHTML = `
        <div class="mod-code">${mod.code}</div>

        <div class="mod-image">
            <img src="${mod.image}" alt="${mod.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <i class="fas fa-puzzle-piece" style="display: none;"></i>
        </div>

        <h3 class="mod-title">${mod.title}</h3>
        <p class="mod-description">${mod.description}</p>

        <div class="mod-meta">
            <span class="mod-version">${mod.version}</span>
            <span class="mod-category">${getCategoryName(mod.category)}</span>
        </div>

        <div class="mod-tags">
            ${mod.tags.map(tag => `<span class="mod-tag">${tag}</span>`).join('')}
        </div>

        <div class="mod-requirements">
            <h4>Требования:</h4>
            ${mod.requirements.map(req => `
                <div class="requirement-item">
                    <i class="fas fa-check"></i>
                    ${req}
                </div>
            `).join('')}
        </div>

        <div class="mod-actions">
            <button class="download-btn" onclick="handleDownload(${mod.id}, 'mod', '${mod.downloadUrl}', '${mod.affiliateUrl}')">
                <i class="fas fa-download"></i>
                Скачать
            </button>
            <button class="info-btn" onclick="showModInfo(${mod.id})">
                <i class="fas fa-info"></i>
            </button>
        </div>
    `;

    return card;
}

function getCategoryName(category) {
    const categories = {
        'technology': 'Технологии',
        'magic': 'Магия',
        'adventure': 'Приключения',
        'decoration': 'Декор',
        'utility': 'Утилиты'
    };
    return categories[category] || category;
}

function showEmptyState() {
    const modsGrid = document.getElementById('modsGrid');
    if (!modsGrid) return;

    modsGrid.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>Моды не найдены</h3>
            <p>Попробуйте изменить параметры поиска или фильтры</p>
        </div>
    `;
}

function loadMoreMods() {
    modsCurrentPage++;
    const modsGrid = document.getElementById('modsGrid');
    if (!modsGrid) return;

    // Calculate pagination
    const startIndex = (modsCurrentPage - 1) * modsItemsPerPage;
    const endIndex = startIndex + modsItemsPerPage;
    const modsToShow = filteredMods.slice(startIndex, endIndex);

    // Add new mods with animation
    modsToShow.forEach((mod, index) => {
        setTimeout(() => {
            const modCard = createModCard(mod);
            modsGrid.appendChild(modCard);
        }, index * 100);
    });

    // Update load more button
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const totalPages = Math.ceil(filteredMods.length / modsItemsPerPage);

    if (modsCurrentPage >= totalPages) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Enhanced download function for mods
function handleModDownload(modId, downloadUrl, affiliateUrl) {
    // Find mod data
    const mod = modsData.find(m => m.id === modId);
    if (!mod) return;

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

        // Show success animation
        if (btn) {
            btn.classList.add('success');
            setTimeout(() => btn.classList.remove('success'), 2000);
        }

        // Redirect to affiliate URL for monetization
        if (affiliateUrl && affiliateUrl !== '#') {
            window.open(affiliateUrl, '_blank');
        } else if (downloadUrl && downloadUrl !== '#') {
            window.open(downloadUrl, '_blank');
        }

        // Show success notification
        if (window.CraftCorner && window.CraftCorner.showNotification) {
            window.CraftCorner.showNotification(`Мод "${mod.title}" успешно скачан!`, 'success');
        }

    }, 2000);
}

// Utility function for debouncing
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

// Add mod preview functionality
function showModPreview(modId) {
    const mod = modsData.find(m => m.id === modId);
    if (!mod) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'preview-modal active';
    modal.innerHTML = `
        <div class="preview-content">
            <div class="preview-header">
                <h3 class="preview-title">${mod.title}</h3>
                <button class="preview-close">&times;</button>
            </div>
            <div class="preview-body">
                <div class="preview-image">
                    <img src="${mod.image}" alt="${mod.title}">
                </div>
                <div class="preview-info">
                    <div class="info-item">
                        <div class="info-label">Версия</div>
                        <div class="info-value">${mod.version}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Категория</div>
                        <div class="info-value">${getCategoryName(mod.category)}</div>
                    </div>
                </div>
                <div class="preview-description">
                    <h4>Описание:</h4>
                    <p>${mod.description}</p>
                </div>
                <div class="preview-actions">
                    <button class="download-btn" onclick="handleModDownload(${mod.id}, '${mod.downloadUrl}', '${mod.affiliateUrl}')">
                        <i class="fas fa-download"></i>
                        Скачать мод
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.preview-close').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

function showModInfo(modId) {
    const mod = modsData.find(m => m.id === modId);
    if (!mod) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'info-modal active';
    modal.innerHTML = `
        <div class="info-content">
            <div class="info-header">
                <h3 class="info-title">${mod.title}</h3>
                <button class="info-close">&times;</button>
            </div>
            <div class="info-body">
                <div class="info-description">
                    <h4>Описание</h4>
                    <p>${mod.description}</p>
                </div>
                <div class="info-meta">
                    <div><b>Версия:</b> ${mod.version}</div>
                    <div><b>Категория:</b> ${getCategoryName(mod.category)}</div>
                    <div><b>Код:</b> ${mod.code}</div>
                </div>
                <div class="info-tags">
                    <h4>Теги</h4>
                    <div>${mod.tags.map(tag => `<span class='mod-tag'>${tag}</span>`).join(' ')}</div>
                </div>
                <div class="info-requirements">
                    <h4>Требования</h4>
                    <ul>${mod.requirements.map(req => `<li>${req}</li>`).join('')}</ul>
                </div>
                <div class="info-actions">
                    <button class="download-btn" onclick="handleDownload(${mod.id}, 'mod', '${mod.downloadUrl}', '${mod.affiliateUrl}')">
                        <i class="fas fa-download"></i>
                        Скачать мод
                    </button>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    // Close modal functionality
    modal.querySelector('.info-close').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// Export functions for global use
window.handleModDownload = handleModDownload;
window.showModPreview = showModPreview;
window.showModInfo = showModInfo;