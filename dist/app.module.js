"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_module_1 = require("./users/user.module");
const typeorm_1 = require("@nestjs/typeorm");
const livechat_module_1 = require("./livechat/livechat.module");
const country_module_1 = require("./country/country.module");
const language_module_1 = require("./Language/language.module");
const modetracker_module_1 = require("./modetracker/modetracker.module");
const appointment_module_1 = require("./appointment/appointment.module");
const helpline_module_1 = require("./helpline/helpline.module");
const childright_module_1 = require("./childright/childright.module");
const locationhistory_module_1 = require("./locationhistory/locationhistory.module");
const blog_module_1 = require("./blog/blog.module");
require("dotenv/config");
const category_module_1 = require("./Category/category.module");
const credential_module_1 = require("./credential/credential.module");
const district_module_1 = require("./district/district.module");
const counselling_module_1 = require("./counselling/counselling.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                type: "mysql",
                host: "unicef-node.cxefcterqchw.ap-south-1.rds.amazonaws.com",
                port: 3306,
                username: "dotenv",
                password: "9Xze]Y^<bT",
                database: "dotenv",
                autoLoadEntities: true,
            }), user_module_1.UsersModule, livechat_module_1.LivechatModule,
            modetracker_module_1.ModetrackerModule, appointment_module_1.AppointmentModule,
            helpline_module_1.HelplineModule, childright_module_1.ChildrightModule, locationhistory_module_1.LocationhistoryModule,
            blog_module_1.BlogModule, country_module_1.CountryModule, language_module_1.LanguageModule, category_module_1.CategoryModule, credential_module_1.CredentialModule, district_module_1.DistrictModule, counselling_module_1.CounsellingModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map