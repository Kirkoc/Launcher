const { DistributionAPI } = require('helios-core/common')

const ConfigManager = require('./configmanager')

// Current Distro url.
exports.REMOTE_DISTRO_URL = 'https://cdn.kirkoc.net/distribution/distribution.json'

const api = new DistributionAPI(
    ConfigManager.getLauncherDirectory(),
    null, // Injected forcefully by the preloader.
    null, // Injected forcefully by the preloader.
    exports.REMOTE_DISTRO_URL,
    false
)

exports.DistroAPI = api