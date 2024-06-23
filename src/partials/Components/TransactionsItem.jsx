import React, { useEffect, useState } from "react";
import css from "../../sass/Module/TransactionsItem.module.css";
import { MdOutlineModeEdit } from "react-icons/md";

const TransactionsItem = ({ transaction }) => {
  const date = new Date(transaction.transactionDate);
  const day = String(date.getDate()).padStart(2, '0'); 
  const month = String(date.getMonth() + 1).padStart(2, '0'); 
  const year = date.getFullYear();
  const fullDate = `${day}.${month}.${year}`;
  const transactionType = transaction.type === 'EXPENSE' ? '-' : '+';
  const [btndelete, setbtnDelete] = useState('Delete');

  const handleDeleteClick = () => {
    setbtnDelete('Deleting');
  };
  return (
    <tr className={css.transactionItem}>
        <td>{fullDate}</td>
      <td className={css.row}>{transactionType}</td>
      <td>{transaction.categoryId}</td>
      <td>{transaction.comment}</td>
      <td className={`${css.row} ${transaction.type === 'EXPENSE' ? css.expense : css.income}`}>{transaction.amount}</td>
        <td className={css.edit}><MdOutlineModeEdit /></td>
      <td><button type="button" className={css.btn} onClick={handleDeleteClick}>{btndelete}</button></td>
    </tr>
  );
};

export default TransactionsItem;
