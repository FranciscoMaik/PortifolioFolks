import { IRepos } from '../types/IRepos';

export interface IFormatDataStatistic {
  lengthRepos: number;
  languages: string[];
}

export const formatDataStatistic = (data: IRepos[]): IFormatDataStatistic => {
  const quantityRepos = data.length;

  const getLanguages = data
    .map(lang => lang.language)
    .filter(item => item !== null);

  const filterForUniqElements = getLanguages.filter(
    (item, index) => getLanguages.indexOf(item) === index
  );

  return { lengthRepos: quantityRepos, languages: filterForUniqElements };
};
