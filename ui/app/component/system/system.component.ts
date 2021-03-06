import { Component, OnInit } from '@angular/core';
import { SystemService } from '../../service/system.service';

@Component({
    templateUrl: "./system.component.html"
})
export class SystemComponent {
    info : {} = {};

    constructor(private systemService : SystemService){}

    ngOnInit(){
        this.getInfo();
    }

    getInfo(){
        this.systemService.info()
            .subscribe(info => this.info = info);
    }

    swarmInit(){
        this.systemService.swarmInit()
            .subscribe(result => {
                this.getInfo();
            });
    }

    leaveSwarm() {
        this.systemService.leaveSwarm()
            .subscribe(result => {
                this.getInfo();
            });
    }
}