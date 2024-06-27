import React, { useState } from "react";
import css from "../../sass/Module/TransactionsItem.module.css";
import { MdOutlineModeEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTransactions } from "../../redux/transactions/operations";
import { useParams } from "react-router-dom";
import useModal from "../../hooks/useModal";
import ModalEditTransactions from './ModalEditTransactions';

const TransactionsItem = ({ transaction, isMobile, headerMobile }) => {
    const date = new Date(transaction.transactionDate);
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear();
    const fullDate = `${day}.${month}.${year}`;
    const transactionType = transaction.type === 'EXPENSE' ? '-' : '+';
    const [btnDelete, setBtnDelete] = useState('Delete');
    const dispatch = useDispatch();
    const { transactionId } = useParams();
    const rowClass = transaction.type === 'INCOME' ? css.income : css.expense;
    const bgThClass = transaction.type === 'INCOME' ? css.incomeTh : css.expenseTh;
    const { isOpen, openModal, closeModal } = useModal();

    const handleDeleteClick = () => {
        setBtnDelete('Deleting');
        dispatch(deleteTransactions(transaction.id));
    };

    return (
        <>
            {isMobile ? (
                <div className={css.mobileItem}>
                    <div className={`${css.bgTh} ${bgThClass}`}></div>
                    <table className={css.mobileTable}>
                        <thead>
                            <tr className={css.header}>
                                {headerMobile.map((header, index) => (
                                    <th key={index} className={css.colHeader}>{header}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr className={css.rowMob}>
                                <td className={css.cell}>{fullDate}</td>
                                <td className={css.cell}>{transactionType}</td>
                                <td className={css.cell}>{transaction.categoryId}</td>
                                <td className={css.cell}>{transaction.comment}</td>
                                <td className={`${css.cell} ${rowClass}`}>{transaction.amount}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className={css.btns}>
                        <div className={css.cellBtn}>
                            <button className={css.btn} onClick={handleDeleteClick}>{btnDelete}</button>
                        </div>
                        <div onClick={openModal} className={css.cellBtn}>
                            <button className={css.btnEdit}><MdOutlineModeEdit className={css.icon}/> <span>Edit</span></button>
                        </div>
                    </div>
                </div>
            ) : (
                <tr className={css.transactionItem}>
                    <td>{fullDate}</td>
                    <td className={css.row}>{transactionType}</td>
                    <td>{transaction.categoryId}</td>
                    <td>{transaction.comment}</td>
                    <td className={`${css.row} ${transaction.type === 'EXPENSE' ? css.expense : css.income}`}>{transaction.amount}</td>
                    <td onClick={openModal} className={css.edit}><MdOutlineModeEdit className={css.svg} /></td>
                    <td><button type="button" className={css.btn} onClick={handleDeleteClick}>{btnDelete}</button></td>
                </tr>
            )}

            {isOpen && <ModalEditTransactions transaction={transaction} closeModal={closeModal} />}
        </>
    );
};

export default TransactionsItem;
