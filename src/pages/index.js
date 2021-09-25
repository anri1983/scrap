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
  src = "https://sun9-76.userapi.com/impf/c629526/v629526151/9742/ohfJXzKHE0U.jpg?size=640x427&quality=96&sign=b6b4a49e860abddc345204adb833afaa&type=album"/>
  </Layout>
</div>
  )
}

export default IndexPage
