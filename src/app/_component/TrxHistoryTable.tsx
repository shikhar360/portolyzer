import React from 'react';

type Transaction = {
  transaction_hash: string;
  block_number: number;
  block_timestamp: string;
  from_address: string;
  to_address: string;
  value: string
};

type TrxHistoryTableProps = {
  transaction: Transaction;
};

const TrxHistoryTable: React.FC<TrxHistoryTableProps> = ({ transaction }) => {

  const timestamp = new Date(transaction.block_timestamp);
  const date = timestamp.toLocaleDateString();

  const shortTransactionHash = transaction.transaction_hash.slice(0, 14);

  const shortenAddress = (address: string) =>
  address.slice(0, 7) + '...' + address.slice(-7);

  const shortFromAddress = shortenAddress(transaction.from_address);
  const shortToAddress = shortenAddress(transaction.to_address);

  const formattedValue = (parseFloat(transaction.value) / 1e18).toFixed(6);

  return (
        <tbody className=''>
            {/* <tr className="bg-gray-800 border-b border-gray-700 hover:bg-gray-600 text-slate-300"> */}
            <tr className="bg-slate-50 border-b hover:bg-white ">
                <td className="px-6 py-4">
                {shortTransactionHash}...
                </td>
                <td className="px-6 py-4">
                {transaction.block_number}
                </td>
                <td className="px-6 py-4">
                {date}
                </td>
                <td className="px-6 py-4">
                {shortFromAddress}
                </td>
                <td className="px-6 py-4">
                {shortToAddress}
                </td>
                <td className="pl-2 py-4">
                {formattedValue}
                </td>
            </tr>
        </tbody>

  );
};

export default TrxHistoryTable;
