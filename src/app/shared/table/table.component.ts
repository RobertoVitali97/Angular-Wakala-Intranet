import { AfterViewInit, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'wakala-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('expand', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class TableComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() tableSource: any;
  @Input() tableSettings: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  tableSourceLocal: any;
  columnsKeys: string[];
  expandedRowId: number;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.columnsKeys = this.tableSettings.columns.map((item: any) => item.key);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.tableSourceLocal) {
      this.tableSourceLocal.data = this.tableSourceLocal;
    }
  }
  ngAfterViewInit() {
    this.tableSourceLocal = new MatTableDataSource(this.tableSource);
    this.tableSourceLocal.sort = this.sort;
    this.tableSourceLocal.paginator = this.paginator;
    this.cd.detectChanges();
    return;
  }

  sendEmailClick() {
    window.location.href = 'mailto:test@example.com';
  }
  expandRow(id: number) {
    if (window.innerWidth >= 768) { return; }
    if (this.expandedRowId === id) { this.expandedRowId = null; }
    else { this.expandedRowId = id; }
  }
}
