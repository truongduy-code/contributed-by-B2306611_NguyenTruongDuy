const app = require("./app");
const config = require("./app/config");
const MongDB = require("./app/utils/mongodb.util");

async function startServer() {
    try {
        await MongDB.connect(config.db.uri);
        console.log("Connected to the database!");

        const PORT =  config.app.port;
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}.`);
        });

    } catch (error) {
        console.error("Error starting server:", error);
        process.exit(1);
    }
}

startServer();