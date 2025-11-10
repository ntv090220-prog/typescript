//#1 Static types
let userName: string = "Vu Nguyen Dev";
console.log(userName);

//#2 type any
let useAny: any;

//#3 Những kiểu căn bản trong TS
let catName: string = "Lem";
let catAge: number = 1;
let isCat: boolean = true;

//#4 Array - mảng
let ratings: number[] = [1, 2, 3, 4, 5];
let petsName: string[] = ["Lem", "Mi Xom"];
let matrix: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];

// cách viết khác
let rating2s: Array<number> = [1, 2, 3, 4, 5];
let petName2s: Array<string> = ["Lem", "Mi Xom"];
let matrix2: Array<Array<number>> = [
  [1, 2],
  [3, 4],
  [5, 6],
];

//#5 function
function sayHi(): string {
  console.log("Xin chào");
  return "Xin chào";
}

function double(num: number): number {
  return num * 2;
}

// Tham số tùy chọn phải có dấu chấm hỏi
function greet(name: string, title?: String) {
  if (title) {
    return `Xin chào ${title} - ${name}`;
  }
  return `Xin chảo ${name}`;
}

// #6 type aliases

type Customer = {
  id: number;
  name: string;
};

type UserResponse = {
  success: boolean;
  message: string;
};

function greetCustomer(customer: Customer): UserResponse {
  return {
    success: true,
    message: `Xin chào ${customer.name}`,
  };
}

// function Signature
type SupportFunction = (customer: Customer) => UserResponse;

const greetCustomer2: SupportFunction = (customer) => {
  return {
    success: true,
    message: `Xin chào ${customer.name}`,
  };
};


// #7 Union "|" & literal type : cho pheps 1 giá trị có thể thuộc nhiều kiểu dữ liệu khác nhau
type UserId = number | string;

function getTicketInfo(id:UserId){
    if(typeof id === "string"){
        return `Tìm vé ${id}`
    }else{
        return `Tìm vé ${id}`

    }
}

getTicketInfo(10);

let mixedArray:(string | number)[] = [1,2 ,"ba","bốn"];
mixedArray.push("Lem");
// mixedArray.push(true);


type UserType = {
    username:string;
    age:number;
    phone:number;
    theme:string;
}

//literal type
type UserType2 = {
    username:string;
    age:number;
    phone:number;
    theme:"dark" | "light";
}


const user2:UserType2 = {
    username:"lem",
    age:1,
    phone:84927110910,
    theme:"dark"
}

// #8: Intersection Types (&)
type Person = {
  name:string;
}

type Workers = {
  job:string;
}

type Employee = Person & Workers



const el:Employee ={
  name:"Hùng",
  job:"dev"
}


// type AdminUser  = {
//   name:string;
//   email:string;
//   role:"admin";
//   permission:string[];
// }


type AdminRights = {
  role:"admin";
  permissions:string[];
}

type MemberRights = {
  role:"Member";
  points:number;
}

type AdminUser = Person & AdminRights & {
  email:string;
}

type MemberUser = Person & MemberRights;

//never type
type OrderStatus = "pending" | "shipped" | "delivered";

function handleOrderStatus(status:OrderStatus){
  if(status === "pending"){
    console.log("Đơn hàng đang xử lý")
  }else if(status === "shipped"){
    console.log("Đơn hàng đang được gửi đi")
  }else if(status === "delivered"){
    console.log("Khách đã nhận hàng");
  }else{
    const check:never = status;
  }
}

// #9 Interface: dùng để định nghĩa cấu trúc của 1 object

interface IUser  {
  username:string;
  email:string;
  age:number;
}


const user:IUser = {
  username:"Vũ",
  email:"vunguyen090220@gmail.com",
  age:25
}

// điểm giống nhau của type và interface đều dùng để định nghĩa cấu trúc của 1 đối tượng và đều có thể kế thừa 
// inheritance (tính kế thừa)
// Khác nhau type vs interface là khi cố tính khai báo 1 interface nhiều lần thì typescript sẽ ko báo lỗi nó sẽ gộp tất cả những gì bạn định nghĩa lại thành 1 interface chung còn type thì sẽ báo lỗi
interface IUser2  {
  username:string;
  age:number;
}

interface IEmployee{
  job:string;
  salary:number;
}


interface IStaff extends IUser,IEmployee {
  department:string
}


const staff:IStaff = {
  username:"Vũ",
  age:25,
  job:"Tester",
  salary:900,
  department:"QA",
  email:"Vunguyen090220@gmail.com"
}


//#10: generic hay dùng chữ T,U,K,V
interface IPost<T,U>{
  id:number;
  username:string;
  description:string;
  extra:T[];
  meta:U
}

// T[] chữ T giống như kiểu thế thân có nghĩa là sẽ đc thay thế bằng 1 kiểu cụ thể đc truyền vào lúc dùng interface này 

interface IAuthor {
  userId:number;
  username:string;
}

interface ICategory{
  categoryId:number;
  categoryTitle:string;
}


const postWidthTags: IPost<string,string> = {
  id:1,
  username:"Vũ",
  description:"Đời như lol",
  extra:["user1","user2"],
  meta:"new"
}