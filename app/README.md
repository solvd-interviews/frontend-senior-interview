# Solvd Challenge - Client

This folder contains the client part of the Solvd Challenge.

This frontend consists on a simple table, an insert form and an edit modal. This should allow us to `show`, `insert` and `update` data from the `Server`.

The idea of the client part of the challenge is to:

- Create and implement a filter function to filter the results in the CharactersTableComponent.
- Create and implement a sorting function to sort table by columns.

You can search all the missing functionality by looking for "TODO".

# Initializing and running

To start this API we first need to install the required libs.

For this, we will run the following on the terminal:

```bash
yarn
```

### Running

We are using `vite` as a compiler which will do all our compiling adding hot-reload to the `app`. To start the project, we simply type in the terminal:

```bash
yarn dev
```

# API

Our `API` which is located in the `server` folder, contains the necessary code for you to start, but you will still need to update the `API` for it to start returning actual data. If you don't, it will return an empty `array` on the `GET` endpoint.

At the moment, developed routes are:

| Method | Route     |
| ------ | --------- |
| `GET`  | `/health`     |
| `GET`  | `/characters` |
| `POST` | `/characters` |
| `PUT`  | `/characters` |

Payload for `POST` endpoint should be a JSON matching the corresponding model.

Payload for `PUT` endpoint should be a JSON matching the corresponding model, with the `_id` field from from the `Document` and every other field modified.
