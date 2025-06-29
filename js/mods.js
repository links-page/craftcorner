// Mods page JavaScript

// Download statistics system
const DownloadStats = {
    // Get stats from localStorage or initialize defaults
    getStats() {
        const stats = localStorage.getItem('downloadStats');
        if (stats) {
            return JSON.parse(stats);
        }

        // Initialize with realistic data for a new site
        const initialStats = {
            totalDownloads: 1250, // Reduced from 15420 to 1250 for a new site
            todayDownloads: 0,
            lastResetDate: new Date().toDateString(),
            lastRandomUpdate: null,
            randomDownloadsToday: 0,
            modStats: {}
        };

        // Initialize individual mod stats with realistic numbers for a new site
        const modIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        modIds.forEach(id => {
            initialStats.modStats[id] = {
                total: Math.floor(Math.random() * 200) + 50, // Reduced from 1000-6000 to 50-250
                today: 0
            };
        });

        localStorage.setItem('downloadStats', JSON.stringify(initialStats));
        return initialStats;
    },

    // Save stats to localStorage
    saveStats(stats) {
        localStorage.setItem('downloadStats', JSON.stringify(stats));
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

            // Reset individual mod stats
            Object.keys(stats.modStats).forEach(modId => {
                stats.modStats[modId].today = 0;
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
                const maxRandomDownloads = 15; // Reduced from 30 to 15
                const timeProgress = Math.min(totalMinutesSinceMidnight / (6 * 60), 1); // 6 hours = 360 minutes
                const targetDownloads = Math.floor(maxRandomDownloads * timeProgress);

                // Get current random downloads count (stored separately)
                const currentRandomDownloads = stats.randomDownloadsToday || 0;
                const downloadsToAdd = Math.max(0, targetDownloads - currentRandomDownloads);

                if (downloadsToAdd > 0) {
                    // Add 1-2 downloads per update (reduced from 1-3)
                    const actualDownloads = Math.min(downloadsToAdd, Math.floor(Math.random() * 2) + 1);
                    stats.todayDownloads += actualDownloads;
                    stats.randomDownloadsToday = (stats.randomDownloadsToday || 0) + actualDownloads;

                    // Distribute random downloads among mods
                    const modIds = Object.keys(stats.modStats);
                    for (let i = 0; i < actualDownloads; i++) {
                        const randomModId = modIds[Math.floor(Math.random() * modIds.length)];
                        stats.modStats[randomModId].today += 1;
                        // Don't add to total - only today's count
                    }

                    stats.lastRandomUpdate = now.toISOString();
                    this.saveStats(stats);
                }
            }
        }
    },

    // Record a real download
    recordDownload(modId) {
        const stats = this.getStats();
        stats.totalDownloads += 1;
        stats.todayDownloads += 1;

        if (!stats.modStats[modId]) {
            stats.modStats[modId] = { total: 0, today: 0 };
        }

        stats.modStats[modId].total += 1;
        stats.modStats[modId].today += 1;

        this.saveStats(stats);
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

    // Get mod-specific stats
    getModStats(modId) {
        const stats = this.getStats();
        const modStats = stats.modStats[modId] || { total: 0, today: 0 };
        return {
            total: this.formatNumber(modStats.total),
            today: this.formatNumber(modStats.today)
        };
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

        // Set up periodic checks (every 10 minutes)
        setInterval(() => {
            this.checkDailyReset();
            this.addRandomDownloads();
        }, 10 * 60 * 1000); // 10 minutes
    }
};

// Initialize download stats when page loads
if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        DownloadStats.init();
    });
}

// Sample mods data with multiple Minecraft versions support
const modsData = [
    {
        id: 1,
        code: 'IC2',
        title: 'Industrial Craft 2',
        description: 'Добавляет множество технологических блоков и предметов для автоматизации производства',
        category: 'technology',
        image: 'https://minecraft-inside.ru/uploads/files/2023-02/9559_63ef2894aa98c.jpg',
        affiliateUrl: 'https://vexfile.com/download/hfcxSGl82L',
        tags: ['Технологии', 'Автоматизация', 'Энергия'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.12.2',
                downloadUrl: 'https://vexfile.com/download/hfcxSGl82L'
            },
            {
                version: '1.10.2',
                downloadUrl: 'https://vexfile.com/download/x1BpGHwbvJ'
            },
            {
                version: '1.7.10',
                downloadUrl: 'https://vexfile.com/download/nBHlcJK9Sq'
            }
        ]
    },
    {
        id: 2,
        code: 'THAUM',
        title: 'Thaumcraft',
        description: 'Магический мод с системой заклинаний, исследования и магических устройств',
        category: 'magic',
        image: 'https://minecraft-inside.ru/uploads/files/2018-01/Thaumcraft.jpg',
        affiliateUrl: 'https://vexfile.com/download/QXoXo5WfdW',
        tags: ['Магия', 'Заклинания', 'Исследования'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.12.2',
                downloadUrl: 'https://vexfile.com/download/QXoXo5WfdW'
            },
            {
                version: '1.10.2',
                downloadUrl: 'https://vexfile.com/download/CrWBl76Lwt'
            },
            {
                version: '1.7.10',
                downloadUrl: 'https://vexfile.com/download/yG2wvpiIcp'
            }
        ]
    },
    {
        id: 3,
        code: 'BOP',
        title: 'Biomes O\' Plenty',
        description: 'Добавляет множество новых биомов, растений и природных объектов',
        category: 'adventure',
        image: 'https://minecraft-inside.ru/uploads/files/2018-05/Biomes_O_Plenty.jpg',
        affiliateUrl: 'https://vexfile.com/download/23i68Spdpv',
        tags: ['Природа', 'Биомы', 'Растения'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
             {
                version: '1.21.6',
                downloadUrl: 'https://vexfile.com/download/23i68Spdpv'
            },
             {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/jAZaELu1nQ'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/vf27HM6Njd'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/26G4I2qZOx'
            }
        ]
    },
    {
        id: 4,
        code: 'AE2',
        title: 'Applied Energistics 2',
        description: 'Система цифрового хранения и автоматизации с использованием энергии',
        category: 'technology',
        image: 'https://raw.githubusercontent.com/AppliedEnergistics/Applied-Energistics-2/main/docs/logo.png',
        affiliateUrl: 'https://vexfile.com/download/jfoY5lQPOi',
        tags: ['Технологии', 'Хранение', 'Автоматизация'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/jfoY5lQPOi'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/hbuZq3APHc'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/dptNTApcII'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/MkiIRHQKx2'
            }
        ]
    },
    {
        id: 5,
        code: 'BOTANIA',
        title: 'Botania',
        description: 'Магический мод, основанный на природной магии и цветах',
        category: 'magic',
        image: 'https://minecraft-inside.ru/uploads/files/2023-02/9729_63ee465dcc92d.jpg',
        affiliateUrl: 'https://vexfile.com/download/oGNBMohfnO',
        tags: ['Магия', 'Природа', 'Цветы'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачайте мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/oGNBMohfnO'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/dlHQLoefe3'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/kOcZoTEUb2'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/t6NMXXSFnj'
            }
        ]
    },
    {
        id: 6,
        code: 'CHISEL',
        title: 'Chisel',
        description: 'Добавляет множество декоративных блоков и инструменты для их создания',
        category: 'decoration',
        image: 'https://ru-minecraft.ru/uploads/posts/2013-08/1375515220_full.jpg',
        affiliateUrl: 'https://vexfile.com/download/hw4AaFY6EB',
        tags: ['Декор', 'Блоки', 'Строительство'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/hw4AaFY6EB'
            },
            {
                version: '1.12.2',
                downloadUrl: 'https://vexfile.com/download/gl7JddManK'
            }
        ]
    },
    {
        id: 7,
        code: 'JOURNEYMAP',
        title: 'JourneyMap',
        description: 'Карта мира в реальном времени с множеством полезных функций',
        category: 'utility',
        image: 'https://www.9minecraft.net/wp-content/uploads/2024/11/JourneyMap-Mod.jpg',
        affiliateUrl: 'https://vexfile.com/download/zBhcrNz1gj',
        tags: ['Карта', 'Навигация', 'Утилиты'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.21.6',
                downloadUrl: 'https://vexfile.com/download/zBhcrNz1gj'
            },
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/siVaU5VRqv'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/vwrQ6RD1Pj'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/n7VseiLlHG'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/ivKyOjPV3r'
            },
            {
                version: '1.12.2',
                downloadUrl: 'https://vexfile.com/download/F58VXuGz30'
            }
        ]
    },
    {
        id: 8,
        code: 'TINKERS',
        title: 'Tinkers Construct',
        description: 'Система создания инструментов с множеством материалов и улучшений',
        category: 'technology',
        image: 'https://minecraft-inside.ru/uploads/files/2021-05/10312_60b09a427561d.jpg',
        affiliateUrl: 'https://vexfile.com/download/Iso3mdWwCo',
        tags: ['Инструменты', 'Крафтинг', 'Материалы'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Разархивируйте файл в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/Iso3mdWwCo'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/FfNbiUjerl'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/XCZmLZd3Cu'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/k9CwL7ok1Z'
            }
        ]
    },
    {
        id: 9,
        code: 'FORGE',
        title: 'Minecraft Forge',
        description: 'Необходимый загрузчик модов для Minecraft. Без него большинство модов не будут работать.',
        category: 'utility',
        image: 'https://www.minecraft-france.fr/wp-content/uploads/2019/12/minecraft-forge.jpg',
        affiliateUrl: 'https://vexfile.com/download/2TQch49IWl',
        tags: ['Загрузчик', 'Необходимый', 'Основной'],
        requirements: ['Java 8+'],
        installationInstructions: [
            'Установи Java',
            'В лаунчере запустите и закройте майнкрафт нужной версии',
            'Скачайте файл по ссылке, расположенной ниже',
            'Разархивируйте файл в удобное место, либо просто откройте zip для доступа к jar файлу',
            'Запустите файл',
            '(Если файл открывается как архив, то кликните по нему правой кнопкой мыши и выбери "Открыть с помощью" -> "Java")',
            'Нажмите "Оk"',
            'Готово'
        ],
        versions: [
            {
                version: '1.21.6',
                downloadUrl: 'https://vexfile.com/download/2TQch49IWl'
            },
            {
                version: '1.21.1',
                downloadUrl: 'https://vexfile.com/download/9eq3qBQUZv'
            },
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/1dche8ni0g'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/AOhRgEPLPJ'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/3Bq0yOh281'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/hhSgOnIeo0'
            },
            {
                version: '1.12.2',
                downloadUrl: 'https://vexfile.com/download/nquoLQlUh0'
            }
        ]
    },
    {
        id: 10,
        code: 'LSCATACLYSM',
        title: 'LS Cataclysm',
        description: 'Мод добавляющий множество новых существ, боссов и приключений в мир Minecraft',
        category: 'adventure',
        image: 'https://minecraft-inside.ru/uploads/files/2023-10/152690_651a911d507d2.png',
        affiliateUrl: 'https://vexfile.com/download/tAxCnayHlm',
        tags: ['Приключения', 'Боссы', 'Существа', 'Новый контент'],
        requirements: ['Forge', 'Curios API'],
        installationInstructions: [
            'Скачайте и установи Minecraft Forge',
            'Скачайте и установите Curios API',
            'Скачайте архив',
            'Распакуйте в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/tAxCnayHlm'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/QL6QtNhrGx'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/85ovn292x6'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/xja1L31sSq'
            }
        ]
    },
    { // УБРАТЬ
        id: 11,
        code: 'CITADEL',
        title: 'Citadel',
        description: 'Библиотека для модов, необходимая для работы многих модификаций',
        category: 'utility',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNpdGFkZWw8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/citadel',
        tags: ['Библиотека', 'Необходимый', 'Зависимость'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / NeoForge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/citadel-1.16.5.jar'
            }
        ]
    },
    {
        id: 12,
        code: 'AQUA',
        title: 'Aquamirae',
        description: 'Кладбище кораблей с ужасными глубоководными существами. Мод изменит генерацию глубокого ледяного океана, наполнит биом новыми структурами, мобами и предметами, а так же скрасит всё это музыкальным сопровождением, эмбиентом и лором.',
        category: 'adventure',
        image: 'https://minecraft-inside.ru/uploads/files/2023-11/151115_654dd66121bfc.png',
        affiliateUrl: 'https://vexfile.com/download/1uzQOHrQiL',
        tags: ['Приключения', 'Океан', 'Существа', 'Структуры', 'Музыка'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачайте и установите Minecraft Forge',
            'Скачайте мод',
            'Распакуйте в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/1uzQOHrQiL'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/w8ODNlyC2t'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/fZKdyFjrYq'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/cWxv5MxR8y'
            }
        ]
    },
    {
        id: 13,
        code: 'INDF',
        title: 'Industrial Foregoing',
        description: 'Перед вами переработанная и улучшенная версия модификации MineFactory Reloaded, которая добавит в игру широкий спектр инструментов для автоматического сбора ресурсов.',
        category: 'technology',
        image: 'https://i.tlauncher.org/images/1522253843_industrial-foregoing-mod-for-minecraft-04.jpg',
        affiliateUrl: 'https://vexfile.com/download/HsdamHRyrc',
        tags: ['Технологии', 'Автоматизация', 'Ресурсы', 'Промышленность'],
        requirements: ['Forge'],
        installationInstructions: [
            'Скачайте и установите Minecraft Forge',
            'Скачайте архив',
            'Распакуйте его в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://vexfile.com/download/HsdamHRyrc'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://vexfile.com/download/wWE3y1L8zy'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://vexfile.com/download/Cr7tXQWXFx'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://vexfile.com/download/IhZCsvtc5u'
            },
            {
                version: '1.12.2',
                downloadUrl: 'https://vexfile.com/download/oAfVRhjHhS'
            }
        ]
    },
    {
        id: 14,
        code: 'BEND',
        title: 'BetterEnd',
        description: 'Этот мод добавляет новые биомы в Энд, а также модифицирует существующие. В каждом биоме своя атмосфера, ресурсы и мобы.',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjNjY2NmZmIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJldHRlckVuZDwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/betterend',
        tags: ['Приключения', 'Энд', 'Биомы', 'Ресурсы', 'Мобы'],
        requirements: ['Forge/Fabric', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / Fabric',
            'Скачай мод',
            'Для fabric: Распакуй в .minecraft\\mods',
            'Для forge: Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/betterend-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/betterend-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/betterend-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/betterend-1.16.5.jar'
            }
        ]
    },
    {
        id: 15,
        code: 'WDA',
        title: 'When Dungeons Arise',
        description: 'WDA вобрал в себя большое количество структур, которые будут рандомно генерироваться в мире во время ваших путешествий. Авторы отошли от создания ванильных небольших структур и дали волю фантазии, поэтому эти структуры настолько большие, что вы попросту можете потеряться.',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGIyNGY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPldoZW4gRHVuZ2VvbnMgQXJpc2U8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/wda',
        tags: ['Приключения', 'Структуры', 'Подземелья', 'Исследования'],
        requirements: ['Forge/NeoForge/Fabric/Quilt', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / NeoForge / Fabric / Quilt',
            'Для fabric: Установи Cloth Config API',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/wda-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/wda-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/wda-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/wda-1.16.5.jar'
            }
        ]
    },
    {
        id: 16,
        code: 'QURK',
        title: 'Quark',
        description: 'Отличный модульный мод, состоящий из большого множества изменений и улучшений игровой механики ванильного майнкрафт. К примеру, появятся новые блоки и декорации, анимация эмоций игрока, на ступеньках можно будет сидеть, раздатчики смогут сажать семена, в океанах начнут спавнится Стражи и многие, многие другие изменения.',
        category: 'utility',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjNhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlF1YXJrPC90ZXh0Pjwvc3ZnPg==',
        affiliateUrl: 'https://example.com/affiliate/quark',
        tags: ['Утилиты', 'Улучшения', 'Блоки', 'Механики', 'Декорации'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Для 1.10.2 и выше: Распакуй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/quark-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/quark-1.19.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/quark-1.16.5.jar'
            }
        ]
    },
    {
        id: 17,
        code: 'CRTE',
        title: 'Create',
        description: 'Create предлагает множество инструментов и блоков для создания и декорации построек, а так же автоматизации. Новые элементы дадут игроку на выбор больше вариантов дизайна, обработка предметов будет происходить не в одном блоке, для этого потребуется много "акторов", работающих вместе.',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjNhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNyZWF0ZTwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/create',
        tags: ['Технологии', 'Автоматизация', 'Дизайн', 'Строительство', 'Механики'],
        requirements: ['Forge/NeoForge/Fabric/Quilt', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / NeoForge / Fabric / Quilt',
            'Скачай мод',
            'Для forge 1.16.5 - 1.18.1: Распакуй в .minecraft\\mods',
            'Для остальных: Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/create-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/create-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/create-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/create-1.16.5.jar'
            }
        ]
    },
    {
        id: 18,
        code: 'IAFR',
        title: 'Ice and Fire',
        description: 'Грандиозный мод, после установки которого в игровом мире поселятся драконы. Они будут делиться на 2 вида: огненные и ледяные. Огненные будут бродить по всему обитаемому миру, а ледяные, напротив, обитают только в самых холодных местах, известных человеку и могут заморозить свою жертву до смерти.',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjNhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkljZSBhbmQgRmlyZTwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/iceandfire',
        tags: ['Приключения', 'Драконы', 'Существа', 'Боссы', 'Элементы'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Для 1.15.2 и выше:',
            'Скачай архив',
            'Распакуй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/ice-and-fire-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/ice-and-fire-1.19.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/ice-and-fire-1.16.5.jar'
            }
        ]
    },
    {
        id: 19,
        code: 'TWF',
        title: 'The Twilight Forest',
        description: 'Глобальная модификация добавляющая новое измерение "Сумеречный лес" - темный, заколдованный мир, почти весь покрытый лесом, в котором витает дух приключений и опасности. Здесь вам встретятся множество новых структур, мобов и боссов. Новые версии мода могут быть несовместимы с OptiFine.',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOGIyNGY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlR3aWxpZ2h0IEZvcmVzdDwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/twilightforest',
        tags: ['Приключения', 'Измерение', 'Лес', 'Боссы', 'Структуры'],
        requirements: ['Forge/NeoForge/Fabric', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / NeoForge / Fabric',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/twilight-forest-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/twilight-forest-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/twilight-forest-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/twilight-forest-1.16.5.jar'
            }
        ]
    }
];

// Current page state
let modsCurrentPage = 1;
let modsItemsPerPage = 8;
let filteredMods = [...modsData];
let modsCurrentFilters = {
    search: '',
    version: '',
    category: '',
    sort: 'popular'
};

// Initialize mods page
document.addEventListener('DOMContentLoaded', function() {
    initializeModsPage();
    loadMods();
    initializeFilters();
});

function initializeModsPage() {
    // Initialize download stats
    DownloadStats.init();

    // Add event listeners for filters
    const searchInput = document.getElementById('modSearchInput');
    const versionFilter = document.getElementById('versionFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleModSearch, 300));
    }

    if (versionFilter) {
        versionFilter.addEventListener('change', handleFilterChange);
        populateVersionFilter(); // Populate version filter dynamically
    }

    if (categoryFilter) {
        categoryFilter.addEventListener('change', handleFilterChange);
    }

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreMods);
    }

    // Initialize filters and load mods
    initializeFilters();
    applyFilters();
}

function initializeFilters() {
    // Set default values
    modsCurrentFilters = {
        search: '',
        version: '',
        category: ''
    };
}

function handleModSearch(e) {
    modsCurrentFilters.search = e.target.value.toLowerCase().trim();
    applyFilters();
}

function handleFilterChange(e) {
    const filterType = e.target.id.replace('Filter', '');
    modsCurrentFilters[filterType] = e.target.value;
    applyFilters();
}

function applyFilters() {
    filteredMods = modsData.filter(mod => {
        // Search filter
        if (modsCurrentFilters.search) {
            const searchMatch = mod.title.toLowerCase().includes(modsCurrentFilters.search) ||
                               mod.description.toLowerCase().includes(modsCurrentFilters.search) ||
                               mod.code.toLowerCase().includes(modsCurrentFilters.search) ||
                               mod.tags.some(tag => tag.toLowerCase().includes(modsCurrentFilters.search));
            if (!searchMatch) return false;
        }

        // Version filter
        if (modsCurrentFilters.version && !mod.versions.some(v => v.version === modsCurrentFilters.version)) {
            return false;
        }

        // Category filter
        if (modsCurrentFilters.category && mod.category !== modsCurrentFilters.category) {
            return false;
        }

        return true;
    });

    // Reset to first page
    modsCurrentPage = 1;
    loadMods();
}

function loadMods() {
    const modsGrid = document.getElementById('modsGrid');
    if (!modsGrid) return;

    // Clear existing mods
    modsGrid.innerHTML = '';

    // Calculate pagination
    const startIndex = (modsCurrentPage - 1) * modsItemsPerPage;
    const endIndex = startIndex + modsItemsPerPage;
    const modsToShow = filteredMods.slice(startIndex, endIndex);

    if (modsToShow.length === 0) {
        showEmptyState();
        return;
    }

    // Create mod cards
    modsToShow.forEach(mod => {
        const modCard = createModCard(mod, modsCurrentFilters.version);
        modsGrid.appendChild(modCard);
    });

    // Update load more button
    updateLoadMoreButton();
}

function createModCard(mod, selectedVersion = null) {
    const card = document.createElement('div');
    card.className = 'mod-card fade-in';

    // Determine which version to display
    let displayVersion = mod.versions[0].version;
    if (selectedVersion) {
        // If a specific version is selected, use it
        displayVersion = selectedVersion;
    } else if (modsCurrentFilters.version) {
        // If version filter is active, use the filtered version
        displayVersion = modsCurrentFilters.version;
    }

    card.innerHTML = `
        <div class="mod-code">${mod.code}</div>

        <div class="mod-image">
            <img src="${mod.image}" alt="${mod.title}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
            <i class="fas fa-puzzle-piece" style="display: none;"></i>
        </div>

        <h3 class="mod-title">${mod.title}</h3>
        <p class="mod-description">${mod.description}</p>

        <div class="mod-meta">
            <span class="mod-version">${displayVersion}</span>
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
            <button class="download-btn" onclick="handleModDownload(${mod.id})">
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

function showEmptyState() {
    const modsGrid = document.getElementById('modsGrid');
    if (!modsGrid) return;

    modsGrid.innerHTML = `
        <div class="empty-state">
            <i class="fas fa-search"></i>
            <h3>Моды не найдены</h3>
            <p>Попробуйте изменить параметры поиска или фильтры</p>
        </div>
    `;
}

function loadMoreMods() {
    modsCurrentPage++;
    const modsGrid = document.getElementById('modsGrid');
    if (!modsGrid) return;

    // Calculate pagination
    const startIndex = (modsCurrentPage - 1) * modsItemsPerPage;
    const endIndex = startIndex + modsItemsPerPage;
    const modsToShow = filteredMods.slice(startIndex, endIndex);

    // Add new mods with animation
    modsToShow.forEach((mod, index) => {
        setTimeout(() => {
            const modCard = createModCard(mod, modsCurrentFilters.version);
            modsGrid.appendChild(modCard);
        }, index * 100);
    });

    // Update load more button
    updateLoadMoreButton();
}

function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!loadMoreBtn) return;

    const totalPages = Math.ceil(filteredMods.length / modsItemsPerPage);

    if (modsCurrentPage >= totalPages) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Enhanced download function for mods with version selection
function handleModDownload(modId) {
    // Find mod data
    const mod = modsData.find(m => m.id === modId);
    if (!mod) return;

    // Show version selection modal if multiple versions available
    if (mod.versions.length > 1) {
        showVersionSelectionModal(mod);
    } else {
        // Direct download if only one version
        performDownload(mod, mod.versions[0]);
    }
}

// Show version selection modal
function showVersionSelectionModal(mod) {
    const modal = document.createElement('div');
    modal.className = 'version-modal active';
    modal.innerHTML = `
        <div class="version-content">
            <div class="version-header">
                <h3 class="version-title">
                    <i class="fas fa-download"></i>
                    Выберите версию для ${mod.title}
                </h3>
                <button class="version-close">&times;</button>
            </div>
            <div class="version-body">
                <div class="version-description">
                    <p>Выберите версию Minecraft, для которой хотите скачать мод:</p>
                </div>
                <div class="version-list">
                    ${mod.versions.map(version => `
                        <div class="version-item" data-version="${version.version}">
                            <div class="version-info">
                                <div class="version-number">
                                    <i class="fas fa-cube"></i>
                                    Minecraft ${version.version}
                                </div>
                            </div>
                            <button class="version-download-btn" onclick="performDownload(${mod.id}, '${version.version}')">
                                <i class="fas fa-download"></i>
                                Скачать
                            </button>
                        </div>
                    `).join('')}
                </div>
                <div class="version-footer">
                    <button class="version-cancel-btn" onclick="closeVersionModal()">
                        <i class="fas fa-times"></i>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    // Close modal functionality
    modal.querySelector('.version-close').addEventListener('click', closeVersionModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeVersionModal();
        }
    });
}

// Close version selection modal
function closeVersionModal() {
    const modal = document.querySelector('.version-modal');
    if (modal) {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    }
}

// Perform actual download
function performDownload(modId, versionId) {
    const mod = typeof modId === 'object' ? modId : modsData.find(m => m.id === modId);
    const version = typeof versionId === 'string' ?
        mod.versions.find(v => v.version === versionId) : versionId;

    if (!mod || !version) return;

    // Record the download in both local and global stats
    DownloadStats.recordDownload(mod.id);
    if (window.GlobalStats) {
        GlobalStats.recordDownload('mods');
    }

    // Close version modal if open
    closeVersionModal();

    // Show loading state
    const btn = event?.target?.closest('.version-download-btn') || event?.target?.closest('.download-btn');
    if (btn) {
        btn.classList.add('loading');
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Загрузка...';
        btn.disabled = true;
    }

    // Simulate download process
    setTimeout(() => {
        // Remove loading state
        if (btn) {
            btn.classList.remove('loading');
            btn.innerHTML = '<i class="fas fa-check"></i> Скачано!';
            btn.disabled = false;

            // Reset button after 2 seconds
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-download"></i> Скачать';
            }, 2000);
        }

        // Redirect to affiliate URL for monetization
        if (mod.affiliateUrl && mod.affiliateUrl !== '#') {
            window.open(mod.affiliateUrl, '_blank');
        } else if (version.downloadUrl && version.downloadUrl !== '#') {
            window.open(version.downloadUrl, '_blank');
        }

        // Show success notification
        if (window.CraftCorner && window.CraftCorner.showNotification) {
            window.CraftCorner.showNotification(
                `Мод "${mod.title}" (${version.version}) успешно скачан!`,
                'success'
            );
        }

    }, 2000);
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

// Add mod preview functionality
function showModPreview(modId) {
    const mod = modsData.find(m => m.id === modId);
    if (!mod) return;

    // Determine which version to display
    let displayVersion = mod.versions[0].version;
    if (modsCurrentFilters.version) {
        displayVersion = modsCurrentFilters.version;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'preview-modal active';
    modal.innerHTML = `
        <div class="preview-content">
            <div class="preview-header">
                <h3 class="preview-title">${mod.title}</h3>
                <button class="preview-close">&times;</button>
            </div>
            <div class="preview-body">
                <div class="preview-image">
                    <img src="${mod.image}" alt="${mod.title}">
                </div>
                <div class="preview-info">
                    <div class="info-item">
                        <div class="info-label">Версия</div>
                        <div class="info-value">${displayVersion}</div>
                    </div>
                    <div class="info-item">
                        <div class="info-label">Категория</div>
                        <div class="info-value">${getCategoryName(mod.category)}</div>
                    </div>
                </div>
                <div class="preview-description">
                    <h4>Описание:</h4>
                    <p>${mod.description}</p>
                </div>
                <div class="preview-actions">
                    <button class="download-btn" onclick="handleModDownload(${mod.id})">
                        <i class="fas fa-download"></i>
                        Скачать мод
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

function showModInfo(modId) {
    const mod = modsData.find(m => m.id === modId);
    if (!mod) return;

    // Determine which version to display
    let displayVersion = mod.versions[0].version;
    if (modsCurrentFilters.version) {
        displayVersion = modsCurrentFilters.version;
    }

    // Create modal
    const modal = document.createElement('div');
    modal.className = 'info-modal active';
    modal.innerHTML = `
        <div class="info-content">
            <div class="info-header">
                <h3 class="info-title">${mod.title}</h3>
                <button class="info-close">&times;</button>
            </div>
            <div class="info-body">
                <div class="info-description">
                    <h4>Описание</h4>
                    <p>${mod.description}</p>
                </div>
                <div class="info-meta">
                    <div><b>Версия:</b> ${displayVersion}</div>
                    <div><b>Категория:</b> ${getCategoryName(mod.category)}</div>
                    <div><b>Код:</b> ${mod.code}</div>
                </div>
                <div class="info-tags">
                    <h4>Теги</h4>
                    <div>${mod.tags.map(tag => `<span class='mod-tag'>${tag}</span>`).join(' ')}</div>
                </div>
                <div class="info-requirements">
                    <h4>Требования</h4>
                    <ul>${mod.requirements.map(req => `<li>${req}</li>`).join('')}</ul>
                </div>
                <div class="info-installation">
                    <h4>Инструкция по установке</h4>
                    <ol>${mod.installationInstructions.map(step => `<li>${step}</li>`).join('')}</ol>
                </div>
                <div class="info-actions">
                    <button class="download-btn" onclick="handleModDownload(${mod.id})">
                        <i class="fas fa-download"></i>
                        Скачать мод
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

// Populate version filter with all available versions
function populateVersionFilter() {
    const versionFilter = document.getElementById('versionFilter');
    if (!versionFilter) return;

    // Get all unique versions from mods data
    const allVersions = new Set();
    modsData.forEach(mod => {
        mod.versions.forEach(version => {
            allVersions.add(version.version);
        });
    });

    // Sort versions in descending order (newest first)
    const sortedVersions = Array.from(allVersions).sort((a, b) => {
        const versionA = a.split('.').map(Number);
        const versionB = b.split('.').map(Number);

        for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
            const numA = versionA[i] || 0;
            const numB = versionB[i] || 0;
            if (numA !== numB) {
                return numB - numA; // Descending order
            }
        }
        return 0;
    });

    // Add version options to filter
    sortedVersions.forEach(version => {
        const option = document.createElement('option');
        option.value = version;
        option.textContent = `Minecraft ${version}`;
        versionFilter.appendChild(option);
    });
}

// Update stats display
function updateStatsDisplay() {
    const stats = DownloadStats.getFormattedStats();

    const todayElement = document.getElementById('todayDownloads');
    const totalElement = document.getElementById('totalDownloads');

    if (todayElement) {
        todayElement.textContent = stats.today;
    }

    if (totalElement) {
        totalElement.textContent = stats.total;
    }
}

// Export functions for global use
window.handleModDownload = handleModDownload;
window.showModPreview = showModPreview;
window.showModInfo = showModInfo;
window.performDownload = performDownload;
window.closeVersionModal = closeVersionModal;
