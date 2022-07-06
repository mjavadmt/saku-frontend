const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/saku**",
    createProxyMiddleware({
      target: "http://188.121.110.151:8887/",
      changeOrigin: true,
      pathRewrite: { "^/saku": "" },
      secure: false,
    })
  );
};
