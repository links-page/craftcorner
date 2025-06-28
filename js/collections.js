// Collections page JavaScript

// Sample collections data
const collectionsData = [
    {
        id: 1,
        title: 'All the Mods 9',
        description: 'Полный пак модов для Minecraft 1.20.1 с более чем 400 модами',
        version: '1.20.1',
        type: 'kitchen',
        size: '2.1 GB',
        modCount: 450,
        image: 'https://via.placeholder.com/400x200/2563eb/ffffff?text=ATM9',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/atm9',
        mods: ['Industrial Craft 2', 'Thaumcraft', 'Applied Energistics 2', 'Botania', 'Tinkers Construct'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        installation: [
            'Скачайте и установите Forge для версии 1.20.1',
            'Скачайте сборку и распакуйте в папку mods',
            'Запустите игру с профилем Forge'
        ],
        isNew: true,
        isFeatured: true
    },
    {
        id: 2,
        title: 'FTB Skies',
        description: 'Уникальная сборка с системой островов и прогрессии',
        version: '1.19.2',
        type: 'adventure',
        size: '1.8 GB',
        modCount: 380,
        image: 'https://via.placeholder.com/400x200/3b82f6/ffffff?text=FTB+Skies',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/ftbskies',
        mods: ['Create', 'Mekanism', 'Thermal Series', 'Mystical Agriculture', 'Refined Storage'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        installation: [
            'Установите Forge для версии 1.19.2',
            'Скачайте сборку и запустите установщик',
            'Следуйте инструкциям установщика'
        ],
        isNew: false,
        isFeatured: true
    },
    {
        id: 3,
        title: 'Create: Above and Beyond',
        description: 'Сборка, полностью основанная на модах Create и автоматизации',
        version: '1.18.2',
        type: 'tech',
        size: '1.5 GB',
        modCount: 320,
        image: 'https://via.placeholder.com/400x200/1d4ed8/ffffff?text=Create+CAB',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/createcab',
        mods: ['Create', 'Applied Energistics 2', 'Refined Storage', 'Thermal Series', 'Mekanism'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        installation: [
            'Установите Forge для версии 1.18.2',
            'Скачайте и распакуйте сборку',
            'Скопируйте файлы в папку .minecraft'
        ],
        isNew: false,
        isFeatured: false
    },
    {
        id: 4,
        title: 'Enigmatica 9',
        description: 'Сбалансированная сборка с квестами и прогрессией',
        version: '1.20.1',
        type: 'kitchen',
        size: '2.3 GB',
        modCount: 480,
        image: 'https://via.placeholder.com/400x200/2563eb/ffffff?text=Enigmatica+9',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/enigmatica9',
        mods: ['Industrial Craft 2', 'Thaumcraft', 'Botania', 'Mystical Agriculture', 'Applied Energistics 2'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        installation: [
            'Скачайте Forge для версии 1.20.1',
            'Установите сборку через лаунчер',
            'Настройте параметры запуска'
        ],
        isNew: true,
        isFeatured: false
    },
    {
        id: 5,
        title: 'StoneBlock 3',
        description: 'Сборка в стиле SkyBlock, но под землей',
        version: '1.18.2',
        type: 'adventure',
        size: '1.7 GB',
        modCount: 350,
        image: 'https://via.placeholder.com/400x200/3b82f6/ffffff?text=StoneBlock+3',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/stoneblock3',
        mods: ['Mystical Agriculture', 'Applied Energistics 2', 'Thermal Series', 'Mekanism', 'Refined Storage'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        installation: [
            'Установите Forge для версии 1.18.2',
            'Скачайте сборку и запустите',
            'Создайте новый мир с настройками сборки'
        ],
        isNew: false,
        isFeatured: false
    },
    {
        id: 6,
        title: 'Valhelsia 5',
        description: 'Современная сборка с акцентом на строительство и декор',
        version: '1.20.1',
        type: 'building',
        size: '1.9 GB',
        modCount: 420,
        image: 'https://via.placeholder.com/400x200/1d4ed8/ffffff?text=Valhelsia+5',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/valhelsia5',
        mods: ['Create', 'Chisel', 'Decocraft', 'Bibliocraft', 'Architects Palette'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        installation: [
            'Скачайте Forge для версии 1.20.1',
            'Установите сборку через лаунчер',
            'Настройте параметры запуска'
        ],
        isNew: false,
        isFeatured: false
    }
];

// Current page state
let currentPage = 1;
let itemsPerPage = 6;
let filteredCollections = [...collectionsData];
let currentFilters = {
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
    const sortFilter = document.getElementById('sortFilter');
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

    if (sortFilter) {
        sortFilter.addEventListener('change', handleFilterChange);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreCollections);
    }
}

function initializeFilters() {
    // Set default values
    currentFilters = {
        search: '',
        version: '',
        type: '',
        sort: 'popular'
    };
}

function handleCollectionSearch(e) {
    currentFilters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    currentFilters[filterType] = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredCollections = collectionsData.filter(collection => {
        // Search filter
        if (currentFilters.search) {
            const searchMatch = collection.title.toLowerCase().includes(currentFilters.search) ||
                               collection.description.toLowerCase().includes(currentFilters.search) ||
                               collection.mods.some(mod => mod.toLowerCase().includes(currentFilters.search));
            if (!searchMatch) return false;
        }

        // Version filter
        if (currentFilters.version && collection.version !== currentFilters.version) {
            return false;
        }

        // Type filter
        if (currentFilters.type && collection.type !== currentFilters.type) {
            return false;
        }

        return true;
    });

    // Sort collections
    sortCollections();

    // Reset to first page
    currentPage = 1;
    loadCollections();
}

function sortCollections() {
    switch (currentFilters.sort) {
        case 'popular':
            filteredCollections.sort((a, b) => b.isFeatured - a.isFeatured || b.isNew - a.isNew);
            break;
        case 'newest':
            filteredCollections.sort((a, b) => b.isNew - a.isNew);
            break;
        case 'name':
            filteredCollections.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'downloads':
            filteredCollections.sort((a, b) => b.isFeatured - a.isFeatured || b.isNew - a.isNew);
            break;
    }
}

function loadCollections() {
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;

    // Clear existing collections
    collectionsGrid.innerHTML = '';

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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

    // Add special classes
    if (collection.isNew) card.classList.add('new');
    if (collection.isFeatured) card.classList.add('featured');

    card.innerHTML = `
        ${collection.isNew ? '<div class="new-badge">Новый</div>' : ''}
        ${collection.isFeatured ? '<div class="featured-badge">Рекомендуемый</div>' : ''}
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
                <button class="favorite-btn" data-favorite="collection_${collection.id}" onclick="toggleFavorite(${collection.id}, 'collection')">
                    <i class="fas fa-heart"></i>
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
    currentPage++;
    const collectionsGrid = document.getElementById('collectionsGrid');
    if (!collectionsGrid) return;

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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

    const totalPages = Math.ceil(filteredCollections.length / itemsPerPage);

    if (currentPage >= totalPages) {
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
                <h3 class="info-title">${collection.title}</h3>
                <button class="info-close">&times;</button>
            </div>
            <div class="info-body">
                <div class="info-description">
                    <h4>Описание</h4>
                    <p>${collection.description}</p>
                </div>

                <div class="info-mods">
                    <h3>Моды в сборке (${collection.modCount})</h3>
                    <div class="mod-grid">
                        ${collection.mods.map(mod => `
                            <div class="mod-item-detailed">
                                <h4>${mod}</h4>
                                <p>Включен в сборку</p>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <div class="info-installation">
                    <h3>Инструкция по установке</h3>
                    ${collection.installation.map((step, index) => `
                        <div class="installation-step">
                            <div class="step-number">${index + 1}</div>
                            <div class="step-text">${step}</div>
                        </div>
                    `).join('')}
                </div>

                <div class="info-actions">
                    <button class="download-btn" onclick="handleDownload(${collection.id}, 'collection', '${collection.downloadUrl}', '${collection.affiliateUrl}')">
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