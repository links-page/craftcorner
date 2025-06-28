// Collections page JavaScript

// Sample collections data
const collectionsData = [
    {
        id: 1,
        title: 'Tech Revolution',
        description: 'Полный набор технологических модов для автоматизации и прогресса',
        version: '1.20.1',
        type: 'tech',
        downloads: 8760,
        rating: 4.8,
        size: '2.1 GB',
        modCount: 15,
        image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Tech+Revolution',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/tech-revolution',
        mods: ['Industrial Craft 2', 'Applied Energistics 2', 'Thermal Expansion', 'Ender IO'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        isNew: false,
        isPremium: true,
        isFeatured: true
    },
    {
        id: 2,
        title: 'Magic Academy',
        description: 'Сборка магических модов для изучения заклинаний и магии',
        version: '1.19.2',
        type: 'magic',
        downloads: 6540,
        rating: 4.7,
        size: '1.8 GB',
        modCount: 12,
        image: 'https://via.placeholder.com/300x200/8b5cf6/ffffff?text=Magic+Academy',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/magic-academy',
        mods: ['Thaumcraft', 'Botania', 'Blood Magic', 'Astral Sorcery'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        isNew: true,
        isPremium: false,
        isFeatured: false
    },
    {
        id: 3,
        title: 'Adventure Pack',
        description: 'Приключенческая сборка с новыми измерениями и биомами',
        version: '1.20.1',
        type: 'adventure',
        downloads: 5430,
        rating: 4.6,
        size: '1.5 GB',
        modCount: 10,
        image: 'https://via.placeholder.com/300x200/10b981/ffffff?text=Adventure+Pack',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/adventure-pack',
        mods: ['Biomes O\' Plenty', 'Twilight Forest', 'The Betweenlands', 'AbyssalCraft'],
        requirements: ['Forge', 'Java 17+', '6GB RAM'],
        isNew: false,
        isPremium: false,
        isFeatured: false
    },
    {
        id: 4,
        title: 'Kitchen Sink',
        description: 'Классическая сборка "все включено" с популярными модами',
        version: '1.20.1',
        type: 'kitchen',
        downloads: 12340,
        rating: 4.9,
        size: '3.2 GB',
        modCount: 25,
        image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Kitchen+Sink',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/kitchen-sink',
        mods: ['Industrial Craft 2', 'Thaumcraft', 'Biomes O\' Plenty', 'Applied Energistics 2'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        isNew: false,
        isPremium: true,
        isFeatured: true
    },
    {
        id: 5,
        title: 'Building Paradise',
        description: 'Сборка для строителей с декоративными модами и инструментами',
        version: '1.19.2',
        type: 'building',
        downloads: 4320,
        rating: 4.5,
        size: '1.2 GB',
        modCount: 8,
        image: 'https://via.placeholder.com/300x200/ec4899/ffffff?text=Building+Paradise',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/building-paradise',
        mods: ['Chisel', 'Carpenter\'s Blocks', 'Bibliocraft', 'Decocraft'],
        requirements: ['Forge', 'Java 17+', '4GB RAM'],
        isNew: true,
        isPremium: false,
        isFeatured: false
    },
    {
        id: 6,
        title: 'Lightweight Pack',
        description: 'Оптимизированная сборка для слабых компьютеров',
        version: '1.20.1',
        type: 'utility',
        downloads: 7650,
        rating: 4.4,
        size: '800 MB',
        modCount: 6,
        image: 'https://via.placeholder.com/300x200/f97316/ffffff?text=Lightweight',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/lightweight',
        mods: ['JourneyMap', 'JEI', 'Optifine', 'FastLeafDecay'],
        requirements: ['Forge', 'Java 17+', '4GB RAM'],
        isNew: false,
        isPremium: false,
        isFeatured: false
    },
    {
        id: 7,
        title: 'Expert Mode',
        description: 'Сложная сборка с измененными рецептами и балансом',
        version: '1.19.2',
        type: 'tech',
        downloads: 3210,
        rating: 4.8,
        size: '2.8 GB',
        modCount: 20,
        image: 'https://via.placeholder.com/300x200/14b8a6/ffffff?text=Expert+Mode',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/expert-mode',
        mods: ['Industrial Craft 2', 'GregTech', 'Applied Energistics 2', 'Thermal Expansion'],
        requirements: ['Forge', 'Java 17+', '8GB RAM'],
        isNew: false,
        isPremium: true,
        isFeatured: false
    },
    {
        id: 8,
        title: 'Vanilla+',
        description: 'Минималистичная сборка, дополняющая ванильную игру',
        version: '1.20.1',
        type: 'utility',
        downloads: 9870,
        rating: 4.7,
        size: '600 MB',
        modCount: 5,
        image: 'https://via.placeholder.com/300x200/6366f1/ffffff?text=Vanilla+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/vanilla-plus',
        mods: ['Quark', 'Autumnity', 'Upgrade Aquatic', 'Buzzier Bees'],
        requirements: ['Forge', 'Java 17+', '4GB RAM'],
        isNew: false,
        isPremium: false,
        isFeatured: true
    }
];

// Current page state
let currentPage = 1;
let itemsPerPage = 8;
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
            filteredCollections.sort((a, b) => b.downloads - a.downloads);
            break;
        case 'newest':
            filteredCollections.sort((a, b) => b.isNew - a.isNew);
            break;
        case 'name':
            filteredCollections.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'downloads':
            filteredCollections.sort((a, b) => b.downloads - a.downloads);
            break;
        case 'rating':
            filteredCollections.sort((a, b) => b.rating - a.rating);
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
    if (collection.isPremium) card.classList.add('premium');
    if (collection.isFeatured) card.classList.add('featured');
    if (collection.mods.length > 15) card.classList.add('large');

    card.innerHTML = `
        ${collection.isNew ? '<div class="new-badge">Новый</div>' : ''}
        ${collection.isPremium ? '<div class="premium-badge">Premium</div>' : ''}
        ${collection.isFeatured ? '<div class="featured-badge">Рекомендуемый</div>' : ''}
        <div class="collection-size">${collection.size}</div>
        <div class="collection-mod-count">${collection.modCount} модов</div>

        <div class="collection-image">
            <img src="${collection.image}" alt="${collection.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <i class="fas fa-boxes" style="display: none;"></i>
        </div>

        <h3 class="collection-title">${collection.title}</h3>
        <p class="collection-description">${collection.description}</p>

        <div class="collection-meta">
            <span class="collection-version">${collection.version}</span>
            <span class="collection-type">${getTypeName(collection.type)}</span>
        </div>

        <div class="collection-mods">
            <h4>Основные моды:</h4>
            <div class="mod-list">
                ${collection.mods.slice(0, 4).map(mod => `<span class="mod-item">${mod}</span>`).join('')}
                ${collection.mods.length > 4 ? `<span class="mod-item">+${collection.mods.length - 4} еще</span>` : ''}
            </div>
        </div>

        <div class="collection-stats">
            <span class="collection-stat">
                <i class="fas fa-download"></i>
                ${collection.downloads.toLocaleString()}
            </span>
            <span class="collection-stat">
                <i class="fas fa-star"></i>
                ${collection.rating}
            </span>
        </div>

        <div class="collection-requirements">
            <h4>Системные требования:</h4>
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
    `;

    return card;
}

function getTypeName(type) {
    const types = {
        'tech': 'Технологические',
        'magic': 'Магические',
        'adventure': 'Приключенческие',
        'kitchen': 'Кухонные',
        'building': 'Строительные',
        'utility': 'Утилиты'
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
                    <h4>Описание:</h4>
                    <p>${collection.description}</p>
                </div>

                <div class="info-mods">
                    <h3>Список модов (${collection.modCount}):</h3>
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
                    <h3>Инструкция по установке:</h3>
                    <div class="installation-step">
                        <div class="step-number">1</div>
                        <div class="step-text">Скачайте и установите Minecraft ${collection.version}</div>
                    </div>
                    <div class="installation-step">
                        <div class="step-number">2</div>
                        <div class="step-text">Установите Forge для версии ${collection.version}</div>
                    </div>
                    <div class="installation-step">
                        <div class="step-number">3</div>
                        <div class="step-text">Скачайте и распакуйте сборку в папку .minecraft/mods</div>
                    </div>
                    <div class="installation-step">
                        <div class="step-number">4</div>
                        <div class="step-text">Запустите игру и выберите профиль Forge</div>
                    </div>
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