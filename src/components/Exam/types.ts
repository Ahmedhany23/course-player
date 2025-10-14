export interface IQuestion {
  id: number;
  question: string;
  options: string[];
}

export interface IExam {
  id: number;
  title: string;
  exam_time: number;
  questions: IQuestion[];
}
