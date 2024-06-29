import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { FooterComponent } from "./footer.component";

@NgModule({
    declarations: [
        FooterComponent,
      ],
      imports: [IonicModule,RouterModule],
      exports: [
        FooterComponent,
      ]
 })
 export class FooterModule {}