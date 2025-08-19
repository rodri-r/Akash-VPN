import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Decentralized Infrastructure',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Powered by the <a href="https://akash.network" target="_blank" rel="noopener noreferrer">Akash Network</a>, our VPN runs on independent cloud providers — not Big Tech.
      </>
    ),
  },
  {
    title: 'Privacy-First Design',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        We don’t log your data. Your browsing history stays private — always.
      </>
    ),
  },
  {
    title: 'Simple and Flexible',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        One-click connect. No crypto knowledge required. Free and paid plans available.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}