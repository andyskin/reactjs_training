import React from 'react';
import radioStyles from './radiobutton.css';

class RadioButton extends React.Component {
    render() {
        return (
            <span className="radioBtn">
                <input type="radio" id={this.props.name} className="radioBtn__input" name="filter" />
                <label htmlFor={this.props.name} className="radioBtn__label">{this.props.name}</label>
            </span>
        );
    }
}

export default RadioButton;