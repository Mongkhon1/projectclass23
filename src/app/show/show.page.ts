import { Component, OnInit } from '@angular/core';
import { DataapiService } from '../dataapi.service';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
  member: any = [];//ประกาศค่าตัวแปรอาเรย์ เพื่อมารับค่า

  constructor(
    private http: HttpClient,
    public dataapi: DataapiService,
    private nav: NavController,
    private router: Router // เพิ่มการ inject Router
  ) { 
  this.loadDataMem();
  }

  ngOnInit() {
    this.loadDataMem();
  }

  loadDataMem() {
    this.dataapi.listMenber().subscribe({
      next: (res: any) => {
        console.log('Successfully');
        this.member = res;

      }, 
      error:(error: any) => {
        console.log('Error',error)
      }
    });
  } 
  goHome() {
    this.router.navigate(['/home']);
  }

  //ลิงค์ไปหน้ารายละเอียด
  edit(datamem:any){
    this.dataapi.data_datailMen = datamem;
    console.log(datamem);
    this.nav.navigateForward('/edit');
  }

  //ลบข้อมูล
  delMem(id:any) {
    // console.log("ค่าที่กรอก",data);
    this.dataapi.delMember(id).subscribe({
      next: (res:any) => {
      console.log('ลบข้อมูลสำเร็จ', res);
      },
      error: (error: any) => {
        console.log('ไม่สามารถลบข้อมูลได้', error);
      },
    });
    this.loadDataMem(); //เรียกใช้งาน ฟังก์ชัน การดึงข้อมูล
  }
  
  

}
