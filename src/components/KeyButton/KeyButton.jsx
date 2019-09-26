import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fireAction } from '../../redux/actions/calculationActions';
import './KeyButton.scss';

class KeyButton extends Component {

  render() {
    const { classN, label, type, prevActionType, value, formula } = this.props;

    return (
      <button 
        className={ `keybutton keybutton--${ classN }` }
        onClick={ () => this.props.fireAction(type, prevActionType, value, formula) }
      >{ label }</button>
    )
  }
}

const mapStateToProps = state => ({
  prevActionType: state.calculator.prevActionType,
  formula: state.calculator.formula
})

export default connect(mapStateToProps, { fireAction })(KeyButton);