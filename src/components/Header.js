import React, { useState } from "react";

function Header() {
  const [isInvitationHindi, setIsInvitationHindi] = useState(false);

  const scrollToLocation = (e) => {
    e.preventDefault();
    const locationSection = document.getElementById("whenwhere");
    if (locationSection) {
      locationSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Add to Calendar functions
  const addToCalendar = (eventType) => {
    let calenderLink;

    switch (eventType) {
      case "haldi-marwa":
        calenderLink = "https://calendar.app.google/9UUuk1HsJqpqSvHo6";
        break;
      case "mehndi-sangeet":
        calenderLink = "https://calendar.app.google/ccDDi1s2LLtrcc5TA";
        break;
      default:
        calenderLink = "https://calendar.app.google/W8ysA3n9YmE2CFg39";
    }
    window.open(calenderLink, "_blank");
  };

  const downloadICS = (eventType) => {
    let title, startDate, endDate, details, location;
    location =
      "Fly Over Bridge of, Railway Station, Near, Sudarshan Path, Patna Sahib, Nalapar, Kali Asthan, Patna, Bihar 800008";

    switch (eventType) {
      case "haldi-marwa":
        title = "Wageshwari & Rishab - Haldi & Marwa";
        startDate = "20260217T100000";
        endDate = "20260217T120000";
        details = "Haldi & Marwa ceremonies for Wageshwari and Rishab";
        break;
      case "mehndi-sangeet":
        title = "Wageshwari & Rishab - Mehndi & Sangeet";
        startDate = "20260218T100000";
        endDate = "20260218T120000";
        details = "Mehndi and Sangeet celebrations for Wageshwari and Rishab";
        break;
      default:
        title = "Wageshwari & Rishab - Marriage Ceremony";
        startDate = "20260219T110000";
        endDate = "20260219T130000";
        details = "Join us for the wedding ceremony of Wageshwari and Rishab";
    }

    const icsContent = `BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nDTSTART:${startDate}\nDTEND:${endDate}\nSUMMARY:${title}\nDESCRIPTION:${details}\nLOCATION:${location}\nSTATUS:CONFIRMED\nSEQUENCE:0\nEND:VEVENT\nEND:VCALENDAR`;

    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = `${eventType}-Wageshwari-Rishab.ics`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleEventCardClick = (eventType) => {
    if (
      window.confirm(
        "Add to Calendar?\n\nClick OK for Google Calendar\nClick Cancel to download for Apple/Outlook"
      )
    ) {
      addToCalendar(eventType);
    } else {
      downloadICS(eventType);
    }
  };

  return (
    <header id="home" className="header valign bg-img parallaxie">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center caption">
            {/* Om Namah Shivaya - Top */}
            <div
              className="sacred-chant animate-box"
              data-animate-effect="fadeInDown"
            >
              <span className="om-symbol">ॐ नमः शिवाय</span>
            </div>

            <div className="hero-content">
              {/* Translate Button */}
              <button
                className="hero-translate-btn"
                onClick={() => setIsInvitationHindi(!isInvitationHindi)}
                title={
                  isInvitationHindi ? "Switch to English" : "Switch to Hindi"
                }
              >
                {isInvitationHindi ? "A" : "अ"}
              </button>

              {/* Invitation Message */}
              <div
                className="invitation-message animate-box"
                data-animate-effect="fadeInUp"
              >
                {isInvitationHindi ? (
                  <>
                    <p className="invite-line-2">
                      हमारे विवाह समारोह का जश्न मनाने के लिए
                    </p>
                    <p className="invite-line-3">
                      आपको स्नेहपूर्वक आमंत्रित करते हैं
                    </p>
                  </>
                ) : (
                  <>
                    <p className="invite-line-2">
                      We cordially invite you to celebrate
                    </p>
                    <p className="invite-line-3">The wedding of</p>
                  </>
                )}
              </div>

              {/* Names and Parents Layout */}
              <div className="names-section">
                {/* Bride Section */}
                <div className="bride-section">
                  <h1
                    className="name-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    {isInvitationHindi ? "वागेश्वरी" : "Wageshwari"}
                  </h1>
                  {isInvitationHindi ? (
                    <>
                      <p className="parent-label">कन्या</p>
                      <p className="parent-names">
                        स्व. अनिल कुमार और श्रीमती रजनी गुप्ता
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="parent-label">DAUGHTER OF</p>
                      <p className="parent-names">
                        Late Anil Kumar & Mrs. Rajani Gupta
                      </p>
                    </>
                  )}
                </div>

                {/* Ampersand */}
                <div className="ampersand-wrapper">
                  <span className="ampersand-large">&</span>
                </div>

                {/* Groom Section */}
                <div className="groom-section">
                  <h1
                    className="name-text animate-box"
                    data-animate-effect="fadeInUp"
                  >
                    {isInvitationHindi ? "ऋषभ" : "Rishab"}
                  </h1>
                  {isInvitationHindi ? (
                    <>
                      <p className="parent-label">पुत्र</p>
                      <p className="parent-names">
                        श्री रंजीत कुमार रंजन और श्रीमती रेखा देवी
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="parent-label">SON OF</p>
                      <p className="parent-names">
                        Mr. Ranjit Kumar Ranjan & Mrs. Rekha Devi
                      </p>
                    </>
                  )}
                </div>
              </div>

              {/* Elegant divider */}
              <div className="hero-divider">
                <span className="divider-line-left"></span>
                <span className="divider-icon">♥</span>
                <span className="divider-line-right"></span>
              </div>

              {/* Subtitle */}
              <p
                className="hero-subtitle animate-box"
                data-animate-effect="fadeInUp"
              >
                {isInvitationHindi
                  ? "आज से हमेशा के लिए एक साथ"
                  : "Together Forever, From This Day"}
              </p>

              {/* Event details cards - CLICKABLE */}
              <div className="event-cards">
                <div
                  className="event-card animate-box"
                  data-animate-effect="fadeInUp"
                  onClick={() => handleEventCardClick("haldi-marwa")}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleEventCardClick("haldi-marwa")
                  }
                >
                  <div className="event-card-inner">
                    <div className="calendar-icon-badge">
                      <i className="ti-calendar"></i>
                    </div>
                    <h3 className="event-title">
                      {isInvitationHindi ? "हल्दी और मरवा" : "Haldi & Marwa"}
                    </h3>
                    <div className="event-date">
                      {isInvitationHindi ? "17 फ़रवरी, 2026" : "Feb 17, 2026"}
                    </div>
                    <div className="event-time">
                      {isInvitationHindi
                        ? "सुबह 10:00 बजे से"
                        : "10:00 AM Onwards"}
                    </div>
                    <div className="add-calendar-hint">
                      <i className="ti-plus"></i>
                      {isInvitationHindi
                        ? "कैलेंडर में जोड़ें"
                        : "Add to Calendar"}
                    </div>
                  </div>
                </div>

                <div
                  className="event-card animate-box"
                  data-animate-effect="fadeInUp"
                  onClick={() => handleEventCardClick("mehndi-sangeet")}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleEventCardClick("mehndi-sangeet")
                  }
                >
                  <div className="event-card-inner">
                    <div className="calendar-icon-badge">
                      <i className="ti-calendar"></i>
                    </div>
                    <h3 className="event-title">
                      {isInvitationHindi
                        ? "मेहंदी और संगीत"
                        : "Mehndi & Sangeet"}
                    </h3>
                    <div className="event-date">
                      {isInvitationHindi ? "18 फ़रवरी, 2026" : "Feb 18, 2026"}
                    </div>
                    <div className="event-time">
                      {isInvitationHindi
                        ? "शाम 06:00 - 10:00"
                        : "06:00 PM Onwards"}
                    </div>
                    <div className="add-calendar-hint">
                      <i className="ti-plus"></i>
                      {isInvitationHindi
                        ? "कैलेंडर में जोड़ें"
                        : "Add to Calendar"}
                    </div>
                  </div>
                </div>

                <div
                  className="event-card animate-box"
                  data-animate-effect="fadeInUp"
                  onClick={() => handleEventCardClick("ceremony")}
                  role="button"
                  tabIndex="0"
                  onKeyPress={(e) =>
                    e.key === "Enter" && handleEventCardClick("ceremony")
                  }
                >
                  <div className="event-card-inner">
                    <div className="calendar-icon-badge">
                      <i className="ti-calendar"></i>
                    </div>
                    <h3 className="event-title">
                      {isInvitationHindi
                        ? "तिलक और विवाह समारोह"
                        : "Tilak and Marriage Ceremony"}
                    </h3>
                    <div className="event-date">
                      {isInvitationHindi ? "19 फ़रवरी, 2026" : "Feb 19, 2026"}
                    </div>
                    <div className="event-time">
                      {isInvitationHindi
                        ? "शाम 7:00 बजे से"
                        : "07:00 PM Onwards"}
                    </div>
                    <div className="add-calendar-hint">
                      <i className="ti-plus"></i>
                      {isInvitationHindi
                        ? "कैलेंडर में जोड़ें"
                        : "Add to Calendar"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="hero-buttons">
                <button
                  onClick={scrollToLocation}
                  className="btn-primary hero-btn"
                >
                  <i className="ti-location-pin"></i>
                  {isInvitationHindi ? "स्थान देखें" : "View Location"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
