// Collections page JavaScript

// Sample collections data
const collectionsData = [
    {
        id: 1,
        code: 'ATM9',
        title: 'All the Mods 9',
        description: 'Полный пак модов для Minecraft 1.20.1 с более чем 400 модами',
        version: '1.20.1',
        type: 'kitchen',
        size: '2.1 GB',
        modCount: 450,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFUTTk8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/atm9',
        mods: ['Industrial Craft 2', 'Thaumcraft', 'Applied Energistics 2', 'Botania', 'Tinkers Construct'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        installation: [
            'Скачайте и установите Forge для версии 1.20.1',
            'Скачайте сборку и распакуйте в папку mods',
            'Запустите игру с профилем Forge'
        ]
    },
    {
        id: 2,
        code: 'FTBSKIES',
        title: 'FTB Skies',
        description: 'Уникальная сборка с системой островов и прогрессии',
        version: '1.19.2',
        type: 'adventure',
        size: '1.8 GB',
        modCount: 380,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZUQiBTa2llczwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/ftbskies',
        mods: ['Create', 'Mekanism', 'Thermal Series', 'Mystical Agriculture', 'Refined Storage'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        installation: [
            'Установите Forge для версии 1.19.2',
            'Скачайте сборку и запустите установщик',
            'Следуйте инструкциям установщика'
        ]
    },
    {
        id: 3,
        code: 'CAB',
        title: 'Create: Above and Beyond',
        description: 'Сборка, полностью основанная на модах Create и автоматизации',
        version: '1.18.2',
        type: 'tech',
        size: '1.5 GB',
        modCount: 320,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNyZWF0ZSBDQUI8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/createcab',
        mods: ['Create', 'Applied Energistics 2', 'Refined Storage', 'Thermal Series', 'Mekanism'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        installation: [
            'Установите Forge для версии 1.18.2',
            'Скачайте и распакуйте сборку',
            'Скопируйте файлы в папку .minecraft'
        ]
    },
    {
        id: 4,
        code: 'ENIGMATICA9',
        title: 'Enigmatica 9',
        description: 'Сбалансированная сборка с квестами и прогрессией',
        version: '1.20.1',
        type: 'kitchen',
        size: '2.3 GB',
        modCount: 480,
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkVuaWdtYXRpY2EgOTwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/enigmatica9',
        mods: ['Industrial Craft 2', 'Thaumcraft', 'Botania', 'Mystical Agriculture', 'Applied Energistics 2'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        installation: [
            'Скачайте Forge для версии 1.20.1',
            'Установите сборку через лаунчер',
            'Настройте параметры запуска'
        ]
    },
    {
        id: 5,
        code: 'ARC',
        title: 'Arcania 1.3.4',
        description: 'Исследуйте уникальный игровой мир с особенной генерацией, загадочными пещерами, новыми мирами, строениями. Сражайтесь с необычными монстрами и опасными боссами в динамичном бою, с особенным сбалансированным оружием.',
        version: '1.20.1',
        type: 'adventure',
        size: '0.64 GB',
        modCount: 260,
        image: 'https://ru-minecraft.ru/uploads/posts/2024-06/1718137841_hq720.jpg',
        downloadUrl: 'https://vexfile.com/download/z2q9Yqm55v',
        affiliateUrl: 'https://vexfile.com/download/z2q9Yqm55v',
        mods: ['EDF Remastered', 'BetterEnd', 'DungeonsArise', 'Dungeons and Taverns'],
        requirements: ['Fabric', '8GB RAM', '1.20.1'],
        installation: [
            'Желательно использовать Legacy Laucnher, т.к. на другом лаунчере сборка, скорее всего, не запустится',
            'Скачайте файл и распакуйте его. (достаньте папки из архива)',
            'Крайне рекомендуется удалить все свои моды, а также очистить папки .minecraft/config и .minecraft/scripts',
            'Установите fabric-loader-0.14.25 для 1.20.1',
            'Скопируйте все содержимое архива (папки mods, scripts, config итд ) в .minecraft',
            'В лаунчере запускай версию fabric-loader-0.14.25-1.20.1'
        ]
    },
    {
        id: 6,
        code: 'SOLO',
        title: 'Solo Leveling: Reawakening',
        description: 'Комбинированная сборка соло левелинга и эпических боев! Драконы, магия c комбинацией эпической боевкой, данжи и т.д! Проработан баланс, чуточка хардкора и конечно же прокачка!',
        version: '1.20.1',
        type: 'adventure',
        size: '0.67 GB',
        modCount: 113,
        image: 'https://minecraft-inside.ru/uploads/files/2025-06/186026_685cf0581ea8c.png',
        downloadUrl: 'https://vexfile.com/download/BO9dD5A4YV',
        affiliateUrl: 'https://vexfile.com/download/BO9dD5A4YV',
        mods: ['Create', 'Solo Leveling: Reawakening', 'DungeonsArise', 'Quark', "L_Ender 's Cataclysm"],
        requirements: ['Forge', '8GB RAM', '1.20.1'],
        installation: [
            'Скачайте Forge для версии 1.20.1',
            'Скачай сборку по ссылке ниже',
            'Настройте параметры запуска'
        ]
    }
];

// Current page state
let collectionsCurrentPage = 1;
let collectionsItemsPerPage = 6;
let filteredCollections = [...collectionsData];
let collectionsCurrentFilters = {
    search: '',
    version: '',
    type: '',
    sort: 'popular'
};

// Initialize collections page
document.addEventListener('DOMContentLoaded', function() {
    initializeCollectionsPage();
    loadCollections();
    initializeFilters();
});

function initializeCollectionsPage() {
    // Add event listeners for filters
    const searchInput = document.getElementById('collectionSearchInput');
    const versionFilter = document.getElementById('versionFilter');
    const typeFilter = document.getElementById('typeFilter');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleCollectionSearch, 300));
    }

    if (versionFilter) {
        versionFilter.addEventListener('change', handleFilterChange);
    }

    if (typeFilter) {
        typeFilter.addEventListener('change', handleFilterChange);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreCollections);
    }
}

function initializeFilters() {
    // Set default values
    collectionsCurrentFilters = {
        search: '',
        version: '',
        type: ''
    };
}

function handleCollectionSearch(e) {
    collectionsCurrentFilters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    collectionsCurrentFilters[filterType] = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredCollections = collectionsData.filter(collection => {
        // Search filter
        if (collectionsCurrentFilters.search) {
            const searchMatch = collection.title.toLowerCase().includes(collectionsCurrentFilters.search) ||
                               collection.description.toLowerCase().includes(collectionsCurrentFilters.search) ||
                               collection.code.toLowerCase().includes(collectionsCurrentFilters.search) ||
                               collection.mods.some(mod => mod.toLowerCase().includes(collectionsCurrentFilters.search));
            if (!searchMatch) return false;
        }

        // Version filter
        if (collectionsCurrentFilters.version && collection.version !== collectionsCurrentFilters.version) {
            return false;
        }

        // Type filter
        if (collectionsCurrentFilters.type && collection.type !== collectionsCurrentFilters.type) {
            return false;
        }

        return true;
    });

    // Reset to first page
    collectionsCurrentPage = 1;
    loadCollections();
}

function loadCollections() {
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;

    // Clear existing collections
    collectionsGrid.innerHTML = '';

    // Calculate pagination
    const startIndex = (collectionsCurrentPage - 1) * collectionsItemsPerPage;
    const endIndex = startIndex + collectionsItemsPerPage;
    const collectionsToShow = filteredCollections.slice(startIndex, endIndex);

    if (collectionsToShow.length === 0) {
        showEmptyState();
        return;
    }

    // Create collection cards
    collectionsToShow.forEach(collection => {
        const collectionCard = createCollectionCard(collection);
        collectionsGrid.appendChild(collectionCard);
    });

    // Update load more button
    updateLoadMoreButton();
}

function createCollectionCard(collection) {
    const card = document.createElement('div');
    card.className = 'collection-card fade-in';

    card.innerHTML = `
        <div class="collection-code">${collection.code}</div>
        <div class="collection-size">${collection.size}</div>
        <div class="collection-mod-count">${collection.modCount} модов</div>

        <div class="collection-image">
            <img src="${collection.image}" alt="${collection.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <i class="fas fa-boxes" style="display: none;"></i>
        </div>

        <div class="collection-content">
            <h3 class="collection-title">${collection.title}</h3>
            <p class="collection-description">${collection.description}</p>

            <div class="collection-meta">
                <span class="collection-version">${collection.version}</span>
                <span class="collection-type">${getTypeName(collection.type)}</span>
            </div>

            <div class="collection-mods">
                <h4>Основные моды:</h4>
                <div class="mod-list">
                    ${collection.mods.slice(0, 5).map(mod => `<span class="mod-item">${mod}</span>`).join('')}
                    ${collection.mods.length > 5 ? `<span class="mod-item">+${collection.mods.length - 5} еще</span>` : ''}
                </div>
            </div>

            <div class="collection-requirements">
                <h4>Требования:</h4>
                ${collection.requirements.map(req => `
                    <div class="requirement-item">
                        <i class="fas fa-check"></i>
                        ${req}
                    </div>
                `).join('')}
            </div>

            <div class="collection-actions">
                <button class="download-btn" onclick="handleDownload(${collection.id}, 'collection', '${collection.downloadUrl}', '${collection.affiliateUrl}')">
                    <i class="fas fa-download"></i>
                    Скачать
                </button>
                <button class="info-btn" onclick="showCollectionInfo(${collection.id})">
                    <i class="fas fa-info"></i>
                </button>
            </div>
        </div>
    `;

    return card;
}

function getTypeName(type) {
    const types = {
        'kitchen': 'Кухонная раковина',
        'tech': 'Технологическая',
        'adventure': 'Приключенческая',
        'building': 'Строительная',
        'magic': 'Магическая'
    };
    return types[type] || type;
}

function showEmptyState() {
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;

    collectionsGrid.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>Сборки не найдены</h3>
            <p>Попробуйте изменить параметры поиска или фильтры</p>
        </div>
    `;
}

function loadMoreCollections() {
    collectionsCurrentPage++;
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;

    // Calculate pagination
    const startIndex = (collectionsCurrentPage - 1) * collectionsItemsPerPage;
    const endIndex = startIndex + collectionsItemsPerPage;
    const collectionsToShow = filteredCollections.slice(startIndex, endIndex);

    // Add new collections with animation
    collectionsToShow.forEach((collection, index) => {
        setTimeout(() => {
            const collectionCard = createCollectionCard(collection);
            collectionsGrid.appendChild(collectionCard);
        }, index * 100);
    });

    // Update load more button
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const totalPages = Math.ceil(filteredCollections.length / collectionsItemsPerPage);

    if (collectionsCurrentPage >= totalPages) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Collection info modal
function showCollectionInfo(collectionId) {
    const collection = collectionsData.find(c => c.id === collectionId);
    if (!collection) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'info-modal active';
    modal.innerHTML = `
        <div class="info-content">
            <div class="info-header">
                <div class="info-header-content">
                    <div class="info-title-section">
                        <h3 class="info-title">${collection.title}</h3>
                        <div class="info-subtitle">${collection.code} • ${collection.modCount} модов</div>
                    </div>
                </div>
                <button class="info-close">&times;</button>
            </div>
            <div class="info-body">
                <div class="info-hero">
                    <div class="info-image">
                        <img src="${collection.image}" alt="${collection.title}">
                    </div>
                    <div class="info-stats">
                        <div class="stat-item">
                            <div class="stat-label">Версия</div>
                            <div class="stat-value">${collection.version}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Размер</div>
                            <div class="stat-value">${collection.size}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Тип</div>
                            <div class="stat-value">${getTypeName(collection.type)}</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-label">Модов</div>
                            <div class="stat-value">${collection.modCount}</div>
                        </div>
                    </div>
                </div>

                <div class="info-description">
                    <h4>Описание</h4>
                    <p>${collection.description}</p>
                </div>

                <div class="info-mods">
                    <h4>Основные моды в сборке</h4>
                    <div class="mods-grid">
                        ${collection.mods.map(mod => `
                            <div class="mod-item-detailed">
                                <div class="mod-icon">
                                    <i class="fas fa-puzzle-piece"></i>
                                </div>
                                <div class="mod-info">
                                    <div class="mod-name">${mod}</div>
                                    <div class="mod-status">Включен в сборку</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="info-requirements">
                    <h4>Системные требования</h4>
                    <div class="requirements-grid">
                        ${collection.requirements.map(req => `
                            <div class="requirement-item-detailed">
                                <div class="requirement-icon">
                                    <i class="fas fa-check-circle"></i>
                                </div>
                                <div class="requirement-text">${req}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="info-installation">
                    <h4>Инструкция по установке</h4>
                    <div class="installation-steps">
                        ${collection.installation.map((step, index) => `
                            <div class="installation-step">
                                <div class="step-number">${index + 1}</div>
                                <div class="step-content">
                                    <div class="step-text">${step}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="info-actions">
                    <button class="download-btn primary" onclick="handleDownload(${collection.id}, 'collection', '${collection.downloadUrl}', '${collection.affiliateUrl}')">
                        <i class="fas fa-download"></i>
                        Скачать сборку
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

// Export functions for global use
window.showCollectionInfo = showCollectionInfo;
window.handleDownload = handleDownload;
