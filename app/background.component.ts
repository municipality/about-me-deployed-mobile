import {Component} from 'angular2/core';

@Component({
    selector : 'background',
    //template for row by column image generation
    //#image lets you access "this" in the "loaded" function
    template : `
        <div id='background'>
            <tr *ngFor="#row of photos">
                <td *ngFor="#item of row">
                    <a href="#" (click)="imageClick(image)">
                        <img #image id='background-{{item.id}}' class="background-images" src='{{pathToImages}}{{item.src}}'>
                    </a>
                </td>
            </tr>
        </div>
    `
})

export class Background {
    pathToImages : string = "images/background/";
    photoListBase : string[] = [];
    photoList : string[] = [];
    //photoList : string[] = ["sample.jpg"];
    photos : any[][] = [];
    numRows : number = 10;
    numCols : number = 3;
    numBackgroundImages : number = 34;

    imageClick (image) {
        return false;
    }

    constructor () {
        //Set up photoList (hard-coded imgX.jpg, X = number)
        for (let index = 1; index <= this.numBackgroundImages; index++) {
            this.photoList.push(`img${index}.jpg`);
            this.photoListBase.push(`img${index}.jpg`);
        }
        //Set up "photos" to be loaded randomly based on files in directory
        for (let row = 0; row < this.numRows; row++) {
            this.photos.push([]);
            for (let col = 0; col < this.numCols; col++) {
                let rand = Math.floor(Math.random()*(this.photoList.length));
                this.photos[row].push({
                    src : this.photoList[rand],
                    id :  "" + row + col
                });
                this.photoList.splice(rand, 1);
                //If photolist is empty, start repeating images
                if (this.photoList.length == 0) {
                    this.photoList = this.photoListBase.slice(0);
                }
            }
        }


    }

}
