var axios = require('axios')

exports.saveApi = (req, res) => {
  
}

exports.create = (req, res) => {
  const apiKey = req.body.apikey
  const subs = {
    "email_address": `amine-${ new Date().getTime() }@gmail.com`, 
    "status": "subscribed", 
    "merge_fields": {
        "FNAME": "amine",
        "LNAME": "Testerson"
    }
  }
  
  const headers = {
    headers: {
      'Authorization': `apikey ${apiKey}`
    }
  }

  axios.post(`https://${ apiKey.split('-')[1] }.api.mailchimp.com/3.0/lists/c7b8e2dd15/members`, subs, headers)
    .then(data => res.send(data))
    .catch(err => res.send(err))
}