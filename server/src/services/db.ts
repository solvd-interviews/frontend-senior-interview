import mongoose from "mongoose";

class Database {
    URI: string = "";
    db_reference = mongoose;

    is_connected = false;

    constructor() {
        this.handleErrors();
    }

    get instance() {
        return this.db_reference;
    }

    get uri(): string {
        return this.URI;
    }

    set uri(uri_params: DatabaseParams) {
        if ("host" in uri_params) {
            const { host, port = 27017, user, pass, database } = uri_params;

            this.URI = `mongodb://${user}:${pass}@${host}:${port}/${database}`;
        } else if ("uri" in uri_params) {
            this.URI = uri_params.uri;
        } else {
            throw new Error("Invalid database parameters");
        }
    }

    async connect(params: DatabaseParams) {
        this.uri = params;

        try {
            await mongoose.connect(this.URI);

            this.is_connected = true;

            return this;
        } catch (error: any) {
            console.error("Error connecting to MongoDB: ", error.message);

            this.is_connected = false;

            return this;
        }
    }

    async disconnect() {
        try {
            await mongoose.disconnect();

            this.is_connected = false;
        } catch (error: any) {
            console.error("Error disconnecting from MongoDB: ", error.message);

            this.is_connected = false;
        }
    }

    private handleErrors() {
        this.db_reference.connection.on("error", (error) => {
            console.error("Error on MongoDB connection: ", error.message);

            this.is_connected = false;
        });
    }
}

export default new Database();
