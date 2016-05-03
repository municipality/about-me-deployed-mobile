System.register(['angular2/core', './square.component', './contact.footer', './banner.component'], function(exports_1, context_1) {
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
    var core_1, square_component_1, contact_footer_1, banner_component_1;
    var Wall;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (square_component_1_1) {
                square_component_1 = square_component_1_1;
            },
            function (contact_footer_1_1) {
                contact_footer_1 = contact_footer_1_1;
            },
            function (banner_component_1_1) {
                banner_component_1 = banner_component_1_1;
            }],
        execute: function() {
            Wall = (function () {
                //Construct the builder which is used to lay out the squares by template
                function Wall() {
                    //used to build the squares
                    this.numColumns = 1;
                    this.builder = [];
                    /*
                    Squares
                        title : title of square
                        src : image file name in pathToImages
                        description : square description
                    */
                    this.squares = [
                        {
                            title: "",
                            src: "aboutbrianlee.jpg",
                            description: ""
                        },
                        {
                            title: "Software Engineer",
                            src: 'aboutme.jpg',
                            description: "UC San Diego 2014 Computer Science Major"
                        },
                        {
                            title: "Weight Lifter",
                            src: "lifter.jpg",
                            description: "Active weight-lifter for six years"
                        },
                        {
                            title: "Photographer",
                            src: "photographer.jpg",
                            description: "Amateur photographer experienced with both DSLR and polaroid cameras"
                        },
                        {
                            title: "Snowboarder",
                            src: "snowboard.jpg",
                            description: "Amateur snowboarder with consistent rear-end pain"
                        },
                        {
                            title: "Tetris Enthusiast",
                            src: "tetris.jpg",
                            description: "High score of 41933 on Tetris Ultra, proficient at T-spinning and ST stacking"
                        },
                        {
                            title: "Dessert Connoisseur",
                            src: "dessert.jpg",
                            description: "Expert in dessert tasting"
                        },
                        {
                            title: "Hiker",
                            src: "hiker.jpg",
                            description: "Always actively looking for new trails to hike"
                        },
                        {
                            title: "Dancer",
                            src: "dancer.jpg",
                            description: "Amateur dancer, but expert with good company and a couple of beers"
                        },
                        {
                            title: "World Explorer",
                            src: "explorer.jpg",
                            description: "Lover of the ocean, new environments, and exotic foods"
                        },
                        {
                            title: "Jokester",
                            src: "jokester.jpg",
                            description: "Creator of bad jokes and puns with a side of horrendously loud laughter"
                        },
                        {
                            title: "Hard Thinker",
                            src: "thinker.jpg",
                            description: "Get to know my technical side!",
                            descriptionLink: "Check out my resume here",
                            descriptionLinkURL: "LeeBrian_Resume.pdf"
                        }
                    ];
                    for (var i = 0; i < this.squares.length; i++) {
                        //For every numColumns squares, construct a new row
                        if (i % this.numColumns == 0) {
                            this.builder.push([]);
                        }
                        this.builder[this.builder.length - 1].push(this.squares[i]);
                    }
                }
                Wall = __decorate([
                    core_1.Component({
                        selector: 'wall',
                        directives: [square_component_1.Square, contact_footer_1.ContactFooter, banner_component_1.Banner],
                        template: "\n        <div id=\"wall\">\n            <banner></banner>\n            <table id=\"square-table\">\n                <tr *ngFor=\"#row of builder\">\n                    <td *ngFor=\"#square of row\">\n                        <square [title]=\"square.title\" [description]=\"square.description\" [src]=\"square.src\"\n                                [descriptionLink]=\"square.descriptionLink\" [descriptionLinkURL]=\"square.descriptionLinkURL\">\n                        </square>\n                    </td>\n                </tr>\n            </table>\n            <div>\n            <contact></contact>\n        </div>\n\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Wall);
                return Wall;
            }());
            exports_1("Wall", Wall);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2FsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3YWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQTJCQTtnQkFLSSx3RUFBd0U7Z0JBQ3hFO29CQUxBLDJCQUEyQjtvQkFDM0IsZUFBVSxHQUFZLENBQUMsQ0FBQztvQkFDeEIsWUFBTyxHQUFhLEVBQUUsQ0FBQztvQkFZdkI7Ozs7O3NCQUtFO29CQUNGLFlBQU8sR0FBVzt3QkFDZDs0QkFDSSxLQUFLLEVBQUcsRUFBRTs0QkFDVixHQUFHLEVBQUcsbUJBQW1COzRCQUN6QixXQUFXLEVBQUcsRUFBRTt5QkFDbkI7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLG1CQUFtQjs0QkFDM0IsR0FBRyxFQUFHLGFBQWE7NEJBQ25CLFdBQVcsRUFBRywwQ0FBMEM7eUJBQzNEO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxlQUFlOzRCQUN2QixHQUFHLEVBQUcsWUFBWTs0QkFDbEIsV0FBVyxFQUFHLG9DQUFvQzt5QkFDckQ7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLGNBQWM7NEJBQ3RCLEdBQUcsRUFBRyxrQkFBa0I7NEJBQ3hCLFdBQVcsRUFBRyxzRUFBc0U7eUJBQ3ZGO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxhQUFhOzRCQUNyQixHQUFHLEVBQUcsZUFBZTs0QkFDckIsV0FBVyxFQUFHLG1EQUFtRDt5QkFDcEU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLG1CQUFtQjs0QkFDM0IsR0FBRyxFQUFHLFlBQVk7NEJBQ2xCLFdBQVcsRUFBRywrRUFBK0U7eUJBQ2hHO3dCQUNEOzRCQUNJLEtBQUssRUFBRyxxQkFBcUI7NEJBQzdCLEdBQUcsRUFBRyxhQUFhOzRCQUNuQixXQUFXLEVBQUcsMkJBQTJCO3lCQUM1Qzt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsT0FBTzs0QkFDZixHQUFHLEVBQUcsV0FBVzs0QkFDakIsV0FBVyxFQUFHLGdEQUFnRDt5QkFDakU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLFFBQVE7NEJBQ2hCLEdBQUcsRUFBRyxZQUFZOzRCQUNsQixXQUFXLEVBQUcsb0VBQW9FO3lCQUNyRjt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsZ0JBQWdCOzRCQUN4QixHQUFHLEVBQUcsY0FBYzs0QkFDcEIsV0FBVyxFQUFHLHdEQUF3RDt5QkFDekU7d0JBQ0Q7NEJBQ0ksS0FBSyxFQUFHLFVBQVU7NEJBQ2xCLEdBQUcsRUFBRyxjQUFjOzRCQUNwQixXQUFXLEVBQUcseUVBQXlFO3lCQUMxRjt3QkFDRDs0QkFDSSxLQUFLLEVBQUcsY0FBYzs0QkFDdEIsR0FBRyxFQUFHLGFBQWE7NEJBQ25CLFdBQVcsRUFBRyxnQ0FBZ0M7NEJBQzlDLGVBQWUsRUFBRywwQkFBMEI7NEJBQzVDLGtCQUFrQixFQUFHLHFCQUFxQjt5QkFDN0M7cUJBQ0osQ0FBQztvQkE3RUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO3dCQUMzQyxtREFBbUQ7d0JBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUMxQixDQUFDO3dCQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEUsQ0FBQztnQkFDTCxDQUFDO2dCQXBDTDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNSLFFBQVEsRUFBRyxNQUFNO3dCQUNqQixVQUFVLEVBQUcsQ0FBQyx5QkFBTSxFQUFFLDhCQUFhLEVBQUUseUJBQU0sQ0FBQzt3QkFDNUMsUUFBUSxFQUFHLHluQkFpQlY7cUJBQ0osQ0FBQzs7d0JBQUE7Z0JBd0ZGLFdBQUM7WUFBRCxDQUFDLEFBdkZELElBdUZDO1lBdkZELHVCQXVGQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtTcXVhcmV9IGZyb20gJy4vc3F1YXJlLmNvbXBvbmVudCc7XG5pbXBvcnQge0NvbnRhY3RGb290ZXJ9IGZyb20gJy4vY29udGFjdC5mb290ZXInO1xuaW1wb3J0IHtCYW5uZXJ9IGZyb20gJy4vYmFubmVyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQgKHtcbiAgICBzZWxlY3RvciA6ICd3YWxsJyxcbiAgICBkaXJlY3RpdmVzIDogW1NxdWFyZSwgQ29udGFjdEZvb3RlciwgQmFubmVyXSxcbiAgICB0ZW1wbGF0ZSA6IGBcbiAgICAgICAgPGRpdiBpZD1cIndhbGxcIj5cbiAgICAgICAgICAgIDxiYW5uZXI+PC9iYW5uZXI+XG4gICAgICAgICAgICA8dGFibGUgaWQ9XCJzcXVhcmUtdGFibGVcIj5cbiAgICAgICAgICAgICAgICA8dHIgKm5nRm9yPVwiI3JvdyBvZiBidWlsZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCAqbmdGb3I9XCIjc3F1YXJlIG9mIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNxdWFyZSBbdGl0bGVdPVwic3F1YXJlLnRpdGxlXCIgW2Rlc2NyaXB0aW9uXT1cInNxdWFyZS5kZXNjcmlwdGlvblwiIFtzcmNdPVwic3F1YXJlLnNyY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXNjcmlwdGlvbkxpbmtdPVwic3F1YXJlLmRlc2NyaXB0aW9uTGlua1wiIFtkZXNjcmlwdGlvbkxpbmtVUkxdPVwic3F1YXJlLmRlc2NyaXB0aW9uTGlua1VSTFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcXVhcmU+XG4gICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGNvbnRhY3Q+PC9jb250YWN0PlxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgYFxufSlcbmV4cG9ydCBjbGFzcyBXYWxsIHtcbiAgICAvL3VzZWQgdG8gYnVpbGQgdGhlIHNxdWFyZXNcbiAgICBudW1Db2x1bW5zIDogbnVtYmVyID0gMTtcbiAgICBidWlsZGVyIDogYW55W11bXSA9IFtdO1xuXG4gICAgLy9Db25zdHJ1Y3QgdGhlIGJ1aWxkZXIgd2hpY2ggaXMgdXNlZCB0byBsYXkgb3V0IHRoZSBzcXVhcmVzIGJ5IHRlbXBsYXRlXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgLy9Gb3IgZXZlcnkgbnVtQ29sdW1ucyBzcXVhcmVzLCBjb25zdHJ1Y3QgYSBuZXcgcm93XG4gICAgICAgICAgICBpZiAoaSV0aGlzLm51bUNvbHVtbnMgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRlci5wdXNoKFtdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYnVpbGRlclt0aGlzLmJ1aWxkZXIubGVuZ3RoIC0gMV0ucHVzaCh0aGlzLnNxdWFyZXNbaV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgU3F1YXJlc1xuICAgICAgICB0aXRsZSA6IHRpdGxlIG9mIHNxdWFyZVxuICAgICAgICBzcmMgOiBpbWFnZSBmaWxlIG5hbWUgaW4gcGF0aFRvSW1hZ2VzXG4gICAgICAgIGRlc2NyaXB0aW9uIDogc3F1YXJlIGRlc2NyaXB0aW9uXG4gICAgKi9cbiAgICBzcXVhcmVzIDogYW55W10gPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYGAsXG4gICAgICAgICAgICBzcmMgOiBgYWJvdXRicmlhbmxlZS5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBTb2Z0d2FyZSBFbmdpbmVlcmAsXG4gICAgICAgICAgICBzcmMgOiAnYWJvdXRtZS5qcGcnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgVUMgU2FuIERpZWdvIDIwMTQgQ29tcHV0ZXIgU2NpZW5jZSBNYWpvcmBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGUgOiBgV2VpZ2h0IExpZnRlcmAsXG4gICAgICAgICAgICBzcmMgOiBgbGlmdGVyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBY3RpdmUgd2VpZ2h0LWxpZnRlciBmb3Igc2l4IHllYXJzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBQaG90b2dyYXBoZXJgLFxuICAgICAgICAgICAgc3JjIDogYHBob3RvZ3JhcGhlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgQW1hdGV1ciBwaG90b2dyYXBoZXIgZXhwZXJpZW5jZWQgd2l0aCBib3RoIERTTFIgYW5kIHBvbGFyb2lkIGNhbWVyYXNgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFNub3dib2FyZGVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBzbm93Ym9hcmQuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFtYXRldXIgc25vd2JvYXJkZXIgd2l0aCBjb25zaXN0ZW50IHJlYXItZW5kIHBhaW5gXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFRldHJpcyBFbnRodXNpYXN0YCxcbiAgICAgICAgICAgIHNyYyA6IGB0ZXRyaXMuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEhpZ2ggc2NvcmUgb2YgNDE5MzMgb24gVGV0cmlzIFVsdHJhLCBwcm9maWNpZW50IGF0IFQtc3Bpbm5pbmcgYW5kIFNUIHN0YWNraW5nYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBEZXNzZXJ0IENvbm5vaXNzZXVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBkZXNzZXJ0LmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBFeHBlcnQgaW4gZGVzc2VydCB0YXN0aW5nYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBIaWtlcmAsXG4gICAgICAgICAgICBzcmMgOiBgaGlrZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEFsd2F5cyBhY3RpdmVseSBsb29raW5nIGZvciBuZXcgdHJhaWxzIHRvIGhpa2VgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYERhbmNlcmAsXG4gICAgICAgICAgICBzcmMgOiBgZGFuY2VyLmpwZ2AsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbiA6IGBBbWF0ZXVyIGRhbmNlciwgYnV0IGV4cGVydCB3aXRoIGdvb2QgY29tcGFueSBhbmQgYSBjb3VwbGUgb2YgYmVlcnNgXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlIDogYFdvcmxkIEV4cGxvcmVyYCxcbiAgICAgICAgICAgIHNyYyA6IGBleHBsb3Jlci5qcGdgLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24gOiBgTG92ZXIgb2YgdGhlIG9jZWFuLCBuZXcgZW52aXJvbm1lbnRzLCBhbmQgZXhvdGljIGZvb2RzYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBKb2tlc3RlcmAsXG4gICAgICAgICAgICBzcmMgOiBgam9rZXN0ZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYENyZWF0b3Igb2YgYmFkIGpva2VzIGFuZCBwdW5zIHdpdGggYSBzaWRlIG9mIGhvcnJlbmRvdXNseSBsb3VkIGxhdWdodGVyYFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICB0aXRsZSA6IGBIYXJkIFRoaW5rZXJgLFxuICAgICAgICAgICAgc3JjIDogYHRoaW5rZXIuanBnYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uIDogYEdldCB0byBrbm93IG15IHRlY2huaWNhbCBzaWRlIWAsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbkxpbmsgOiBgQ2hlY2sgb3V0IG15IHJlc3VtZSBoZXJlYCxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uTGlua1VSTCA6IGBMZWVCcmlhbl9SZXN1bWUucGRmYFxuICAgICAgICB9XG4gICAgXTtcblxuXG59XG4iXX0=