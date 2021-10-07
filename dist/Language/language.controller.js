"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageController = void 0;
const common_1 = require("@nestjs/common");
const language_entity_1 = require("./language.entity");
const language_service_1 = require("./language.service");
require("dotenv/config");
let LanguageController = class LanguageController {
    constructor(appService) {
        this.appService = appService;
    }
    get(params) {
        return this.appService.getUsers(params.id);
    }
    all(params) {
        return this.appService.findAll();
    }
    create(country) {
        return this.appService.create(country);
    }
    update(country) {
        return this.appService.update(country);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "all", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_entity_1.Language]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [language_entity_1.Language]),
    __metadata("design:returntype", void 0)
], LanguageController.prototype, "update", null);
LanguageController = __decorate([
    (0, common_1.Controller)('language'),
    __metadata("design:paramtypes", [language_service_1.LanguageService])
], LanguageController);
exports.LanguageController = LanguageController;
//# sourceMappingURL=language.controller.js.map