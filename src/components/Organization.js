import { useState } from "react";
import haldi from "../assets/images/haldi.png";
import mehndi from "../assets/images/mehndi.png";
import marwa from "../assets/images/marwa.png";
import sangeet from "../assets/images/sangeet.png";
import pheras from "../assets/images/pheras.png";
import vidaai from "../assets/images/vidai.png";
import baraat from "../assets/images/bharat.png";

function Organization() {
  const [translations, setTranslations] = useState({});

  const ceremonies = [
    {
      number: "01",
      title: "HALDI",
      titleHindi: "हल्दी (आशीर्वाद)",
      date: "17 February",
      dateHindi: "17 फरवरी",
      description:
        "A ritual where turmeric paste is applied to the bride and groom by family members to bless them and prepare them for the wedding day.",
      descriptionHindi:
        "एक रस्म जिसमें परिवारजन दुल्हन और दूल्हे पर हल्दी लेप लगाते हैं, उन्हें आशीर्वाद देते हुए और विवाह के दिन के लिए तैयार करते हैं।",
      image: haldi,
    },
    {
      number: "02",
      title: "MARWA",
      titleHindi: "मरवा (रिवाज)",
      date: "17 February",
      dateHindi: "17 फरवरी",
      description:
        "A regional custom observed in parts of Bihar where playful rituals and family traditions are performed to honor the couple and bring good fortune.",
      descriptionHindi:
        "बिहार के कुछ हिस्सों में मनाया जाने वाला स्थानीय रीति-रिवाज, जहाँ दंपति का सम्मान और शुभकामनाएँ देने के लिए खेल-तमाशे और पारिवारिक परंपराएँ निभाई जाती हैं।",
      image: marwa,
    },
    {
      number: "03",
      title: "MEHNDI",
      titleHindi: "मेहन्दी (हाथों पर सजावट)",
      date: "18 February",
      dateHindi: "18 फरवरी",
      description:
        "A colourful pre-wedding event where henna is applied on the bride's (and sometimes groom's) hands and feet, accompanied by songs, dance and family festivities.",
      descriptionHindi:
        "दुल्हन (और कभी-कभी दूल्हा) के हाथों और पैरों पर हिना लगाई जाती है; गीत, नृत्य और पारिवारिक खुशियों के साथ यह एक रंगीन समारोह है।",
      image: mehndi,
    },
    {
      number: "04",
      title: "SANGEET",
      titleHindi: "संगीत संध्या",
      date: "18 February",
      dateHindi: "18 फरवरी",
      description:
        "An evening of music and dance where both families celebrate together, perform songs and dances, and enjoy a joyous cultural programme.",
      descriptionHindi:
        "एक संगीत और नृत्य की शाम जहाँ दोनों परिवार साथ मिलकर जश्न मनाते हैं, गीत और नृत्य प्रस्तुत करते हैं और आनंददायक कार्यक्रम का आनंद लेते हैं।",
      image: sangeet,
    },
    {
      number: "05",
      title: "BARAAT",
      titleHindi: "बाराात (दूल्हा की शोभा यात्रा)",
      date: "19 February",
      dateHindi: "19 फरवरी",
      description:
        "The groom's procession to the wedding venue, often accompanied by music, dance, and celebratory rituals as family and friends join the march.",
      descriptionHindi:
        "विवाह स्थल की ओर दूल्हे की शोभायात्रा, अक्सर संगीत, नृत्य और उत्सव के साथ जहाँ परिवार और मित्र भी शामिल होते हैं।",
      image: baraat,
    },
    {
      number: "06",
      title: "WEDDING (PHERAS)",
      titleHindi: "विवाह (फेरे)",
      date: "19 February",
      dateHindi: "19 फरवरी",
      description:
        "The core wedding ceremony where vows are exchanged around the sacred fire (saat phere), seeking blessings for a prosperous married life.",
      descriptionHindi:
        "मुख्य विवाह समारोह जहाँ पवित्र अग्नि के चारों ओर (सात फेरे) वचन लिये जाते हैं और सुखी वैवाहिक जीवन की कामना की जाती है।",
      image: pheras,
    },
    {
      number: "07",
      title: "VIDAAI",
      titleHindi: "विदाई",
      date: "19 February",
      dateHindi: "19 फरवरी",
      description:
        "Vidaai marks the emotional farewell to the bride as she leaves her parental home. The reception that follows is a celebration where both families greet the couple.",
      descriptionHindi:
        "विदाई वह भावनात्मक विला पर है जब दुल्हन अपने पैतृक घर को छोड़ती है। उसके बाद रिसेप्शन में दोनों परिवार दंपति का स्वागत कर के जश्न मनाते हैं।",
      image: vidaai,
    },
  ];

  const toggleTranslation = (index) => {
    setTranslations((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div id="organization" className="organization section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-30 text-center">
            <span className="oliven-title-meta">Vivaha Vaibhavam</span>
          </div>
        </div>
        <div className="ceremonies-list">
          {ceremonies.map((ceremony, index) => (
            <div key={index} className="ceremony-item">
              <div className="ceremony-image-wrapper">
                <img
                  src={ceremony.image}
                  alt={ceremony.title}
                  className="ceremony-image"
                  loading="lazy"
                />
                <div className="image-border-effect"></div>
              </div>
              <div className="ceremony-text">
                <div className="ceremony-header">
                  <h2 className="custom-font ceremony-number">
                    {ceremony.number}
                  </h2>
                  <button
                    className="invitation-translate-btn"
                    onClick={() => toggleTranslation(index)}
                    aria-label={
                      translations[index] ? "Show English" : "Show Hindi"
                    }
                    title={
                      translations[index]
                        ? "Switch to English"
                        : "Switch to Hindi"
                    }
                  >
                    {translations[index] ? "A" : "अ"}
                  </button>
                </div>
                <h5 className="ceremony-title">
                  {translations[index] ? ceremony.titleHindi : ceremony.title}
                </h5>
                <div className="title-underline"></div>
                <p className="ceremony-date ">
                  {translations[index] ? ceremony.dateHindi : ceremony.date}
                </p>
                <p className="ceremony-description">
                  {translations[index]
                    ? ceremony.descriptionHindi
                    : ceremony.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organization;
