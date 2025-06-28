// Simple Global Search for MineSite

console.log('Global search script loaded');

// Global search results
let globalSearchResults = {
    mods: [],
    packs: [],
    collections: []
};

// Initialize global search
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing search');
    setTimeout(initializeGlobalSearch, 100);
});

function initializeGlobalSearch() {
    console.log('Initializing global search...');

    const searchInput = document.getElementById('searchInput');
    console.log('Search input:', searchInput);

    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase().trim();
            console.log('Search input:', query);

            if (query.length >= 2) {
                performSearch(query);
            } else {
                hideResults();
            }
        });

        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    performSearch(query);
                }
            }
        });

        console.log('Search event listeners added');
    } else {
        console.log('Search input not found!');
    }
}

function checkDataAvailability() {
    try {
        const modsAvailable = typeof modsData !== 'undefined' && Array.isArray(modsData) && modsData.length > 0;
        const packsAvailable = typeof packsData !== 'undefined' && Array.isArray(packsData) && packsData.length > 0;
        const collectionsAvailable = typeof collectionsData !== 'undefined' && Array.isArray(collectionsData) && collectionsData.length > 0;

        console.log('=== DETAILED DATA AVAILABILITY CHECK ===');
        console.log('modsData type:', typeof modsData);
        console.log('modsData is array:', Array.isArray(modsData));
        console.log('modsData value:', modsData);
        console.log('modsData length:', typeof modsData !== 'undefined' ? modsData.length : 'undefined');

        console.log('packsData type:', typeof packsData);
        console.log('packsData is array:', Array.isArray(packsData));
        console.log('packsData value:', packsData);
        console.log('packsData length:', typeof packsData !== 'undefined' ? packsData.length : 'undefined');

        console.log('collectionsData type:', typeof collectionsData);
        console.log('collectionsData is array:', Array.isArray(collectionsData));
        console.log('collectionsData value:', collectionsData);
        console.log('collectionsData length:', typeof collectionsData !== 'undefined' ? collectionsData.length : 'undefined');

        console.log('=== SUMMARY ===');
        console.log('- Mods:', modsAvailable ? `${modsData.length} items` : 'Not available');
        console.log('- Packs:', packsAvailable ? `${packsData.length} items` : 'Not available');
        console.log('- Collections:', collectionsAvailable ? `${collectionsData.length} items` : 'Not available');

        return { modsAvailable, packsAvailable, collectionsAvailable };
    } catch (error) {
        console.error('Error checking data availability:', error);
        return { modsAvailable: false, packsAvailable: false, collectionsAvailable: false };
    }
}

function performSearch(query) {
    console.log('Performing search for:', query);

    // Clear previous results
    globalSearchResults = { mods: [], packs: [], collections: [] };

    // Debug: Check data availability
    console.log('=== DATA AVAILABILITY CHECK ===');
    const dataStatus = checkDataAvailability();

    try {
        // Search in mods
        if (dataStatus.modsAvailable) {
            globalSearchResults.mods = modsData.filter(mod =>
                mod.title.toLowerCase().includes(query) ||
                mod.description.toLowerCase().includes(query) ||
                mod.code.toLowerCase().includes(query)
            );
            console.log('Found mods:', globalSearchResults.mods.length);
        } else {
            console.log('Mods data not available or empty');
        }

        // Search in packs
        if (dataStatus.packsAvailable) {
            globalSearchResults.packs = packsData.filter(pack =>
                pack.title.toLowerCase().includes(query) ||
                pack.description.toLowerCase().includes(query) ||
                pack.code.toLowerCase().includes(query)
            );
            console.log('Found packs:', globalSearchResults.packs.length);
        } else {
            console.log('Packs data not available or empty');
        }

        // Search in collections
        if (dataStatus.collectionsAvailable) {
            globalSearchResults.collections = collectionsData.filter(collection =>
                collection.title.toLowerCase().includes(query) ||
                collection.description.toLowerCase().includes(query) ||
                collection.code.toLowerCase().includes(query)
            );
            console.log('Found collections:', globalSearchResults.collections.length);
        } else {
            console.log('Collections data not available or empty');
        }
    } catch (error) {
        console.error('Error during search:', error);
    }

    // If no data is available, try again after a short delay
    if (!dataStatus.modsAvailable && !dataStatus.packsAvailable && !dataStatus.collectionsAvailable) {
        console.log('No data available, retrying in 500ms...');
        setTimeout(() => {
            const retryStatus = checkDataAvailability();
            if (retryStatus.modsAvailable || retryStatus.packsAvailable || retryStatus.collectionsAvailable) {
                console.log('Data now available, performing search again');
                performSearch(query);
            } else {
                console.log('Data still not available after retry');
                showResults(); // Show empty results
            }
        }, 500);
        return;
    }

    showResults();
}

function showResults() {
    const section = document.getElementById('searchResultsSection');
    const grid = document.getElementById('searchResultsGrid');

    if (!section || !grid) {
        console.log('Results elements not found');
        return;
    }

    const total = globalSearchResults.mods.length + globalSearchResults.packs.length + globalSearchResults.collections.length;
    console.log('Total results:', total);

    // Show section
    section.style.display = 'block';

    // Clear grid
    grid.innerHTML = '';

    if (total > 0) {
        // Add mods
        globalSearchResults.mods.forEach(mod => {
            const card = createModCard(mod);
            grid.appendChild(card);
        });

        // Add packs
        globalSearchResults.packs.forEach(pack => {
            const card = createPackCard(pack);
            grid.appendChild(card);
        });

        // Add collections
        globalSearchResults.collections.forEach(collection => {
            const card = createCollectionCard(collection);
            grid.appendChild(card);
        });

        // Update title
        const title = section.querySelector('.section-title');
        if (title) {
            title.textContent = `Результаты поиска (${total})`;
        }
    } else {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Ничего не найдено</h3>
                <p>Попробуйте изменить запрос</p>
            </div>
        `;

        const title = section.querySelector('.section-title');
        if (title) {
            title.textContent = 'Результаты поиска (0)';
        }
    }

    // НЕ изменяем статистику при поиске
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

function hideResults() {
    const section = document.getElementById('searchResultsSection');
    if (section) {
        section.style.display = 'none';
    }

    // НЕ изменяем статистику при скрытии результатов
}

// Test function
window.testSearch = function() {
    console.log('Testing search...');
    const dataStatus = checkDataAvailability();

    if (dataStatus.modsAvailable) {
        performSearch('IC2');
    } else {
        console.log('No data available for testing');
    }
};

// Force data check function
window.checkData = function() {
    return checkDataAvailability();
};

// Force reload data function
window.reloadData = function() {
    console.log('Forcing data reload...');
    setTimeout(() => {
        const dataStatus = checkDataAvailability();
        console.log('Data status after reload:', dataStatus);
    }, 1000);
};