const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/saku**",
    createProxyMiddleware({
      target: "http://188.121.110.151:8888/",
    //   target: "http://localhost:3000",
      changeOrigin: true,
      pathRewrite: { "^/saku": "" },
      secure: false,
    })
  );
};
