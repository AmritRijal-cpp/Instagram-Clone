const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);
defaultConfig.resolver.assetExts.push('png', 'jpg');

module.exports = withNativeWind(config, { input: "./global.css" });