import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact', 
  standalone: true, 
  imports: [
    CommonModule,  
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule, 
    FormsModule, 
    MatButtonModule, 
    RouterModule,  
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;

  private serviceID = 'service_ji2f9ka';
  private templateID = 'template_7m7e508';
  private userID = 'H2fz7Frr3bd3vL4Gh';

  constructor(private fb: FormBuilder){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  sendEmail(): void {
    if (this.contactForm.valid){
      const { name, email, message } = this.contactForm.value;

      emailjs
        .send(
          this.serviceID,
          this.templateID,
          { name, email, message },
          this.userID
        )
        .then(() => {
          this.successMessage = 'Mensagem enviada com sucesso!';
          this.contactForm.reset();
        })
        .catch((error) => {
          console.error('Erro ao enviar email:', error);
          this.successMessage = 'Ocorreu um erro ao enviar a mensagem.';
        })
    }
  }  
}
