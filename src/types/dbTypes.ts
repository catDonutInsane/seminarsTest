export interface ISeminars {
  seminars: Seminar[];
}

export interface Seminar {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  photo: string;
}

export interface initialStateInterface {
  seminarsList: Seminar[];
  idToDelete: number | null;
  isModalOpen: boolean;
  idToChange: number | null;
  isModalToChangeOpen: boolean;
  isDataLoading: boolean;
}

export interface PropsToDelete {
  idToDelete: number | null;
  isModalOpen: boolean;
}
export interface IChangeSeminar {
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  photo?: string;
}
