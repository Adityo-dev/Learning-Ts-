{
  // Reference Type --> object

  const user: {
    // readonly company: string; //Using readonly  can only be read and not modified
    company: "ecoysoft"; //type --> literal types
    firstName: string;
    middleName?: string; //optional type
    lestName: string;
    isMarried: boolean;
  } = {
    company: "ecoysoft",
    firstName: "Aditto",
    middleName: "dev",
    lestName: "Barmon",
    isMarried: false,
  };

  //   user.company = "ecoysoft bg"; //Using readonly  can only be read and not modified
}
