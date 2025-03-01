import { redirect } from '@remix-run/node';
import { type ActionFunctionArgs } from '@remix-run/node';

export function loader({ params }: ActionFunctionArgs) {
  if (params['*'] === 'exp') {
    return redirect('/expenses');
  }

  throw new Response('Not found', { status: 404 });
}
