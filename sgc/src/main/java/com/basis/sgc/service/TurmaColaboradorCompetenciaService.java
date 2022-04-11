package com.basis.sgc.service;

import com.basis.sgc.domain.ColaboradorCompetencia;
import com.basis.sgc.domain.TurmaColaboradorCompetencia;
import com.basis.sgc.repository.ColaboradorCompetenciaRepository;
import com.basis.sgc.repository.ColaboradorRepository;
import com.basis.sgc.repository.CompetenciaRepository;
import com.basis.sgc.repository.TurmaColaboradorCompetenciaRepository;
import com.basis.sgc.service.dto.TurmaColaboradorCompetenciaDTO;
import com.basis.sgc.service.mapper.ColaboradorCompetenciaMapper;
import com.basis.sgc.service.mapper.TurmaColaboradorCompetenciaMapper;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class TurmaColaboradorCompetenciaService {

    private final TurmaColaboradorCompetenciaMapper turmaColaboradorCompetenciaMapper;

    private final TurmaColaboradorCompetenciaRepository turmaColaboradorCompetenciaRepository;

    public List<TurmaColaboradorCompetenciaDTO> buscar(){
        return turmaColaboradorCompetenciaMapper.toDto(turmaColaboradorCompetenciaRepository.findAll()) ;
    }

    public TurmaColaboradorCompetenciaDTO salvar(TurmaColaboradorCompetenciaDTO turmaColaboradorCompetenciaDTO){
        TurmaColaboradorCompetencia turmaColaboradorCompetencia = turmaColaboradorCompetenciaMapper.toEntity(turmaColaboradorCompetenciaDTO);
        return turmaColaboradorCompetenciaMapper.toDto(turmaColaboradorCompetenciaRepository.save(turmaColaboradorCompetencia));
    }
}
