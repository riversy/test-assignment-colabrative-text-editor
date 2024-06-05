import {ApiConnection} from "./api.ts";

let apiConnection: ApiConnection;

function getFakeName() {
    //@todo Add a Fake name generation
    return `Sample ${Math.random().toString(3)}`;
}

export const ApiConnectionProvider = function (): ApiConnection{
    if (!apiConnection) {
        apiConnection = new ApiConnection(getFakeName())
    }
    return apiConnection;
}