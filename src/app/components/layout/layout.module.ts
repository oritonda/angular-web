import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { FooterComponent } from "./shared/footer/footer.component";

@NgModule({
  declarations: [LayoutComponent, NavbarComponent, FooterComponent],
  imports: [CommonModule, LayoutRoutingModule],
  exports: [NavbarComponent, FooterComponent],
})
export class LayoutModule {}
