import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { AltComponent } from './alt/alt.component';
import { HisComponent } from './his/his.component';
import { AdiComponent } from './adi/adi.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

const config: SocketIoConfig = {
	url: 'localhost:3500', // socket server url;
	options: {
		transports: ['websocket']
	}
}
@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    AltComponent,
    HisComponent,
    AdiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
