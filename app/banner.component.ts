import {Component} from 'angular2/core';

@Component ({
    selector : 'banner',
    template : `
        <div id='banner-container'>
            <div *ngFor="#imageSrc of bannerList">
                <img #image (load)="loaded(image)" class="banner-image" src={{pathToImages}}{{imageSrc}}>
            </div>
        </div>
    `
})

export class Banner {
    pathToImages:string = "images/banners/";
    bannerList : string[] = [];
    //used to see when all images loaded
    counter : number = 0;
    images : any[] = [];
    numBannerImages : number = 8;

    constructor () {
        //Set up bannerList (hard-coded bannerX.jpg, X = number)
        for (let index = 1; index <= this.numBannerImages; index++) {
            this.bannerList.push(`banner${index}.jpg`);
        }
    }
    loaded (image) {
        this.images.push(image);
        this.counter++;
        //if all banner images are loaded!!
        if(this.counter == this.bannerList.length) {
            console.warn("ALL BANNER IMAGES LOADED");
            var repeat = ()=>{
                var rand = Math.floor(Math.random()*this.images.length);
                //Make the random image show
                this.images[rand].style.opacity = 1;
                var innerRep = ()=>{
                    //Hide previous image
                    this.images[rand].style.opacity = 0;
                    let temp = rand;
                    //get new random number that isn't a repeat
                    while(rand == temp) {
                        //rand = Math.floor(Math.random()*this.images.length);
                        rand = (rand+1)%this.bannerList.length;
                    }
                    //Show new image
                    this.images[rand].style.opacity = 1;
                };
                setInterval(innerRep, 5000);
            };
            repeat();
        }
    }
}
