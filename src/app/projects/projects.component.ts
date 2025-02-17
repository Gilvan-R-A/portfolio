import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-projects',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterModule, 
    MatFormFieldModule, 
    MatInputModule, 
    FormsModule, ReactiveFormsModule,
    MatSelectModule,  
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  selectedTech: string | null = null;

  technologies = ['Angular','JavaScript', 'PHP','Node.js', 'Java', 'Spring Boot'];

  projects = [
    {
      name: 'Portfólio',
      description: 'Portfólio profissional desenvolvido em Angular.',
      technologies: ['Angular', 'EmailJS'],
      github: 'https://github.com/Gilvan-R-A/portfolio',
      live: null,
      image: 'assets/img/projects/portfolio.png',
    },
    {
      name: 'API de Gestão de Pessoas',
      description: 'Uma API desenvolvida com Java e Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'JPA', 'Lombok', 'MapStruct', 'H2 Database'],
      github: 'https://github.com/Gilvan-R-A/people-management-api',
      live: null,
      image: 'assets/img/projects/ApiGestaoPessoas.webp',
    },
    {
      name: 'E-commerce Frontend',
      description: 'Frontend de um site de vendas usando JavaScript.',
      technologies: ['JavaScript', 'Vite', 'HTML', 'Tailwind CSS'],
      github: 'https://github.com/Gilvan-R-A/top-magazine-website',
      live: null, 
      image: 'assets/img/projects/ecommerce.jpg'
    },
    {
      name: 'Sistema de Gerenciamento de Reservas para Hotéis',
      description: 'Sistema de reservas desenvolvido em PHP e JavaScript',
      technologies: ['PHP', 'JavaScript', 'FullCalendar.js', 'SweetAlert2', 'MySQL'],
      github: 'https://github.com/Gilvan-R-A/hotel-reservation-app',
      live: null,
      image: 'assets/img/projects/hotelReservations.png',
    },
    {
      name: 'API de Notícias',
      description: 'API criada em Node.js e Express',
      technologies: ['Node.js', 'Express', 'body-parser', 'cors', 'PostgreSQL'],
      github: 'https://github.com/Gilvan-R-A/news-api',
      live: null,
      image: 'assets/img/projects/ApiNoticias.webp',
    },
    {
      name: 'Site de Notícias',
      description: 'Página de notícias desenvolvida em JavaScript.',
      technologies: ['JavaScript', 'Fetch API', 'HTML', 'CSS', 'SweetAlert2'],
      github: 'https://github.com/Gilvan-R-A/news-website',
      live: null, 
      image: 'assets/img/projects/SiteNoticias.png'
    },
    {
      name: 'API de Produtos',
      description: 'API criada em Java e Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'HTML', 'CSS', 'Bootstrap', 'JQuery', 'PostgreSQL'],
      github: 'https://github.com/Gilvan-R-A/product-api',
      live: null, 
      image: 'assets/img/projects/ApiProdutos.jpg'
    }, 
    {
      name: 'Jogo da Memória',
      description: 'Jogo do Super Mário desenvolvido em JavaScript.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Gilvan-R-A/super-mario-memory-game-app',
      live: 'https://gilvan-r-a.github.io/super-mario-memory-game-app/', 
      image: 'assets/img/projects/JogoSuperMario.jpg'
    }, 
    {
      name: 'API de Gerenciamento de Estoques de Cerveja',
      description: 'API desenvolvida em Java e Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'Lombok', 'MapStruct', 'H2 Database', 'Swagger'],
      github: 'https://github.com/Gilvan-R-A/beer-inventory-management-api',
      live: null, 
      image: 'assets/img/projects/ApiCervejas.webp'
    }, 
    {
      name: 'Banco Digital',
      description: 'Sistema bancário simples desenvolvido em Java.',
      technologies: ['Java'],
      github: 'https://github.com/Gilvan-R-A/digital-bank-app',
      live: null, 
      image: 'assets/img/projects/BancoDigital.jpg'
    }
  ];

  get filteredProjects(){
    return this.projects.filter((project) => 
    this.selectedTech 
      ? project.technologies.includes(this.selectedTech)
      : true
    );
  }
}

