export interface Person {
  firstname: string;
  lastname: string;
  birthday: Date;
  age: number;
}

export const persons: Person[] = [
  {
    firstname: 'Oliver',
    lastname: 'Tod',
    birthday: new Date(2000, 10, 25),
    age: 22
  },
  {
    firstname: 'Christoph',
    lastname: 'Ruhsam',
    birthday: new Date(1995, 8, 11),
    age: 22
  },
  {
    firstname: 'Johannes',
    lastname: 'Riegler',
    birthday: new Date(1998, 5, 16),
    age: 22
  },
  {
    firstname: 'Thomas',
    lastname: 'Kianek',
    birthday: new Date(1994, 3, 22),
    age: 22
  },
  {
    firstname: 'Marcel',
    lastname: 'Reiter',
    birthday: new Date(2002, 12, 28),
    age: 22
  },
]
