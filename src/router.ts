import * as data from "./routes.json";

interface Route {
    default: any;
}

export class Router {
    
    static getRouteForTenant(tenant:any): any {
        const routes = (data  as  any).default;
        const route = routes.find((route: any) => route.tenant === tenant);
        return route?.url;
    }
    
}