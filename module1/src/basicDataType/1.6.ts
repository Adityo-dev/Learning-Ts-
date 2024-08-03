// Type alias -------->
{
  // Type
  type Student = {
    name?: string;
    age?: number;
    gender?: string;
    address?: string;
    phoneNo?: string;
  };

  //----- Object-------

  const student1: Student = {
    name: "1",
    age: 100,
    gender: "male",
    address: "bangladesh",
    phoneNo: "0177",
  };

  const student2: Student = {
    name: "1",
    age: 100,
    gender: "male",
    address: "bangladesh",
    phoneNo: "0177",
  };

  const student3: Student = {
    name: "1",
    age: 100,
    gender: "male",
    address: "bangladesh",
    //   phoneNo: "0177",
  };

  //----- Variable-------
  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "Abcd";
  const isAdmin: IsAdmin = true;

  //----- Function-------
  type AddFunction = (a: number, b: number) => number;
  const add: AddFunction = (number1, number2) => number1 * number2;
  add(1, 2);
}
