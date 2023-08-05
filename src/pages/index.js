import * as React from 'react';
//import { StaticImage } from "gatsby-plugin-image"
import Layout from '../layout';
import Seo from "../layout/seo";
import { AboutJS, Achievement, Banner, HiddenTips, Overview } from '../components/home';
import './index.scss';
/*
<StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
 */

function Home() {
  return (
    <Layout>
      <Banner />
      <AboutJS />
      <Achievement />
      <Overview />
      <HiddenTips />
    </Layout>
  )
}

export default Home;

export const Head = () => (<Seo />);
