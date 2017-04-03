import Express from 'express';
import SlyceWebdriverIO from './app/lib/SlyceWebdriverIO';

// Initialize express application
const app = Express();
// Server port listener
app.listen(3000);

// SlyceWebdriverIO.parse(jsonData);
let details = {
    number: '4000100111112223',
    expir: '0919',
    cvv: '123',
    zip: '123123',
};

// Home Route
app.get('/', function (req, res) {
    
    SlyceWebdriverIO.usaepayPaymentApproved(details).then(function(result) {
        res.send(result);
    });
    
});





