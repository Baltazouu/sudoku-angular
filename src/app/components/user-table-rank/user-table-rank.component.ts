import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user.interface";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable,
  MatTableDataSource
} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {ViewChild} from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-user-table-rank',
  standalone: true,
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatPaginator,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatButtonToggle,
    MatButtonToggleGroup,
    FormsModule
  ],
  templateUrl: './user-table-rank.component.html',
  styleUrl: './user-table-rank.component.scss'
})
export class UserTableRankComponent implements OnInit, AfterViewInit {

  @Input({required:true}) users: User[] = [];
  displayedColumns: string[] = ['position', 'login', 'points', 'streak' ];
  dataSource = new MatTableDataSource<User>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  sortType: string = 'points';

  ngOnInit() : void {
    this.users = this.users.sort((a, b) => b.points - a.points);
    this.users = this.users.map((user, index) => ({...user, position: index + 1}));
    this.dataSource.data = this.users;
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() : void {
    this.dataSource.paginator = this.paginator;
  }

  changeTableSort() : void{
    if(this.sortType === 'points') {
      this.dataSource.data = this.dataSource.data.sort((a, b) => b.points - a.points);

    }
    else {
      this.dataSource.data = this.dataSource.data.sort((a, b) => b.streak - a.streak);
    }
    this.dataSource.data = this.dataSource.data.map((user, index) => ({...user, position: index + 1}));
  }

}
