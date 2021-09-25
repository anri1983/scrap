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
  alt = "Nature"
  src = "https://images.unsplash.com/photo-1535837487710-a191373a20ae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80"/>
  </Layout>
</div>
  )
}

export default IndexPage
