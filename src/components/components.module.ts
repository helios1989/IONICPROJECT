import { NgModule } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form';
import { LoginComponent } from './login/login';
@NgModule({
	declarations: [ContactFormComponent,
    LoginComponent],
	imports: [],
	exports: [ContactFormComponent,
    LoginComponent]
})
export class ComponentsModule {}
