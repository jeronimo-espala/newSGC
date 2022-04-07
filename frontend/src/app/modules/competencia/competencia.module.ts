import { CompetenciasRoutingModule } from './competencia.routing.module';
import { CompetenciaService } from './service/competencia.service';
import { SharedModule } from './../../shared/shared.module';
import { CompetenciaListarComponent } from './components/competencia-listar/competencia-listar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogService} from 'primeng/dynamicdialog';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {CompetenciaFormComponent} from './components/competencia-form/competencia-form.component';
import {MessageService} from 'primeng';



@NgModule({
  declarations: [CompetenciaListarComponent, CompetenciaFormComponent],
    imports: [
        CommonModule,
        SharedModule,
        CompetenciasRoutingModule,
        ReactiveFormsModule
    ],
  providers: [CompetenciaService, DialogService, FormBuilder, MessageService]
})
export class CompetenciaModule { }
