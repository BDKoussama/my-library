import React, { Component } from 'react';
import TweenMax from 'gsap';

class Alert extends Component {
    constructor(){
        super();
    }
    componentWillEnter (callback) {
        const el = this.container;
        TweenMax.fromTo(el, 0.3, {y: 100, opacity: 0}, {y: 0, opacity: 1, onComplete: callback});
      }
    
      componentWillLeave (callback) {
        const el = this.container;
        TweenMax.fromTo(el, 0.3, {y: 0, opacity: 1}, {y: -100, opacity: 0, onComplete: callback});
      }
    
  render() {
      const { title , message } = this.props ;
    return (
     <div className='alert-msg success' ref={c => this.container = c} >
        <p><strong>{title}</strong> Added to { message} .</p>
        <button type="button" className="close"> &times; </button>
    </div> 
    )
  }
}


export default Alert ; 
