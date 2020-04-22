const mongoose = require('mongoose');

var MailchimpSchema = mongoose.Schema(
    {
        shop: {
            type: String,
            required: true,
            minlength: 6
        },

        apiKey: {
            type: String,
            required: true
        }
    }
);

var Mailchimp = mongoose.model('Wishlist', MailchimpSchema);

module.exports = {Mailchimp};