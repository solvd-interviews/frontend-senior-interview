import server, { STORAGE_TYPE, stopDB } from "..";
import swapi from "../services/swapi";

const PORT = 4000;

const app = server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

(async () => {
    await swapi.scrapEverything(STORAGE_TYPE)
})();

export const gracefullyShutdown = async () => {
    await stopDB();
    await app.close();
};

export default app;
