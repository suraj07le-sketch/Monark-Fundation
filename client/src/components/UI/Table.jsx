import React from 'react';

const Table = ({ columns, data, actions }) => {
    return (
        <div className="overflow-x-auto bg-white dark:bg-dark shadow rounded-lg">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 uppercase text-sm leading-normal">
                        {columns.map((col, index) => (
                            <th key={index} className="py-3 px-6">{col.header}</th>
                        ))}
                        {actions && <th className="py-3 px-6 text-center">Actions</th>}
                    </tr>
                </thead>
                <tbody className="text-gray-600 dark:text-gray-200 text-sm">
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800">
                                {columns.map((col, colIndex) => (
                                    <td key={colIndex} className="py-3 px-6 whitespace-nowrap">
                                        {col.render ? col.render(row) : row[col.accessor]}
                                    </td>
                                ))}
                                {actions && (
                                    <td className="py-3 px-6 text-center">
                                        <div className="flex item-center justify-center">
                                            {actions(row)}
                                        </div>
                                    </td>
                                )}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length + (actions ? 1 : 0)} className="py-4 text-center">No data found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
