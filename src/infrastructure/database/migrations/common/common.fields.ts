import { TableColumnOptions } from "typeorm/schema-builder/options/TableColumnOptions";

export const commonFields: TableColumnOptions[] = [
    {
      name: 'created_at',
      type: 'TIMESTAMP',
      isNullable: false,
      default: 'CURRENT_TIMESTAMP',
    },
    {
      name: 'updated_at',
      type: 'TIMESTAMP',
      isNullable: false,
      default: 'CURRENT_TIMESTAMP',
    },
  ];
  