const categories = require('../constants/categories')
const links = require('../constants/links')

const { infrastructure } = categories
const { main, instagram, spotify, npm, linkedin, facebook, applePodcasts } = links

module.exports = [
    {
        name: 'A It works! Hosting',
        description: 'yep!',
        categories: [infrastructure.hosting],
        links: {
            [main]: 'https://1forge.com/forex-data-api/api-documentation',
            [instagram]: 'https://test.com',
        },
    },
    {
        name: '1001 Fonts!!!',
        description:
            '24,262 free fonts in 13,112 families · Free licenses for commercial use · Direct font downloads · Mac · Windows · Linux.',
        links: {
            [main]: 'https://1forge.com/forex-data-api/api-documentation',
            [linkedin]: 'https://test.com',
            [facebook]: 'https://test.com',
            [applePodcasts]: 'https://test.com',
        },
        icon: 'https://themes.static.1001fonts.net/netefx/img/1001fonts-avatar-32x32.png',
        image: 'https://txt.static.1001fonts.net/og/wraa/otf/lovey-dovey.regular.png',
        categories: [infrastructure.hosting],
    },
    {
        name: '18F Accessibility Guide',
        description: 'A simple checklist for determining if your site is accessible.',
        links: {
            [main]: 'https://1forge.com/forex-data-api/api-documentation',
            [npm]: 'https://test.com',
        },
        icon: 'https://accessibility.18f.gov/checklist/favicon.ico',
        categories: [infrastructure.hosting],
    },
    {
        name: '1Forge',
        description:
            'Documentation for real-time Forex quotes and Cryptocurrency quotes. 1Forge is a live Forex trading API and currency directory, offering live currency quotes.',
        keywords: [
            'forex quotes',
            'live forex quotes',
            'cryptocurrency quotes',
            'forex trading quotes',
            'forex directory quotes',
            'real time forex quotes',
            'forex api python',
            'quotes on cryptocurrency',
            'quotes about forex',
            'forex java api',
            'forex market quotes',
            'forex trading api python',
            'cryptocurrency real time quotes',
            'famous cryptocurrency quotes',
            'cryptocurrency market quotes',
            'cryptocurrency streaming quotes',
            'cryptocurrency quotes live',
            'real time cryptocurrency quotes',
            'current forex quotes',
            'pre market forex quotes',
            'best forex trader quotes',
            'forex premarket quotes',
            'currency forward quotes',
            'quotes for forex traders',
            'forex live quotes free',
            'forex broker python api',
            'jforex api documentation',
        ],
        icon: 'https://1forge.com/forex-data-api/favicon.ico',
        categories: [infrastructure.hosting],
        links: {
            [main]: 'https://1forge.com/forex-data-api/api-documentation',
            [spotify]: 'https://test.com',
        },
    },
]