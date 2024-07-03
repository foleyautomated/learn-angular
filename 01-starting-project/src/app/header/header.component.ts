import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    standalone: true, //Could also be Module based (i.e., standalone=false)
    templateUrl: './header.component.html',
    //You can also do this: template '<h1>HelloWorld!<h2>'
    styleUrl: './header.component.css' //Should typically use 'styleUrls: []' CAN use 'styles: litteralcss

})
export class HeaderComponent {

}