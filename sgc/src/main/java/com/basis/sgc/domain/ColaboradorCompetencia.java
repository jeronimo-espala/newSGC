package com.basis.sgc.domain;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "colaborador_competencia")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class ColaboradorCompetencia implements Serializable {

    @EmbeddedId
    private ColaboradorCompetenciaChave id;

    @ManyToOne
    @MapsId("idColaborador")
    @JoinColumn(name = "idColaborador")
    private Colaborador colaborador;

    @ManyToOne
    @MapsId("idCompetencia")
    @JoinColumn(name = "id_competencia")
    private Competencia competencia;

    @Enumerated(value = EnumType.ORDINAL)
    @Column(name = "nivel")
    private Nivel nivel;

}
