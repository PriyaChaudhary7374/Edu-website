import React from 'react'
import "./About.css"
import {memo} from "react";

const AboutUs = () => {
  return (
    <div className="about-content">
        <h1>Our History</h1>
        <p>A remarkable about page is genuine, approachable, and distinguished. Visitors should get a glimpse into what working with you might be like. You can include personal interests, stories, and photos that convey the unique story of your business. You may also include information about who’s on your team and what their roles are.About pages are personal to you and your company, so the structure of your about page will vary based on what you want to highlight. However, you’ll start with the same writing process.</p>
    </div>
  )
}

export default  memo(AboutUs)