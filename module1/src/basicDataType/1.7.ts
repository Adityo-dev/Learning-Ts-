{
  //{ Js (or ||) and Ts (union |) Type } AND {{Js (and &&) and Ts {intersection type}} ------------------>
  //------- union Type ---------

  type FrontendDeveloper = "Nub Developer " | "Pro Developer";
  type FullstackDeveloper = "expert Nub Developer " | "Pro expert Developer";

  type Developer = FrontendDeveloper | FullstackDeveloper;

  const newDeveloper: FrontendDeveloper = "Pro Developer";

  type User = {
    name: string;
    email?: string;
    gender: "male" | "female";
    bloodGroup: "A+" | "A-" | "B+" | "B-" | "O+" | "O-";
  };

  const user: User = {
    name: "a",
    email: "k@gmail.com",
    gender: "male",
    bloodGroup: "B+",
  };
}
