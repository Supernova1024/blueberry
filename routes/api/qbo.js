const router = require("express").Router();

// Matches with "/api/qbo"
router.get('/', function(req, res) {
    const redirecturl = QuickBooks.AUTHORIZATION_URL +
        '?client_id=' + consumerKey +
        '&redirect_uri=' + encodeURIComponent('http://localhost:3001/callback/') + //Make sure this path matches entry in application dashboard
        '&scope=com.intuit.quickbooks.accounting' +
        '&response_type=code' +
        '&state=' + generateAntiForgery(req.session);

      //  console.log( redirecturl );

    res.redirect(redirecturl);
});
	
	

	
	module.exports = router;
