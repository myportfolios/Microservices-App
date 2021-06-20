const testPageController = (req, res, next) => {
    return res.send("<h1>The Page is working good with controllers</h1>")
}
module.exports = testPageController;