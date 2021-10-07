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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelplineEntity = void 0;
const typeorm_1 = require("typeorm");
let HelplineEntity = class HelplineEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", typeof BigInt === "function" ? BigInt : Object)
], HelplineEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "place", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "helplinenumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "subcategory", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "hotline", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "add1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "add2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "tel1", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "tel2", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "tel3", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "geolocation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], HelplineEntity.prototype, "emergency", void 0);
HelplineEntity = __decorate([
    (0, typeorm_1.Entity)('helplinenumber')
], HelplineEntity);
exports.HelplineEntity = HelplineEntity;
//# sourceMappingURL=helpline.entity.js.map