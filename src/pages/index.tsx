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
  disabled?: boolean;
  link?: string;
}

const HomepageGridItem: FC<IHomepageGridItemProps> = ({ title, color = "#EEEEEE", light = true, disabled = false, link }) => {
  const fontColor = disabled ? "#BDBDBD" : light ? "#FFFFFF" : "#000000";

  return (
    <div className={styles.homeGridItem} style={{ backgroundColor: color }}>
      {link ?
        <Link to={link} style={{ color: fontColor }}>
          {title}
        </Link>
        : <span style={{ color: fontColor }}>{title}</span>}
    </div>
  );
}

const HomepageGrid = () => {
  return (
    <div className={styles.homeGrid}>
      <HomepageGridItem title="前端" color="#286560" link="/docs/frontend" />
      <HomepageGridItem title="Cloud" disabled />
      <HomepageGridItem title="Unity" disabled />
      <HomepageGridItem title="游戏" color="#AC356A" link="/game" />
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
