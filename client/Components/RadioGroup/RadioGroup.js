import React from 'react';
import styles from './radiogroup.css';

export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioButtons: props.radioButtons,
            selected: props.radioButtons[0]
        }
        this.toggleRadioButton = this.toggleRadioButton.bind(this);
        this.radioGrpClass = (props.class) ? `radioGrp ${props.class}` : "radioGrp";
    }

    toggleRadioButton(event) {
        this.setState({
            selected: event.target.value
        });
        console.log(this.state.selected);
    }

    render() {
        const { radioButtons } = this.state;
        const elements = radioButtons.map((btn) => {
            return <span key={btn}>
                            <input type="radio"
                    className="radioGrp__input"
                    value={btn}
                    checked={(this.state.selected === btn)}
                    onChange={this.toggleRadioButton}
                />
                <label htmlFor={btn} className="radioGrp__label">
                {btn}

            </label></span>
        });

        return (
            <div className="radioGrp">
                {elements}
            </div>
        );
    }
}