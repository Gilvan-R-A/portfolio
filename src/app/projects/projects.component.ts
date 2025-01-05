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

  technologies = ['Angular', 'Node.js', 'Java', 'Spring Boot'];

  projects = [
    {
      name: 'Sistema de Gerenciamento de Tarefas',
      description: 'Uma API desenvolvida com C# e Entity Framework.',
      technologies: ['C#', 'Entity Framework'],
      github: 'https://github.com/gilvan/tarefas-api',
      live: null,
    },
    {
      name: 'E-commerce Frontend',
      description: 'Frontend de um site de vendas usando Angular.',
      technologies: ['Angular', 'SCSS'],
      github: 'https://github.com/gilvan/ecommerce-frontend',
      live: 'https://ecommerce.com', 
    },
    {
      name: 'Sistema de Leitura de Consumo',
      description: 'Gerenciador de consumo de água e gás',
      technologies: ['Node.js', 'Express'],
      github: 'https://github.com/gilvan/consumo-api',
      live: null,
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
