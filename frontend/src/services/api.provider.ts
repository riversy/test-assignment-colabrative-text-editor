import {ApiConnection} from "./api.ts";

let apiConnection: ApiConnection;

function getFakeName() {
    const adjectives = ["Amazing", "Bold", "Creative", "Daring", "Energetic"];
    const nouns = ["Explorer", "Builder", "Innovator", "Creator", "Adventurer"];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNumber = Math.floor(Math.random() * 1000);

    return `${randomAdjective} ${randomNoun} ${randomNumber}`;
}

export const ApiConnectionProvider = function (): ApiConnection{
    if (!apiConnection) {
        apiConnection = new ApiConnection(getFakeName())
    }
    return apiConnection;
}