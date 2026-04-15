import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const url = process.env.DOCUSAURUS_URL ?? 'https://www.sitharaj.in';
const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/training/flutter-development/';

const config: Config = {
  title: 'Flutter Development by Sitharaj',
  tagline: 'Training, product engineering, mentoring, and real Flutter delivery.',
  favicon: 'img/logo-mark.svg',
  url,
  baseUrl,
  organizationName: 'sitharaj',
  projectName: 'flutter-development',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  future: {
    experimental_faster: true
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts'
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css'
        }
      } satisfies Preset.Options
    ]
  ],
  themeConfig: {
    image: 'img/social-card.svg',
    navbar: {
      title: 'Flutter Development',
      logo: {
        alt: 'Flutter Development',
        src: 'img/logo-mark.svg'
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          label: 'Portal',
          position: 'left'
        },
        {
          to: '/docs/training/overview',
          label: 'Training',
          position: 'left'
        },
        {
          to: '/docs/flutter-development/services',
          label: 'Services',
          position: 'left'
        },
        {
          to: '/docs/resources/overview',
          label: 'Resources',
          position: 'left'
        },
        {
          to: '/docs/apps/overview',
          label: 'Apps',
          position: 'left'
        },
        {
          href: 'mailto:hello@sitharaj.in?subject=Flutter%20Training%20Enquiry',
          label: 'Contact',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Training',
          items: [
            {label: 'Overview', to: '/docs/training/overview'},
            {label: 'Learning Path', to: '/docs/training/learning-path'},
            {label: 'Packages', to: '/docs/training/packages'},
            {label: 'Programs', to: '/docs/training/programs'},
            {label: 'Corporate', to: '/docs/training/corporate-programs'},
            {label: 'Curriculum', to: '/docs/training/curriculum'},
            {label: 'Tutorials', to: '/docs/training/tutorial-library'},
            {label: 'Outcomes', to: '/docs/training/outcomes'},
            {label: 'Delivery', to: '/docs/training/delivery'}
          ]
        },
        {
          title: 'Flutter',
          items: [
            {label: 'Services', to: '/docs/flutter-development/services'},
            {label: 'Engagement Models', to: '/docs/flutter-development/engagement-models'},
            {label: 'Delivery Process', to: '/docs/flutter-development/delivery-process'},
            {label: 'Engineering Path', to: '/docs/flutter-development/engineering-roadmap'}
          ]
        },
        {
          title: 'Portal',
          items: [
            {label: 'Site Phases', to: '/docs/portal/site-phases'},
            {label: 'Resources', to: '/docs/resources/overview'},
            {label: 'Proof', to: '/docs/proof/outcomes'},
            {label: 'Apps', to: '/docs/apps/overview'}
          ]
        },
        {
          title: 'Connect',
          items: [
            {label: 'Email', href: 'mailto:hello@sitharaj.in'},
            {label: 'Training Enquiry', href: 'mailto:hello@sitharaj.in?subject=Flutter%20Training%20Enquiry'}
          ]
        }
      ],
      copyright: `Copyright ${new Date().getFullYear()} Sitharaj. Built with Docusaurus.`
    },
    prism: {
      additionalLanguages: ['dart', 'json', 'bash', 'yaml'],
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark
    }
  } satisfies Preset.ThemeConfig
};

export default config;
