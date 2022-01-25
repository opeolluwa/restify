'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Analytics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Analytics.init({
    pageCount: DataTypes.INTEGER,
    isYaBrowser: DataTypes.INTEGER,
    isAuthoritative: DataTypes.INTEGER,
    isMobile: DataTypes.INTEGER,
    isMobileNative: DataTypes.INTEGER,
    isTablet: DataTypes.INTEGER,
    isiPad: DataTypes.INTEGER,
    isiPod: DataTypes.INTEGER,
    isiPhone: DataTypes.INTEGER,
    isiPhoneNative: DataTypes.INTEGER,
    isAndroid: DataTypes.INTEGER,
    isAndroidNative: DataTypes.INTEGER,
    isBlackberry: DataTypes.INTEGER,
    isOpera: DataTypes.INTEGER,
    isIE: DataTypes.INTEGER,
    isEdge: DataTypes.INTEGER,
    isIECompatibilityMode: DataTypes.INTEGER,
    isSafari: DataTypes.INTEGER,
    isFirefox: DataTypes.INTEGER,
    isWebkit: DataTypes.INTEGER,
    isChrome: DataTypes.INTEGER,
    isKonqueror: DataTypes.INTEGER,
    isOmniWeb: DataTypes.INTEGER,
    isSeaMonkey: DataTypes.INTEGER,
    isFlock: DataTypes.INTEGER,
    isAmaya: DataTypes.INTEGER,
    isPhantomJS: DataTypes.INTEGER,
    isEpiphany: DataTypes.INTEGER,
    isDesktop: DataTypes.INTEGER,
    isWindows: DataTypes.INTEGER,
    isLinux: DataTypes.INTEGER,
    isLinux64: DataTypes.INTEGER,
    isMac: DataTypes.INTEGER,
    isChromeOS: DataTypes.INTEGER,
    isBada: DataTypes.INTEGER,
    isSamsung: DataTypes.INTEGER,
    isRaspberry: DataTypes.INTEGER,
    isBot: DataTypes.INTEGER,
    isCurl: DataTypes.INTEGER,
    isAndroidTablet: DataTypes.INTEGER,
    isWinJs: DataTypes.INTEGER,
    isKindleFire: DataTypes.INTEGER,
    isSilk: DataTypes.INTEGER,
    isCaptive: DataTypes.INTEGER,
    isSmartTV: DataTypes.INTEGER,
    isUC: DataTypes.INTEGER,
    isFacebook: DataTypes.INTEGER,
    isAlamoFire: DataTypes.INTEGER,
    isElectron: DataTypes.INTEGER,
    silkAccelerated: DataTypes.INTEGER,
    browser: DataTypes.STRING,
    os: DataTypes.STRING,
    platform: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AnalyticsDB',
  });
  return Analytics;
};