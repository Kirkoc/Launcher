const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Current Distro url.
exports.REMOTE_DISTRO_URL = 'https://raw.githubusercontent.com/Kirkoc/distribution/main/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api