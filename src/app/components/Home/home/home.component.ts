import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  dialogVisible: boolean = false;

  openDialog(): void {
    this.dialogVisible = true;
  }
  
  closeDialog(): void {
    this.dialogVisible = false;
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event: MouseEvent): void {
    event.preventDefault(); // Prevent the browser context menu from appearing
    alert('Right-click is disabled on this website.');
  }
}
