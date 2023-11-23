import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../../api/services';
import { OwnerDto } from '../../api/models/owner-dto';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'; // Importa SweetAlert2

@Component({
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.css']
})
export class OwnerDetailComponent implements OnInit {
  owner: OwnerDto | null = null;

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

eliminarOwner() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: "¡No podrás revertir esto!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: '¡Sí, bórralo!'
  }).then((result) => {
    if (result.isConfirmed) {
      // Aquí va tu código para eliminar el Pokémon
      Swal.fire(
        '¡Eliminado!',
        'Tu Owner ha sido eliminado.',
        'success'
      )
    }
  })
}


}