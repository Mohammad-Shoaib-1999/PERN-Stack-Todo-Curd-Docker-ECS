const app = require("./app");


process.on("uncaughtException", (err) => {
  console.log("====================================");

  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server for handling uncaught exceptions");
  console.log("====================================");
});

if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({
    path: "config/.env",
  });
}

const server = app.listen(process.env.PORT, () => {
  console.log("====================================");
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
  console.log("====================================");
});


process.on("unhandledRejection", (err) => {
  console.log("====================================");

  console.log(`Error: ${err.message}`);
  console.log("Shutting down the server for unhandled promise rejection");
  console.log("====================================");

  server.close(() => {
    process.exit(1);
  });
});

