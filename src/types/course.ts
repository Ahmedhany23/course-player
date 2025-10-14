export interface ICourseMeta {
  duration: string;
  lessons: number;
  enrolled: number;
  language: string;
}

export interface ICourseBreadcrumbItem {
  label: string;
  href?: string;
}

export interface ICourseListItem {
  label: string;
  isLock: boolean;
  isExam: boolean;
  questions_count?: number;
  exam_time?: number;
  pdfUrl?: string;
}

export interface ITopic {
  range: string;
  paragraph: string;
  courseList: ICourseListItem[];
}

export interface IComment {
  name: string;
  comment: string;
  date: string;
  avatar: string;
}

export interface ICourse {
  id: string;
  title: string;
  videoUrl: string;
  poster?: string;
  progress?: number;
  url: string;
  breadcrumbs: ICourseBreadcrumbItem[];
  meta: ICourseMeta;
  topics: ITopic[];
  authorTag?: string;
  comments?: IComment[];
}
