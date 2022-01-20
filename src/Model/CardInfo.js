const mongoose = require('mongoose');
   
const cardInfoSheme = new mongoose.Schema({


  
    packageName: {
        type: String,
        required:true
    },

    packageCategory: {
        type: String,
        required:false
    },
    price: {
        type: String,
        required:true
    },
    packageStatus: {
        type: String,
        required:false
    },
    website: {
        type: String,
        required:true
    },
    optimization: {
        type: String,
        required:false
    },
   uiComponents: {
        type: String,
        required:false
    },
    templates: {
        type: String,
        required:false
    },
    landingPges: {
        type: String,
        required:true
    },

    emailAcconts: {
        type: String,
        required:true
    },
    emailMarketing: {
        type: String,
        required:false
    },
    marketingAutomation: {
        type: String,
        required:false
    },
    marketingContent: {
        type: String,
        required:false
    },
    subdomains: {
        type: String,
        required:true
    },
    hostings: {
        type: String,
        required:true
    },
    storageType: {
        type: String,
        required:true
    },
    updates: {
        type: String,
        required:false
    },
    supports: {
        type: String,
        required:false
    }
}, { timestamps:true })


const cardInfo = mongoose.model('CardInfo', cardInfoSheme);

module.exports = cardInfo;

