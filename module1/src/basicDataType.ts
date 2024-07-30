{
  // Basic Data type----------------------->

  // primitive------->

  // String
  let firstName: string = "Aditto Dev";

  // Number
  let roll: number = 50;

  //   Boolean
  let isAdmin = true;

  //   Undefined
  let x: undefined = undefined;

  //   null
  let y: null = null;

  // any
  let d: number;

  d = 20;
  // d = "ddd";
  // d = true;

  // non primitive-------->

  // Array
  let friends: string[] = ["html", "css", "js", "react", "next js", "ts"];

  let eligibleRollList: number[] = [1, 2, 3];
  // eligibleRollList.push("gg"); //wrong
  eligibleRollList.push(4); //right

  // Tuple --> array --> order --> type of values
  let coordinates: [number, number] = [1, 5];

  let ageName: [number, string, boolean] = [50, "js", true];
  ageName[0] = 0;
}
