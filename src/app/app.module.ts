import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MyserviceService } from './myservice.service';
import { HttpModule } from '@angular/http';
import { SqrtPipe } from './app.sqrt';
@NgModule({
  imports:      [ BrowserModule, FormsModule,       HttpModule,  ],
  declarations: [ AppComponent, HelloComponent, SqrtPipe,        ],
  providers: [MyserviceService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
