import { BrowserModule } from '@angular/platform-browser';
import { Service } from './Service/Service';
import { AppComponent } from './app.component';
import { MyComponent } from './my.component';
import { RootComponent } from './Components/root/root.component';

@NgModule({
  declarations: [AppComponent, MyComponent, RootComponent],

  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
