import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { FeaturedAppPostComponent } from "./featured-app-post.component";

@NgModule({
  declarations: [FeaturedAppPostComponent],
  imports: [CommonModule, RouterModule],
  exports: [FeaturedAppPostComponent]
})
export class FeaturedAppPostModule {}
