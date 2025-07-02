// Resource Packs page JavaScript

// Sample resource packs data
const packsData = [
    {
        id: 1,
        code: 'PATR',
        title: 'Patrix HD',
        description: 'Фотореалистичный пак, с невероятной природой, объемными текстурами, правильными отражениями, совмещенными и разнообразными текстурами',
        version: '1.21.5',
        style: 'realistic',
        size: '64 MB',
        resolution: '32x',
        image: 'https://ru-minecraft.ru/uploads/posts/2021-03/1615996561_1-22.jpg',
        downloadUrl: 'https://vexfile.com/download/NfjdHiLKX8',
        affiliateUrl: 'https://vexfile.com/download/NfjdHiLKX8',
        tags: ['Классический', '32x', 'Ваннила'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        previews: [
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996561_1-22.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996561_1-22.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996561_1-22.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996561_1-22.jpg'
        ]
    },
    {
        id: 2,
        code: 'SPHAX',
        title: 'Sphax PureBDCraft',
        description: 'Мультяшный стиль с яркими цветами и детализированными текстурами',
        version: '1.20.1',
        style: 'cartoon',
        size: '128 MB',
        resolution: '128x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNwaGF4PC90ZXh0Pjwvc3ZnPg==',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/sphax',
        tags: ['Мультяшный', '128x', 'Яркий'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс', 'Анимации'],
        previews: [
            'https://example.com/sphax-preview1.jpg'
        ]
    },
    {
        id: 3,
        code: 'REALISTICO',
        title: 'Realistico',
        description: 'Фотореалистичные текстуры для максимальной реалистичности',
        version: '1.19.2',
        style: 'realistic',
        size: '256 MB',
        resolution: '256x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlJlYWxpc3RpY288L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/realistico',
        tags: ['Реалистичный', '256x'],
        features: ['Все блоки', 'PBR текстуры', 'Нормал мапы']
    },
    {
        id: 4,
        code: 'CHROMA',
        title: 'Chroma Hills',
        description: 'Средневековый фэнтези стиль с богатыми деталями',
        version: '1.20.1',
        style: 'fantasy',
        size: '89 MB',
        resolution: '64x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNocm9tYTwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/chroma',
        tags: ['Фэнтези', '64x', 'Средневековье'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс']
    },
    {
        id: 5,
        code: 'MODERNHD',
        title: 'Modern HD',
        description: 'Современный минималистичный дизайн с четкими линиями',
        version: '1.20.1',
        style: 'modern',
        size: '67 MB',
        resolution: '64x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1vZGVybjwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/modern',
        tags: ['Современный', '64x', 'Минимализм'],
        features: ['Все блоки', 'Интерфейс', 'Четкие линии']
    },
    {
        id: 6,
        code: 'MEDIEVAL',
        title: 'Medieval',
        description: 'Аутентичные средневековые текстуры для исторических серверов',
        version: '1.19.2',
        style: 'medieval',
        size: '78 MB',
        resolution: '64x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk1lZGlldmFsPC90ZXh0Pjwvc3ZnPg==',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/medieval',
        tags: ['Средневековье', '64x', 'Исторический'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс']
    },
    {
        id: 7,
        code: 'SOARTEX',
        title: 'Soartex Fanver',
        description: 'Плавные и мягкие текстуры с приятными цветами',
        version: '1.20.1',
        style: 'realistic',
        size: '92 MB',
        resolution: '64x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlNvYXJ0ZXg8L3RleHQ+PC9zdmc+',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/soartex',
        tags: ['Плавный', '64x', 'Мягкий'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс']
    },
    {
        id: 8,
        code: 'DOKUCRAFT',
        title: 'Dokucraft',
        description: 'Классический фэнтези стиль с богатой историей',
        version: '1.19.2',
        style: 'fantasy',
        size: '56 MB',
        resolution: '32x',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkRva3VjcmFmdDwvdGV4dD48L3N2Zz4=',
        downloadUrl: '#',
        affiliateUrl: 'https://example.com/affiliate/dokucraft',
        tags: ['Фэнтези', '32x', 'Классический'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс']
    }
];

// Current page state
let packsCurrentPage = 1;
let packsItemsPerPage = 8;
let filteredPacks = [...packsData];
let packsCurrentFilters = {
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

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMorePacks);
    }
}

function initializeFilters() {
    // Set default values
    packsCurrentFilters = {
        search: '',
        version: '',
        style: ''
    };
}

function handlePackSearch(e) {
    packsCurrentFilters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    packsCurrentFilters[filterType] = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredPacks = packsData.filter(pack => {
        // Search filter
        if (packsCurrentFilters.search) {
            const searchMatch = pack.title.toLowerCase().includes(packsCurrentFilters.search) ||
                               pack.description.toLowerCase().includes(packsCurrentFilters.search) ||
                               pack.code.toLowerCase().includes(packsCurrentFilters.search) ||
                               pack.tags.some(tag => tag.toLowerCase().includes(packsCurrentFilters.search));
            if (!searchMatch) return false;
        }

        // Version filter
        if (packsCurrentFilters.version && pack.version !== packsCurrentFilters.version) {
            return false;
        }

        // Style filter
        if (packsCurrentFilters.style && pack.style !== packsCurrentFilters.style) {
            return false;
        }

        return true;
    });

    // Reset to first page
    packsCurrentPage = 1;
    loadPacks();
}

function loadPacks() {
    const packsGrid = document.getElementById('packsGrid');
    if (!packsGrid) return;

    // Clear existing packs
    packsGrid.innerHTML = '';

    // Calculate pagination
    const startIndex = (packsCurrentPage - 1) * packsItemsPerPage;
    const endIndex = startIndex + packsItemsPerPage;
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
    if (pack.resolution === '256x') card.classList.add('high-res');
    if (pack.tags.includes('PBR')) card.classList.add('pbr');

    card.innerHTML = `
        <div class="pack-code">${pack.code}</div>
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
    packsCurrentPage++;
    const packsGrid = document.getElementById('packsGrid');
    if (!packsGrid) return;

    // Calculate pagination
    const startIndex = (packsCurrentPage - 1) * packsItemsPerPage;
    const endIndex = startIndex + packsItemsPerPage;
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

    const totalPages = Math.ceil(filteredPacks.length / packsItemsPerPage);

    if (packsCurrentPage >= totalPages) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Pack preview functionality
function showPackPreview(packId) {
    const pack = packsData.find(p => p.id === packId);
    if (!pack) return;

    // Генерируем HTML для превью
    const previewsHtml = (pack.previews && pack.previews.length)
        ? pack.previews.map(url => `
            <div class="preview-image">
                <img src="${url}" alt="Preview">
            </div>
        `).join('')
        : `<div class="preview-image"><img src="${pack.image}" alt="${pack.title}"></div>`;

    // Создаём модалку
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
                    ${previewsHtml}
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
