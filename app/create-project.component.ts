/**
 * Created by ghj on 16-10-15.
 */
/**
 * Created by ghj on 16-10-14.
 */
import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Location} from '@angular/common';


@Component({
    moduleId:module.id,
    selector:'create-project',
    templateUrl:'create-project.component.html',
})

export class CreateProjectComponent implements  OnInit{
    constructor(
        private router :Router,
        private location:Location
    ){}

    ngOnInit():void{

    }

    hello():void{

    }

    back():void{
        this.location.back();
    }
}