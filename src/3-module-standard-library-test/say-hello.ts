
export default interface IPerson {
  name: string;
}

export const sayHello = (name: string): string => {
  return `Hello ${name}`;
}