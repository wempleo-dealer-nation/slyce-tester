var setCard = function(details) {
    return this.setValue("#cardInput", details.number)
        .setValue("#expirInput", details.expir)
        .setValue("#cvvInput", details.cvv)
        .setValue("#zipInput", details.zip)
};

var setCardAndSubmit = function(details) {
    return this.waitForVisible("#epayform-card-frame", 15000)
        .frame("epayform-card-frame")
        .setCard(details)
        .click("#card-inputs-submit")
        .frameParent()
};

var getResult = function() {
    return this.waitForVisible("#notifier-result-refnum", 5000)
        .getText("#notifier-result-refnum")
        .then(function(refnum) {
            return this.getText("#notifier-result-authcode").then(function(auth) {
                return {
                    refnum: refnum,
                    authcode: auth.replace('Authcode: ', '')
                }
            })
        });
};

var payUsaepay = function(url, details) {
    return this.url(url)
        .setCardAndSubmit(details)
        .getResult();    
};

module.exports = [
    { name: 'setCard', func: setCard },
    { name: 'setCardAndSubmit', func: setCardAndSubmit },
    { name: 'getResult', func: getResult },
    { name: 'payUsaepay', func: payUsaepay },
]