package com.basis.sgc.service.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class CompetenciaListDTO implements Serializable {

    @NotNull
    private Integer id;

    @NotNull
    private String nome;

    @NotNull
    private String descricao;

    @NotNull
    private String nomeCategoria;

    public CompetenciaListDTO(Integer id, String nome, String descricao, String nomeCategoria) {
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.nomeCategoria = nomeCategoria;
    }

}
