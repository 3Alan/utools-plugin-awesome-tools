var UA = require('ua-device');
var input = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3';

var output = new UA(input);
console.log(output);

utools.onPluginReady(() => {
    utools.showMessageBox({
        type: 'info',
        buttons: ['nice'],
        title: 'hello',
        message: output,
        defaultId: 1,
    });
});
