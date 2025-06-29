// Global download statistics system for the main page
const GlobalStats = {
    // Get stats from localStorage or initialize defaults
    getStats() {
        const stats = localStorage.getItem('globalDownloadStats');
        if (stats) {
            return JSON.parse(stats);
        }

        // Initialize with realistic data for a new site
        const initialStats = {
            totalDownloads: 1250, // Total downloads across all sections
            todayDownloads: 0,
            lastResetDate: new Date().toDateString(),
            lastRandomUpdate: null,
            randomDownloadsToday: 0,
            sectionStats: {
                mods: { total: 850, today: 0 },
                resourcepacks: { total: 250, today: 0 },
                collections: { total: 150, today: 0 }
            }
        };

        localStorage.setItem('globalDownloadStats', JSON.stringify(initialStats));
        return initialStats;
    },

    // Save stats to localStorage
    saveStats(stats) {
        localStorage.setItem('globalDownloadStats', JSON.stringify(stats));
    },

    // Check if we need to reset today's downloads (at 00:00 MSK)
    checkDailyReset() {
        const stats = this.getStats();
        const now = new Date();
        const mskTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // UTC+3 for MSK
        const today = mskTime.toDateString();

        if (stats.lastResetDate !== today) {
            // Reset today's downloads
            stats.todayDownloads = 0;
            stats.lastResetDate = today;
            stats.lastRandomUpdate = null;
            stats.randomDownloadsToday = 0;

            // Reset section stats
            Object.keys(stats.sectionStats).forEach(section => {
                stats.sectionStats[section].today = 0;
            });

            this.saveStats(stats);
        }
    },

    // Add random downloads gradually over 4-6 hours after midnight
    addRandomDownloads() {
        const stats = this.getStats();
        const now = new Date();
        const mskTime = new Date(now.getTime() + (3 * 60 * 60 * 1000)); // UTC+3 for MSK
        const hoursSinceMidnight = mskTime.getHours();
        const minutesSinceMidnight = mskTime.getMinutes();
        const totalMinutesSinceMidnight = hoursSinceMidnight * 60 + minutesSinceMidnight;

        // Only add random downloads in the first 4-6 hours after midnight
        if (hoursSinceMidnight >= 0 && hoursSinceMidnight <= 6) {
            // Calculate how much time has passed since last update (max 10 minutes)
            const lastUpdate = stats.lastRandomUpdate ? new Date(stats.lastRandomUpdate) : null;
            const timeSinceLastUpdate = lastUpdate ? (now - lastUpdate) / (1000 * 60) : 10; // minutes

            if (!lastUpdate || timeSinceLastUpdate >= 10) {
                // Calculate target random downloads for this time period
                const maxRandomDownloads = 15; // Reduced for a new site
                const timeProgress = Math.min(totalMinutesSinceMidnight / (6 * 60), 1); // 6 hours = 360 minutes
                const targetDownloads = Math.floor(maxRandomDownloads * timeProgress);

                // Get current random downloads count (stored separately)
                const currentRandomDownloads = stats.randomDownloadsToday || 0;
                const downloadsToAdd = Math.max(0, targetDownloads - currentRandomDownloads);

                if (downloadsToAdd > 0) {
                    // Add 1-2 downloads per update
                    const actualDownloads = Math.min(downloadsToAdd, Math.floor(Math.random() * 2) + 1);
                    stats.todayDownloads += actualDownloads;
                    stats.randomDownloadsToday = (stats.randomDownloadsToday || 0) + actualDownloads;

                    // Distribute random downloads among sections
                    const sections = ['mods', 'resourcepacks', 'collections'];
                    for (let i = 0; i < actualDownloads; i++) {
                        const randomSection = sections[Math.floor(Math.random() * sections.length)];
                        stats.sectionStats[randomSection].today += 1;
                        // Don't add to total - only today's count
                    }

                    stats.lastRandomUpdate = now.toISOString();
                    this.saveStats(stats);
                }
            }
        }
    },

    // Record a real download from any section
    recordDownload(section) {
        const stats = this.getStats();
        stats.totalDownloads += 1;
        stats.todayDownloads += 1;

        if (stats.sectionStats[section]) {
            stats.sectionStats[section].total += 1;
            stats.sectionStats[section].today += 1;
        }

        this.saveStats(stats);

        // Update display
        this.updateDisplay();
    },

    // Format number with K/M suffix
    formatNumber(num) {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    },

    // Get formatted stats for display
    getFormattedStats() {
        const stats = this.getStats();
        return {
            total: this.formatNumber(stats.totalDownloads),
            today: this.formatNumber(stats.todayDownloads)
        };
    },

    // Update display on main page
    updateDisplay() {
        const stats = this.getFormattedStats();

        const totalElement = document.getElementById('totalDownloads');
        const todayElement = document.getElementById('todayDownloads');

        if (totalElement) {
            totalElement.textContent = stats.total;
        }

        if (todayElement) {
            todayElement.textContent = stats.today;
        }
    },

    // Initialize the stats system
    init() {
        this.checkDailyReset();

        // Only add random downloads if this is the first time today or if enough time has passed
        const stats = this.getStats();
        const now = new Date();
        const lastUpdate = stats.lastRandomUpdate ? new Date(stats.lastRandomUpdate) : null;

        if (!lastUpdate || (now - lastUpdate) >= 10 * 60 * 1000) { // 10 minutes
            this.addRandomDownloads();
        }

        // Update display
        this.updateDisplay();

        // Set up periodic checks (every 10 minutes)
        setInterval(() => {
            this.checkDailyReset();
            this.addRandomDownloads();
            this.updateDisplay();
        }, 10 * 60 * 1000); // 10 minutes
    }
};

// Initialize global stats when page loads
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        GlobalStats.init();
    });
}

// Export for use in other files
window.GlobalStats = GlobalStats;