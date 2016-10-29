"use strict";
var InMemoryProductService = (function () {
    function InMemoryProductService() {
    }
    InMemoryProductService.prototype.createDb = function () {
        var products = [
            {
                id: 1,
                name: "Samsung galaxy 8",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 2,
                name: "Samsung galaxy 10",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 3,
                name: "Samsung galaxy 20",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            }
        ];
        var users = [
            {
                id: 9,
                name: "Samsung galaxy 8",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 26,
                name: "Samsung galaxy 10",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            },
            {
                id: 34,
                name: "Samsung galaxy 20",
                description: "telefono que explota",
                type: "smartphone",
                price: 1500000,
                quantity: 20
            }
        ];
        return { products: products, users: users };
    };
    return InMemoryProductService;
}());
exports.InMemoryProductService = InMemoryProductService;
//# sourceMappingURL=in-memory-product.service.js.map