import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

/*Components*/
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/*Angular Material*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


/*Páginas*/
import { HomeComponent } from "./views/home/home.component";
import { HeaderComponent } from "./views/header/header.component";
import { JogosComponent } from "./views/jogos/jogos.component";
import { FooterComponent } from "./views/footer/footer.component";



@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        FooterComponent,
        HeaderComponent,
        JogosComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }