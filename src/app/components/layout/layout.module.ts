import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(LayoutRoutingModule)],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutModule {}
