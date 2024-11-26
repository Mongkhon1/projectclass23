import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {
  //ประกาศตัวแปรแบบอาเรย์เพื่อรับค่าข้อมูล
  data_datailMen: any=[]; //ใช้งานคู่กับหน้าแสดงรายละเอียด

  constructor(
    public http:HttpClient
  ) { }

  //ฟังก์ชันการเพิ่มที่ส่งไปยัง API
  addMember(data:any){
    console.log("ค่ามาจากแอพ" , data);
    return this.http.post( 'http://localhost/classwork1/API/insert.php', data) ;
  }


//สร้างขึ้นมาเพื่อดึงข้อมูลมาจาก api
  listMenber(){
  return this.http.get('http://localhost/classwork1/API/list_member.php');
}

//ฟังก์ชันสำหหรับแก้ไขข้อมูล
  editMember(dataEdit:any) {
    return this.http.put('http://localhost/classwork1/API/ubdete.php', dataEdit)
  }

 delMember(id:any) {
  return this.http.delete('http://localhost/classwork1/API/delete.php?id='+id);
 }

}
