"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const product_entity_1 = require("./src/entities/product.entity");
const user_entity_1 = require("./src/entities/user.entity");
const config = {
    type: 'postgres',
    database: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1234',
    entities: [user_entity_1.User, product_entity_1.Product],
    synchronize: true,
};
exports.default = config;
//# sourceMappingURL=ormconfig.js.map