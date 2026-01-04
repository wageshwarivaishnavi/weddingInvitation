import React, { useState } from "react";
import storyImage from "../assets/images/1.webp";

function Story() {
  const [isInvitationHindi, setIsInvitationHindi] = useState(false);

  return (
    <div id="story" className="story section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-40 text-center">
            <span className="section-subtitle">INVITATION</span>
            <h2 className="section-title">The Beginning of Forever</h2>
          </div>
        </div>

        {/* Full Width Image */}
        <div className="row">
          <div className="col-md-12">
            <div className="story-image-container">
              <img
                src={storyImage}
                className="story-main-image"
                alt="Rishab and Wageshwari"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Content Below Image */}
        <div className="row">
          <div className="col-md-12">
            <div className="story-content-wrapper">
              <div className="story-quote-section">
                <span className="quote-mark-left">"</span>
                <h3 className="story-quote-text">
                  Together in love, bound by tradition
                </h3>
                <span className="quote-mark-right">"</span>
              </div>

              <div className="story-divider">
                <span className="divider-line-left"></span>
                <span className="divider-heart">♥</span>
                <span className="divider-line-right"></span>
              </div>

              <div className="invitation-section">
                <button
                  className="invitation-translate-btn"
                  onClick={() => setIsInvitationHindi(!isInvitationHindi)}
                  title={
                    isInvitationHindi ? "Switch to English" : "Switch to Hindi"
                  }
                >
                  {isInvitationHindi ? "अ" : "A"}
                </button>

                {isInvitationHindi ? (
                  <>
                    <h4 className="invitation-heading">
                      एक साथ होना एक सुंदर स्थान है।
                    </h4>
                    <p className="invitation-paragraph">
                      हमें अपने विवाह समारोह में आपको आमंत्रित करते हुए अत्यंत
                      धन्य महसूस हो रहा है। आपकी उपस्थिति हमारे खास दिन को और भी
                      अर्थपूर्ण बना देगी।
                    </p>
                  </>
                ) : (
                  <>
                    <h4 className="invitation-heading">
                      Together is a beautiful place to be.
                    </h4>
                    <p className="invitation-paragraph">
                      We feel incredibly blessed to invite you to our wedding
                      celebration. Your presence will make our big day even more
                      meaningful.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
