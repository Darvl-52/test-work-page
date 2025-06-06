export type ButtonSizeType = {
  title: 'XS' | 'S' | 'M';
  status?: 'last' | 'soon';
}

export type ButtonColorType = {
  color: 'white' | 'black' | 'creamy';
}

export const ButtonSizes: ButtonSizeType[] = [
  {
    title: 'XS',
    status: 'last'
  },
  {
    title: 'S',
  },
  {
    title: 'M',
    status: 'soon'
  },
];

export const ButtonColors: ButtonColorType[] = [
  {
    color: 'white',
  },
  {
    color: 'black',
  },
  {
    color: 'creamy',
  },
];