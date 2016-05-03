System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var Background;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Background = (function () {
                function Background() {
                    this.pathToImages = "images/background/";
                    this.photoListBase = [];
                    this.photoList = [];
                    //photoList : string[] = ["sample.jpg"];
                    this.photos = [];
                    this.numRows = 10;
                    this.numCols = 4;
                    this.numBackgroundImages = 34;
                    //Set up photoList (hard-coded imgX.jpg, X = number)
                    for (var index = 1; index <= this.numBackgroundImages; index++) {
                        this.photoList.push("img" + index + ".jpg");
                        this.photoListBase.push("img" + index + ".jpg");
                    }
                    //Set up "photos" to be loaded randomly based on files in directory
                    for (var row = 0; row < this.numRows; row++) {
                        this.photos.push([]);
                        for (var col = 0; col < this.numCols; col++) {
                            var rand = Math.floor(Math.random() * (this.photoList.length));
                            this.photos[row].push({
                                src: this.photoList[rand],
                                id: "" + row + col
                            });
                            this.photoList.splice(rand, 1);
                            //If photolist is empty, start repeating images
                            if (this.photoList.length == 0) {
                                this.photoList = this.photoListBase.slice(0);
                            }
                        }
                    }
                }
                Background.prototype.imageClick = function (image) {
                    return false;
                };
                Background = __decorate([
                    core_1.Component({
                        selector: 'background',
                        //template for row by column image generation
                        //#image lets you access "this" in the "loaded" function
                        template: "\n        <div id='background'>\n            <tr *ngFor=\"#row of photos\">\n                <td *ngFor=\"#item of row\">\n                    <a href=\"#\" (click)=\"imageClick(image)\">\n                        <img #image id='background-{{item.id}}' class=\"background-images\" src='{{pathToImages}}{{item.src}}'>\n                    </a>\n                </td>\n            </tr>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Background);
                return Background;
            }());
            exports_1("Background", Background);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYWNrZ3JvdW5kLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQW1CQTtnQkFjSTtvQkFiQSxpQkFBWSxHQUFZLG9CQUFvQixDQUFDO29CQUM3QyxrQkFBYSxHQUFjLEVBQUUsQ0FBQztvQkFDOUIsY0FBUyxHQUFjLEVBQUUsQ0FBQztvQkFDMUIsd0NBQXdDO29CQUN4QyxXQUFNLEdBQWEsRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksRUFBRSxDQUFDO29CQUN0QixZQUFPLEdBQVksQ0FBQyxDQUFDO29CQUNyQix3QkFBbUIsR0FBWSxFQUFFLENBQUM7b0JBTzlCLG9EQUFvRDtvQkFDcEQsR0FBRyxDQUFDLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQzt3QkFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBTSxLQUFLLFNBQU0sQ0FBQyxDQUFDO3dCQUN2QyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFNLEtBQUssU0FBTSxDQUFDLENBQUM7b0JBQy9DLENBQUM7b0JBQ0QsbUVBQW1FO29CQUNuRSxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQzt3QkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3JCLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDOzRCQUMxQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQzs0QkFDN0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0NBQ2xCLEdBQUcsRUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztnQ0FDMUIsRUFBRSxFQUFJLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRzs2QkFDdkIsQ0FBQyxDQUFDOzRCQUNILElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzs0QkFDL0IsK0NBQStDOzRCQUMvQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dDQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNqRCxDQUFDO3dCQUNMLENBQUM7b0JBQ0wsQ0FBQztnQkFHTCxDQUFDO2dCQTVCRCwrQkFBVSxHQUFWLFVBQVksS0FBSztvQkFDYixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQTdCTDtvQkFBQyxnQkFBUyxDQUFDO3dCQUNQLFFBQVEsRUFBRyxZQUFZO3dCQUN2Qiw2Q0FBNkM7d0JBQzdDLHdEQUF3RDt3QkFDeEQsUUFBUSxFQUFHLHdaQVVWO3FCQUNKLENBQUM7OzhCQUFBO2dCQTBDRixpQkFBQztZQUFELENBQUMsQUF4Q0QsSUF3Q0M7WUF4Q0QsbUNBd0NDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yIDogJ2JhY2tncm91bmQnLFxuICAgIC8vdGVtcGxhdGUgZm9yIHJvdyBieSBjb2x1bW4gaW1hZ2UgZ2VuZXJhdGlvblxuICAgIC8vI2ltYWdlIGxldHMgeW91IGFjY2VzcyBcInRoaXNcIiBpbiB0aGUgXCJsb2FkZWRcIiBmdW5jdGlvblxuICAgIHRlbXBsYXRlIDogYFxuICAgICAgICA8ZGl2IGlkPSdiYWNrZ3JvdW5kJz5cbiAgICAgICAgICAgIDx0ciAqbmdGb3I9XCIjcm93IG9mIHBob3Rvc1wiPlxuICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjaXRlbSBvZiByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiAoY2xpY2spPVwiaW1hZ2VDbGljayhpbWFnZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgI2ltYWdlIGlkPSdiYWNrZ3JvdW5kLXt7aXRlbS5pZH19JyBjbGFzcz1cImJhY2tncm91bmQtaW1hZ2VzXCIgc3JjPSd7e3BhdGhUb0ltYWdlc319e3tpdGVtLnNyY319Jz5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8L3RyPlxuICAgICAgICA8L2Rpdj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgQmFja2dyb3VuZCB7XG4gICAgcGF0aFRvSW1hZ2VzIDogc3RyaW5nID0gXCJpbWFnZXMvYmFja2dyb3VuZC9cIjtcbiAgICBwaG90b0xpc3RCYXNlIDogc3RyaW5nW10gPSBbXTtcbiAgICBwaG90b0xpc3QgOiBzdHJpbmdbXSA9IFtdO1xuICAgIC8vcGhvdG9MaXN0IDogc3RyaW5nW10gPSBbXCJzYW1wbGUuanBnXCJdO1xuICAgIHBob3RvcyA6IGFueVtdW10gPSBbXTtcbiAgICBudW1Sb3dzIDogbnVtYmVyID0gMTA7XG4gICAgbnVtQ29scyA6IG51bWJlciA9IDQ7XG4gICAgbnVtQmFja2dyb3VuZEltYWdlcyA6IG51bWJlciA9IDM0O1xuXG4gICAgaW1hZ2VDbGljayAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgLy9TZXQgdXAgcGhvdG9MaXN0IChoYXJkLWNvZGVkIGltZ1guanBnLCBYID0gbnVtYmVyKVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDE7IGluZGV4IDw9IHRoaXMubnVtQmFja2dyb3VuZEltYWdlczsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGhpcy5waG90b0xpc3QucHVzaChgaW1nJHtpbmRleH0uanBnYCk7XG4gICAgICAgICAgICB0aGlzLnBob3RvTGlzdEJhc2UucHVzaChgaW1nJHtpbmRleH0uanBnYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9TZXQgdXAgXCJwaG90b3NcIiB0byBiZSBsb2FkZWQgcmFuZG9tbHkgYmFzZWQgb24gZmlsZXMgaW4gZGlyZWN0b3J5XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHRoaXMubnVtUm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHRoaXMucGhvdG9zLnB1c2goW10pO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgdGhpcy5udW1Db2xzOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGxldCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKih0aGlzLnBob3RvTGlzdC5sZW5ndGgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBob3Rvc1tyb3ddLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBzcmMgOiB0aGlzLnBob3RvTGlzdFtyYW5kXSxcbiAgICAgICAgICAgICAgICAgICAgaWQgOiAgXCJcIiArIHJvdyArIGNvbFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMucGhvdG9MaXN0LnNwbGljZShyYW5kLCAxKTtcbiAgICAgICAgICAgICAgICAvL0lmIHBob3RvbGlzdCBpcyBlbXB0eSwgc3RhcnQgcmVwZWF0aW5nIGltYWdlc1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBob3RvTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBob3RvTGlzdCA9IHRoaXMucGhvdG9MaXN0QmFzZS5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgfVxuXG59XG4iXX0=