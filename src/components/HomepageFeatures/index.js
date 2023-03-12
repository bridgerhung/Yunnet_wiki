import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'FOR 外修',
    Svg: require('@site/static/img/Yunnet-light.svg').default,
    description: <>DNS1:&nbsp;&nbsp;140.125.252.1&nbsp;&nbsp;</>,
    description2: <>DNS2:&nbsp;&nbsp;140.125.253.2&nbsp;&nbsp;</>,
    link: <><a href={'111/Yunnet/2022-10-05%20新生訓練/part3'}>&nbsp;外修小筆記&nbsp;</a>  <a href={'/111/Yunnet/2022-10-05%20新生訓練/part6'}>&nbsp;網路線處置&nbsp;</a></>
  },
  
];

function Feature({ Svg, title, description,description2,link }) {
  return (
    <div className={clsx('col col--21')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>{description2}</p>
        <p>{link}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
