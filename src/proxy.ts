import { NextFunction, Request, Response } from "express";
import httpProxy from "express-http-proxy";
import { Router } from "./router";

const proxy = (request: Request, response: Response, next: NextFunction) => {
    console.log("headers: ",request.headers);
    //console.log("path: ",request.path);
    // const xLonestarAccountId = request.headers["x-lonestar-accountid"];
    const { 'x-lonestar-product-firmid': xLonestarProductFirmId } = request.headers;
    const url = Router.getRouteForTenant(xLonestarProductFirmId) || "http://localhost:9081";

    console.log(`SEND TO: ${url}`);

    httpProxy(url)(request, response, next);
    //httpProxy("https://lab01.taxone.thomsonreuters.com/ws/")(request, response, next);
    
}

export { proxy };
