// /expenses/add

import { useNavigate } from '@remix-run/react';

import ExpenseForm from '../components/expenses/ExpenseForm';
import Modal from '../components/util/Modal';
import { type ActionFunctionArgs } from '@remix-run/node';

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('/expenses');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
export async function action({
  request,
}: ActionFunctionArgs) {

  const formData = await request.formData();
}