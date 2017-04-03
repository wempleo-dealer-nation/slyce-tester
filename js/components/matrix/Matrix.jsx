import React from 'react';

class Matrix extends React.Component
{
    handleTest(event)
    {
        // let message = this.state.message;
        // 
        // this.props.inputMessageHandler(message);
        // this.resetInput();
    }
    
    render()
    {
        let config = this.props.config;
        console.log(config);
        return (
            <div>
                <h3>Standard Usaepay Payment</h3>
                Environment: local (https://slicelocal.cmsonline.com)<br />
                Params: (hide/show)<br /><br />
                Gateway: usaepay<br />
                Paymethod: card<br />
                &nbsp;&nbsp;Number: 10000<br />
                &nbsp;&nbsp;Expir: 0919<br />
                &nbsp;&nbsp;Cvv: 123<br />
                &nbsp;&nbsp;Postal: 123123<br />
            </div>
            
            
        );
    }
}

export default Matrix;