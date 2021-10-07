import { BlogEntity } from './blog.entity';
import { BlogService } from './blog.service';
export declare class BlogController {
    private appService;
    constructor(appService: BlogService);
    get(params: any): Promise<BlogEntity[]>;
    all(params: any): Promise<BlogEntity[]>;
    create(category: BlogEntity): Promise<BlogEntity>;
}
