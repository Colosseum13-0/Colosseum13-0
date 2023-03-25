import React, { useEffect, useState } from 'react';
import "./event_page.scss"

function Event_page({ event_name, description, rules, registration }) {
  const [stateValue, setStateValue] = useState(description);
  const [shouldRunEffect, setShouldRunEffect] = useState(true);
  const [subtitle, setSubtitle] = useState("description");

  useEffect(() => {
    if (shouldRunEffect) {
      var s;
      const spanizeLetters = {
        settings: {
          letters: document.querySelectorAll('.js-spanize'),
        },
        init: function() {
          s = this.settings;
          this.bindEvents();
        },
        bindEvents: function(){
          s.letters.forEach(function(el) {
            var spanizer = el.textContent.trim().split("");
            el.innerHTML = '<span>' + spanizer.join('</span><span>') + '</span>';
          });
        },
      };
      spanizeLetters.init();
    }
  }, [stateValue, shouldRunEffect]);

  const handleClickRules = () => {
    setStateValue(rules);
    setSubtitle("rules")
    setShouldRunEffect(true);
  };

  const handleClickDescription = () => {
    setStateValue(description);
    setSubtitle("description")
    setShouldRunEffect(true);
  };

  const handleClickRegister = () => {
    setStateValue(rules);
    setSubtitle("register")
    setShouldRunEffect(true);
  };

  const styles4={
    height:'100vh'
  }

  return (
    <main className='event_info_main' style={styles4}>
      <section className="mast">
        <figure className="mast__bg" style={{backgroundImage: 'url(https://images6.alphacoders.com/614/614315.jpg)'}}></figure>
        <header className="mast__header">
          <h1 className="mast__title js-spanize">{event_name}</h1>
          <hr className="sep" />
          <h3 className="mast__title js-spanize subtitle">{subtitle}</h3>
          <div className='textbox'>
          <p className="mast__text js-spanize">
            {stateValue} 
          </p>
          </div>

        </header>
      </section>
      <div className='bottom'>     
          <div className="svg-wrapper">
  <a className='button' onClick={handleClickDescription}>About</a>
  <svg xmlns="http://www.w3.org/2000/svg">
  <rect id="shape" />
  </svg>
</div>
{/* Next button */}
<div className="svg-wrapper">
  <a className='button' onClick={handleClickRules}>Rules</a>
  <svg xmlns="http://www.w3.org/2000/svg">
  <rect id="shape" />
  </svg>
</div>
{/* Next button */}
<div className="svg-wrapper">
  <a className='button' onClick={handleClickRegister}>Register</a>
  <svg xmlns="http://www.w3.org/2000/svg">
  <rect id="shape" />
  </svg>
</div>
</div>

    </main>
    
  );
}

export default Event_page;