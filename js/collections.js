// Collections page JavaScript

// Sample collections data
const collectionsData = [
    {
        id: 1,
        code: 'LOST',
        title: 'Lost Souls',
        description: 'Здесь ты можешь получить доступ к эксклюзивной сборке Lost Souls на версии 1.20.1! Это сборка, где фэнтези и магия переплетаются с ваниллой-плюс, а также есть моды как с Forge, так и с Fabric.Полный перевод на русский.Отличная оптимизация — сборка летает даже на слабых ПК!',
        version: '1.20.1',
        type: 'adventure',
        size: '1.6 GB',
        modCount: 286,
        image: 'https://nztcdn.com/files/4f5f1c55-c40d-48dc-bbb3-cfe6c8a0d9ce.webp',
        downloadUrl: 'https://vexfile.com/download/NMXOEPjVaB',
        affiliateUrl: 'https://vexfile.com/download/NMXOEPjVaB',
        mods: ['BetterEnd', 'LS Cataclysm', 'The Twilight Forest', 'Create', 'Quark'],
        requirements: ['Forge', '1.20.1', '6GB RAM'],
        installation: [
            'ВАЖНО: В связи с тем, что сборка является премиальной (платной), для её бесплатного скачивания на сайте придётся выполнить минимально затратные по времени и усилиям действия. Надеемся на Ваше понимание. Мы тоже хотим кушать🥺',
            'Скачиваем 1.20.1',
            'Устанавливаем Forge 47.3.0',
            'Полностью прогружаем игру ( Заходим в игру чтобы потом все файлы перекинуть )',
            'Перекидываем файлы .minecraft из папки в корень игры, с заменой если нужно',
            'Также крайне рекомендуется прочесть все инструкции в текстовых документах скачанного архива'
        ]
    },
    {
        id: 2,
        code: 'EDNM',
        title: 'Edenium',
        description: 'Edenium - сборка с большим количеством квестов, системой прокачки и интересными механиками. Вы можете выбрать класс за который будете играть и сражаться с огромным количеством монстров. А система квестов поможет вам полностью разобраться в модах, а также узнать о лоре сборки...',
        version: '1.19.2',
        type: 'adventure',
        size: '0.85 GB',
        modCount: 197,
        image: 'https://minecraft-inside.ru/uploads/files/2024-05/6658e32bb2f40.png',
        downloadUrl: 'https://vexfile.com/download/wC9w37yScu',
        affiliateUrl: 'https://vexfile.com/download/wC9w37yScu',
        mods: ['LS Cataclysm', 'The Twilight Forest', 'Ice and Fire', 'The Undergarden', 'Born in Chaos'],
        requirements: ['Forge', '1.19.2', '6GB RAM'],
        installation: [
            'Скачайте и установите Minecraft Forge',
            'Скачайте сборку',
            'Распакуй файл в .minecraft'
        ]
    },
    {
        id: 3,
        code: 'PROM',
        title: 'Prominence II RPG: Hasturian Era - огромная сборка',
        description: 'Сборка, полностью основанная на модах Create и автоматизации',
        version: '1.20.1',
        type: 'tech',
        size: '0.9 GB',
        modCount: 412,
        image: 'https://ru-minecraft.ru/uploads/posts/2024-11/medium/1732575691_promlogo-54.jpg',
        downloadUrl: 'https://vexfile.com/download/R5w0uM0fKp',
        affiliateUrl: 'https://vexfile.com/download/R5w0uM0fKp',
        mods: ['Create', 'Applied Energistics 2', 'BetterEnd', 'Botania', 'DungeonsArise'],
        requirements: ['Forge', '1.20.1', '10GB RAM'],
        installation: [
            'Скачайте файл и распакуйте его. (достаньте папки из архива)',
            'Крайне рекомендуется удалить все свои моды, а также очистить папки .minecraft/config',
            'Установите fabric-1.20.1-0.16.5 (можно попробовать новее)',
            'Скопируйте все содержимое архива (папки mods, scripts, config итд ) в .minecraft',
            'Запустите лаунчер и выдели игре 9.5+Gb оперативной памяти.',
            'В лаунчере запустите версию fabric-1.20.1-0.16.5'
        ]
    },
    {
        id: 4,
        code: 'IMRT',
        title: 'Immortal 1.4',
        description: 'уникальная сборка с проработанным сюжетом, наполненная тайнами и элементами RPG. Действия игры разворачиваются в Новом мире, куда попадает Избранный, чтобы раскрыть его тайны и найти способ обрести Бессмертие.',
        version: '1.20.1',
        type: 'adventure',
        size: '0.6 GB',
        modCount: 153,
        image: 'https://ru-minecraft.ru/uploads/posts/2024-09/1726759561_maxresdefault.jpg',
        downloadUrl: 'https://vexfile.com/download/xarfTqmcvu',
        affiliateUrl: 'https://vexfile.com/download/xarfTqmcvu',
        mods: ["LS Cataclysm", 'STRAYED FATES: Forsaken', "Mowzie’s Mobs", 'Create', 'Dungeons and Taverns'],
        requirements: ['Forge', '4GB RAM', '1.20.1'],
        installation: [
            'Скачайте файл и распакуйте его. (достаньте папки из архива)',
            'Крайне рекомендуется удалить все свои моды, а также очистить папки .minecraft/config',
            'Установите forge-1.20.1-47.2.30',
            'Скопируйте все содержимое архива (папки mods, scripts, config итд ) в .minecraft',
            'В лаунчере запускайте версию forge-1.20.1-47.2.30',
            'Также крайне рекомендуется прочесть все инструкции в текстовых документах скачанного архива'
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
            'ВАЖНО: В связи с тем, что сборка является премиальной (платной), для её бесплатного скачивания на сайте придётся выполнить минимально затратные по времени и усилиям действия. Надеемся на Ваше понимание. Мы тоже хотим кушать🥺',
            'Желательно использовать Legacy Laucnher, т.к. на другом лаунчере сборка, скорее всего, не запустится',
            'Скачайте файл и распакуйте его. (достаньте папки из архива)',
            'Крайне рекомендуется удалить все свои моды, а также очистить папки .minecraft/config и .minecraft/scripts',
            'Установите fabric-loader-0.14.25 для 1.20.1',
            'Скопируйте все содержимое архива (папки mods, scripts, config итд ) в .minecraft',
            'В лаунчере запускайте версию fabric-loader-0.14.25-1.20.1'
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
        mods: ['Create', 'Solo Leveling: Reawakening', 'DungeonsArise', 'Quark', "LS Cataclysm"],
        requirements: ['Forge', '6GB RAM', '1.20.1'],
        installation: [
            'Скачайте Forge для версии 1.20.1',
            'Скачайте сборку по ссылке ниже',
            'Настройте параметры запуска'
        ]
    },
{
        id: 7,
        code: 'ECLP',
        title: 'Затмение',
        description: 'Тёмные силы прорастают из всех закоулков и сознаний людей. Мир на грани уничтожения. И только вы можете изменить уготованную судьбу! Техно-магическая сборка "Затмение" позволяет насладиться уникальными игровыми механиками, изучить просторы открывающегося мира и покорить космос.',
        version: '1.16.5',
        type: 'adventure',
        size: '0.9 GB',
        modCount: 108,
        image: 'https://minecraft-inside.ru/uploads/files/2022-12/63935b0b81a31.jpg',
        downloadUrl: 'https://vexfile.com/download/nv4KlafjZX',
        affiliateUrl: 'https://vexfile.com/download/nv4KlafjZX',
        mods: ['Industrial Foregoing', 'Immersive Engineering', 'Aquamirae ', 'Quark'],
        requirements: ['Forge', '6GB RAM', '1.16.5'],
        installation: [
            'Скачайте Forge для версии 1.16.5',
            'Скачайте сборку по ссылке ниже',
            'Настройте параметры запуска'
        ]
    },
    {
        id: 8,
        code: 'ENDR',
        title: 'Endless Rise',
        description: 'Endless Rise - сборка в которой Вы окунётесь в развитие. Вам предстоит пройти множество эпох, чтобы дойти до полёта в Космос! Вы начнёте с примитивных механик, создавая различные рабочие столы под разные предметы и борясь за своё выживание, а дойдёте до полёта в Космос, подчиняя себе всю Вселенную! Путешествуйте по мирам, изучайте артефакты, стройте различные механизмы и автокрафты. Все моды Endless Rise связаны между собой новыми крафтами и квестами, а также кастомными предметами',
        version: '1.16.5',
        type: 'adventure',
        size: '0.38 GB',
        modCount: 227,
        image: 'https://minecraft-inside.ru/uploads/files/2024-07/154410_6699388506116.png',
        downloadUrl: 'https://vexfile.com/download/m8ViXy6UQD',
        affiliateUrl: 'https://vexfile.com/download/m8ViXy6UQD',
        mods: ['BetterEnd', 'Create', 'Tinkers Construct', 'Quark', "Immersive Engineering", 'Applied Energistics 2'],
        requirements: ['Forge', '4GB RAM', '1.16.5'],
        installation: [
            'Скачайте Forge для версии 1.16.5',
            'Скачайте сборку по ссылке ниже',
            'Настройте параметры запуска'
        ]
    },
    {
        id: 9,
        code: 'LAST',
        title: 'Last Chance',
        description: 'В сборке "Последний шанс" вас ждут уникальные механики, оригинальное меню и продуманная система квестов. Сражайтесь с необычными боссами, исследуйте захватывающие данжи, создавайте предметы с помощью переработанных крафтов и наслаждайтесь удивительной генерацией мира. ',
        version: '1.20.1',
        type: 'adventure',
        size: '1.61 GB',
        modCount: 191,
        image: 'https://minecraft-inside.ru/uploads/files/2025-06/684b372b47bd9.png',
        downloadUrl: 'https://vexfile.com/download/hvNO838cky',
        affiliateUrl: 'https://vexfile.com/download/hvNO838cky',
        mods: ['Create', 'Tinkers Construct', 'Botania', 'Quark', "LS Cataclysm"],
        requirements: ['Forge', '8GB RAM', '1.20.1'],
        installation: [
            'Скачайте Forge для версии 1.20.1',
            'Скачайте сборку по ссылке ниже',
            'Настройте параметры запуска'
        ]
    },
    {
        id: 10,
        code: 'MDVL',
        title: 'Medieval Adventure',
        description: 'Сборка с опорой на фентези и средневековье! Погрузись в мир полный приключений с головой! Путешествуй, убивай циклопов, гоблинов, великанов, приручи своего грифона, брось вызов матери драконов и вырасти своего свирепого ящера!',
        version: '1.16.5',
        type: 'adventure',
        size: '0.38 GB',
        modCount: 87,
        image: 'https://ru-minecraft.ru/uploads/posts/2022-07/1657265001_fhyumrw8dyvsfaslhtvjxdvx2xqsi94d0-hmoz_elfrwtwh-1-aacl0rlv4qsmhb4lgvgtftj5wuvgorvsh_krge.jpg',
        downloadUrl: 'https://vexfile.com/download/lViW3FUyXb',
        affiliateUrl: 'https://vexfile.com/download/lViW3FUyXb',
        mods: ['Ice and Fire', 'Create', 'Immersive Engineering', 'Medieval Craft', "Greek Fantasy"],
        requirements: ['Forge', '6GB RAM', '1.16.5'],
        installation: [
            'Скачайте файл и распакуйте его (достаньте папки и файлы из архива)',
            'Крайне рекомендуется очистить содержимое папки .minecraft',
            'Установите 1.16.5-36.2.34 версию Minecraft Forge (установщик есть в архиве)',
            'Скопируйте всё содержимое архива в .minecraft',
            'Не устанавливай Optifine, он уже есть в папке mods',
            'Запустите лаунчер и выделите игре 6+Gb оперативной памяти',
            'В лаунчере выберите версию forge-1.16.5-36.2.34'
        ]
    },
    {
        id: 11,
        code: 'CELS',
        title: 'Celestia',
        description: 'Celestia - необычная сборка! Тут ты можешь стать кем угодно: магом, заклинателем, воином, лучником, паладином, некромантом или обычным фермером',
        version: '1.20.1',
        type: 'adventure',
        size: '1.76 GB',
        modCount: 411,
        image: 'https://images.boosty.to/image/8940763f-81ab-4c05-bb04-52b0b89a23a3?change_time=1743897870&mw=1150',
        downloadUrl: 'https://vexfile.com/download/evrwNw17pj',
        affiliateUrl: 'https://vexfile.com/download/evrwNw17pj',
        mods: ['BetterEnd', 'Celestialrealm', 'Create', 'Ice and Fire', 'Malus'],
        requirements: ['Fabric', '1.20.1', '8GB RAM'],
        installation: [
            'ВАЖНО: В связи с тем, что сборка является премиальной (платной), для её бесплатного скачивания на сайте придётся выполнить минимально затратные по времени и усилиям действия. Надеемся на Ваше понимание. Мы тоже хотим кушать🥺',
            'Скачайте версию которая указана в архиве',
            'Переместите файлы архива с заменой в папку версии',
        ]
    },
    {
        id: 12,
        code: 'HORZ',
        title: 'Horizon',
        description: 'Horizon — это RPG-сборка, включающая в себя более 200 модификаций, созданная для качественного приключенческого RPG. Она предлагает новую систему боя и магии, десятки уникальных заданий, тщательно настроенные атрибуты и рецепты, а также глубокий лор. Покоряйте горизонт в одиночку или вместе с друзьями!',
        version: '1.20.1',
        type: 'adventure',
        size: '0,63 GB',
        modCount: 286,
        image: 'https://minecraft-inside.ru/uploads/files/2025-03/67c2a9891b7b1.png',
        downloadUrl: 'hhttps://vexfile.com/download/Bd7FOPsq5Q',
        affiliateUrl: 'https://vexfile.com/download/Bd7FOPsq5Q',
        mods: ['BetterEnd', 'Paradise-Lost', 'paladins', 'Aquamirae'],
        requirements: ['Fabric', '1.20.1', '6GB RAM'],
        installation: [
            'Скачайте и установите Fabric',
            'Скачайте сборку по ссылке ниже',
            'Распакуйте файлы в .minecraft'
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
