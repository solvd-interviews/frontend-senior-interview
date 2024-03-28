# Solvd Challenge - Server

This folder contains the server part of the Solvd Challenge.

This API consists of 1 model (`Character`) which correspond to `characters` on the `Star Wars API`.

API: `https://swapi.dev/`

The idea of the server part of the challenge is to:

-   Start a new express server and connect to MongoDB.
-   Complete missing functionalities in `index.ts` and `app.ts`.
-   Complete missing routes in the `routes` folder.
-   Complete missing functionality in `services/swapi.ts`.
-   Complete missing functionality in the `handlers` folder.
-   Create a schema and model for Character based on SW API interface.
-   Make sure Backend is running before jumping on Frontend challenge.

You can search all the missing functionality by looking for "TODO".

# Initializing and running

To start this API we first need to install the required libs.

For this, we will run the following on the terminal:

```
yarn
```

### Running

To start the server we first need to config our database (see [Database](#Database)).

After the database is configured, we need to compile the code:

```
yarn build
```

This will create a new folder called `dist` which will contain all the `.js` compiled files.

Then, to run our code we can just write:

```bash
yarn start
```

This command will start our `dist` folder code.

IMPORTANT: Each time we modify the code and we want to start our server, we need to run both commands or use the following which will run both commands at the same time:

```bash
yarn dev
```

### Healthcheck

If we did everything correctly (database is up and server is running), we can check if the service is connected to our DB using the `GET -> /health` endpoint.

This endpoint will do the following:

-   Uses the same connection as models
-   Creates the `health` collection
-   Inserts a document with the following structure:
    ```json
    {
        "_id": {DOCUMENT_ID},
        "checked_at": {TIMESTAMP}
    }
    ```
-   Fetches the latest healthcheck from this collection
-   Sets the service as alive if the latest healthcheck `checked_at` corresponds to the inserted timestamp
-   Returns an object containing the latest healthcheck

# Database

The current code is developed to save to a remote database:

-   URI: mongodb+srv://solvd-interviews:ypbBnypdyRymmKfg@solvd-interviews-cluste.xjkfbgq.mongodb.net/?retryWrites=true&w=majority

At start, the code only works using the `DB` approach since handlers use mongoose models.

This can be changed in the `index.ts` file by modifying the `STORAGE_TYPE` constant from `'DB'` to `'LOCAL'`.

# Routing

Routes should be:

| Method | Route     |
| ------ | --------- |
| `GET`  | `/health` |
| `GET`  | `/characters` |
| `POST` | `/characters` |
| `PUT`  | `/characters` |

Payload for `POST` endpoint should be a JSON matching the corresponding model.

Payload for `PUT` endpoint should be a JSON matching the corresponding model, with the `_id` field from from the `Document` and every other field modified.

# Database seeding

### Star Wars API

To use this solution, the async method called `scrapEverything` should be called which will scrap the `people` endpoint from SWAPI and store it on `MongoDB` to be used afterwards.

# Testing

For testing purposes we will be using `Jest` and we'll do `unit` and `e2e` testing.

For `e2e` we'll be using the mongodb database to ensure everything runs as a production environment.

The database will be cleansed of all collections when the tests start and when they end, to ensure no data is left behind.

To test the code we run the following command:

```bash
yarn test
```

We should have every test passing.
