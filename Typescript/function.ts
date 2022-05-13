let addprint = (n1: number, n2: number, print: (n: number) => void) => {
  let result = n1 + n2;
  print(result);
};

addprint(5, 3, (result) => console.log(result));
