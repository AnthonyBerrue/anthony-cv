const { promisify } = require('util');
const cache = require('express-redis-cache')({
    url: process.env.REDIS_URL,
    auth_pass: process.env.REDIS_PASSWORD,
    prefix: process.env.REDIS_PREFIX,
    no_ready_check: true,
    type: 'text/plain',
    expire : 10,
    socket: {
        tls: true,
        rejectUnauthorized: false
      }
    
});
const debug = require('debug')('app:cache');

cache.on('error', (error) => {
    console.error(error);
});

cache.on('deprecated', function (deprecated) {
    debug('deprecated warning', {
        type: deprecated.type,
        name: deprecated.name,
        substitute: deprecated.substitute,
        file: deprecated.file,
        line: deprecated.line
    });
});

cache.on('connected', function (connected) {
    debug(connected);
});

cache.on('disconnected', function (disconnected) {
    debug(disconnected);
});

cache.on('message', (message) => {
    debug(message);
});

// Je sauvegarde la methode del original dans une variable afin de la réutiliser dans ma surcharge
const originalCacheDel = cache.del;

// Ensuite on peut surcharger la méthode
cache.del = () => async (req, _, next) => {
    // On promessifie la méthode original
    const del = promisify(originalCacheDel).bind(cache);
    // On récupère la route courante
    const currentRoute = req.originalUrl;
    /*
    On utilise la méthode cache.del originel promesifié afin
    de supprimer la clé se nommant comme la route courante
    (celle qui a été créé par le cache.route()) dans Redis
    */

    // 1ère possibilité précise mais complexe
    // On supprime /api/categories/1
    await del(currentRoute);
    // On supprime /api/categories
    await del(currentRoute.replace(/\/\d+$/, ''));

    // 2eme possibilité plus simple mais plus radical (et donc moi optimisé)
    // On supprime toutes les entrées dans le cache pour cette application
    await del('/*');
    next();
};

module.exports = cache;
