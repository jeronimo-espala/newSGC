package com.basis.sgc.repository;

import com.basis.sgc.domain.ColaboradorCompetencia;
import com.basis.sgc.domain.ColaboradorCompetenciaChave;
import com.basis.sgc.domain.TurmaColaboradorCompetencia;
import com.basis.sgc.domain.TurmaColaboradorCompetenciaChave;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurmaColaboradorCompetenciaRepository extends JpaRepository<TurmaColaboradorCompetencia, TurmaColaboradorCompetenciaChave> {


}
