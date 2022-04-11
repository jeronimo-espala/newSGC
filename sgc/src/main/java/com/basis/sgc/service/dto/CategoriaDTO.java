package com.basis.sgc.service.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotEmpty;
import java.io.Serializable;

@Getter
@Setter
public class CategoriaDTO implements Serializable {

    @NotNull
    @NotEmpty
    private String label;

    @NotNull
    @NotEmpty
    private Integer value;

    public CategoriaDTO(String label, Integer value) {
        this.label = label;
        this.value = value;
    }
}
