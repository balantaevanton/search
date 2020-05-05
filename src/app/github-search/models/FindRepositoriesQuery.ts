import {TypesSort} from './typesSort';
import {TypesOrder} from './typesOrder';

export interface IFindRepositoriesQuery {
  q: string;
  sort: TypesSort;
  order: TypesOrder;
}
