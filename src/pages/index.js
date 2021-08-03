import * as React from "react"
import { Helmet } from "react-helmet";
import ComingSoon from '../components/ComingSoon';
import "../styles/global.less"

// markup
const IndexPage = () => {
  return (
    <>
    <Helmet title="Jay Vickers, Software Engineer">
    <meta name="description" content="Jay Vickers resume" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap" rel="stylesheet"/>
    <script src="https://kit.fontawesome.com/504a442b12.js" crossOrigin="anonymous"/>
  </Helmet>
    <main>
     <ComingSoon />
    </main>
    </>
  )
}

export default IndexPage
