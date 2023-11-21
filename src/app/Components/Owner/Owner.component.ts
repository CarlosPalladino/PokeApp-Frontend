import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-owner',
    templateUrl: './Owner.component.html',
    styleUrls: ['./Owner.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OwnerComponent { }
