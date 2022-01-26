'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Analytics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pageCount: {
        type: Sequelize.INTEGER
      },
      isYaBrowser: {
        type: Sequelize.INTEGER
      },
      isAuthoritative: {
        type: Sequelize.INTEGER
      },
      isMobile: {
        type: Sequelize.INTEGER
      },
      isMobileNative: {
        type: Sequelize.INTEGER
      },
      isTablet: {
        type: Sequelize.INTEGER
      },
      isiPad: {
        type: Sequelize.INTEGER
      },
      isiPod: {
        type: Sequelize.INTEGER
      },
      isiPhone: {
        type: Sequelize.INTEGER
      },
      isiPhoneNative: {
        type: Sequelize.INTEGER
      },
      isAndroid: {
        type: Sequelize.INTEGER
      },
      isAndroidNative: {
        type: Sequelize.INTEGER
      },
      isBlackberry: {
        type: Sequelize.INTEGER
      },
      isOpera: {
        type: Sequelize.INTEGER
      },
      isIE: {
        type: Sequelize.INTEGER
      },
      isEdge: {
        type: Sequelize.INTEGER
      },
      isIECompatibilityMode: {
        type: Sequelize.INTEGER
      },
      isSafari: {
        type: Sequelize.INTEGER
      },
      isFirefox: {
        type: Sequelize.INTEGER
      },
      isWebkit: {
        type: Sequelize.INTEGER
      },
      isChrome: {
        type: Sequelize.INTEGER
      },
      isKonqueror: {
        type: Sequelize.INTEGER
      },
      isOmniWeb: {
        type: Sequelize.INTEGER
      },
      isSeaMonkey: {
        type: Sequelize.INTEGER
      },
      isFlock: {
        type: Sequelize.INTEGER
      },
      isAmaya: {
        type: Sequelize.INTEGER
      },
      isPhantomJS: {
        type: Sequelize.INTEGER
      },
      isEpiphany: {
        type: Sequelize.INTEGER
      },
      isDesktop: {
        type: Sequelize.INTEGER
      },
      isWindows: {
        type: Sequelize.INTEGER
      },
      isLinux: {
        type: Sequelize.INTEGER
      },
      isLinux64: {
        type: Sequelize.INTEGER
      },
      isMac: {
        type: Sequelize.INTEGER
      },
      isChromeOS: {
        type: Sequelize.INTEGER
      },
      isBada: {
        type: Sequelize.INTEGER
      },
      isSamsung: {
        type: Sequelize.INTEGER
      },
      isRaspberry: {
        type: Sequelize.INTEGER
      },
      isBot: {
        type: Sequelize.INTEGER
      },
      isCurl: {
        type: Sequelize.INTEGER
      },
      isAndroidTablet: {
        type: Sequelize.INTEGER
      },
      isWinJs: {
        type: Sequelize.INTEGER
      },
      isKindleFire: {
        type: Sequelize.INTEGER
      },
      isSilk: {
        type: Sequelize.INTEGER
      },
      isCaptive: {
        type: Sequelize.INTEGER
      },
      isSmartTV: {
        type: Sequelize.INTEGER
      },
      isUC: {
        type: Sequelize.INTEGER
      },
      isFacebook: {
        type: Sequelize.INTEGER
      },
      isAlamoFire: {
        type: Sequelize.INTEGER
      },
      isElectron: {
        type: Sequelize.INTEGER
      },
      silkAccelerated: {
        type: Sequelize.INTEGER
      },
      browser: {
        type: Sequelize.STRING
      },
      os: {
        type: Sequelize.STRING
      },
      platform: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Analytics');
  }
};