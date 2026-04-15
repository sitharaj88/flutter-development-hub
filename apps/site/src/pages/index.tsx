import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './index.module.css';

const highlights = [
  {
    title: 'Executive-grade training programs',
    body: 'Designed for companies that want stronger mobile capability, sharper engineering habits, and teams that can ship with more confidence.'
  },
  {
    title: 'Corporate Flutter delivery support',
    body: 'From architecture and implementation to rescue engagements and team acceleration, the offer goes far beyond classroom-style training.'
  },
  {
    title: 'A more interesting portal experience',
    body: 'Less static brochure, more credible digital headquarters for training, consulting, engineering standards, demos, and future products.'
  }
];

const capabilityPillars = [
  {
    title: 'Training',
    eyebrow: 'Capability Building',
    body: 'Corporate batches, leadership-friendly learning paths, team onboarding, and practical labs with clear progression.',
    href: '/docs/training/overview'
  },
  {
    title: 'Development',
    eyebrow: 'Product Delivery',
    body: 'Architecture, engineering implementation, release hardening, and delivery support for product teams building with Flutter.',
    href: '/docs/flutter-development/services'
  },
  {
    title: 'Resources',
    eyebrow: 'Knowledge Layer',
    body: 'Learning paths, engineering standards, onboarding notes, and reusable documentation that compounds over time.',
    href: '/docs/resources/overview'
  },
  {
    title: 'Apps',
    eyebrow: 'Proof In Code',
    body: 'Demo apps, internal tools, cohort labs, starter kits, and future showcase projects living in the same repository.',
    href: '/docs/apps/overview'
  }
];

const engagementTracks = [
  'Corporate team upskilling and engineering enablement',
  'Product consulting, architecture, and delivery acceleration',
  'Institutional bootcamps, workshops, and applied training labs',
  'Knowledge systems with docs, standards, demos, and implementation assets'
];

const proofSignals = [
  'Programs shaped for companies, institutions, and product teams',
  'Training connected to engineering practice, not theory alone',
  'A docs-first structure that scales into a serious capability hub'
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
    title: 'Corporate capability programs',
    body: 'Training programs for engineering teams that need stronger Flutter delivery, better architecture decisions, and faster team onboarding.',
    href: '/docs/training/corporate-programs'
  },
  {
    title: 'Consulting and product delivery',
    body: 'Advisory, implementation, rescue engagements, and engineering acceleration for organizations building serious products.',
    href: '/docs/flutter-development/delivery-process'
  },
  {
    title: 'Institutional bootcamps and workshops',
    body: 'Applied workshops and bootcamp formats for colleges, academies, and high-signal communities.',
    href: '/docs/training/workshops'
  }
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title="Corporate Flutter Training and Development"
      description="Corporate-grade Flutter training, engineering delivery, and a modern portal for teams, institutions, and product companies."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.kicker}>Corporate Flutter Training. Product Engineering. Capability Building.</span>
            <h1>Build a Flutter presence that feels enterprise-ready and impossible to ignore.</h1>
            <p>
              This portal is being shaped as a premium front door for corporate training, serious Flutter
              development, institutional programs, engineering resources, and future apps that prove the work.
            </p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to="/docs/training/overview">
                Explore corporate training
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/flutter-development/services">
                View development services
              </Link>
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.metricCard}>
              <span>Positioning</span>
              <strong>Premium training and development, not generic tutorials</strong>
            </div>
            <div className={styles.metricCard}>
              <span>Audience</span>
              <strong>Companies, institutions, founders, and ambitious delivery teams</strong>
            </div>
            <div className={styles.metricCard}>
              <span>Operating model</span>
              <strong>Docs, curriculum, services, proof, and apps under one system</strong>
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
            <span>Why this can stand out</span>
            <h2>Corporate-level structure with a more interesting story.</h2>
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
            <span className={styles.bandLabel}>Engagement tracks</span>
            <h2>Designed for training impact, delivery credibility, and long-term growth.</h2>
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
            <span>Core pillars</span>
            <h2>Everything important has a clear place in the portal.</h2>
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
            <span>How engagement works</span>
            <h2>Structured enough for corporate buyers, flexible enough for real delivery.</h2>
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
            <span>Commissionable offers</span>
            <h2>The site now speaks to actual engagements, not just page categories.</h2>
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
            <span className={styles.bandLabel}>Ready to move</span>
            <h2>Use this portal as the public face of a more serious Flutter practice.</h2>
            <p>
              The current version is now structured for corporate training, product engineering conversations,
              institutional programs, proof building, and future showcase apps. The next refinement is to add your
              real brochure copy, testimonials, and engagement details.
            </p>
            <div className={styles.actions}>
              <Link className={clsx('button button--primary button--lg', styles.primaryAction)} to="/docs/contact/enquiry">
                Open enquiry paths
              </Link>
              <Link className={clsx('button button--secondary button--lg', styles.secondaryAction)} to="/docs/proof/outcomes">
                Build trust layer
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
