const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/saku",
    createProxyMiddleware({
      target: "http://188.121.97.132:3000/",
      changeOrigin: true,
      pathRewrite: { "^/saku": "" },
      secure: false,
    })
  );
};
