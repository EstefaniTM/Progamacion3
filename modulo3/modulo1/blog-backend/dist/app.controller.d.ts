import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHealth(): {
        service: string;
        version: string;
        status: boolean;
    };
}
