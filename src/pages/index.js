import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import 'font-awesome/css/font-awesome.min.css';
import Icon from "@material-ui/core/Icon";
import Fab from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
//import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormLabel from '@material-ui/core/FormLabel';
//import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';
//import Switch from '@material-ui/core/Switch';
//import SpeedDial from '@material-ui/lab/SpeedDial';
//import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
//import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
//import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
//import SaveIcon from '@material-ui/icons/Save';
//import PrintIcon from '@material-ui/icons/Print';
//import ShareIcon from '@material-ui/icons/Share';
//import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
    root: {
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    exampleWrapper: {
        position: 'relative',
        marginTop: theme.spacing(3),
        height: 380,
    },
}));

//const actions = [
//    { icon: <FileCopyIcon />, name: 'Copy' },
//    { icon: <SaveIcon />, name: 'Save' },
//    { icon: <PrintIcon />, name: 'Print' },
//    { icon: <ShareIcon />, name: 'Share' },
//    { icon: <FavoriteIcon />, name: 'Like' },
//];



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
                      to="/docs/getting-started/getting-started-intro">
             Getting Started - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
 
    const classes = useStyles();
//    const [direction, setDirection] = React.useState('up');
//    const [open, setOpen] = React.useState(false);
//    const [hidden, setHidden] = React.useState(false);

//    const handleDirectionChange = (event) => {
//        setDirection(event.target.value);
//    };

//    const handleHiddenChange = (event) => {
//        setHidden(event.target.checked);
//    };

//    const handleClose = () => {
//        setOpen(false);
//    };

//    const handleOpen = () => {
//        setOpen(true);
//    };

    return (
        <Layout
            title={` ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <div className={classes.root}>
                </div>
            </main>
        </Layout>
    );
}
//<FormControlLabel
//                control={<Switch checked={hidden} onChange={handleHiddenChange} color="primary" />}
//                label="Hidden"
//            />
//            <FormLabel className={classes.radioGroup} component="legend">
//                Direction
//      </FormLabel>
//            <RadioGroup
//                aria-label="direction"
//                name="direction"
//                value={direction}
//                onChange={handleDirectionChange}
//                row
//            >
//                <FormControlLabel value="up" control={<Radio />} label="Up" />
//                <FormControlLabel value="right" control={<Radio />} label="Right" />
//                <FormControlLabel value="down" control={<Radio />} label="Down" />
//                <FormControlLabel value="left" control={<Radio />} label="Left" />
//            </RadioGroup>
//            <div className={classes.exampleWrapper}>
//                <SpeedDial
//                    ariaLabel="SpeedDial example"
//                    className={classes.speedDial}
//                    hidden={hidden}
//                    icon={<SpeedDialIcon />}
//                    onClose={handleClose}
//                    onOpen={handleOpen}
//                    open={open}
//                    direction={direction}
//                >
//                    {actions.map((action) => (
//                        <SpeedDialAction
//                            key={action.name}
//                            icon={action.icon}
//                            tooltipTitle={action.name}
//                            onClick={handleClose}
//                        />
//                    ))}
//                </SpeedDial>
//            </div>
//                
