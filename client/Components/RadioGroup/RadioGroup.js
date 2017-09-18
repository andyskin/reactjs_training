import React from 'react';
import RadioButton from '../RadioButton/RadioButton';
import styles from './radiogroup.css';

export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioButtons: props.radioButtons,
            selected: props.radioButtons[0]
        }
        this.radioGrpClass = (props.class) ? `radioGrp ${props.class}` : "radioGrp";
    }

    toggleRadioButton(value) {
        this.state.selected = value;
        console.log(this.state);
    }

    render() {
        const { radioButtons } = this.state;
        const elements = radioButtons.map((btn) => {
            return <RadioButton value={btn}
                                key={btn}
                                class="radioGrp__radioBtn"
                                isChecked={(this.state.selected === btn)}
                                handler={this.toggleRadioButton.bind(this)}
            />
        });

        return (
            <div className="radioGrp">
                {elements}
            </div>
        );
    }
}