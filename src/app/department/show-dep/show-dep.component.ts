import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  DepartmentList:any=[];

  ModalTitle:any;
  ActivateAddEditDepComp:boolean=false;
  dep:any;


  ngOnInit(): void {
    this.refreshDepList();
  }


  addClick(){
    this.dep={
      DepartmentID:0,
      DepartmentName:""
    }
    this.ModalTitle="Shto Departamentin";
    this.refreshDepList();
  }

  editClick(item:any){
    this.dep=item;
    this.ModalTitle="Edito Departmentin";
    this.refreshDepList();
  }

  deleteClick(item:number){
    alert(item);
    //if(confirm("A jeni i sigurte qe deshironi te fshini kete?")){
      this.service.deleteDepartment(item).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      });
    //}
  }

  closeClick(){
    this.ActivateAddEditDepComp = false;
    this.refreshDepList();
  }

  refreshDepList(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      this.ActivateAddEditDepComp=true;
      console.log(data);
    });
  }


}
