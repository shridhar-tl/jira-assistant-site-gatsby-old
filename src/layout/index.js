/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */
import React from "react";
//import 'bootstrap/dist/js/bootstrap.bundle.min.js'; //https://blog.logrocket.com/handling-bootstrap-integration-next-js/
import '../_common/extensions';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
// Font icons
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/regular.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import '../_styles/globals.scss';
import Header from './Header';
import Footer from './Footer';
import './index.scss';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Layout;