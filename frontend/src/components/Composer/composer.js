import React, {Component} from 'react';
import './composer.css';
import ColorPicker from './subs/Color-picker/colorPicker'
import TextArea from './subs/Text-area/TextArea';
import MiniCalendar from './subs/Calendar/Calendar';
import RadioButtons from './subs/Radio-Buttons/RadioButtons';
import NameInput from './subs/Name-input/Name-Input';

class Composer extends Component {
    render() {
        return(
            <div className="composer">
                <NameInput/>
                <ColorPicker/>
                <RadioButtons/>
                <TextArea/>
                <MiniCalendar/>
            </div>
        )
    }
}

export default Composer;