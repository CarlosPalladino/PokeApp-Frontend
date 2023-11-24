import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../api/services';
import { OwnerDto } from '../../api/models/owner-dto';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.css']
})
export class CreateOwnerComponent implements OnInit {
  owner: OwnerDto = {} as OwnerDto;

  constructor(private route: ActivatedRoute,
    private api: OwnerService) { }

  ngOnInit() {
    const ownerId = this.route.snapshot.paramMap.get('id');

    if (ownerId !== null) {
      const params = { ownerId: Number(ownerId) };

      this.api.apiOwnerOwnerIdGet$Json(params).subscribe(owner => {
        this.owner = owner;
      });
    }
  }
  onSubmit() {
    if (this.owner) {
      const params = {
        body: this.owner
      };
  
      if (this.owner.id) { // Si el propietario ya tiene un ID, entonces es una actualización
        this.api.apiOwnerOwnerIdPut({ ownerId: this.owner.id, body: this.owner })
          .subscribe(() => {
            Swal.fire('¡Éxito!', 'Propietario actualizado con éxito.', 'success');
          },
          error => {
            console.error('Hubo un error al enviar el formulario', error);
            Swal.fire('Error', 'Hubo un error al actualizar el propietario.', 'error');
          });
      } else { // Si no, entonces es una creación
        this.api.apiOwnerPost(params).subscribe(() => {
          Swal.fire('¡Éxito!', 'Propietario creado con éxito.', 'success');
        }, error => {
          console.error('Hubo un error al enviar el formulario', error);
          Swal.fire('Error', 'Hubo un error al crear el propietario.', 'error');
        });
      }
    }
  }
  
  
}
