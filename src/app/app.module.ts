import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { de_DE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ZorroModule } from './components/zorro.module';
import { SocialWidgetComponent } from '../app/components/social-widget/social-widget.component';
import { HeaderSectionComponent } from './components/header-section/header-section.component';
import { MintComponent } from './components/mint/mint.component';
import { CreatureTypesComponent } from './components/creature-types/creature-types.component';
import { FaqSectionComponent } from './components/faq-section/faq-section.component';
import { RaritiesComponent } from './components/rarities/rarities.component';
registerLocaleData(de);

@NgModule({
  declarations: [
    AppComponent,
    SocialWidgetComponent,
    HeaderSectionComponent,
    MintComponent,
    CreatureTypesComponent,
    RaritiesComponent,
    FaqSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroModule
  ],
  providers: [{ provide: NZ_I18N, useValue: de_DE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
