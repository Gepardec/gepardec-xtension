export interface Employee {
  id: number;
  name: string;
  birthDate: Date;
  files: Array<File>;
}

export const employees: Array<Employee> = [
  {
    id: 0,
    name: 'Christoph Ruhsam',
    birthDate: new Date(),
    files: []
  },
  {
    id: 1,
    name: 'Marcel Reiter',
    birthDate: new Date(),
    files: []
  },
  {
    id: 2,
    name: 'Oliver Tod',
    birthDate: new Date(),
    files: []
  }
];
