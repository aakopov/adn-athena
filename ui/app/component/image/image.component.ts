import { Component, OnInit } from '@angular/core';
import { ImageService } from '../../service/image.service';

@Component({
    templateUrl: "./image.component.html"
})
export class ImageComponent implements OnInit {
    images : {}[];

    constructor(private imageService: ImageService){}

    ngOnInit(){
        this.getImages();
    }

    private getImages(){
        this.imageService.get()
            .subscribe(images => this.images = images);
    }
}