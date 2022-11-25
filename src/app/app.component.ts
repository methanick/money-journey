import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
items: MenuItem[]  = [
  // {label: "Update", icon: 'pi pi-refresh', command: () => {
  //     this.update();
  // }},
  // {label: 'Delete', icon: 'pi pi-times', command: () => {
  //     this.delete();
  // }},
  {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
  {separator: true},
  {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
];

  title = 'my-app';

  constructor(private primengConfig: PrimeNGConfig){}


    ngOnInit() {
      this.primengConfig.ripple = true;
    }

    // save(severity: string) {
    //     this.messageService.add({severity:severity, summary:'Success', detail:'Data Saved'});
    // }

    // update() {
    //     this.messageService.add({severity:'success', summary:'Success', detail:'Data Updated'});
    // }

    // delete() {
    //     this.messageService.add({severity:'success', summary:'Success', detail:'Data Deleted'});
    // }
}
