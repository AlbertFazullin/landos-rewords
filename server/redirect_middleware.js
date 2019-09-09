module.exports = function (req, res, next) {
	if (req.cookies.session) {
		res.redirect('https://github.com/');
	}
	else {
		next();
	}
};
