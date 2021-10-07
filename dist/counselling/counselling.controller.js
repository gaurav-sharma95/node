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
exports.CounsellingController = void 0;
const common_1 = require("@nestjs/common");
const counselling_entity_1 = require("./counselling.entity");
const counselling_service_1 = require("./counselling.service");
require("dotenv/config");
let CounsellingController = class CounsellingController {
    constructor(appService) {
        this.appService = appService;
    }
    get(category) {
        return this.appService.getUsers(category);
    }
    all(params) {
        return this.appService.findAll();
    }
    create(category) {
        return this.appService.create(category);
    }
    update(category) {
        return this.appService.update(category);
    }
};
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [counselling_entity_1.Counselling]),
    __metadata("design:returntype", void 0)
], CounsellingController.prototype, "get", null);
__decorate([
    (0, common_1.Get)('/all'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CounsellingController.prototype, "all", null);
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [counselling_entity_1.Counselling]),
    __metadata("design:returntype", void 0)
], CounsellingController.prototype, "create", null);
__decorate([
    (0, common_1.Put)('update'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [counselling_entity_1.Counselling]),
    __metadata("design:returntype", void 0)
], CounsellingController.prototype, "update", null);
CounsellingController = __decorate([
    (0, common_1.Controller)('counselling'),
    __metadata("design:paramtypes", [counselling_service_1.CounsellingService])
], CounsellingController);
exports.CounsellingController = CounsellingController;
//# sourceMappingURL=counselling.controller.js.map