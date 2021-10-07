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
exports.LivechatService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const livechat_entity_1 = require("./livechat.entity");
let LivechatService = class LivechatService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getUsers(livechat) {
        return await this.userRepository.find();
    }
    async create(modetracker) {
        return await this.userRepository.save(modetracker);
    }
    async update(modetracker) {
        return await this.userRepository.update(String(modetracker.id), modetracker);
    }
    async delete(id) {
        return await this.userRepository.delete(id);
    }
};
LivechatService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(livechat_entity_1.LivechatEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LivechatService);
exports.LivechatService = LivechatService;
//# sourceMappingURL=livechat.service.js.map