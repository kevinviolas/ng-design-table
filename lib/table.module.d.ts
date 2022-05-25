import { ModuleWithProviders } from '@angular/core';
import { DesignTableInterface } from "./setting/Config.interface";
export declare class TableModule {
    constructor(parentModule?: TableModule);
    static forRoot(config: DesignTableInterface): ModuleWithProviders<TableModule>;
}
