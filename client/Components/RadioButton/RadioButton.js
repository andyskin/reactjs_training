import React from 'react';
import radioStyles from './radiobutton.css';

class RadioButton extends React.Component {
    render() {
        return (
            <span className={`radioBtn ${this.props.class}`}>
                <label className="radioBtn__label">
                    <input type="radio" value={this.props.name} className="radioBtn__input" name="filter" checked={this.props.isChecked==='true'} />
                    {this.props.name}
                </label>
            </span>
        );
    }
}

export default RadioButton;