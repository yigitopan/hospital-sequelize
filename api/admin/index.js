import express from 'express';
import fs from 'fs';
import Utils from '../utils/util';

const app = express();
const routeDir = __dirname + "/routes";

fs.readdirSync(routeDir).filter((file) => {
    return (file.indexOf('.') !== 0) && (file !== 'index.js');
}).forEach((file) => {
    const routeName = file.split('.')[0];
    import(`./routes/${routeName}`).then((route) => {
        app.use(`/${routeName}`, Utils.authorizeSysAdmin, route.default);
    });
});

export default app;