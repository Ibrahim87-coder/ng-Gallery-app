import { Component, OnInit ,OnChanges, Input} from '@angular/core';
import { ImageService } from '../image/shared/image.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnChanges {

  visibleImages:any[]=[];

  constructor(private imageService: ImageService) { 
    this.visibleImages = this.imageService.getImages();
  }

  title='Recent Photos';
  @Input() filterBy?: string = 'all';
  ngOnChanges(): void {
    this.visibleImages = this.imageService.getImages();
  }

}
