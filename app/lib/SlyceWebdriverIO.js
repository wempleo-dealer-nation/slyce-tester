import * as WebdriverIO from 'webdriverio';
import WebdriverIOCommands from './WebdriverIOCommands';

// webdriverio configuration
const webDriverOption = { 
    desiredCapabilities: { 
        browserName: 'chrome' 
    } 
};


class SlyceWebdriverIO
{
    constructor()
    {
        this.browser = WebdriverIO.remote(webDriverOption);
        this.registerCommands();
    }

    registerCommands()
    {
        WebdriverIOCommands.forEach(function(command) {
            this.browser.addCommand(command.name, command.func);
        }.bind(this));
    }
    
    parse(testData)
    {
        this.arrayOfScenarios = testData.map(function(data) {
            return TestCase.create(data.name, data.config, data.actions);
        });
    }
    
    usaepayPaymentApproved(details)
    {
        let url = 'https://slicelocal.cmsonline.com/?key=slicelocal&name=SLYCE%202.0&custid=BON-001&amount=635&display=popup';
        let cardDetails = details;
        // this.browser.init();
        
        var client = this.browser.init();
        
        return new Promise(function(resolve, reject) {
            client.payUsaepay(url, cardDetails).then(function(result) {
                resolve(result);
            });
        })

    }
    
    
}

export default new SlyceWebdriverIO;