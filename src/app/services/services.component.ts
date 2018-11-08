import { Component} from '@angular/core';
import{Loginservice} from './loginservice';
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

public s1:string;
public s2:string;
constructor(private obj:Loginservice){

}

public f1():void{
	var s=this.obj.isvalid();
	alert(s);
}


}
