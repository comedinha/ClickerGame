package click.myclick.service.dao.report;

import click.myclick.repository.ReportRepository;
import click.myclick.model.Report;

import java.util.List;


public interface ReportService {

    Report create(Report object);

    Report find(String id);

    List<Report> findAll();

    Report update(String id, Report object);

    String delete(String id);
    
    ReportRepository getRepository();
    
}
