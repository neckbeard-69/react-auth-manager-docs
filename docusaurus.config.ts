import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
    title: 'React Auth Manager Docs',
    tagline: 'Simple and adaptable React authentication context',
    favicon: 'img/favicon.ico',

    // Future flags - improve compatibility with Docusaurus v4
    future: {
        v4: true,
    },

    // Your website production URL
    url: 'https://neckbeard-69.github.io/react-auth-manager-docs', // <- change this to your real site URL
    baseUrl: '/',

    // GitHub pages config (change to your GitHub org and repo if you use it)
    organizationName: 'neckbeard-69', // your GitHub org/user
    projectName: 'react-auth-manager', // your repo name

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.ts'),
                    // Update this URL to point to your GitHub repo for "Edit this page" links
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/react-auth-manager-social-card.jpg', // Your social card image
        navbar: {
            title: 'React Auth Manager',
            logo: {
                alt: 'React Auth Manager Logo',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Docs',
                },
                {
                    href: 'https://github.com/neckbeard-69/react-auth-manager',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting Started',
                            to: '/docs/getting-started',
                        },
                        {
                            label: 'API Reference',
                            to: '/docs/api-reference',
                        },
                        {
                            label: 'Examples',
                            to: '/docs/examples',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub Discussions',
                            href: 'https://github.com/neckbeard-69/react-auth-manager/discussions',
                        },
                        {
                            label: 'Issues',
                            href: 'https://github.com/neckbeard-69/react-auth-manager/issues',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/neckbeard-69/react-auth-manager',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Neckbeard. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
