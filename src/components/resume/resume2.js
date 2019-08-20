import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './resume.css'

class Resume extends Component {

  render() {

    return (
      <div className='resume-main-container'>
        
        <div className='resume-left-container'>
          <div className='resume-padding-container'>
            <h1 className='resume-name'>Dan Mello</h1>
            <h2 className='resume-title'>Front End Developer</h2>
          </div>
          <div className='resume-category-container'>Personal Info</div>
          <div className='resume-padding-container'>
            <div>
              <div className='resume-item-heading'>Location</div>
              <div className='resume-item'>Rockland, MA</div>
            </div>
            <div>
              <div className='resume-item-heading'>Phone</div>
              <div className='resume-item'>339-788-0346</div>
            </div>
            <div>
              <div className='resume-item-heading'>Email</div>
              <div className='resume-item'>jdanmello@gmail.com</div>
            </div>
            <div>
              <div className='resume-item-heading'>Github</div>
              <div className='resume-item'>github.com/DanMello</div>
            </div>
            <div>
              <div className='resume-item-heading'>Personal Website</div>
              <div className='resume-item'>https://mellocloud.com</div>
            </div>
          </div>
          <div className='resume-category-container'>Education</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container-date'>2009 - 2013</div>
            <div className='resume-item-container'>Rockland High School</div>
          </div>
          <div className='resume-category-container'>Web Development Skills</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>HTML5</div>
              <div className='resume-item'>CSS3</div>
              <div className='resume-item'>JavaScript</div>
              <div className='resume-item'>ES6</div>
              <div className='resume-item'>React</div>
              {/* <div className='resume-item'>React Hooks</div> */}
              <div className='resume-item'>NGINX</div>
              <div className='resume-item'>Nodejs</div>
              <div className='resume-item'>Mysql</div>
              <div className='resume-item'>MongoDB</div>
            </div>
          </div>
          <div className='resume-category-container'>Workflow & Tools</div>
          <div className='resume-padding-container'>
            <div className='resume-item-container'>
              <div className='resume-item'>Git</div>
              <div className='resume-item'>NPM</div>
              <div className='resume-item'>Ubuntu</div>
              {/* <div className='resume-item'>Ubuntu Server 16</div> */}
              <div className='resume-item'>Linux Terminal</div>
              <div className='resume-item'>Tmux</div>
              <div className='resume-item'>Visual Studio Code</div>
              <div className='resume-item'>Unit testing with Jest</div>
              <div className='resume-item'>Webpack 4 & Babel 7</div>
              {/* <div className='resume-item'>Babel 7</div> */}
              <div className='resume-item'>Chrome DevTools</div>
            </div>
          </div>
        </div>

        <div className='resume-right-container'>

          <div className='resume-statement'>
            I got into web development when one of my old bosses asked me if I could build him a website, since I was good with computers I gave it a try. I really enjoyed it and continued learning and coding. Now three years later I feel comfortable enough with my coding skills and I am looking to become a professional front end developer.
          </div>
          
          <div className='resume-big-title'>Projects</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>tic-tac-chat <span className='resume-item-right-littleHeading'>(Play now at mellocloud.com)</span></div>
              <div className='resume-item-right-repo-container'>
                <div className='resume-item-right-repo-heading'>Front-end:</div>
                <div className='resume-item-right-subheading2'>https://github.com/DanMello/tic-tac-chat</div>
              </div>
              <div className='resume-item-right-repo-container'>
                <div className='resume-item-right-repo-heading'>Back-end:</div>
                <div className='resume-item-right-subheading2'>https://github.com/DanMello/tic-tac-chat-websocket</div>
              </div>
              <ul className='resume-ul'>
                <li>Developed a Tic Tac Toe game with a chat system using React Hooks, Node js, MongoDB, and WebSockets.</li>
                <li>Created a RESTful API allowing users to create or join games, play, and chat together all in real time.</li>
                <li>Developed a responsive user interface that works great on all devices.</li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>react-simpler-forms</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/react-simpler-forms</div>
              <ul className='resume-ul'>
                <li>Developed and published to npm a higher-order component along with three other components that manage your forms state and form submissions making it easy to create, 
                    validate, perform search queries, and submit single or multi-step forms without writing any logic using only declarative code.
                </li>
                {/* <li>Developed everything with zero dependencies and published to npm.</li> */}
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>react-video-player</div>
              <div className='resume-item-right-subheading'>https://github.com/DanMello/react-video-player</div>
              <ul className='resume-ul'>
                <li>Developed and published to npm a component that can play videos easily on mobile and desktop devices.</li>
                <li>Created all the controls using media events, including custom video seekbar, audio slider, play and pause button etc.</li>
              </ul>
            </div>
          </div>

          {/* <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>My Website</div>
              <div className='resume-item-right-subheading'>https://mellocloud.com</div>
              <ul className='resume-ul'>
                <li className='resume-li'>Developed front end using React and back end using NGINX and Node js.</li>
                <li className='resume-li'>Run server from home using ubuntu server 16 on an old computer. 
                Configured ssh key, https, and deploy user. Maintain server to make sure it stays up and running.
                </li>
                <li className='resume-li'>Update website with the latest versions of my resume, notes, projects and live demos.</li>
                <li className='resume-li'>Implemented some SEO optimization including server side rendering and configuring google search console.</li>
              </ul>
            </div>
          </div> */}

          <div className='resume-big-title' style={{marginTop: '10px'}}>Professional Experience</div>
          
          <div className='resume-line' />


          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>Roofing Salesman</div>
              <div className='resume-job-name'>Marine Home Improvement /<span className={'resume-date-work'}> Jan 2018 - Aug 2018</span></div>
              <ul className='resume-ul'>
                <li>Worked as a roofing salesman scheduling appointments and meeting with clients to show them our products. 
                  Gave clients estimates and followed up with them to make sales. 
                  Upon making sales I pulled roofing permits and delivered them to the job site and made sure the customers were satisfied with the work.
                  </li>
              </ul>
            </div>
          </div>

          <div className='resume-item-right-container'>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>Carpenter</div>
              <div className='resume-job-name'>Paul Caruso Inc. /<span className={'resume-date-work'}> 2014 - 2016</span></div>
              <ul className='resume-ul'>
                <li>Worked as a carpenter along side a small team on a variety of projects including dozens of interior apartment renovations at the brook house in Brookline, home renovations and framing of a house.</li>
              </ul>
            </div>
          </div>

          {/* <div className='resume-big-title' style={{marginTop: '10px'}}>Education</div>
          
          <div className='resume-line' />

          <div className='resume-item-right-container'>
            <div className='resume-item-right-when'>2009-2013</div>
            <div className='resume-item-right-subcontainer'>
              <div className='resume-item-right-heading'>Rockland High School</div>
            </div>
          </div> */}

        </div>

      </div>
    )
  }
}

export default hot(module)(Resume)




// import React, { Component } from 'react'
// import { hot } from 'react-hot-loader'

// import './resume.css'

// class Resume extends Component {

//   render() {

//     return (
//       <div className='resume-main-container'>
        
//         <div className='resume-left-container'>
//           <div className='resume-padding-container'>
//             <h1 className='resume-name'>Dan Mello</h1>
//             <h2 className='resume-title'>Front End Developer</h2>
//           </div>
//           <div className='resume-category-container'>Personal Info</div>
//           <div className='resume-padding-container'>
//             <div>
//               <div className='resume-item-heading'>Location</div>
//               <div className='resume-item'>Rockland, MA</div>
//             </div>
//             <div>
//               <div className='resume-item-heading'>Phone</div>
//               <div className='resume-item'>339-788-0346</div>
//             </div>
//             <div>
//               <div className='resume-item-heading'>Email</div>
//               <div className='resume-item'>jdanmello@gmail.com</div>
//             </div>
//             <div>
//               <div className='resume-item-heading'>Github</div>
//               <div className='resume-item'>github.com/DanMello</div>
//             </div>
//           </div>
//           <div className='resume-category-container'>Web Development Skills</div>
//           <div className='resume-padding-container'>
//             <div className='resume-item-container'>
//               <div className='resume-item'>HTML5</div>
//               <div className='resume-item'>CSS3</div>
//               <div className='resume-item'>JavaScript</div>
//               <div className='resume-item'>ES6</div>
//               <div className='resume-item'>React</div>
//               <div className='resume-item'>React Hooks</div>
//               <div className='resume-item'>NGINX</div>
//               <div className='resume-item'>Nodejs</div>
//               <div className='resume-item'>Mysql</div>
//               <div className='resume-item'>MongoDB</div>
//             </div>
//           </div>
//           <div className='resume-category-container'>Workflow & Tools</div>
//           <div className='resume-padding-container'>
//             <div className='resume-item-container'>
//               <div className='resume-item'>Git</div>
//               <div className='resume-item'>NPM</div>
//               <div className='resume-item'>Ubuntu</div>
//               <div className='resume-item'>Ubuntu Server 16</div>
//               <div className='resume-item'>Linux Terminal</div>
//               <div className='resume-item'>Tmux</div>
//               <div className='resume-item'>Visual Studio Code</div>
//               <div className='resume-item'>Unit testing with Jest</div>
//               <div className='resume-item'>Webpack 4</div>
//               <div className='resume-item'>Babel 7</div>
//               <div className='resume-item'>Chrome DevTools</div>
//             </div>
//           </div>
//         </div>

//         <div className='resume-right-container'>
          
//           <div className='resume-statement'>
//             Self taught computer programmer learning and coding on occasion eight to ten hours a day for the past three years.
//             Contributing to open source and looking to become a professional front end developer.
//           </div>
          
//           <div className='resume-big-title'>Projects</div>
          
//           <div className='resume-line' />

//           <div className='resume-item-right-container'>
//             <div className='resume-item-right-subcontainer'>
//               <div className='resume-item-right-heading'>tic-tac-chat <span className='resume-item-right-littleHeading'>(Play now at mellocloud.com)</span></div>
//               <div className='resume-item-right-repo-container'>
//                 <div className='resume-item-right-repo-heading'>Front-end:</div>
//                 <div className='resume-item-right-subheading2'>https://github.com/DanMello/tic-tac-chat</div>
//               </div>
//               <div className='resume-item-right-repo-container'>
//                 <div className='resume-item-right-repo-heading'>Back-end:</div>
//                 <div className='resume-item-right-subheading2'>https://github.com/DanMello/tic-tac-chat-websocket</div>
//               </div>
//               <ul className='resume-ul'>
//                 <li>Developed a Tic Tac Toe game with a chat system using React Hooks, Node js, MongoDB, and WebSockets.</li>
//                 <li>Created a RESTful API allowing users to create, join, play, and chat together all in real time.</li>
//                 <li>Developed a responsive user interface that works great on all devices.</li>
//               </ul>
//             </div>
//           </div>

//           <div className='resume-item-right-container'>
//             <div className='resume-item-right-subcontainer'>
//               <div className='resume-item-right-heading'>react-simpler-forms</div>
//               <div className='resume-item-right-subheading'>https://github.com/DanMello/react-simpler-forms</div>
//               <ul className='resume-ul'>
//                 <li>Developed a higher-order component that manages your forms state and form submissions.</li>
//                 <li>Also developed three other components that make it easy for developers to create, 
//                     validate, perform search queries, and submit single or multi-step forms without writing any logic using only declarative code.
//                 </li>
//                 <li>Developed everything with zero dependencies and published to npm.</li>
//               </ul>
//             </div>
//           </div>

//           {/* <div className='resume-item-right-container'>
//             <div className='resume-item-right-subcontainer'>
//               <div className='resume-item-right-heading'>react-video-player</div>
//               <div className='resume-item-right-subheading'>https://github.com/DanMello/react-video-player</div>
//               <ul className='resume-ul'>
//                 <li>Developed and published to npm, a component that can play videos easily on mobile and desktop devices.</li>
//                 <li>Created all the controls using media events, including custom video seekbar, audio slider, play and pause button etc.</li>
//               </ul>
//             </div>
//           </div> */}

//           <div className='resume-item-right-container'>
//             <div className='resume-item-right-subcontainer'>
//               <div className='resume-item-right-heading'>My Website</div>
//               <div className='resume-item-right-subheading'>https://mellocloud.com</div>
//               <ul className='resume-ul'>
//                 <li className='resume-li'>Developed front end using React and back end using NGINX and Node js.</li>
//                 <li className='resume-li'>Run server from home using ubuntu server 16 on an old computer. 
//                 Configured ssh key, https, and deploy user. Maintain server to make sure it stays up and running.
//                 </li>
//                 <li className='resume-li'>Update website with the latest versions of my resume, notes, projects and live demos.</li>
//                 <li className='resume-li'>Implemented some SEO optimization including server side rendering and configuring google search console.</li>
//               </ul>
//             </div>
//           </div>

//           <div className='resume-big-title' style={{marginTop: '10px'}}>Education</div>
          
//           <div className='resume-line' />

//           <div className='resume-item-right-container'>
//             <div className='resume-item-right-when'>2009-2013</div>
//             <div className='resume-item-right-subcontainer'>
//               <div className='resume-item-right-heading'>Rockland High School</div>
//             </div>
//           </div>

//         </div>

//       </div>
//     )
//   }
// }

// export default hot(module)(Resume)


// After high school 
// I started working construction for Paul Caruso Inc for 2 years renovating apartments in Boston. 
// I then worked for several other construction companies and most recently 
// I worked as a salesman for Marine Home Improvement selling roofs. I got into web development 
// when an old boss of mine asked me if I could build him a website, since I was good with computers 
// I gave it a try. I really enjoyed it and decided to keep learning and building things. Now three years later
//  of coding eight to ten hours a day, I am looking to become a professional front end developer.