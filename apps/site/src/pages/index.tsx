import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

/* ─── Data ─── */

const stats = [
  { number: '8', label: 'Training Modules', icon: '📚' },
  { number: '30+', label: 'Tutorial Pages', icon: '📖' },
  { number: '7', label: 'Learning Tracks', icon: '🗺️' },
  { number: '6', label: 'Capstone Stages', icon: '🎯' }
];

const highlights = [
  {
    icon: '🏗️',
    iconBg: 'rgba(255, 106, 61, 0.1)',
    title: 'Production-grade curriculum',
    body: 'Goes beyond syntax demos into architecture, state management, testing, and delivery discipline — the skills that separate professional developers from tutorial followers.'
  },
  {
    icon: '🎓',
    iconBg: 'rgba(12, 196, 226, 0.1)',
    title: 'Deep tutorial system',
    body: 'Every concept gets a dedicated tutorial page with plain-language explanation, runnable Dart/Flutter examples, common mistakes, and guided exercises.'
  },
  {
    icon: '🔬',
    iconBg: 'rgba(100, 120, 200, 0.1)',
    title: 'Engineering-first approach',
    body: 'Architecture, code organization, and quality thinking are introduced early — not saved for an "advanced" section most learners never reach.'
  }
];

const capabilityPillars = [
  {
    title: 'Training Programs',
    eyebrow: 'Structured Learning',
    icon: '📋',
    body: 'Multi-week programs with assignments, labs, capstone projects, and measurable progression for students, teams, and institutions.',
    href: '/docs/training/overview'
  },
  {
    title: 'Tutorial Library',
    eyebrow: 'In-Depth Content',
    icon: '📖',
    body: 'Concept-by-concept teaching material with examples, exercises, common mistakes, and real-world Flutter application patterns.',
    href: '/docs/training/tutorial-library'
  },
  {
    title: 'Resources & Standards',
    eyebrow: 'Knowledge System',
    icon: '⚙️',
    body: 'Engineering standards, learning paths, onboarding references, and reusable knowledge that supports training and implementation.',
    href: '/docs/resources/overview'
  },
  {
    title: 'Development Services',
    eyebrow: 'Implementation',
    icon: '🚀',
    body: 'Architecture consulting, delivery acceleration, code rescue, and product-oriented Flutter engineering for companies and startups.',
    href: '/docs/flutter-development/services'
  }
];

const engagementTracks = [
  { icon: '💻', text: 'Programming foundations — logic, problem-solving, and code confidence' },
  { icon: '🎯', text: 'Dart deep dive — types, null safety, async, classes, and modeling' },
  { icon: '📱', text: 'Flutter UI — widgets, layouts, navigation, forms, and reusable components' },
  { icon: '🎨', text: 'Design & UX — user flows, hierarchy, responsive thinking, and polish' },
  { icon: '🏗️', text: 'Architecture — state management, feature modules, and maintainable structure' },
  { icon: '✅', text: 'Quality & delivery — testing, debugging, performance, and release readiness' }
];

const audienceCards = [
  {
    title: 'Students & Learners',
    icon: '🎓',
    body: 'A complete path from programming basics to building and presenting a portfolio-quality Flutter application with real engineering depth.',
    href: '/docs/audiences/students'
  },
  {
    title: 'Engineering Teams',
    icon: '👥',
    body: 'Capability-building programs that strengthen architecture thinking, implementation consistency, and delivery confidence across the team.',
    href: '/docs/audiences/teams'
  },
  {
    title: 'Colleges & Institutions',
    icon: '🏛️',
    body: 'Workshop and bootcamp formats with structured curriculum, assessments, and clear outcomes for academic or institutional programs.',
    href: '/docs/audiences/colleges'
  }
];

const learningFlow = [
  {
    title: 'Foundations',
    body: 'Programming logic, Dart fundamentals, and the thinking skills that prevent confusion before Flutter work begins.',
    href: '/docs/training/learning-path'
  },
  {
    title: 'Implementation',
    body: 'Flutter UI, design, state management, backend integration, and architecture patterns through hands-on building.',
    href: '/docs/training/curriculum'
  },
  {
    title: 'Evaluation',
    body: 'Assignments, code reviews, capstone execution, and presentation — turning learning into credible proof.',
    href: '/docs/training/assessment'
  }
];

const offerCards = [
  {
    icon: '🗺️',
    title: 'Complete learning path',
    body: 'A staged progression from zero programming experience to confident Flutter app delivery, designed for cohorts and self-study.',
    href: '/docs/training/learning-path'
  },
  {
    icon: '📚',
    title: 'Detailed curriculum',
    body: '8 modules covering programming, Dart, Flutter UI, design, state, backend, testing, and capstone — each with clear outcomes.',
    href: '/docs/training/curriculum'
  },
  {
    icon: '📊',
    title: 'Assessment & evaluation',
    body: 'Assignments, review checkpoints, and capstone-based evaluation that make training outcomes measurable and credible.',
    href: '/docs/training/assessment'
  }
];

const contactLinks = [
  {
    label: 'Email',
    value: 'sitharaj.info@gmail.com',
    href: 'mailto:sitharaj.info@gmail.com'
  },
  {
    label: 'GitHub',
    value: 'github.com/sitharaj88',
    href: 'https://github.com/sitharaj88'
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sitharaj08',
    href: 'https://www.linkedin.com/in/sitharaj08'
  }
];

/* ─── Component ─── */

export default function Home(): JSX.Element {
  return (
    <Layout
      title="World-Class Flutter Training & Tutorials"
      description="Professional Flutter training, in-depth Dart tutorials, structured learning paths, and production-grade engineering guidance — from programming foundations to app delivery."
    >
      <main className={styles.page}>

        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Professional Flutter Training & Development</span>
            <h1>
              Master Flutter with{' '}
              <span className={styles.gradientText}>real engineering depth.</span>
            </h1>
            <p>
              A complete training and tutorial system that takes you from programming foundations
              through Dart, Flutter UI, architecture, testing, and delivery — with the depth
              and structure of a professional engineering program.
            </p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to="/docs/training/overview">
                Explore Training
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/training/tutorial-library">
                Browse Tutorials
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/training/learning-path">
                View Learning Path
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>8</span>
                <span className={styles.heroStatLabel}>Modules</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>30+</span>
                <span className={styles.heroStatLabel}>Tutorials</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>7</span>
                <span className={styles.heroStatLabel}>Tracks</span>
              </div>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNumber}>100%</span>
                <span className={styles.heroStatLabel}>Hands-on</span>
              </div>
            </div>
          </div>

          <div className={styles.heroPanel}>
            {/* Code preview card */}
            <div className={styles.codePreview}>
              <div className={styles.codeHeader}>
                <span className={styles.codeDot} style={{ background: '#ff5f57' }} />
                <span className={styles.codeDot} style={{ background: '#febc2e' }} />
                <span className={styles.codeDot} style={{ background: '#28c840' }} />
                <span className={styles.codeTitle}>main.dart</span>
              </div>
              <div className={styles.codeBody}>
                <span className={styles.keyword}>import</span>{" "}<span className={styles.string}>'package:flutter/material.dart'</span>;{'\n'}
                {'\n'}
                <span className={styles.keyword}>void</span> <span className={styles.function}>main</span>() {'=> '}
                <span className={styles.function}>runApp</span>(<span className={styles.keyword}>const</span> <span className={styles.type}>MyApp</span>());{'\n'}
                {'\n'}
                <span className={styles.keyword}>class</span> <span className={styles.type}>MyApp</span> <span className={styles.keyword}>extends</span> <span className={styles.type}>StatelessWidget</span> {'{\n'}
                {'  '}<span className={styles.keyword}>const</span> <span className={styles.type}>MyApp</span>({'{'}
                <span className={styles.keyword}>super</span>.key{'}'});{'\n'}
                {'\n'}
                {'  '}<span className={styles.annotation}>@override</span>{'\n'}
                {'  '}<span className={styles.type}>Widget</span> <span className={styles.function}>build</span>(<span className={styles.type}>BuildContext</span> ctx) {'{\n'}
                {'    '}<span className={styles.keyword}>return</span> <span className={styles.type}>MaterialApp</span>({'\n'}
                {'      '}title: <span className={styles.string}>'Flutter Training'</span>,{'\n'}
                {'      '}home: <span className={styles.keyword}>const</span> <span className={styles.type}>HomeScreen</span>(),{'\n'}
                {'    '});{'\n'}
                {'  }'}{'\n'}
                {'}'}
              </div>
            </div>

            {/* Metric cards */}
            <div className={styles.metricCard}>
              <div className={styles.metricIcon} style={{ background: 'rgba(255, 106, 61, 0.1)' }}>📱</div>
              <div className={styles.metricContent}>
                <span>Focus</span>
                <strong>From zero to production-ready Flutter apps</strong>
              </div>
            </div>
            <div className={styles.metricCard}>
              <div className={styles.metricIcon} style={{ background: 'rgba(12, 196, 226, 0.1)' }}>🎯</div>
              <div className={styles.metricContent}>
                <span>Audience</span>
                <strong>Students, teams, and institutions</strong>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ STATS ═══ */}
        <section className={styles.statsStrip}>
          {stats.map((item) => (
            <div key={item.label} className={styles.statCard}>
              <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <div className={styles.statNumber}>{item.number}</div>
              <div className={styles.statLabel}>{item.label}</div>
            </div>
          ))}
        </section>

        {/* ═══ WHY THIS MATTERS ═══ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Why this training is different</span>
            <h2>Built for real engineering skill, not just widget demos.</h2>
            <p>
              Most Flutter courses teach syntax. This system teaches engineering — how to think,
              structure, and deliver production-quality applications.
            </p>
          </div>
          <div className={styles.cardGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <div className={styles.cardIcon} style={{ background: item.iconBg }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ COVERAGE BAND ═══ */}
        <section className={styles.band}>
          <div>
            <span className={styles.bandLabel}>Full Coverage</span>
            <h2>Every stage of the Flutter journey, taught with depth.</h2>
          </div>
          <div className={styles.trackList}>
            {engagementTracks.map((track) => (
              <div key={track.text} className={styles.trackItem}>
                <span className={styles.trackIcon}>{track.icon}</span>
                <span>{track.text}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CORE PILLARS ═══ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Core sections</span>
            <h2>Everything a learner or team needs, organized clearly.</h2>
          </div>
          <div className={styles.pillarGrid}>
            {capabilityPillars.map((item) => (
              <article key={item.title} className={styles.pillarCard}>
                <span className={styles.eyebrow}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  Explore
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ AUDIENCE ═══ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Who it serves</span>
            <h2>One system, multiple paths through it.</h2>
          </div>
          <div className={styles.offerGrid}>
            {audienceCards.map((item) => (
              <article key={item.title} className={styles.offerCard}>
                <div className={styles.cardIcon} style={{ background: 'rgba(12, 196, 226, 0.08)' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  View path
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ LEARNING JOURNEY ═══ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Learning journey</span>
            <h2>A clear start, structured middle, and measurable end.</h2>
          </div>
          <div className={styles.learningPath}>
            {learningFlow.map((item, index) => (
              <div key={item.title} className={styles.pathStep}>
                <div className={styles.pathNumber}>{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ HIGH-VALUE PAGES ═══ */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Start here</span>
            <h2>The most important pages to explore first.</h2>
          </div>
          <div className={styles.offerGrid}>
            {offerCards.map((item) => (
              <article key={item.title} className={styles.offerCard}>
                <div className={styles.cardIcon} style={{ background: 'rgba(255, 106, 61, 0.08)' }}>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <span className={styles.bandLabel}>Get started</span>
            <h2>Ready to build real Flutter skills?</h2>
            <p>
              Explore the training programs, browse tutorials, or reach out directly for
              corporate programs, institutional workshops, mentoring, or custom engagements.
            </p>
            <div className={styles.contactGrid}>
              {contactLinks.map((item) => (
                <a key={item.label} className={styles.contactCard} href={item.href}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to="/docs/contact/enquiry">
                Start a conversation
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/training/learning-path">
                Review learning path
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
