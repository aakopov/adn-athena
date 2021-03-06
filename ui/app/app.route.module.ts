import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageComponent } from './component/image/image.component';
import { ContainerComponent } from './component/container/container.component';
import { SystemComponent } from './component/system/system.component';
import { NetworkComponent } from './component/network/network.component';
import { ServiceComponent } from './component/service/service.component';
import { VolumeComponent } from './component/volume/volume.component';

const routes : Routes = [
    {path: "", redirectTo: "/system", pathMatch: "full"},
    {path: "system", component: SystemComponent},
    {path: "image", component: ImageComponent},
    {path: "container", component: ContainerComponent},
    {path: "network", component: NetworkComponent},
    {path: "service", component: ServiceComponent},
    {path: "volume", component: VolumeComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule {}