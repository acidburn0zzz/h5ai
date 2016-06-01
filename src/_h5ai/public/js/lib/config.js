const {request} = require('./core/server');

const config = module.exports = {
    _update: query => {
        return request(query).then(response => {
            Object.assign(config, response);
            return config;
        });
    }
};