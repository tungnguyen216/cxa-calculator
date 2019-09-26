import React, { Component } from 'react';
import './Screen.scss';

class Screen extends Component {
  render() {
    let content = this.props.content;

    if (content) {
      content = content.replace(/\//g, '÷').replace(/\*/g, 'x');
    }

    return (
      <div className={`screen ${ content.length > 11 ? 'small' : '' }`} ref={ cR => { this.screenRef = cR } }>
        <span className="screen__content" ref={ ctR => { this.contentRef = ctR } }>{ content || 0 }</span>
      </div>
    )
  }
}

export default Screen;