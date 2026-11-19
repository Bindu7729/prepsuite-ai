const app = require("./app");

const PORT = process.env.PORT || 5000;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`\nPrepSuite AI Server running on port: ${PORT}`);
    console.log(`Health endpoint: http://localhost:${PORT}/api/health\n`);
  });
}

module.exports = app;
