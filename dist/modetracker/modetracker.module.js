"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModetrackerModule = void 0;
const common_1 = require("@nestjs/common");
const modetracker_service_1 = require("./modetracker.service");
const modetracker_controller_1 = require("./modetracker.controller");
const typeorm_1 = require("@nestjs/typeorm");
const modetracker_entity_1 = require("./modetracker.entity");
let ModetrackerModule = class ModetrackerModule {
};
ModetrackerModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([modetracker_entity_1.ModetrackerEntity])],
        providers: [modetracker_service_1.ModetrackerService],
        controllers: [modetracker_controller_1.ModetrackerController]
    })
], ModetrackerModule);
exports.ModetrackerModule = ModetrackerModule;
//# sourceMappingURL=modetracker.module.js.map