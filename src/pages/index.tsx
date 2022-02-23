import React, { FC } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const HomepageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

interface IHomepageGridItemProps {
  title: string;
  color?: string;
  light?: boolean;
  link?: string;
}

const HomepageGridItem: FC<IHomepageGridItemProps> = ({ title, color = "", light = true, link = "" }) => {

  return (
    <Link
      to={link}
      className={clsx(styles.homeGridItem, !!color && styles[`homeGridItem${color}`], !link && [styles.homeGridItemDisabled], light && [styles.homeGridItemLight])}
    >
      {title}
    </Link >
  );
}

const HomepageGrid = () => {
  return (
    <div className={styles.homeGrid}>
      <div className={styles.homeGridRow}>
        <HomepageGridItem title="前端" color="Amber" link="/docs/frontend" />
        <HomepageGridItem title="Coding" />
      </div>
      <div className={styles.homeGridRow}>
        <HomepageGridItem title="Unity" />
        <HomepageGridItem title="游戏" color="Blue" link="/game" />
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="你发现了我的宝藏"
      description={siteConfig.tagline} >
      <HomepageHeader />
      <HomepageGrid />
    </Layout>
  );
}
