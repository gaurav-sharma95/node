"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelplineModule = void 0;
const common_1 = require("@nestjs/common");
const helpline_service_1 = require("./helpline.service");
const helpline_controller_1 = require("./helpline.controller");
const helpline_entity_1 = require("./helpline.entity");
const typeorm_1 = require("@nestjs/typeorm");
let HelplineModule = class HelplineModule {
};
HelplineModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([helpline_entity_1.HelplineEntity])],
        providers: [helpline_service_1.HelplineService],
        controllers: [helpline_controller_1.HelplineController]
    })
], HelplineModule);
exports.HelplineModule = HelplineModule;
//# sourceMappingURL=helpline.module.js.map