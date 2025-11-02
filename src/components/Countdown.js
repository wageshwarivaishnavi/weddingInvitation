import React, { useEffect, useState } from 'react'

function Countdown () {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isWeddingDay, setIsWeddingDay] = useState(false);

  useEffect(() => {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
    
    // UPDATE THIS DATE to your actual wedding date in the future
    const weddingDate = "Mar 04, 2026 00:00:00";
    const countDown = new Date(weddingDate).getTime();
    
    const x = setInterval(() => {    
      const now = new Date().getTime();
      const distance = countDown - now;

      if (distance < 0) {
        setIsWeddingDay(true);
        clearInterval(x);
      } else {
        setTimeLeft({
          days: Math.floor(distance / day),
          hours: Math.floor((distance % day) / hour),
          minutes: Math.floor((distance % hour) / minute),
          seconds: Math.floor((distance % minute) / second)
        });
      }
    }, 1000);

    return () => clearInterval(x);
  }, []);

  if (isWeddingDay) {
    return (
      <div
        className='section-padding bg-img bg-fixed'
        data-background='images/banner-1.jpg'
      >
        <div className='container'>
          <div className='row'>
            <div className='section-head col-md-12'>
              <h4>It's our wedding!</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id='countdown'
      className='section-padding bg-img bg-fixed'
      data-background='images/banner-1.jpg'
    >
      <div className='container'>
        <div className='row'>
          <div className='section-head col-md-12'>
            <h4>We will become a family in</h4>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            <ul>
              <li>
                <span id='days'>{timeLeft.days}</span>Days
              </li>
              <li>
                <span id='hours'>{timeLeft.hours}</span>Hours
              </li>
              <li>
                <span id='minutes'>{timeLeft.minutes}</span>Minutes
              </li>
              <li>
                <span id='seconds'>{timeLeft.seconds}</span>Seconds
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Countdown