import { Component, OnInit } from '@angular/core';
import {TurmaService} from "../../service/turma.service";
import {Dropdown, DynamicDialogConfig, DynamicDialogRef, SelectItem} from 'primeng';
import {ColaboradorService} from "../../../colaborador/service/colaborador.service";
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CompetenciaService} from '../../../competencia/service/competencia.service';
import {PageNotificationService} from '@nuvem/primeng-components';
import {ColaboradorCompetenciaNomeModel} from '../../models/colaborador-competencia-table.model';

@Component({
  selector: 'app-turma-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

    status: SelectItem[];
    competencias: SelectItem[];
    colaboradores: SelectItem[];
    formTurma: FormGroup;
    formColComp: FormGroup;
    colaboradorCompetencias: ColaboradorCompetenciaNomeModel[] = [];
    nomes: ColaboradorCompetenciaNomeModel[] = [];

  constructor(private turmaService: TurmaService, private colaboradorService: ColaboradorService, private fb: FormBuilder,
              private config: DynamicDialogConfig, private competenciaService: CompetenciaService,
              private messageService: PageNotificationService, private ref: DynamicDialogRef) { }

  ngOnInit(): void {
      this.novoFormularioColaboradorCompetencia();
      this.listaStatus();
      this.listarCompetencias();
  }

  novoFormularioColaboradorCompetencia() {
      this.formTurma = this.fb.group(
          {
              nome: [null, [Validators.required]],
              descricao: [null, [Validators.required]],
              data_inicio: [null,[Validators.required]],
              data_termino: [null, [Validators.required]],
              id_status: [null, [Validators.required]],
              colcomps: [[]]
          }
      )
      this.formColComp = this.fb.group({
          idCompetencia: [null],
          idColaborador: [null]
      })
  }

  listaStatus() {
      this.turmaService.buscarStatus().subscribe( resposta =>{
          this.status = resposta;
      })
  }

  listarCompetencias() {

      this.competenciaService.buscarDropdown().subscribe(resposta => {
          this.competencias = resposta;
      })

      if(this.config.data) {
          this.config.data.data_inicio = new Date(this.config.data.data_inicio)
          this.config.data.data_termino = new Date(this.config.data.data_termino)
          this.formTurma.patchValue(this.config.data);
      }
  }

  listarColaborador(id) {
      if(id) {
          this.colaboradorService.buscarNivelMaximo(id).subscribe( resposta => {
              this.colaboradores = resposta;
          })
      }
  }

    salvar() {
        if (this.formTurma.valid) {
            console.log(this.formTurma.value)
            // this.competenciaService.salvar(this.turma.value).subscribe(
            //     succcess => this.ref.close(this.messageService.addSuccessMessage('Salvo com sucesso', 'Turma')),
            //     error => this.messageService.addErrorMessage('Não foi possível salvar!', 'Turma')
            // );
        }
    }

    // adicionarColaboradorCompetencia(colaboradorCompetencia) {
    //     this.turma.get('colaboradorCompetencia').value.push(colaboradorCompetencia);
    //
    //
    // }

    novoColaboradorCompetencia():FormGroup {
        return this.fb.group({
            idColaborador: '',
            idCompetencia: ''
        })
    }
    adicionarColaboradorCompetencia(ddCompetencia, ddColaborador) {


      this.formTurma.get("colcomps").value.push(this.formColComp.value)
        this.colaboradorCompetencias.push(this.formColComp.value)
        this.pegarLabelDropdown(ddCompetencia, ddColaborador);

    }

    removerColaboradorCompetencia(turma) {
        console.log(turma)

        this.formTurma.get("colcomps").value
        this.colaboradorCompetencias.pop()
    }

    pegarLabelDropdown(ddCompetencia: Dropdown, ddColaborador: Dropdown){

        // this.colaboradorCompetencias.push({
        //     idCompetencia.
        // })
        //
        // if (this.nomes) {
        //
        //     console.log(this.nomes)
        // }
    }


}
