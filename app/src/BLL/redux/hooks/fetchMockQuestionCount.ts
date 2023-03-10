import { questionCount } from "../../../PresentationLayer/pages/data/questionCountForEachCategory";
import { IQuestionCount } from "../../../PresentationLayer/pages/data/questionCountForEachCategory";

export async function fetchMockQuestionCount(): Promise<IQuestionCount[]> {
     const response: IQuestionCount[] = await new Promise((res) => {
          setTimeout(() => {
               res(questionCount);
          }, 2000);
     });
     return response;
}

export type QuestionCountResponse = Awaited<
     ReturnType<typeof fetchMockQuestionCount>
>;
