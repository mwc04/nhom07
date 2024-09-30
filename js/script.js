// alert("Xin chào: Trần Anh Đức");

var fullname = "duc";
var ClassName = "Web";
var dateofBirth = "04";
//Hằng số giá trị không thể thay đổi
const pi = 3.14;

var soA = 10;
var soB = 5;

var ketQua1 = soA + soB;
var ketQua2 = soA - soB;
var ketQua3 = soA * soB;
var ketQua4 = soA / soB;
// soA++;
// var ketQua1 = --soA;
soA += soB; //soA = soA + soB;
soA -= soB; //soA = soA - soB;
var ketQua1 = soA;
//So sánh
// ==
//!=
//><
//>= <=
//&&
//||
//!
var ketQua1 = soA == soB;
var ketQua1 = soA !== "10";
var ketQua1 = soA < soB;
var ketQua1 = soA >= 10;
var ketQua1 = soA >= 10 && 0.1 + 0.2 == 0.3;
var ketQua1 = soA >= 10 || 0.1 + 0.2 == 0.3;
var ketQua1 = !(soA >= 10) || 0.1 + 0.2 == 0.3;

var thongTinSinhVien = {
  hoVaten: "Trần Anh dog",
  tuoi: 20,
  chuyenNganh: "CNTT",
  gioiTinh: true,
  diaChi: {
    thanhPho: "Hà Nội",
    quanHuyen: "Bắc Từ Liêm",
    duong: "Đức Thắng",
  },
};
var gioiTinh = !thongTinSinhVien.gioiTinh ? "nam" : "nữ";

var ketQua1 =
  thongTinSinhVien.hoVaten +
  " " +
  thongTinSinhVien.diaChi.thanhPho +
  " " +
  gioiTinh;

//undefined và null

let thongTinDuyDung = {
  msv: 2221050636,
  hoVaTen: "Lương Duy Dũng",
  lop: "k67_B",
  namSinh: 2004,
  chuyenNganh: "cntt",
  queQuan: "Hoa Thánh",
};

let getTime = new Date("2003-12-23");
let getYear = getTime.getFullYear();
let getMonth = getTime.getMonth() + 1;
let age = getYear - thongTinDuyDung.namSinh;

thongTinDuyDung.namSinh = getYear;
console.log(thongTinDuyDung.namSinh);
console.log("Toi ten la : " + thongTinDuyDung.hoVaTen + " tuoi : " + age);
// thêm thông tin vào Object
// thongTinDuyDung.gioiTinh = true
// length do do dai
// console.log(thongTinDuyDung.hoVaTen[1]); lay index cua chuỗi
// cắt chuỗi
// console.log(myString.slice(3, 9));
// ddoi ten replace
// console.log(thongTinDuyDung.hoVaTen.replace("Duy", "Anh"));
// console.log(thongTinDuyDung.hoVaTen.replaceAll("n", "G"));
// console.log(thongTinDuyDung.hoVaTen.toUpperCase());
// console.log(thongTinDuyDung.hoVaTen.indexOf("Duy"));
//  laays gia trij tu chu duy la 6
// console.log(thongTinDuyDung.hoVaTen.includes("Duy"));
//lấy giá trị có hoặc không
// console.log(`tuoi cua toi ${age} tuổi`);
// console.log(thongTinDuyDung.hoVaTen.startsWith("Lương")); lưu ý
// console.log(thongTinDuyDung.hoVaTen.split("n"));

// number

// ép kiểu
// console.log(1 + Number("32"));
// console.log(parseInt(10.5));
// console.log(parseFloat(20.6));
// console.log(Math.PI.toFixed(2));
// console.log(getMonth);'

// Array
// cú pháp kiểm tra Array.isArray(nunArray) trả về true hoặc fales
let nunArray = [1, 2, 3, 4, 5, 6, 7];
// console.log(nunArray[2]);
// thay đổi giá trị
// nunArray[2] = 6;
// console.log(nunArray.indexOf(5)); in ra vị trí của Array nếu có hiển thị ra vụ trí nếu không có -1
// console.log(nunArray.lastIndexOf(2)); ngược lại với indexOf
// let a, b, c, d;

// a = [1];
// b = ["a"];
// c = ["B", 4];
// d = a.concat(b, c);
// console.log(d);
// console.log(nunArray);

// console.log(nunArray.join("/")); thay dấu phẩy bằng dấu /
// console.log(nunArray.pop()); xóa phần tử cuối cùng trong mảng
// console.log(nunArray.reverse()); Đảo chiều\
// console.log(nunArray.push(8));dẩy phần từ vào vị trí cuối cùng của mảng
// console.log(nunArray.shift()); xóa phần tử đầu tiên
// console.log(nunArray.unshift(0)); Thêm dầu phần tử
console.log(nunArray);

// if else

// let time = new Date();
// let getHours = time.getHours();

// if (getHours >= 1 && getHours < 6) {
//   console.log("chào buổi đêm");
// } else if (getHours >= 6 && getHours < 12) {
//   console.log("chào buổi sáng");
// } else if (getHours >= 12 && getHours < 18) {
//   console.log("chào buổi chiều");
// } else {
//   console.log("chào buổi tối");
// }

// let inPutNunber = parseInt(prompt("nhập vào số bất kì của bạn"));
// let nhapSo = "2000000000000000";
// let getNunber = parseInt(nhapSo[nhapSo.length - 1]);

// if (getNunber % 2 == 0) {
//   console.log("số của bạn là số chẵn");
// } else {
//   console.log("số của bạn là số lẻ");
// }

let chanLe =
  200000000000000000000001n % 2n == 0
    ? console.log("Số chẵn")
    : console.log("Số lẻ");

// let inPutNunber = parseInt(prompt("nhập vào số bất kì của bạn"));

// if (inPutNunber < 4) {
//   console.log("F");
// } else if (inPutNunber >= 4 && inPutNunber < 7) {
//   console.log("C");
// } else if (inPutNunber >= 7 && inPutNunber < 10) {
//   console.log("A");
// }

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }
