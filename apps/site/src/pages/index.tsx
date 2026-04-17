import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

const highlights = [
  {
    title: 'Professional training programs',
    body: 'Structured for companies, institutions, and serious learners who want practical Flutter training with stronger engineering depth and clearer outcomes.'
  },
  {
    title: 'Detailed tutorial system',
    body: 'The portal combines guided learning paths, in-depth topic pages, lesson blocks, examples, exercises, and capstone-oriented teaching material.'
  },
  {
    title: 'Training with real implementation value',
    body: 'The content is designed to move beyond surface explanation into app design, engineering practice, architecture, backend integration, testing, and delivery readiness.'
  }
];

const capabilityPillars = [
  {
    title: 'Training',
    eyebrow: 'Professional Learning',
    body: 'Structured training programs, learning paths, practical labs, and guided progression for serious Flutter skill development.',
    href: '/docs/training/overview'
  },
  {
    title: 'Tutorial Library',
    eyebrow: 'In-Depth Content',
    body: 'Detailed tutorials, lesson-level explanations, examples, exercises, and concept pages that support real teaching and self-study.',
    href: '/docs/training/tutorial-library'
  },
  {
    title: 'Resources',
    eyebrow: 'Knowledge Layer',
    body: 'Learning paths, engineering standards, onboarding notes, and reusable references that support both training and implementation.',
    href: '/docs/resources/overview'
  },
  {
    title: 'Development',
    eyebrow: 'Implementation Support',
    body: 'Architecture guidance, delivery support, code quality improvement, and product-oriented Flutter implementation help.',
    href: '/docs/flutter-development/services'
  }
];

const engagementTracks = [
  'Programming foundations, Dart, Flutter UI, design, backend, testing, and capstones',
  'Professional tutorial pages with examples, exercises, and structured progression',
  'Corporate programs, workshops, and institutional bootcamps',
  'Implementation support, engineering standards, proof, and future showcase apps'
];

const proofSignals = [
  'Detailed training content across the full Flutter journey',
  'Tutorial material connected to engineering practice, not theory alone',
  'A docs-first structure that scales into a serious learning and implementation hub'
];

const audienceCards = [
  {
    title: 'Students',
    body: 'A structured path from programming and Dart foundations to Flutter app building, capstones, and stronger portfolio confidence.',
    href: '/docs/audiences/students'
  },
  {
    title: 'Teams',
    body: 'Capability-building programs for engineering teams that need stronger architecture, implementation standards, and onboarding clarity.',
    href: '/docs/audiences/teams'
  },
  {
    title: 'Colleges',
    body: 'Workshop and bootcamp formats for departments and institutions that want practical, current Flutter programs with visible outcomes.',
    href: '/docs/audiences/colleges'
  }
];

const learningFlow = [
  {
    title: 'Foundations',
    body: 'Programming logic, problem solving, and Dart fundamentals that remove confusion before Flutter UI work begins.',
    href: '/docs/training/learning-path'
  },
  {
    title: 'Implementation',
    body: 'Flutter UI, design, navigation, state, backend integration, testing, and release thinking in a structured progression.',
    href: '/docs/training/curriculum'
  },
  {
    title: 'Evaluation',
    body: 'Assignments, code review, capstones, and measurable progress signals that make training outcomes credible.',
    href: '/docs/training/assessment'
  }
];

const processSteps = [
  {
    title: 'Diagnose the need',
    body: 'Start by understanding whether the real need is training, delivery support, architecture clarity, or a combination.'
  },
  {
    title: 'Shape the engagement',
    body: 'Map the right format for companies, institutions, or teams so the work feels commercially and operationally sound.'
  },
  {
    title: 'Deliver with artifacts',
    body: 'Leave behind stronger systems: curriculum, standards, notes, demos, starter structures, and better engineering habits.'
  }
];

const offerCards = [
  {
    title: 'Full learning path',
    body: 'A complete progression from programming basics to Flutter app delivery, designed to support serious learners and structured training cohorts.',
    href: '/docs/training/learning-path'
  },
  {
    title: 'Detailed curriculum',
    body: 'A staged curriculum covering Dart, Flutter UI, app design, state, backend integration, testing, and capstone execution.',
    href: '/docs/training/curriculum'
  },
  {
    title: 'Assessment and evaluation',
    body: 'Assignments, review checkpoints, and capstone-based evaluation that make the training more credible and measurable.',
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
    value: 'sitharaj88',
    href: 'https://github.com/sitharaj88'
  },
  {
    label: 'LinkedIn',
    value: 'sitharaj08',
    href: 'https://www.linkedin.com/in/sitharaj08'
  }
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Professional Flutter Training and Tutorials"
      description="Professional Flutter training, detailed tutorials, structured learning paths, and implementation-focused guidance."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Professional Flutter Training. Detailed Tutorials. Practical Learning.</span>
            <h1>A professional Flutter training and tutorial portal with real depth.</h1>
            <p>
              This portal is built for structured Flutter learning: professional training programs, detailed
              tutorials, lesson-level teaching material, practical labs, and implementation-focused guidance from
              programming foundations to app delivery.
            </p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to="/docs/training/overview">
                Explore training
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/training/tutorial-library">
                Open tutorials
              </Link>
            </div>
            <div className={styles.inlineContactRow}>
              {contactLinks.map((item) => (
                <a key={item.label} className={styles.inlineContactItem} href={item.href}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.metricCard}>
              <span>Training focus</span>
              <strong>Professional Flutter learning with structured progression and practical outcomes</strong>
            </div>
            <div className={styles.metricCard}>
              <span>Audience</span>
              <strong>Students, teams, institutions, and serious learners who want deeper understanding</strong>
            </div>
            <div className={styles.metricCard}>
              <span>Learning system</span>
              <strong>Docs, tutorials, curriculum, assessment, proof, and future apps under one system</strong>
            </div>
          </div>
        </section>

        <section className={styles.executiveStrip}>
          {proofSignals.map((item) => (
            <div key={item} className={styles.executiveItem}>
              {item}
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Why this matters</span>
            <h2>More than course marketing, this is a real training and tutorial system.</h2>
          </div>
          <div className={styles.cardGrid}>
            {highlights.map((item) => (
              <article key={item.title} className={styles.card}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.band}>
          <div>
            <span className={styles.bandLabel}>Coverage</span>
            <h2>Designed to teach the full Flutter journey with enough depth to be useful.</h2>
          </div>
          <div className={styles.trackList}>
            {engagementTracks.map((track) => (
              <div key={track} className={styles.trackItem}>
                {track}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Core sections</span>
            <h2>Everything important for learning and implementation has a clear place.</h2>
          </div>
          <div className={styles.pillarGrid}>
            {capabilityPillars.map((item) => (
              <article key={item.title} className={styles.pillarCard}>
                <span className={styles.eyebrow}>{item.eyebrow}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  Open section
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Who it serves</span>
            <h2>Different audiences can move through the same system in different ways.</h2>
          </div>
          <div className={styles.offerGrid}>
            {audienceCards.map((item) => (
              <article key={item.title} className={styles.offerCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  View path
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>Training journey</span>
            <h2>The learning system now has a clear start, structured middle, and measurable end.</h2>
          </div>
          <div className={styles.processGrid}>
            {learningFlow.map((item, index) => (
              <article key={item.title} className={styles.processCard}>
                <div className={styles.processIndex}>0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  Open page
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>How it works</span>
            <h2>Structured enough for professional training, flexible enough for real implementation needs.</h2>
          </div>
          <div className={styles.processGrid}>
            {processSteps.map((item, index) => (
              <article key={item.title} className={styles.processCard}>
                <div className={styles.processIndex}>0{index + 1}</div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span>High-value pages</span>
            <h2>The most important training pages are now easier to discover directly from the homepage.</h2>
          </div>
          <div className={styles.offerGrid}>
            {offerCards.map((item) => (
              <article key={item.title} className={styles.offerCard}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <Link className={styles.textLink} to={item.href}>
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className={styles.ctaCard}>
            <span className={styles.bandLabel}>Direct contact</span>
            <h2>Start with the right learning, training, or implementation path.</h2>
            <p>
              Use the portal to explore training, tutorials, curriculum, assessment, resources, and implementation
              support, then reach out directly for corporate programs, workshop discussions, mentoring, or blended engagements.
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
                Open enquiry paths
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
