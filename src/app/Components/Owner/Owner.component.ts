import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../api/services';
import { OwnerDto } from '../../api/models/owner-dto';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './Owner.component.html',
  styleUrls: ['./Owner.component.css']
})
export class OwnerComponent implements OnInit {
  owners: OwnerDto[] | null = null; // Cambiado a un array de OwnerDto

  constructor(private route: ActivatedRoute,
    private ownerService: OwnerService) { }

  ngOnInit() {
    this.ownerService.apiOwnerGet$Json().subscribe(owners => {
      this.owners = owners;
    });
  }
}
