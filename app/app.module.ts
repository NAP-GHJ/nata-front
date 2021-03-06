/**
 * Created by ghj on 16-10-10.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from "./app.component";
import {DevicesComponent} from './devices.component';
import {ProjectsComponent} from './projects.component';
import {ProjectManagerComponent} from './project-manager.component';

import {EditScriptComponent} from './edit-script.component';
import {RunnerListComponent} from './runner-list.component';
import {RunnerComponent} from './runner.component';
import {ResultComponent} from './result.component';

//Route for the module
import {routing } from './app.routing';

@NgModule({
    imports : [BrowserModule,
        routing
    ],
    declarations:[AppComponent,
        DevicesComponent,
        ProjectsComponent,
        ProjectManagerComponent,
        EditScriptComponent,
        RunnerListComponent,
        RunnerComponent,
        ResultComponent
    ],
    bootstrap:[AppComponent]
})

export class AppModule{}