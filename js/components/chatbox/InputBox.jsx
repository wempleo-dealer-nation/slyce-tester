import React from 'react';

const inputStyle = {
    width: '365px'
};

class InputBox extends React.Component
{
    constructor(props)
    {
        super(props);
        
        this.state = {
            message: ''
        };
    }
    
    handleSubmit(event)
    {
        let message = this.state.message;
        
        this.props.inputMessageHandler(message);
        this.resetInput();
    }
    
    handleChange(event)
    {
        let message = event.target.value;
        
        this.setState({message});
        
        if (event.charCode == 13) {
            this.props.inputMessageHandler(message);
            this.resetInput();
        }
    }
    
    resetInput()
    {
        let message = '';
        
        this.setState({message});
    }
    
    render()
    {
        return (
            <div>
                <input placeholder="Type Message Here" value={this.state.message} onKeyPress={this.handleChange.bind(this)} onChange={this.handleChange.bind(this)} type="text" style={inputStyle} />
                <button onClick={this.handleSubmit.bind(this)}>Send</button>
            </div>
        );
    }
}

export default InputBox;