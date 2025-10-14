import { IExam, IQuestion } from "../types";

export interface ExamState {
  exam_info: IExam;
  questions: IQuestion[];
  currentIndex: number;
  examOptions: Record<number, string>;
}

type ExamAction =
  | { type: "SET_EXAM_INFO"; payload: IExam }
  | { type: "SET_QUESTIONS"; payload: IQuestion[] }
  | { type: "NEXT_QUESTION" }
  | { type: "PREV_QUESTION" }
  | { type: "GO_TO"; payload: number }
  | { type: "SAVE_OPTION"; payload: { index: number; answer: string } }
  | { type: "RESET" };

export const initialState: ExamState = {
  exam_info: {} as IExam,
  questions: [],
  currentIndex: 0,
  examOptions: {},
};

const STORAGE_KEY = "exam_state";

export function examReducer(state: ExamState, action: ExamAction): ExamState {
  let newState: ExamState;

  switch (action.type) {
    case "SET_EXAM_INFO":
      newState = {
        ...state,
        exam_info: action.payload,
      };
      break;

    case "SET_QUESTIONS":
      newState = {
        ...state,
        questions: action.payload,
      };
      break;

    case "NEXT_QUESTION":
      newState = {
        ...state,
        currentIndex: Math.min(
          state.currentIndex + 1,
          state.questions.length - 1
        ),
      };
      break;

    case "PREV_QUESTION":
      newState = {
        ...state,
        currentIndex: Math.max(state.currentIndex - 1, 0),
      };
      break;

    case "GO_TO":
      newState = { ...state, currentIndex: action.payload };
      break;

    case "SAVE_OPTION":
      newState = {
        ...state,
        examOptions: {
          ...state.examOptions,
          [action.payload.index]: action.payload.answer,
        },
      };
      break;

    case "RESET":
      newState = initialState;
      break;

    default:
      newState = state;
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
  return newState;
}

export function loadInitialState(): ExamState {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved) as ExamState;
    }
  }
  return initialState;
}
