{
  //Ternary, optional chaining & nullish coalescing operator
  //   Ternary operator ----->
  const age: number = 19;

  const isAdult = age >= 18 ? "Adult" : "Not Adult";

  //  nullish coalescing operator( null / undefined --> decision making)----------->
  const isAuthenticated = undefined;
  const result = isAuthenticated ?? "Guest";

  //   optional chaining-------->
  type User = {
    name: string;
    address: {
      city: string;
      road?: string;
      presentAddress: string;
    };
  };

  const user: User = {
    name: "a",
    address: {
      city: "ctg",
      road: "Awesome Road",
      presentAddress: "ctg town",
    },
  };

  const permanentAddress =
    user?.address?.presentAddress ?? "No Permanent Address";
}
