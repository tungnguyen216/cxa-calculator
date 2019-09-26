import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NUMBER, OPERATION, CLEAR, EQUAL } from '../../utils/fixtures';
import { fireAction } from '../../redux/actions/calculationActions';
import Screen from '../Screen';
import KeyButton from '../KeyButton';
import './Calculator.scss';

class Calculator extends Component {
  componentDidMount() {
    document.addEventListener('keypress', e => {
      const { calc: { formula, prevActionType }, fireAction } = this.props;
      fireAction('', prevActionType, '', formula, e.keyCode);
    });
  }

  render() {
    const { calc: { formula } } = this.props;
    const numbers = Array.from(Array(9).keys());

    return (
      <div className="calculator">
        <Screen content={ formula } />
        <div className="operation-board">
          <div className="left">
            <KeyButton type={ CLEAR } classN="large" label="clear" value="clear" />
            {numbers.map(num => (
              <KeyButton key={ num } type={ NUMBER } label={ num + 1 } value={ num + 1 } />
            ))}
            <KeyButton type={ NUMBER } classN="large" label={ 0 } value={ 0 } />
          </div>
          <div className="right">
            <KeyButton type={ OPERATION } classN="color" label="÷" value="/" />
            <KeyButton type={ OPERATION } classN="color" label="x" value="*" />
            <KeyButton type={ OPERATION } classN="color" label="-" value="-" />
            <KeyButton type={ OPERATION } classN="color" label="+" value="+" />
            <KeyButton type={ EQUAL } classN="color" label="=" value="=" />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  calc: state.calculator
})

export default connect(mapStateToProps, { fireAction })(Calculator);