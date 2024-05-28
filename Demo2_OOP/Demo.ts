import { Person, v_vti } from "./Person";
import { Student } from "./Student";
// import v_age from "./Person";


// var person1 = new Person();
// // person1.id = 1;
// person1.setId(1);
// person1.setName("Hoàng Tuấn");
// person1.setAddress("HN");

// var person2 = new Person();
// person2.setId(2);
// person2.setName("Văn Lâm");
// person2.setAddress("HCM");

var person1 = new Person(1, "Hoàng Tuấn", "HN");
var person2 = new Person(2, "Văn Lâm", "HCM");

// In thông tin
// console.log(`Đây là ${v_vti}`);
// console.log(`Thông tin Person 1 là, ID: ${person1.id}, Name: ${person1.name}, Address: ${person1.address} `);
person1.go();
person1.showInfo();
person2.showInfo();
// console.log(`Tuổi của tôi là ${v_age}`);

// Demo Bạn hãy tạo ra 1 số bạn Student trong lớp
var student1 = new Student(1,"Dai loc", "HCM", "Railway82", 2);
var student2 = new Student(2, "Phuc","HCM","Railway82",3);
