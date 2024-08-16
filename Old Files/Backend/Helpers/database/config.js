'use strict';
const path = require( 'path' );
const dotenv = require("dotenv")
require('dotenv').config();

module.exports.getConfig = () => {
    const config = {
        'MODE': 'Production',
        'PORT': process.env.PORT || 5000,
        'MONGODB_URL': process.env.MONGODB_URI,
        'JWT_SECRET': process.env.JWT_SECRET || 'R4ND0M5TR1NG'
    };

    // Modify for Production
    if ( process.env.NODE_ENV === 'production' ) {
        config.MODE = 'Production';
    }

    return config;
};

// https://github.com/sunilksamanta/node-mongoose-setup/blob/master/config/routes.js