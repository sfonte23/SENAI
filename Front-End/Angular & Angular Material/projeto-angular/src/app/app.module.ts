import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/*Angular Material*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from "@angular/forms";

/*Páginas*/
import { InicioComponent } from "./inicio/inicio.component";
import { LoginComponent } from "./login/login.component";
import { MenuComponent } from "./menu/menu.component";
import { RodapeComponent } from "./rodape/rodape.component";
@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        LoginComponent,
        MenuComponent,
        RodapeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatToolbarModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatGridListModule,
        MatInputModule,
        MatMenuModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }