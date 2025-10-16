import { Component } from '@angular/core';
import { KpiCardService } from './kpi-card.service';

@Component({
  selector: 'app-kpi-card',
  standalone: false,
  templateUrl: './kpi-card.component.html',
  styleUrl: './kpi-card.component.css',
})
export class KpiCardComponent {
  constructor(private KpiCardService: KpiCardService) {}

  kpiValues: Record<string, number> = {};

  open: number = 0;
  inProgress: number = 0;
  resolved: number = 0;
  closed: number = 0;
  cancelled: number = 0;

  ngOnInit(): void {
    this.getKpiValues();
  }

  getKpiValues() {
    this.KpiCardService.GetKpiValues().subscribe({
      next: (data) => {
        console.log('Valores recebidos:', data);

        this.kpiValues = data;

        this.open = data['0'];
        this.inProgress = data['1'];
        this.resolved = data['2'];
        this.closed = data['3'];
        this.cancelled = data['4'];
      },
      error: (err) => {
        console.error('Erro ao carregar tickets:', err);
      },
    });
  }
}
