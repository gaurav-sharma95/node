import { Category } from './category.entity';
import { CategoryService } from './category.service';
import 'dotenv/config';
export declare class CategoryController {
    private appService;
    constructor(appService: CategoryService);
    get(params: any): Promise<Category[]>;
    all(params: any): Promise<Category[]>;
    create(category: Category): Promise<Category>;
    update(category: Category): Promise<import("typeorm").UpdateResult>;
}
