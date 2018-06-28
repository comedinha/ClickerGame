package click.myclick.service.dao.report;

import click.myclick.model.Report;
import click.myclick.repository.ReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;


@Service
public class BasicReportService implements ReportService {

    private final ReportRepository repository;

    @Autowired
    public BasicReportService(final ReportRepository repository) {
        this.repository = repository;
    }

    @Override
    public Report create(final Report report) {
        report.setCreatedAt(String.valueOf(LocalDateTime.now()));
        return repository.save(report);
    }

    @Override
    public Report find(final String id) {
        return repository.findById(id).get();
    }

    @Override
    public List<Report> findAll() {
        return repository.findAll();
    }

    @Override
    public Report update(final String id, final Report report) {
        report.setId(id);

        final Report saved = repository.findById(id).get();

        if (saved != null) {
            report.setCreatedAt(saved.getCreatedAt());
            report.setUpdatedAt(String.valueOf(LocalDateTime.now()));
        } else {
            report.setCreatedAt(String.valueOf(LocalDateTime.now()));
        }
        repository.save(report);
        return report;
    }

    @Override
    public String delete(final String id) {
        repository.deleteById(id);
        return id;
    }

    @Override
    public ReportRepository getRepository() {
        return repository;
    }
}
