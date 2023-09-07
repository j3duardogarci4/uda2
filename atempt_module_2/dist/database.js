"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const pg_1 = require("pg");
dotenv_1.default.config();
const { POSTGRES_HOST, POSTGRES_DB, POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB_TEST, ENV, } = process.env;
console.log(ENV);
let DATABASE_APP;
if (ENV == 'test') {
    DATABASE_APP = POSTGRES_DB;
}
else {
    DATABASE_APP = POSTGRES_DB_TEST;
}
const client = new pg_1.Pool({
    host: POSTGRES_HOST,
    database: DATABASE_APP,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
});
exports.default = client;
