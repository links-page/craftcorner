// Global search functionality for CraftCorner

// Search functionality for the main search bar
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    if (searchInput) {
        // Handle search input
        searchInput.addEventListener('input', debounce(handleGlobalSearch, 300));

        // Handle search button click
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const query = searchInput.value.trim();
                if (query) {
                    performGlobalSearch(query);
                }
            });
        }

        // Handle Enter key
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) {
                    performGlobalSearch(query);
                }
            }
        });
    }
});

function handleGlobalSearch(e) {
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
        const tags = Array.from(element.querySelectorAll('.mod-tag, .pack-tag, .collection-tag')).map(tag => tag.textContent.toLowerCase());

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

function performGlobalSearch(query) {
    // Store search query in localStorage for cross-page search
    localStorage.setItem('globalSearchQuery', query);

    // Determine which page to redirect to based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    if (currentPage === 'index.html') {
        // On homepage, search across all categories
        // You can implement a search results page or redirect to mods page
        window.location.href = `mods.html?search=${encodeURIComponent(query)}`;
    } else {
        // On specific pages, trigger the page-specific search
        const searchInput = document.getElementById('modSearchInput') ||
                           document.getElementById('packSearchInput') ||
                           document.getElementById('collectionSearchInput');

        if (searchInput) {
            searchInput.value = query;
            searchInput.dispatchEvent(new Event('input'));
        }
    }
}

function showAllItems() {
    const elements = document.querySelectorAll('.mod-card, .pack-card, .collection-card, .category-card');
    elements.forEach(element => {
        element.style.display = 'block';
    });
}

// Check for stored search query on page load
document.addEventListener('DOMContentLoaded', function() {
    const storedQuery = localStorage.getItem('globalSearchQuery');
    if (storedQuery) {
        // Clear the stored query
        localStorage.removeItem('globalSearchQuery');

        // Apply the search on current page
        const searchInput = document.getElementById('modSearchInput') ||
                           document.getElementById('packSearchInput') ||
                           document.getElementById('collectionSearchInput');

        if (searchInput) {
            searchInput.value = storedQuery;
            searchInput.dispatchEvent(new Event('input'));
        }
    }
});

// Debounce function for search optimization
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

// Search suggestions (can be expanded with more data)
const searchSuggestions = [
    'Industrial Craft 2',
    'Thaumcraft',
    'Biomes O\' Plenty',
    'Applied Energistics 2',
    'Botania',
    'Chisel',
    'JourneyMap',
    'Tinkers Construct',
    'Faithful',
    'OptiFine',
    'Sphax PureBDcraft',
    'Soartex Fanver'
];

// Add search suggestions functionality
function showSearchSuggestions(input, suggestions) {
    const suggestionsContainer = document.getElementById('searchSuggestions');

    if (!suggestionsContainer) {
        const container = document.createElement('div');
        container.id = 'searchSuggestions';
        container.className = 'search-suggestions';
        input.parentNode.appendChild(container);
    }

    const container = document.getElementById('searchSuggestions');
    container.innerHTML = '';

    if (input.value.length < 2) {
        container.style.display = 'none';
        return;
    }

    const filteredSuggestions = suggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(input.value.toLowerCase())
    ).slice(0, 5);

    if (filteredSuggestions.length > 0) {
        filteredSuggestions.forEach(suggestion => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.textContent = suggestion;
            item.addEventListener('click', () => {
                input.value = suggestion;
                container.style.display = 'none';
                performGlobalSearch(suggestion);
            });
            container.appendChild(item);
        });
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

// Initialize search suggestions
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            showSearchSuggestions(e.target, searchSuggestions);
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.search-input-wrapper')) {
                const suggestions = document.getElementById('searchSuggestions');
                if (suggestions) {
                    suggestions.style.display = 'none';
                }
            }
        });
    }
});