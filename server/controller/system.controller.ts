import { Request, Response, NextFunction } from "express";
import { SystemService } from '../docker/system.service';

export class SystemController {
    constructor(private systemService : SystemService){}

    info = (request: Request, response: Response, next: NextFunction) => {
        this.systemService.getInfo()
            .then(result => {
                response.send(result);
            })
            .catch(result => {
                console.log(result);
                response.sendStatus(500);
            });
    }

    swarmInit = (request: Request, response: Response, next: NextFunction) => {
        this.systemService.swarmInit()
            .then(result => {
                response.send(result);
            })
            .catch(result => {
                console.log(result);
                response.sendStatus(500);
            });
    }

    leaveSwarm = (request: Request, response: Response, next: NextFunction) => {
        this.systemService.leaveSwarm()
            .then(result => {
                response.send(result);
            })
            .catch(result => {
                console.log(result);
                response.sendStatus(500);
            });
    }
}