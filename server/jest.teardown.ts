import DB from "./src/services/db";

export default async function testTeardown() {
    await DB.connect({ uri: "mongodb+srv://solvd-interviews:ypbBnypdyRymmKfg@solvd-interviews-cluste.xjkfbgq.mongodb.net/?retryWrites=true&w=majority" });

    await DB.instance.connection.db.dropCollection("characters");
    await DB.instance.connection.db.dropCollection("movies");

    await DB.disconnect();
}
