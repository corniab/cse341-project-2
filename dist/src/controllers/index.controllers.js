"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomePage = void 0;
function getHomePage(req, res) {
    const pageData = {
        title: 'Home',
        name: undefined,
    };
    if (req.user) {
        pageData.name = req.user.givenName;
    }
    res.render('pages/index', pageData);
}
exports.getHomePage = getHomePage;
