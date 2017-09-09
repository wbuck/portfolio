import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { BioComponent } from './bio/bio.component';
import { SynopsisComponent } from './synopsis/synopsis.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { MessageService } from './contact/message.service';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    BioComponent,
    SynopsisComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    Ng2PageScrollModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
