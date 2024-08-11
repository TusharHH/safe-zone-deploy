import React from 'react'
import "../LearnPro.css"
import { Link } from 'react-router-dom'

const LearnProtect = () => {
  return (
    <div className='LearnPro'>
      <div className="headerTitle">

        <span className="title">
          Learn & Protect
        </span>
      </div>
      <div className="tips">
        <div className="title">
          <span className='material-symbols-outlined icons'>add</span>
          <span>Gereral Tips</span>
        </div>
        <div className="tipBoxs">
          <div className="tipBox">
            <span className='title'>Build an Emergency Kit</span>
            <span className='desc'> Essentials: Gather basic supplies like water, food, a flashlight, batteries, a first-aid kit, medications, and important documents.
              Accessibility: Keep the kit in an easy-to-reach place, and make sure everyone in the family knows where it is.</span>
          </div>

          <div className="tipBox">
            <span className='title'>Help Your Community
            </span>
            <span className='desc'>Share Knowledge: Teach your neighbors, friends, and family about disaster preparedness.
              Community Involvement: Join local disaster preparedness groups or attend community meetings.
            </span>
          </div>

          <div className="tipBox">
            <span className='title'>Stay Connected</span>
            <span className='desc'> Communication Plan: Make sure everyone knows how to get in touch during an emergency, including where to go and who to call.
              Social Media & Apps: Use social media or emergency apps to stay informed and connected during a disaster.
            </span>
          </div>

          <div className="tipBox">
            <span className='title'>Know When to Evacuate</span>
            <span className='desc'> Follow Instructions: If authorities say to evacuate, do it quickly and safely.
              Grab Your Kit: Take your emergency kit and any essentials with you.</span>
          </div>

          <div className="tipBox">
            <span className='title'>Practice Good Hygiene</span>
            <span className='desc'> Clean Water: Ensure your emergency kit has enough clean water for everyone.
              Sanitation: Include items like hand sanitizer, wipes, and trash bags to maintain hygiene during a disaster.</span>
          </div>
        </div>
      </div>
      <div className="helpVideos">
        <div className="title">
          <span className='material-symbols-outlined icons'>help</span>
          <span>Learn through Videos</span>
        </div>
        <div className="videos">

          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/OCjl6tp8dnw?si=W63m3QsmsugPCSN9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bPbPxKXrd40?si=6t3RRY2lfpyBVRE7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BLEPakj1YTY?si=Nu5yZbTdPYEP2-xc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/dvuGyLZh-og?si=GLumT9UB7auQhmiD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/3H_EbUdQ7_0?si=W5awgJPXYJoCTQPU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>

        </div>
      </div>
      <div className="direct mt-5" style={{ margin: "auto" }}>
        <Link to="/LearnProtect">Learn More +</Link>
      </div>
    </div>
  )
}

export default LearnProtect
