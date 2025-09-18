
import React from 'react';

interface Column {
  key: string;
  title: string;
  width?: string;
  render?: (value: any, record: any) => React.ReactNode;
}

interface TableProps {
  columns: Column[];
  data: any[];
  loading?: boolean;
  emptyText?: string;
}

export default function Table({ columns, data, loading, emptyText = "Aucune donnée disponible" }: TableProps) {
  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            {columns.map((column) => (
              <th
                key={column.key}
                className="text-left py-3 px-4 font-medium text-gray-900 text-sm"
                style={{ width: column.width }}
              >
                {column.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-12 text-gray-500">
                {emptyText}
              </td>
            </tr>
          ) : (
            data.map((record, index) => (
              <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                {columns.map((column) => (
                  <td key={column.key} className="py-3 px-4 text-sm text-gray-700">
                    {column.render ? column.render(record[column.key], record) : record[column.key]}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
