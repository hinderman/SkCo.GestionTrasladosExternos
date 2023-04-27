import { Component, OnInit } from '@angular/core';
import { ManagementExternalTransfersService } from 'src/app/management-external-transfers/management-external-transfers.service'

@Component({
  selector: 'app-contributions-main',
  templateUrl: './contributions-main.component.html',
  styleUrls: ['./contributions-main.component.css']
})
export class ContributionsMainComponent implements OnInit {

  constructor(private managementExternalTransfersService: ManagementExternalTransfersService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.managementExternalTransfersService.getAll().subscribe((resp: any) => {
      console.log(resp);
    });
  }
}
