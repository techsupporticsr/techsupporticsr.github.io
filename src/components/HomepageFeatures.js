import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tutorials',
    Svg: require('../../static/img/tutorials.svg').default,
    description: (
      <>
            Video Presentations and Articles designed from the ground up to be easily understood and
            used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Manuals',
    Svg: require('../../static/img/manuals.svg').default,
    description: (
      <>
        All your docs in one place, you can even create your own, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/blog.svg').default,
    description: (
      <>
        User entered tips and tricks related to the product for further reading and knowledge.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
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
