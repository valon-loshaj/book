"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const serve = (port, dir, filename) => {
    console.log("Serving traffic on port: ", port);
    console.log("Saving/fetching files from dir: ", filename);
    console.log("That file is in directory: ", dir);
};
exports.serve = serve;
