/**
 * Created by ghj on 16-10-14.
 */

import {Component,OnInit} from '@angular/core';

import {Router} from '@angular/router';

@Component({
    moduleId:module.id,
    selector:'projects',
    templateUrl:'projects.component.html',
    styleUrls:['projects.component.css']
})

export class ProjectsComponent implements OnInit{
    constructor(
        private router :Router
    ){}

    ngOnInit():void{

    }
}