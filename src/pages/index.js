/* eslint-disable */
import { hot } from 'react-hot-loader/root';
import React, { Component } from "react"
import Layout from "../components/layout"
import hero from '../images/hero.jpg'
import { Link } from "gatsby"


class IndexPage extends Component {

  render() {
    return (
      <Layout>
        <div className="hero-graphic">
          <img src={hero} className='hero' alt="hero graphic" style={{ width: '100%', height: '500px' }}></img>
          <div className="hero-content">
            <h2 className="hero-heading">Samuil Ilkov</h2>
            <p className="hero-info">Web Developer, Enthusiast, Father</p>
          </div>
        </div>
        <div className="container-middle">
          <h2 className="competencies"><span>[</span> Competencies <span>]</span></h2>
          <div className="competencies-content">
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div className="frontend">
                <h2>Front End</h2>
                <p>HTML, SAAS, JavaScript, JQuery, React, GatsbyJS</p>
              </div>
            </Link>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div className="backend">
                <h2>Back End</h2>
                <p>Express, MySQL, Node, Mongo, Firebase</p>
              </div>
            </Link>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div className="ecommerce">
                <h2>E-Commerce</h2>
                <p>BigCommerce, Shopify</p>
              </div>
            </Link>
            <Link to='/projects' style={{ textDecoration: 'none' }}>
              <div className="design">
                <h2>Web Design</h2>
                <p>Photoshop, Adobe XD</p>
              </div>
            </Link>
          </div>
          <h2 className="resume"><span>[</span> Resume <span>]</span></h2>
          <div>
            <div className="resume-content">
              <div className="quote">
                <h2 className="copy">" There Are No Mistakes, Only Opportunities. "</h2>
                <cite>Tina Fey</cite>
              </div>
              <a href="resume/samuil-ilkov-resume.docx" style={{textDecoration:'none'}} target="__blank" download><button className="download">Download</button></a>
            </div>
          </div>
        </div>
        <div className="container-bottom">
          <h2 className="about-me-heading"><span>[</span> A little about Me, Myself and I <span>]</span></h2>
          <div className='about-me-content'>
            <p>
              Born and raised in the beautiful country of Bulgaria, I've always had passion for technologies, websites and what's behind all that.
               Fortunately, due to life circumstances, I had the chance to move the USA and graduate as a Full Stack Web Developer from the Georgia Tech Coding Boot Camp and I have to admit, I've never felt so fulfilled and completed in my life.
                That moment when you realize that you finally found your profession, the only job that makes you feel good. 
                <Link to="/about" className="read-more"> Read More</Link>
            </p>
          </div>
          <h2 className="contact-heading"><span>[</span> Get in Touch <span>]</span></h2>
          <div className="contact-content">
            <a className="icon1" href='tel:+14048600162'>
            <span>&#x0260E;</span>
            </a>
            <a className="icon2" href="mailto:samuil.ilkov90@gmail.com">
            <span>&#9993;</span>
            </a>
          </div>
        </div>
      </Layout>
    )
  }
}


export default hot(IndexPage)
