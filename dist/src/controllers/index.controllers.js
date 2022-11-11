"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHomePage = void 0;
function getHomePage(req, res) {
    res.render('pages/index', {
        name: 'Ben',
        title: 'Home',
    });
}
exports.getHomePage = getHomePage;
