import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    'portal/site-phases',
    {
      type: 'category',
      label: 'Training',
      items: [
        'training/overview',
        'training/learning-path',
        'training/packages',
        'training/programs',
        'training/corporate-programs',
        'training/workshops',
        'training/curriculum',
        'training/programming-fundamentals',
        'training/dart-for-flutter',
        'training/flutter-core',
        'training/app-design-and-ux',
        'training/state-and-architecture',
        'training/backend-and-data',
        'training/testing-and-release',
        {
          type: 'category',
          label: 'Lessons',
          items: [
            'training/lessons/programming-logic',
            'training/lessons/variables-and-data',
            'training/lessons/functions-and-control-flow',
            'training/lessons/dart-collections-and-classes',
            'training/lessons/flutter-widgets-and-layouts',
            'training/lessons/navigation-and-forms',
            'training/lessons/app-design-principles',
            'training/lessons/responsive-ui-and-states',
            'training/lessons/state-management-basics',
            'training/lessons/api-integration-and-models',
            'training/lessons/testing-debugging-and-performance',
            'training/lessons/capstone-planning-and-presentation'
          ]
        },
        {
          type: 'category',
          label: 'Tutorial Library',
          items: [
            {
              type: 'category',
              label: 'Programming Foundations',
              items: [
                'training/tutorials/programming-foundations-overview',
                'training/tutorials/computational-thinking',
                'training/tutorials/conditions-and-loops',
                'training/tutorials/functions-and-modularity'
              ]
            },
            {
              type: 'category',
              label: 'Dart Deep Dive',
              items: [
                'training/tutorials/dart-track-overview',
                'training/tutorials/dart-phase-roadmap',
                'training/tutorials/variables-final-const',
                'training/tutorials/operators-and-expressions',
                'training/tutorials/functions-and-parameters',
                'training/tutorials/null-safety-and-types',
                'training/tutorials/collections-and-modeling',
                'training/tutorials/classes-and-constructors',
                'training/tutorials/inheritance-mixins-and-interfaces',
                'training/tutorials/generics-enums-and-extensions',
                'training/tutorials/async-futures-and-streams',
                'training/tutorials/exceptions-and-error-handling',
                'training/tutorials/json-modeling-and-serialization',
                'training/tutorials/dart-coding-style-and-organization',
                'training/tutorials/dart-practice-and-review',
                'training/tutorials/dart-foundations-lab'
              ]
            },
            {
              type: 'category',
              label: 'Flutter UI',
              items: [
                'training/tutorials/widget-tree-and-composition',
                'training/tutorials/layouts-and-constraints',
                'training/tutorials/forms-navigation-and-user-flow'
              ]
            },
            {
              type: 'category',
              label: 'Design and UX',
              items: [
                'training/tutorials/user-flow-and-wireframing',
                'training/tutorials/visual-hierarchy-and-spacing',
                'training/tutorials/design-systems-and-reusable-components'
              ]
            },
            {
              type: 'category',
              label: 'Architecture and Data',
              items: [
                'training/tutorials/state-management-roadmap',
                'training/tutorials/project-structure-and-feature-modules',
                'training/tutorials/repositories-api-and-persistence'
              ]
            },
            {
              type: 'category',
              label: 'Quality and Delivery',
              items: [
                'training/tutorials/testing-strategy',
                'training/tutorials/debugging-workflow',
                'training/tutorials/performance-and-release-checklist'
              ]
            },
            'training/tutorials/capstone-execution-guide'
          ]
        },
        'training/syllabus-by-week',
        'training/schedule-and-duration',
        'training/tools-and-stack',
        'training/assessment',
        'training/capstone',
        'training/outcomes',
        'training/delivery',
        'training/faq'
      ]
    },
    {
      type: 'category',
      label: 'Flutter Development',
      items: [
        'flutter-development/services',
        'flutter-development/engagement-models',
        'flutter-development/delivery-process',
        'flutter-development/engineering-roadmap'
      ]
    },
    {
      type: 'category',
      label: 'Audience Paths',
      items: [
        'audiences/students',
        'audiences/teams',
        'audiences/colleges'
      ]
    },
    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/overview',
        'resources/flutter-learning-path',
        'resources/engineering-standards',
        'resources/knowledge-system'
      ]
    },
    {
      type: 'category',
      label: 'Proof',
      items: [
        'proof/profile',
        'proof/outcomes',
        'proof/case-study-format'
      ]
    },
    {
      type: 'category',
      label: 'Apps',
      items: [
        'apps/overview',
        'apps/showcase-roadmap'
      ]
    },
    {
      type: 'category',
      label: 'Contact',
      items: [
        'contact/enquiry',
        'contact/engagement-process'
      ]
    }
  ]
};

export default sidebars;
