function analytics(req, res, next) {

    const useragent = require('express-useragent');

    app.use(useragent.express());
    app.get('/ua', function (req, res) {

        const {
            isMobile,
            isTablet,
            isiPad,
            isiPod,
            isiPhone,
            isAndroid,
            isBlackberry,
            isOpera,
            isIE,
            isEdge,
            isSafari,
            isFirefox,
            isWebkit,
            isChrome,
            isKonqueror,
            isDesktop,
            isWindows,
            isLinux,
            isLinux64,
            isMac,
            isChromeOS,
            isSamsung,
            isRaspberry,
            isBot,
            isCurl,
            isKindleFire,
            isSmartTV,
            isUC,
            isFacebook,
            isElectron,
            browser,
            os
        }
            = req.useragent


        const analytics = {
            browsers: {
                isOpera,
                isIE,
                isEdge,
                isSafari,
                isFirefox,
                isWebkit,
                isChrome,
                isKonqueror
            }, platforms: {
                isBot,
                isCurl,
                isKindleFire,
                isSmartTV,
                isUC,
                isFacebook,
                isElectron,
                browser,
                os
            },
            os: {
                isWindows,
                isLinux,
                isLinux64,
                isMac,
                isChromeOS,
                isSamsung,
                isRaspberry,
            },
            device_type: {
                isMobile,
                isTablet,
                isiPad,
                isiPod,
                isiPhone,
                isAndroid,
                isBlackberry,
                isDesktop,
            }
        }



        res.send({ analytics });
    });


}


module.exports = analytics;