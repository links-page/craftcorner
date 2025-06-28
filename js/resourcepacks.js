// Resource Packs page JavaScript

// Sample resource packs data
const packsData = [
    {
        id: 1,
        title: 'Faithful 32x',
        description: 'Классический ресурс пак с улучшенным разрешением 32x32',
        version: '1.20.1',
        style: 'realistic',
        size: '45 MB',
        resolution: '32x',
        image: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=Faithful',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/faithful',
        tags: ['Классический', '32x', 'Ваннила'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        isNew: false
    },
    {
        id: 2,
        title: 'Sphax PureBDCraft',
        description: 'Мультяшный стиль с яркими цветами и детализированными текстурами',
        version: '1.20.1',
        style: 'cartoon',
        size: '128 MB',
        resolution: '128x',
        image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Sphax',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/sphax',
        tags: ['Мультяшный', '128x', 'Яркий'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс', 'Анимации'],
        isNew: false
    },
    {
        id: 3,
        title: 'Realistico',
        description: 'Фотореалистичные текстуры для максимальной реалистичности',
        version: '1.19.2',
        style: 'realistic',
        size: '256 MB',
        resolution: '256x',
        image: 'https://via.placeholder.com/300x200/1d4ed8/ffffff?text=Realistico',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/realistico',
        tags: ['Реалистичный', '256x', 'PBR'],
        features: ['Все блоки', 'PBR текстуры', 'Нормал мапы'],
        isNew: true
    },
    {
        id: 4,
        title: 'Chroma Hills',
        description: 'Средневековый фэнтези стиль с богатыми деталями',
        version: '1.20.1',
        style: 'fantasy',
        size: '89 MB',
        resolution: '64x',
        image: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=Chroma',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/chroma',
        tags: ['Фэнтези', '64x', 'Средневековье'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        isNew: false
    },
    {
        id: 5,
        title: 'Modern HD',
        description: 'Современный минималистичный дизайн с четкими линиями',
        version: '1.20.1',
        style: 'modern',
        size: '67 MB',
        resolution: '64x',
        image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Modern',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/modern',
        tags: ['Современный', '64x', 'Минимализм'],
        features: ['Все блоки', 'Интерфейс', 'Четкие линии'],
        isNew: true
    },
    {
        id: 6,
        title: 'Medieval',
        description: 'Аутентичные средневековые текстуры для исторических серверов',
        version: '1.19.2',
        style: 'medieval',
        size: '78 MB',
        resolution: '64x',
        image: 'https://via.placeholder.com/300x200/1d4ed8/ffffff?text=Medieval',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/medieval',
        tags: ['Средневековье', '64x', 'Исторический'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        isNew: false
    },
    {
        id: 7,
        title: 'Soartex Fanver',
        description: 'Плавные и мягкие текстуры с приятными цветами',
        version: '1.20.1',
        style: 'realistic',
        size: '92 MB',
        resolution: '64x',
        image: 'https://via.placeholder.com/300x200/2563eb/ffffff?text=Soartex',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/soartex',
        tags: ['Плавный', '64x', 'Мягкий'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        isNew: false
    },
    {
        id: 8,
        title: 'Dokucraft',
        description: 'Классический фэнтези стиль с богатой историей',
        version: '1.19.2',
        style: 'fantasy',
        size: '56 MB',
        resolution: '32x',
        image: 'https://via.placeholder.com/300x200/3b82f6/ffffff?text=Dokucraft',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/dokucraft',
        tags: ['Фэнтези', '32x', 'Классический'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        isNew: false
    }
];

// Current page state
let currentPage = 1;
let itemsPerPage = 8;
let filteredPacks = [...packsData];
let currentFilters = {
    search: '',
    version: '',
    style: '',
    sort: 'popular'
};

// Initialize resource packs page
document.addEventListener('DOMContentLoaded', function() {
    initializePacksPage();
    loadPacks();
    initializeFilters();
});

function initializePacksPage() {
    // Add event listeners for filters
    const searchInput = document.getElementById('packSearchInput');
    const versionFilter = document.getElementById('versionFilter');
    const styleFilter = document.getElementById('styleFilter');
    const sortFilter = document.getElementById('sortFilter');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(handlePackSearch, 300));
    }

    if (versionFilter) {
        versionFilter.addEventListener('change', handleFilterChange);
    }

    if (styleFilter) {
        styleFilter.addEventListener('change', handleFilterChange);
    }

    if (sortFilter) {
        sortFilter.addEventListener('change', handleFilterChange);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePacks);
    }
}

function initializeFilters() {
    // Set default values
    currentFilters = {
        search: '',
        version: '',
        style: '',
        sort: 'popular'
    };
}

function handlePackSearch(e) {
    currentFilters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    currentFilters[filterType] = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredPacks = packsData.filter(pack => {
        // Search filter
        if (currentFilters.search) {
            const searchMatch = pack.title.toLowerCase().includes(currentFilters.search) ||
                               pack.description.toLowerCase().includes(currentFilters.search) ||
                               pack.tags.some(tag => tag.toLowerCase().includes(currentFilters.search));
            if (!searchMatch) return false;
        }

        // Version filter
        if (currentFilters.version && pack.version !== currentFilters.version) {
            return false;
        }

        // Style filter
        if (currentFilters.style && pack.style !== currentFilters.style) {
            return false;
        }

        return true;
    });

    // Sort packs
    sortPacks();

    // Reset to first page
    currentPage = 1;
    loadPacks();
}

function sortPacks() {
    switch (currentFilters.sort) {
        case 'popular':
            filteredPacks.sort((a, b) => b.isNew - a.isNew);
            break;
        case 'newest':
            filteredPacks.sort((a, b) => b.isNew - a.isNew);
            break;
        case 'name':
            filteredPacks.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'downloads':
            filteredPacks.sort((a, b) => b.isNew - a.isNew);
            break;
        case 'rating':
            filteredPacks.sort((a, b) => b.isNew - a.isNew);
            break;
    }
}

function loadPacks() {
    const packsGrid = document.getElementById('packsGrid');
    if (!packsGrid) return;

    // Clear existing packs
    packsGrid.innerHTML = '';

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const packsToShow = filteredPacks.slice(startIndex, endIndex);

    if (packsToShow.length === 0) {
        showEmptyState();
        return;
    }

    // Create pack cards
    packsToShow.forEach(pack => {
        const packCard = createPackCard(pack);
        packsGrid.appendChild(packCard);
    });

    // Update load more button
    updateLoadMoreButton();
}

function createPackCard(pack) {
    const card = document.createElement('div');
    card.className = 'pack-card fade-in';

    // Add special classes
    if (pack.isNew) card.classList.add('new');
    if (pack.resolution === '256x') card.classList.add('high-res');
    if (pack.tags.includes('PBR')) card.classList.add('pbr');

    card.innerHTML = `
        ${pack.isNew ? '<div class="new-badge">Новый</div>' : ''}
        <div class="pack-resolution">${pack.resolution}</div>
        <div class="pack-size">${pack.size}</div>

        <div class="pack-image">
            <img src="${pack.image}" alt="${pack.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <i class="fas fa-palette" style="display: none;"></i>
        </div>

        <h3 class="pack-title">${pack.title}</h3>
        <p class="pack-description">${pack.description}</p>

        <div class="pack-meta">
            <span class="pack-version">${pack.version}</span>
            <span class="pack-style">${getStyleName(pack.style)}</span>
        </div>

        <div class="pack-tags">
            ${pack.tags.map(tag => `<span class="pack-tag">${tag}</span>`).join('')}
        </div>

        <div class="pack-features">
            <h4>Особенности:</h4>
            ${pack.features.map(feature => `
                <div class="feature-item">
                    <i class="fas fa-check"></i>
                    ${feature}
                </div>
            `).join('')}
        </div>

        <div class="pack-actions">
            <button class="download-btn" onclick="handleDownload(${pack.id}, 'pack', '${pack.downloadUrl}', '${pack.affiliateUrl}')">
                <i class="fas fa-download"></i>
                Скачать
            </button>
            <button class="preview-btn" onclick="showPackPreview(${pack.id})">
                <i class="fas fa-eye"></i>
            </button>
            <button class="favorite-btn" data-favorite="pack_${pack.id}" onclick="toggleFavorite(${pack.id}, 'pack')">
                <i class="fas fa-heart"></i>
            </button>
        </div>
    `;

    return card;
}

function getStyleName(style) {
    const styles = {
        'realistic': 'Реалистичные',
        'cartoon': 'Мультяшные',
        'fantasy': 'Фэнтези',
        'medieval': 'Средневековые',
        'modern': 'Современные'
    };
    return styles[style] || style;
}

function showEmptyState() {
    const packsGrid = document.getElementById('packsGrid');
    if (!packsGrid) return;

    packsGrid.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>Ресурс паки не найдены</h3>
            <p>Попробуйте изменить параметры поиска или фильтры</p>
        </div>
    `;
}

function loadMorePacks() {
    currentPage++;
    const packsGrid = document.getElementById('packsGrid');
    if (!packsGrid) return;

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const packsToShow = filteredPacks.slice(startIndex, endIndex);

    // Add new packs with animation
    packsToShow.forEach((pack, index) => {
        setTimeout(() => {
            const packCard = createPackCard(pack);
            packsGrid.appendChild(packCard);
        }, index * 100);
    });

    // Update load more button
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const totalPages = Math.ceil(filteredPacks.length / itemsPerPage);

    if (currentPage >= totalPages) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Pack preview functionality
function showPackPreview(packId) {
    const pack = packsData.find(p => p.id === packId);
    if (!pack) return;

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'preview-modal active';
    modal.innerHTML = `
        <div class="preview-content">
            <div class="preview-header">
                <h3 class="preview-title">${pack.title}</h3>
                <button class="preview-close">&times;</button>
            </div>
            <div class="preview-body">
                <div class="preview-gallery">
                    <div class="preview-image">
                        <img src="${pack.image}" alt="${pack.title}">
                    </div>
                    <div class="preview-image">
                        <img src="https://via.placeholder.com/200x150/2563eb/ffffff?text=Preview+1" alt="Preview 1">
                    </div>
                    <div class="preview-image">
                        <img src="https://via.placeholder.com/200x150/3b82f6/ffffff?text=Preview+2" alt="Preview 2">
                    </div>
                </div>
                <div class="preview-info">
                    <div class="info-item">
                        <div class="info-label">Версия</div>
                        <div class="info-value">${pack.version}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Стиль</div>
                        <div class="info-value">${getStyleName(pack.style)}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Разрешение</div>
                        <div class="info-value">${pack.resolution}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Размер</div>
                        <div class="info-value">${pack.size}</div>
                    </div>
                </div>
                <div class="preview-description">
                    <h4>Описание:</h4>
                    <p>${pack.description}</p>
                </div>
                <div class="preview-actions">
                    <button class="download-btn" onclick="handleDownload(${pack.id}, 'pack', '${pack.downloadUrl}', '${pack.affiliateUrl}')">
                        <i class="fas fa-download"></i>
                        Скачать пак
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
window.showPackPreview = showPackPreview;