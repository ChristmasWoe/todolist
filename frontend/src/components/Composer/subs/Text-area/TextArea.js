import React from 'react';
import './TextArea.css';
import TextareaAutosize from 'react-textarea-autosize';

const Textarea = props => {
    return (
        <>
            <label id="TextArea" for="TextArea">Описание</label>
            <TextareaAutosize name="TextArea" className="TextArea" />
        </>
    )
}

export default Textarea;