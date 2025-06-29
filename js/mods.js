// Mods page JavaScript

// Sample mods data with multiple Minecraft versions support
const modsData = [
    {
        id: 1,
        code: 'IC2',
        title: 'Industrial Craft 2',
        description: 'Добавляет множество технологических блоков и предметов для автоматизации производства',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPklDMjwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/ic2',
        tags: ['Технологии', 'Автоматизация', 'Энергия'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/ic2-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/ic2-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/ic2-1.18.2.jar'
            }
        ]
    },
    {
        id: 2,
        code: 'THAUM',
        title: 'Thaumcraft',
        description: 'Магический мод с системой заклинаний, исследования и магических устройств',
        category: 'magic',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRoYXVtY3JhZnQ8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/thaumcraft',
        tags: ['Магия', 'Заклинания', 'Исследования'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/thaumcraft-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/thaumcraft-1.18.2.jar'
            }
        ]
    },
    {
        id: 3,
        code: 'BOP',
        title: 'Biomes O\' Plenty',
        description: 'Добавляет множество новых биомов, растений и природных объектов',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJPUDwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/bop',
        tags: ['Природа', 'Биомы', 'Растения'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/bop-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/bop-1.19.2.jar'
            }
        ]
    },
    {
        id: 4,
        code: 'AE2',
        title: 'Applied Energistics 2',
        description: 'Система цифрового хранения и автоматизации с использованием энергии',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFFMjwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/ae2',
        tags: ['Технологии', 'Хранение', 'Автоматизация'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/ae2-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/ae2-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/ae2-1.18.2.jar'
            }
        ]
    },
    {
        id: 5,
        code: 'BOTANIA',
        title: 'Botania',
        description: 'Магический мод, основанный на природной магии и цветах',
        category: 'magic',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJvdGFuaWE8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/botania',
        tags: ['Магия', 'Природа', 'Цветы'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/botania-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/botania-1.18.2.jar'
            }
        ]
    },
    {
        id: 6,
        code: 'CHISEL',
        title: 'Chisel',
        description: 'Добавляет множество декоративных блоков и инструменты для их создания',
        category: 'decoration',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNoaXNlbDwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/chisel',
        tags: ['Декор', 'Блоки', 'Строительство'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/chisel-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/chisel-1.19.2.jar'
            }
        ]
    },
    {
        id: 7,
        code: 'JOURNEYMAP',
        title: 'JourneyMap',
        description: 'Карта мира в реальном времени с множеством полезных функций',
        category: 'utility',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjU2M2ViIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkpvdXJuZXlNYXA8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/journeymap',
        tags: ['Карта', 'Навигация', 'Утилиты'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/journeymap-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/journeymap-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/journeymap-1.18.2.jar'
            }
        ]
    },
    {
        id: 8,
        code: 'TINKERS',
        title: 'Tinkers Construct',
        description: 'Система создания инструментов с множеством материалов и улучшений',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjM2I4MmY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlRpbmtlcnM8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/tinkers',
        tags: ['Инструменты', 'Крафтинг', 'Материалы'],
        requirements: ['Forge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/tinkers-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/tinkers-1.18.2.jar'
            }
        ]
    },
    {
        id: 9,
        code: 'FORGE',
        title: 'Minecraft Forge',
        description: 'Необходимый загрузчик модов для Minecraft. Без него большинство модов не будут работать.',
        category: 'utility',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjNhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkZvcmdlPC90ZXh0Pjwvc3ZnPg==',
        affiliateUrl: 'https://example.com/affiliate/forge',
        tags: ['Загрузчик', 'Необходимый', 'Основной'],
        requirements: ['Java 8+'],
        installationInstructions: [
            'Установи Java',
            'В лаунчере запусти и закрой майнкрафт нужной версии',
            'Скачай файл, по ссылке расположенной ниже',
            'Запусти файл',
            '(Если файл открывается как архив, то кликни по нему правой кнопкой мыши и выбери "Открыть с помощью" -> "Java")',
            'Нажми "Оk"',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/forge-1.20.1-installer.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/forge-1.19.2-installer.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/forge-1.18.2-installer.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/forge-1.16.5-installer.jar'
            }
        ]
    },
    {
        id: 10,
        code: 'LSCATACLYSM',
        title: 'LS Cataclysm',
        description: 'Мод добавляющий множество новых существ, боссов и приключений в мир Minecraft',
        category: 'adventure',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIjOGIyNGY1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxTIENhdGFjbHlzbTwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/lscataclysm',
        tags: ['Приключения', 'Боссы', 'Существа', 'Новый контент'],
        requirements: ['Forge', 'Java 17+', 'Curios API'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / NeoForge',
            'Скачай и установи Curios API',
            'Для 1.19.2, 1.20.1 и выше:',
            'Скачай архив',
            'Распакуй в .minecraft\\mods',
            'Для остальных:',
            'Скачай и установи Citadel',
            'Скачай мод',
            'Не распаковывая, скопируй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/lscataclysm-1.20.1.zip'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/lscataclysm-1.19.2.zip'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/lscataclysm-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/lscataclysm-1.16.5.jar'
            }
        ]
    },
    {
        id: 11,
        code: 'CITADEL',
        title: 'Citadel',
        description: 'Библиотека для модов, необходимая для работы многих модификаций',
        category: 'utility',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWQ0ZWQ4Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNpdGFkZWw8L3RleHQ+PC9zdmc+',
        affiliateUrl: 'https://example.com/affiliate/citadel',
        tags: ['Библиотека', 'Необходимый', 'Зависимость'],
        requirements: ['Forge', 'Java 17+'],
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
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMDA2NmNjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkFxdWFtaXJhZTwvdGV4dD48L3N2Zz4=',
        affiliateUrl: 'https://example.com/affiliate/aquamirae',
        tags: ['Приключения', 'Океан', 'Существа', 'Структуры', 'Музыка'],
        requirements: ['Forge/Fabric/Quilt', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / Fabric / Quilt',
            'Скачай мод',
            'Распакуй в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/aquamirae-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/aquamirae-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/aquamirae-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/aquamirae-1.16.5.jar'
            }
        ]
    },
    {
        id: 13,
        code: 'INDF',
        title: 'Industrial Foregoing',
        description: 'Перед вами переработанная и улучшенная версия модификации MineFactory Reloaded, которая добавит в игру широкий спектр инструментов для автоматического сбора ресурсов.',
        category: 'technology',
        image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZmY2YjNhIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSI0OCIgZmlsbD0iI2ZmZmZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkluZHVzdHJpYWwgRm9yZWdvaW5nPC90ZXh0Pjwvc3ZnPg==',
        affiliateUrl: 'https://example.com/affiliate/industrialforegoing',
        tags: ['Технологии', 'Автоматизация', 'Ресурсы', 'Промышленность'],
        requirements: ['Forge/NeoForge', 'Java 17+'],
        installationInstructions: [
            'Скачай и установи Minecraft Forge / NeoForge',
            'Для 1.12.2 и ниже: Установи Forgelin',
            'Скачай архив',
            'Распакуй его в .minecraft\\mods',
            'Готово'
        ],
        versions: [
            {
                version: '1.20.1',
                downloadUrl: 'https://example.com/downloads/industrial-foregoing-1.20.1.jar'
            },
            {
                version: '1.19.2',
                downloadUrl: 'https://example.com/downloads/industrial-foregoing-1.19.2.jar'
            },
            {
                version: '1.18.2',
                downloadUrl: 'https://example.com/downloads/industrial-foregoing-1.18.2.jar'
            },
            {
                version: '1.16.5',
                downloadUrl: 'https://example.com/downloads/industrial-foregoing-1.16.5.jar'
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
        const modCard = createModCard(mod);
        modsGrid.appendChild(modCard);
    });

    // Update load more button
    updateLoadMoreButton();
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
            <span class="mod-version">${mod.versions[0].version}</span>
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
            const modCard = createModCard(mod);
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
                        <div class="info-value">${mod.versions[0].version}</div>
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
                    <div><b>Версия:</b> ${mod.versions[0].version}</div>
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

// Export functions for global use
window.handleModDownload = handleModDownload;
window.showModPreview = showModPreview;
window.showModInfo = showModInfo;
window.performDownload = performDownload;
window.closeVersionModal = closeVersionModal;