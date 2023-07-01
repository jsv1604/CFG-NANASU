const aws = require('aws-sdk');


const ses = new aws.SES({
    signatureVersion: 'v4',
    region: 'ap-south-1',
    accessKeyId: 'AKIARLVCGPO5O7XVYS4J',
    secretAccessKey: '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',
})

module.exports = ses;