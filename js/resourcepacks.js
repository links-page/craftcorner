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
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996185_shader1.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996362_1-5.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996441_1-6.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996381_1-7.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996425_1-8.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996439_1-10.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-03/1615996383_1-11.jpg'
        ]
    },
    {
        id: 2,
        code: 'FLBR',
        title: 'FullBright',
        description: 'Мультяшный стиль с яркими цветами и детализированными текстурами',
        version: '1.21.4',
        style: 'realistic',
        size: '250 KB',
        resolution: '16x',
        image: 'https://ru-minecraft.ru/uploads/posts/2022-02/1645176991_15108983_l.jpg',
        downloadUrl: 'https://vexfile.com/download/SKCrFrI0Y2',
        affiliateUrl: 'https://vexfile.com/download/SKCrFrI0Y2',
        tags: ['Яркий'],
        features: ['Освещение'],
        previews: [
            'https://ru-minecraft.ru/uploads/posts/2022-02/1645177021_15108984_l.jpg',
            'https://ru-minecraft.ru/uploads/posts/2022-02/1645176991_15108983_l.jpg'
        ]
    },
    {
        id: 3,
        code: 'FRESH',
        title: 'Fresh Animations',
        description: 'Красивые и реалистичные анимации для игровых мобов, теперь у них могут быть эмоции, они будут реалистично ходить и двигать конечностями, а при условии, что это реализовано при помощи текстурпака - выглядит это просто потрясающе.',
        version: '1.21+',
        style: 'realistic',
        size: '504 KB',
        resolution: '16x',
        image: 'https://media.forgecdn.net/attachments/812/419/fa1.png',
        downloadUrl: 'https://vexfile.com/download/8PFcEQag0Y',
        affiliateUrl: 'https://vexfile.com/download/8PFcEQag0Y',
        tags: ['Реалистичный', '16x'],
        features: ['Текстуры мобов'],
        previews: [
            'https://ru-minecraft.ru/uploads/posts/2021-04/1619015733_ravager2.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-04/1619015700_2020-12-25_15.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-04/1619015723_creeper2.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-04/1619015724_golem.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-04/1619015709_other1.jpg',
            'https://ru-minecraft.ru/uploads/posts/2021-04/1619015681_pillagers.jpg'
        ]
    },
    {
        id: 4,
        code: 'AMC',
        title: "Arcle's Medieval Containers",
        description: 'Этот набор придает (почти) всем интерактивным блокам новый средневековый вид! Почти все блоки были реконструированы с использованием реальных объектов средневековья.',
        version: '1.16+',
        style: 'realistic',
        size: '3.46 MB',
        resolution: '16x',
        image: 'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2023/766/16547988-untitled_xl.webp',
        downloadUrl: 'https://vexfile.com/download/KERAwoldJZ',
        affiliateUrl: 'https://vexfile.com/download/KERAwoldJZ',
        tags: ['Фэнтези', '16x', 'Средневековье'],
        features: ['Все блоки'],
        previews: [
            'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2024/199/18253691-min_xl.webp',
            'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2024/199/18253603-min_xl.webp',
            'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2024/199/18253609-min_xl.webp',
            'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2024/199/18253610-min_xl.webp'
        ]
    },
    {
        id: 5,
        code: 'RDTRS',
        title: 'Round Trees',
        description: 'В реальной жизни деревья круглые, почему их нет в Майнкрафте?',
        version: '1.19+',
        style: 'realistic',
        size: '140 KB',
        resolution: '16x',
        image: 'https://minecraft-inside.ru/uploads/files/2020-01/Round_Trees.png',
        downloadUrl: 'https://vexfile.com/download/vMZ9in0hLD',
        affiliateUrl: 'https://vexfile.com/download/vMZ9in0hLD',
        tags: ['16x', 'Минимализм'],
        features: ['Четкие линии'],
        previews: [
            'https://cdn.modrinth.com/data/XlqZTP4W/images/2d0dcc54e2e7ccc4cfbe02c36b802614b46884e8.png',
            'https://cdn.modrinth.com/data/XlqZTP4W/images/f10d4655129192828f322b3491626e5a5d7162ac.png',
            'https://cdn.modrinth.com/data/XlqZTP4W/images/522a8037e590413efa7311ba75cc9b26019629bd.png'
        ]
    },
    {
        id: 6,
        code: 'FAITHFUL',
        title: 'Faithful 64x',
        description: 'Более детализированные текстуры с четырехкратным разрешением!',
        version: '1.21+',
        style: 'realistic',
        size: '10 MB',
        resolution: '64x',
        image: 'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2021/824/14552763-faithful-x-resource-pack_m.jpg',
        downloadUrl: 'https://vexfile.com/download/KsVM93Zp5I',
        affiliateUrl: 'https://vexfile.com/download/KsVM93Zp5I',
        tags: ['Средневековье', '64x', 'Исторический'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        previews: [
            'https://database.faithfulpack.net/images/website/posts/64x/B7.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mkSAUb8fUQdJ6KkvafkkckS39YP5m5Mq2Q&s',
            'https://sun9-60.userapi.com/impg/dWXToCzouN3UtFPtMQlYPf_zR3a40rk8qcWasA/LhyVtjFcZRA.jpg?size=1019x723&quality=96&sign=4e941dbcfeea6eb72578fd57606c416b&type=album'
        ]
    },
    {
        id: 7,
        code: 'BBM',
        title: "Blue's Better Monsters",
        description: 'Красивые реалистичные текстуры мобов',
        version: '1.19.3+',
        style: 'realistic',
        size: '692 KB',
        resolution: '64x',
        image: 'https://media.forgecdn.net/attachments/1067/253/witchrenderbbm4.png',
        downloadUrl: 'https://vexfile.com/download/Ug82GJkXGB',
        affiliateUrl: 'https://vexfile.com/download/Ug82GJkXGB',
        tags: ['Плавный', '64x', 'Реалистичный'],
        features: ['Все мобы'],
        previews: [
            'https://media.forgecdn.net/attachments/877/958/pot3.png',
            'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2024/526/18132674_xl.webp',
            'https://static.planetminecraft.com/files/image/minecraft/texture-pack/2024/526/17787577-zombiecreeper_xl.webp',
            'https://media.forgecdn.net/attachments/865/194/zombietransform.png',
            'https://media.forgecdn.net/attachments/927/387/dangle.png',
            'https://media.forgecdn.net/attachments/865/143/husk.png'
        ]
    },
    {
        id: 8,
        code: 'PIX',
        title: 'Pixalette',
        description: 'Простой ресурспак в пиксельном стиле с яркой палитрой цветов',
        version: '1.18+',
        style: 'fantasy',
        size: '197 KB',
        resolution: '16x',
        image: 'https://media.forgecdn.net/attachments/516/423/sprites_portfolio.png',
        downloadUrl: 'https://vexfile.com/download/l7euE72Vzc',
        affiliateUrl: 'https://vexfile.com/download/l7euE72Vzc',
        tags: ['Фэнтези', '16x', 'Классический'],
        features: ['Все блоки', 'Все предметы', 'Интерфейс'],
        previews: [
            'https://i.imgur.com/0r1K4SP.png',
            'https://i.imgur.com/vyYLkQL.png',
            'https://media.forgecdn.net/attachments/516/460/2022-11-13_16.png',
            'https://media.forgecdn.net/attachments/519/363/2022-11-13_16.png',
            'https://media.forgecdn.net/attachments/546/699/2022-11-26_09.png'
        ]
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
