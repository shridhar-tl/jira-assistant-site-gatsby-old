import React, { PureComponent } from 'react';

class TextBox extends PureComponent {
    handleKey = (e) => {
        const { onEnterKey, value } = this.props;

        if (onEnterKey && (e.charCode || e.keyCode) === 13 && value?.trim()) {
            onEnterKey(value.trim());
        }
    }

    onChange = ({ currentTarget: { value } }) => this.props.onChange(value?.toString() || "");

    render() {
        const { value, maxLength, placeholder, className } = this.props;

        return (
            <input type="text" value={value} maxLength={maxLength} placeholder={placeholder}
                className={className} autoComplete="off"
                onChange={this.onChange} onKeyPress={this.handleKey} />
        );
    }
}

export default TextBox;