package com.basis.sgc.service.dto;

import com.sun.istack.NotNull;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Getter
@Setter
public class ColaboradorDropdownDTO implements Serializable {

    @NotNull
    private String label;

    @NotNull
    private Integer value;

    public ColaboradorDropdownDTO(String label, Integer value) {
        this.label = label;
        this.value = value;
    }

}
