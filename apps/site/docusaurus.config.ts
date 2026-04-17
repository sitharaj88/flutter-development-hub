import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {themes as prismThemes} from 'prism-react-renderer';

const url = process.env.DOCUSAURUS_URL ?? 'https://sitharaj88.github.io';
const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? '/flutter-development-hub/';

const config: Config = {
  title: 'Flutter Development by Sitharaj Seenivasan',
  tagline: 'World-class Flutter training, tutorials, and product engineering — from foundations to production.',
  favicon: 'img/logo-mark.svg',
  url,
  baseUrl,
  organizationName: 'sitharaj',
  projectName: 'flutter-development-hub',
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
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'keywords',
        content: 'Flutter training, Dart tutorial, Flutter development, mobile app development, cross-platform, Flutter course, Flutter bootcamp, Flutter consulting'
      }
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'author',
        content: 'Sitharaj Seenivasan'
      }
    }
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          sidebarCollapsible: true,
          sidebarCollapsed: false
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
    metadata: [
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'og:type', content: 'website'}
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true
    },
    announcementBar: {
      id: 'training_open',
      content: '🚀 <strong>Flutter Training Programs Now Open</strong> — Corporate batches, bootcamps, and 1-on-1 mentoring available. <a href="/docs/training/overview">Learn more →</a>',
      backgroundColor: '#101b2e',
      textColor: '#f8f3ea',
      isCloseable: true
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4
    },
    navbar: {
      title: 'Flutter Development',
      hideOnScroll: true,
      logo: {
        alt: 'Flutter Development Hub',
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
          type: 'dropdown',
          label: 'Training',
          position: 'left',
          items: [
            {to: '/docs/training/overview', label: '📋 Training Overview'},
            {to: '/docs/training/learning-path', label: '🗺️ Learning Path'},
            {to: '/docs/training/curriculum', label: '📚 Curriculum'},
            {to: '/docs/training/tutorial-library', label: '🎓 Tutorial Library'},
            {to: '/docs/training/packages', label: '📦 Packages & Pricing'},
            {to: '/docs/training/corporate-programs', label: '🏢 Corporate Programs'},
            {to: '/docs/training/workshops', label: '🛠️ Workshops'}
          ]
        },
        {
          type: 'dropdown',
          label: 'Tutorials',
          position: 'left',
          items: [
            {to: '/docs/training/programming-fundamentals', label: '💻 Programming Fundamentals'},
            {to: '/docs/training/dart-for-flutter', label: '🎯 Dart for Flutter'},
            {to: '/docs/training/flutter-core', label: '📱 Flutter Core'},
            {to: '/docs/training/app-design-and-ux', label: '🎨 App Design & UX'},
            {to: '/docs/training/state-and-architecture', label: '🏗️ State & Architecture'},
            {to: '/docs/training/backend-and-data', label: '🔌 Backend & Data'},
            {to: '/docs/training/testing-and-release', label: '✅ Testing & Release'}
          ]
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
          href: 'https://github.com/sitharaj88',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://www.linkedin.com/in/sitharaj08',
          label: 'LinkedIn',
          position: 'right'
        },
        {
          href: 'mailto:sitharaj.info@gmail.com?subject=Flutter%20Training%20Enquiry',
          label: '✉️ Contact',
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
            {label: 'Curriculum', to: '/docs/training/curriculum'},
            {label: 'Tutorial Library', to: '/docs/training/tutorial-library'},
            {label: 'Packages', to: '/docs/training/packages'},
            {label: 'Programs', to: '/docs/training/programs'},
            {label: 'Corporate', to: '/docs/training/corporate-programs'},
            {label: 'Outcomes', to: '/docs/training/outcomes'},
            {label: 'FAQ', to: '/docs/training/faq'}
          ]
        },
        {
          title: 'Tutorials',
          items: [
            {label: 'Programming Fundamentals', to: '/docs/training/programming-fundamentals'},
            {label: 'Dart for Flutter', to: '/docs/training/dart-for-flutter'},
            {label: 'Flutter Core', to: '/docs/training/flutter-core'},
            {label: 'Design & UX', to: '/docs/training/app-design-and-ux'},
            {label: 'State & Architecture', to: '/docs/training/state-and-architecture'},
            {label: 'Testing & Release', to: '/docs/training/testing-and-release'}
          ]
        },
        {
          title: 'Services & Resources',
          items: [
            {label: 'Development Services', to: '/docs/flutter-development/services'},
            {label: 'Engagement Models', to: '/docs/flutter-development/engagement-models'},
            {label: 'Delivery Process', to: '/docs/flutter-development/delivery-process'},
            {label: 'Engineering Standards', to: '/docs/resources/engineering-standards'},
            {label: 'Knowledge System', to: '/docs/resources/knowledge-system'},
            {label: 'Apps & Showcase', to: '/docs/apps/overview'}
          ]
        },
        {
          title: 'Connect',
          items: [
            {label: '✉️ Email', href: 'mailto:sitharaj.info@gmail.com'},
            {label: '💻 GitHub', href: 'https://github.com/sitharaj88'},
            {label: '💼 LinkedIn', href: 'https://www.linkedin.com/in/sitharaj08'},
            {label: '📩 Training Enquiry', href: 'mailto:sitharaj.info@gmail.com?subject=Flutter%20Training%20Enquiry'}
          ]
        }
      ],
      copyright: `© ${new Date().getFullYear()} Sitharaj Seenivasan — Flutter Development & Training. All rights reserved.`
    },
    prism: {
      additionalLanguages: ['dart', 'json', 'bash', 'yaml', 'kotlin', 'swift'],
      theme: prismThemes.github,
      darkTheme: prismThemes.vsDark
    }
  } satisfies Preset.ThemeConfig
};

export default config;
