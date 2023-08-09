import React, { PureComponent } from 'react';

function TextBox({ onEnterKey, onChange, value, maxLength, placeholder, className }) {
    const handleKey = (e) => {
        if (onEnterKey && (e.charCode || e.keyCode) === 13 && value?.trim()) {
            onEnterKey(value.trim());
        }
    }

    const handleChange = ({ currentTarget: { value: newValue } }) => onChange(newValue?.toString() || "");

    return (
        <input type="text" value={value} maxLength={maxLength} placeholder={placeholder}
            className={className} autoComplete="off"
            onChange={handleChange} onKeyPress={handleKey} />
    );
}

export default TextBox;