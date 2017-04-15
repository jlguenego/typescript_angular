// This is a module because we use export (at the file end)

// privateData is not exported and not visible outside of this file.
var privateData = 8;
var myLib = {
    x: 12 + privateData,
    hello: function () {
        console.log('hello');
        for (var i = 0; i < 10; i++) {
            setTimeout(function () {
                console.log('i', i);
            }, 2000);
        }

        for (let i = 0; i < 12; i++) {
            setTimeout(function () {
                console.log('i', i);
            }, 2000);
        }

        for (var i = 0; i < 15; i++) {
            (function(i) {
                setTimeout(function () {
                    console.log('i', i);
                }, 2000);
            })(i);
        }
    }
};

export default myLib;