import React from 'react'
import storyImage from '../assets/images/story.jpg'
function Story () {
  return (
    <div id='story' className='story section-padding'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12 mb-30'>
            <span className='oliven-title-meta'>Invitation</span>
          </div>
          <div className='col-md-5 mb-30'>
             
            <div className='story-img animate-box'>
              <div className='img'>
                {' '}
                <img src={storyImage} className='img-fluid' alt='' />{' '}
              </div>
              <div
                className='story-img-2 story-wedding'
              ></div>
            </div>
          </div>
          <div className='col-md-7 animate-box'>
            <h4 className='oliven-story-subtitle'>Together in love, bound by tradition</h4>
            <p>
              Two people who feel like home to each other.
Who finish each other’s fries and still argue about the last bite. 🍟
Who turn ordinary days into unforgettable memories.
Who dream the same dreams and laugh at the same silly jokes.
Who understand each other’s silence better than anyone’s words.
Who see the world in the same shade of happy, even on the tough days.
Who hold hands through chaos and dance through calm.
Who are ready to build a lifetime together, heart to heart, soul to soul.🤍
            </p>
            <h4>Together is a beautiful place to be.</h4>
            <p>
              We feel incredibly blessed to invite you to our wedding celebration.
A beautiful journey of love has brought us to this joyful moment.
Your presence will make our big day even more meaningful.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Story
