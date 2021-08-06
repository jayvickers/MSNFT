import * as React from "react"
import { Helmet } from "react-helmet";
import ComingSoon from '../components/ComingSoon';
import "../styles/global.less"

// markup
const IndexPage = () => {
  return (
    <>
    <Helmet title="MeanStreak NFT Marketplace & Community">
    <meta name="description" content="MeanStreak NFT" />
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
    <link href="https://fonts.googleapis.com/css2?family=Courier+Prime&display=swap" rel="stylesheet"/>
  </Helmet>
    <main>
     <ComingSoon />
    </main>
    </>
  )
}

export default IndexPage
