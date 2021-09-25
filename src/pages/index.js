import * as React from "react";
//import {message} from './index.module.css';
import { StaticImage } from 'gatsby-plugin-image';
//import { Link } from 'gatsby';
import Layout from '../components/layout';

function IndexPage (){
  return(
<div>
  <Layout pageTitle="Home Page">
  <StaticImage
  alt = "Scrapbooking"
  src = "../images/photo_2021-09-26_00-34-16.jpg"/>
  </Layout>
</div>
  )
}

export default IndexPage
