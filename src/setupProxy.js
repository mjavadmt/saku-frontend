const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    // "/saku**",
    "http://188.121.113.13:8888/",
    createProxyMiddleware({
      target: "http://188.121.113.13:8888/",
    //   target: "http://localhost:3000",
      // changeOrigin: true,
      // pathRewrite: { "^/saku": "" },
      secure: false,
    })
  );
};
