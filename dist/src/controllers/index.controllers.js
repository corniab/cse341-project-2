"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomePage = void 0;
function getHomePage(req, res) {
    const pageData = {
        title: 'Home',
        firstName: undefined,
        lastName: undefined,
    };
    console.log(req.cookies.userInfo);
    if (req.cookies.userInfo) {
        const userInfo = JSON.parse(req.cookies.userInfo);
        pageData.firstName = userInfo.givenName;
        pageData.lastName = userInfo.familyName;
    }
    res.render('pages/index', pageData);
}
exports.getHomePage = getHomePage;
