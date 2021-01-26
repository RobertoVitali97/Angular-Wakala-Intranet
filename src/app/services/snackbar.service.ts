import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({ providedIn: 'root' })
export class SnackBarService {
  constructor(private snackbar: MatSnackBar) { }
  showSnackBar(settings: SnackbarSettings) {
    this.snackbar.open(settings.title, '', {
      duration: settings.duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: settings.class
    });
  }
}

export interface SnackbarSettings {
  title: string;
  duration: number;
  class: string;
}
