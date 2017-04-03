import React from 'react';

const textAreaStyle = {
    resize: 'none',
}

class Monitor extends React.Component
{
    render()
    {
        let messages = this.props.messages.join("\n");
        
        return (
            <div>
                <textarea cols="50" rows="20" readOnly value={messages} style={textAreaStyle}></textarea>
            </div>
        );
    }
}

export default Monitor;