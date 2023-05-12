import projects from '../data/projects.json' assert { type: 'json' };
import {} from 'font-awesome'
import {} from 'jquery'
import {} from 'tilt'
import {} from 'modaal';
import { createApp } from 'vue'

window.onload = function() {
    createApp({
        data() {
          return {
            projects: projects
          }
        },
        template: `
        <div v-for="project in projects" class="p-4 bg-slate-50 shadow-xl items-center justify-center hover:shadow-2xl bg-cover text-gray-50 tilt" v-bind:style="{ backgroundImage: 'url(' + project.imageUrl + ')' }">
            <i class="fa {{project.symbol}}"></i> <span class="">{{project.project}}</span>
            <br><hr>
            <span>{{project.description}}</span>
            <br>
            <a class="cursor-pointer" target="_blank" v-bind:href="project.projectUrl"><i class="fa-brands fa-github px-1 hover:scale-150 duration-300"></i></a>  
            <a :href="'#modal'+project.id" :class="'modal'+project.id"><i class="fa-solid fa-screwdriver-wrench px-1 hover:scale-150 duration-300 cursor-pointer"></i></a>
            <div :id="'modal'+project.id" style="display:none;">
            <p>{{project.project}}</p>
            <hr><br>
              <div v-for="tool in project.tools">
                {{tool}}<br>
              </div>
            </div>
        </div>
        `
    }).mount('#projects');
    

    $('.tilt').tilt();

    projects.forEach(function(project) {
      $(`.modal${project.id}`).modaal();
    })
}


