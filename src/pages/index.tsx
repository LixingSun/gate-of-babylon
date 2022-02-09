import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/frontend">
            前端
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="宝库大门"
      description={siteConfig.tagline} >
      <HomepageHeader />
      <main>
        <div className={styles.todoList}>
          <div className="text--center">
            <h2>画饼🍕</h2>
            <ul className="menu__list row--align-center">
              <li className="menu__list-item">Cloud</li>
              <li className="menu__list-item">Flutter</li>
              <li className="menu__list-item">Unity</li>
              <li className="menu__list-item">Games</li>
            </ul>
          </div>
        </div>
      </main>
    </Layout>
  );
}
