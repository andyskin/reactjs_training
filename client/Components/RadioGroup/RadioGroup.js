import React from 'react';
import classNames from 'classNames';
import styles from './radiogroup.css';

export default class RadioGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: props.radioButtons[0]
        }
        this.toggleRadioButton = this.toggleRadioButton.bind(this);
    }

    toggleRadioButton(event) {
        this.setState({
            selected: event.currentTarget.value
        });
    }

    render() {
        const radioGrpClass = classNames('radioGrp', this.props.className);

        const elements = this.props.radioButtons.map( (button) => {
            const labelClass = classNames({
                radioGrp__label: true,
                checked: this.state.selected === button
            });

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
            <div className={radioGrpClass}>
                {elements}
            </div>
        );
    }
}