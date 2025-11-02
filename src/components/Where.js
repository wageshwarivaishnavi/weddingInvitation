import React from 'react'
import where1 from '../assets/images/location.png'
import where2 from '../assets/images/where-2.jpg'
import where3 from '../assets/images/where-3.jpg'

function Where () {
  const handleLocationClick = () => {
    window.open('https://maps.app.goo.gl/QwaMHPmgyYLnnWHg7', '_blank');
  };

  return (
    <div id='whenwhere' className='whenwhere section-padding bg-pink'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mb-30'>
            {' '}
            <span className='oliven-title-meta'>When & Where</span>
           
          </div>
        </div>
        <div className='row'>
          <div className='item col-12 col-md-4'>
            <div 
              className='whenwhere-img' 
              onClick={handleLocationClick}
              style={{ cursor: 'pointer' }}
            >
              {' '}
              <img src={where1} alt='Vysya Mahal Location' />
            </div>
            <div className='content'>
              <h5>Vysya Mahal</h5>
              <p>
                <i className='ti-location-pin'></i>M56Q+6H5, Military Rd, Ammapet, Salem, Tamil Nadu 636003
              </p>
              <p>
                <i className='ti-time'></i> <span>12:00am – 13:00pm</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Where