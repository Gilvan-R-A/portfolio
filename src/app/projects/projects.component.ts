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
  selectedTech: string = '';

  technologies = ['Angular', 'React', 'PHP', 'Java', 'Node.js', 'TypeScript','JavaScript', 'Spring Boot'];

  projects = [
    {
      name: 'Sistema de Gerenciamento de Reservas para Hotéis',
      description: 'Sistema de reservas desenvolvido em PHP e JavaScript',
      technologies: ['PHP', 'JavaScript', 'FullCalendar.js', 'SweetAlert2', 'MySQL'],
      github: 'https://github.com/Gilvan-R-A/hotel-reservation-app',
      live: 'https://hotel-reservation-frontend-zxic.onrender.com',
      image: 'assets/img/projects/hotelReservations.png',
    },
    {
      name: 'Streaming de Filmes',
      description: 'Streaming de Filmes desenvolvido em React',
      technologies: ['React', 'TypeScript'],
      github: 'https://github.com/Gilvan-R-A/movie-streaming-app',
      live: 'https://movie-streaming-app-mu.vercel.app/',
      image: 'assets/img/projects/movieApp.png',
    },
    {
      name: 'Portfólio',
      description: 'Portfólio profissional desenvolvido em Angular.',
      technologies: ['Angular', 'TypeScript', 'EmailJS'],
      github: 'https://github.com/Gilvan-R-A/portfolio',
      live: 'https://gilvan-r-a.github.io/portfolio/',
      image: 'assets/img/projects/portfolio.png',
    },
    {
      name: 'API de Gestão de Pessoas',
      description: 'Uma API desenvolvida com Java e Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'JPA', 'Lombok', 'MapStruct', 'H2 Database'],
      github: 'https://github.com/Gilvan-R-A/people-management-api',
      live: 'https://personapi-z7p3.onrender.com/api/v1/people',
      image: 'assets/img/projects/ApiGestaoPessoas.webp',
    },
    {
      name: 'API de Notícias',
      description: 'API criada em Node.js e Express',
      technologies: ['Node.js', 'Express', 'JWT', 'body-parser', 'cors', 'PostgreSQL', 'SQLite'],
      github: 'https://github.com/Gilvan-R-A/news-api',
      live: 'https://news-api-u1bc.onrender.com/postagens',
      image: 'assets/img/projects/ApiNoticias.webp',
    },
    {
      name: 'E-commerce Frontend',
      description: 'Frontend de um site de vendas usando JavaScript.',
      technologies: ['JavaScript', 'Vite', 'HTML', 'Tailwind CSS'],
      github: 'https://github.com/Gilvan-R-A/top-magazine-website',
      live: 'https://gilvan-r-a.github.io/top-magazine-website/', 
      image: 'assets/img/projects/ecommerce.jpg'
    },
    {
      name: 'Site de Notícias',
      description: 'Página de notícias desenvolvida em JavaScript.',
      technologies: ['JavaScript', 'Fetch API', 'HTML', 'CSS', 'SweetAlert2'],
      github: 'https://github.com/Gilvan-R-A/news-website',
      live: 'https://gilvan-r-a.github.io/news-website/', 
      image: 'assets/img/projects/SiteNoticias.png'
    },
    {
      name: 'API de Produtos',
      description: 'API criada em Java e Spring Boot.',
      technologies: ['Java', 'Spring Boot', 'HTML', 'CSS', 'Bootstrap', 'JQuery', 'PostgreSQL'],
      github: 'https://github.com/Gilvan-R-A/product-api',
      live: 'https://product-api-q657.onrender.com', 
      image: 'assets/img/projects/ApiProdutos.jpg'
    }
  ];

  get filteredProjects(){
    return this.selectedTech 
    ? this.projects.filter(project => 
      project.technologies.includes(this.selectedTech!)
    )
    : this.projects;
  }
}

