import React from 'react';
import radioStyles from './radiobutton.css';

class RadioButton extends React.Component {
    constructor(props) {
        super(props);
        this.radioClass = (props.class) ? `radioBtn ${props.class}` : 'radioBtn';
    }

    handleClick(changeEvent) {
        this.props.handler(changeEvent.target.innerHTML);
    }

    render() {
        return (
            <span className={this.radioClass} onClick={this.handleClick.bind(this)}>
                <input type="radio"
                    name="filter"
                    className="radioBtn__input"
                    data-value={this.props.value}
                    checked={this.props.isChecked}
                    onChange={this.handleClick.bind(this)}
                />
                <label htmlFor={this.props.value} className="radioBtn__label" >
                    {this.props.value}
                </label>
            </span>
        );
    }
}

export default RadioButton;