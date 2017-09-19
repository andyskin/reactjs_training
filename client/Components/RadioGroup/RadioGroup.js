import React from 'react';
import styles from './radiogroup.css';

export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.radioButtons[0]
        }
        this.toggleRadioButton = this.toggleRadioButton.bind(this);
        this.radioGrpClass = (props.class) ? `radioGrp ${props.class}` : "radioGrp";
    }

    toggleRadioButton(event) {
        this.setState({
            selected: event.currentTarget.value
        });
    }

    render() {
        const elements = this.props.radioButtons.map( (button) => {
            const labelClass = (this.state.selected === button) ? "radioGrp__label checked" : "radioGrp__label";
            return ( 
                <label key={button} className={labelClass}>
                    <input type="radio"
                        className="radioGrp__input"
                        value={button}
                        checked={this.state.selected === button}
                        onChange={this.toggleRadioButton}
                    />
                    {button}
                </label>
            );
        });

        return (
            <div className="radioGrp">
                {elements}
            </div>
        );
    }
}