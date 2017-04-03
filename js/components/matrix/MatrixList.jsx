import React from 'react';
import Matrix from './Matrix';

const config = {
    scope: 'onetime',
    name: 'Usaepay Payment',
    gateway: 'usaepay',
    paymentMethod: {
        type: 'card',
        details: {
            number: '1000',
            expir: '0919',
            cvv: '123',
            postal: '123123123'
        }
    }
    
}

class MatrixList extends React.Component
{
    render()
    {
        return (
            <div>
                <h3>List of Test Matrix</h3>
                
                <label>Select environment: </label>
                <select>
                    <option>local</option>
                    <option>dev</option>
                    <option>live</option>
                </select>
                <br />
                <label>Select version: </label>
                <select>
                    <option>standard</option>
                    <option>portal</option>
                    <option>save</option>
                </select>
                <br />
                <label>Params Set: </label>
                <select>
                    <option>Standard</option>
                    <option>Without customer</option>
                    <option>live</option>
                </select>
                <Matrix config={ config } />
            </div>
        );
    }
}

export default MatrixList;