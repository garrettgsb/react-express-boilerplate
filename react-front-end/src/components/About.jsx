import React from 'react'
import '../styles/components/_button.scss'
import '../styles/App.scss';
import './Profile/Profile.scss'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedIn from '@material-ui/icons/LinkedIn';

const About = () => {
  return (
    <div className='about-page'>
      <div className='profile-container'>
        <div className='Card'>
          <div className='upper-container'>
            <div>
              <img className='image-container' src="https://avatars.githubusercontent.com/u/76441027?v=4" alt='' height='100px' width='100px' />
            </div>
          </div>
          <div className='lower-container'>
            <h2> Sam Knoop </h2>
            <h4> City: Calgary, AB </h4>
            <p style={{ align: 'left' }}> Sam has enjoyed combining her passions of photography and web development into creating an app for photographers. She looks forward to putting her newfound coding skills to work on other projects! </p>
            <a href='https://github.com/SKnoop2'><GitHubIcon style={{ color: "teal" }} /></a>
            <a href='https://www.linkedin.com/in/samanthaknoop/'><LinkedIn style={{ color: "teal" }} /></a>
          </div>
        </div>
      </div>
      <div className='profile-container'>
        <div className='Card'>
          <div className='upper-container'>
            <div>
              <img className='image-container' src="https://avatars.githubusercontent.com/u/76414081?v=4" alt='' height='100px' width='100px' />
            </div>
          </div>
          <div className='lower-container'>
            <h2> Gavin Swan </h2>
            <h4> City: Calgary, AB </h4>
            <p> About Gavin </p>
            <a href='https://github.com/gavinswan'><GitHubIcon style={{ color: "teal" }} /></a>
            <a href='https://www.linkedin.com/in/gavin-swan-aa9192201/'><LinkedIn style={{ color: "teal" }} /></a>
          </div>
        </div>
      </div>
      <div className='profile-container'>
        <div className='Card'>
          <div className='upper-container'>
            <div>
              <img className='image-container' src="https://avatars.githubusercontent.com/u/72167146?v=4" alt='' height='100px' width='100px' />
            </div>
          </div>
          <div className='lower-container'>
            <h2> Dylan Rogers </h2>
            <h4> City: Victoria, BC </h4>
            <p> Dylan enjoyed learning and growing with Lighthouse Labs and is excited to begin his career in web development. </p>
            <a href='https://github.com/cromwellgrim'><GitHubIcon style={{ color: "teal" }} /></a>
            <a href='https://www.linkedin.com/in/dylan-rogers-02aa36115/'><LinkedIn style={{ color: "teal" }} /></a>
          </div>
        </div>
        </div>
      </div>
  )
}

export default About
