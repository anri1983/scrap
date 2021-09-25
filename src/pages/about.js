import * as React from 'react';
//import { Link } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

function AboutPage () {
  return (
    <Layout pageTitle='About Me'>
      <p>
        Hi there! I'm in love with Scrapbooking, Cardmaking, Drawing, Crochet.
      </p>
      <StaticImage alt = "Scrapbooking"
  src = "../images/photo_2021-02-02_10-52-54.jpg"/>
    </Layout>
  )
}
export default AboutPage
