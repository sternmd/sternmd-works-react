import React from 'react';

class Yinyang extends React.Component {

  handleClick(e) {
    e.preventDefault();
    // let burger = document.querySelector('.burger');
    // burger.click();
    document.documentElement.classList.toggle('invert');
   }

  render() {
    return (
      <div>
      <section className="hero" id="hero">
            <div className="hero-body">
              <div className="is-hidden-mobile" id="circle">
                <img src="images/yin-yang.svg" className="yinyang" alt="yin yang" onClick={this.handleClick} />
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                  <defs>
                      <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                  </defs>
                  <circle cx="150" cy="100" r="75" fill="none"/>
                  <g>
                    <use xlinkHref="#circlePath" fill="none"/>
                    <text fill="#FFF">
                        <textPath xlinkHref="#circlePath">c a r p e d i e m</textPath>
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </section>
      </div>
    )
  }
}
export default Yinyang;
