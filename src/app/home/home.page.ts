import { Router, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { DataapiService } from '../dataapi.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //ประกาซศตัวแปรเพื่อรับค่าจากหน้า home.page.html
  dataMember: any = {};
  txtidstu: any;
  txtname: any;
  txtnname: any;
  txtage: any;
  txtphone: any;
  txtaddress: any;
  txtstatus: any;

  constructor(
    public dataapi: DataapiService,
    private route:Router
     ) {}

  addmember() {
    let data = {
      id_stu: this.txtidstu,
      name: this.txtname,
      nname: this.txtnname,
      age: this.txtage,
      phone: this.txtphone,
      address: this.txtaddress,
      status: this.txtstatus,
    }
    this.dataapi.addMember(data).subscribe({
      next: (res) => {
        console.log("เพิ่มข้อมูลสำเร็จ" ,res);
      },
      error: (err) => {
        console.log("เพิ่มข้อมูลไม่สำเร็จ", err);
      }
    });
    this.clearForm();
  }

  //ฟังก์ชันสำหรับล้างข้อมูล
  clearForm(){
    this.txtidstu = '';
    this.txtname = '';
    this.txtnname = '';
    this.txtage = '';
    this.txtphone = '';
    this.txtaddress = '';
    this.txtstatus = '';
  }

  showdata(){
    this.route.navigate(['/show']);
  }
  
}
// //ประกาซศตัวแปรเพื่อรับค่าจากหน้า home.page.html
// dataMember:any={};
// txtidstu:string|undefined;
// txtname:string|undefined;
// txtnname:string|undefined;
// txtage:string|undefined;
// txtphone:string|undefined;
// txtaddress:string|undefined;
// txtstatus:string|undefined;

// //ตัวแปรส่งไปยัง api
// postidstu:any;
// postname:any;
// postnname:any;
// postage:any;
// postphone:any;
// postaddress:any;
// poststatus:any;

// constructor(
//   public dataapi: DataapiService,
//   private route:Router
// ) {}

// //ฟังก์ชันสำหรับการเพิ่มข้อมูล
// addmember(){
//   console.log("ค่าที่กรอก",this.txtidstu);
// }


