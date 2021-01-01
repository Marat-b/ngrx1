import { TableDataInterface } from '../../shared/types/TableDataInterface';

export interface TableStateInterface {
  isLoading: boolean;
  error: string | null;
  data: TableDataInterface | null;
}
