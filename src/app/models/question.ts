import { Option } from './options';

export interface Question {
    id: number;
    "Q.no": string;
    questionType: string,
    questionTypeId: number;
    options: Option[];
}
