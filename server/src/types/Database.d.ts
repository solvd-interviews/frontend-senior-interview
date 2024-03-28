interface DatabaseParamsSpread {
    host: string;
    port?: number;
    user: string;
    pass: string;
    database: string;
}

interface DatabaseParamsURI {
    uri: string;
}

type DatabaseParams = DatabaseParamsSpread | DatabaseParamsURI;

type StorageType = "DB" | "LOCAL";
