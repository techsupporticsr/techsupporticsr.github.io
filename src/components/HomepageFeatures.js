import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tutorials',
        Svg: require('../../static/img/tutorials.svg').default,
        addr: () => {
            window.location.href = "./docs/tutorials/tutorials-intro"
        },
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
      addr: () => {
          window.location.href = "./docs/manuals/manuals-intro"
      },
    description: (
      <>
        All your helpful manuals and user documents in one place, you can even create your own, and we&apos;ll do the chores. Go
        ahead and move your documents into the docs directory.
      </>
    ),
    },
    {
        title: 'FAQ',
        Svg: require('../../static/img/faq.svg').default,
        addr: () => {
            window.location.href = "./docs/faq/faq"
        },
        description: (
            <>
                User entered tips and tricks related to the product for further reading and knowledge.
            </>
        ),
    },
    {
        title: 'Features',
        Svg: require('../../static/img/features.svg').default,
        addr: () => {
            window.location.href = "http://businesssoftware.design"
        },
        description: (
            <>
                Browse through some of the features and discover what you can do with the world's most powerful automation tool.
            </>
        ),
    },
  {
    title: 'Blog',
      Svg: require('../../static/img/blog.svg').default,
      addr: () => {
          window.location.href = "./blog"
      },
    description: (
      <>
        Read our Blog for a timeline of historic information.
      </>
    ),
  },
];

function Feature({ Svg, title, description, addr }) {
    return (
        <div id={title} onClick={addr} className={clsx('col col--3')}>
          <div className="text--center" >
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
      <div className="container" width='100%'>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
