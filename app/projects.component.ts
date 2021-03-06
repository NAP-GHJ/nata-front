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

    p = [1,2,3,4,5,6,7,8,9,10];

    ngOnInit():void{
        
    }

    createProject():void{
        alert('创建新项目成功');
    }

    gotoProjectDetail(ele:string):void{
        this.router.navigate(['/projectManager',ele]);
    }
}