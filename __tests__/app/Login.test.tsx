import { render, screen } from '@testing-library/react';
import { ReactElement } from 'react';
import Login from '../../src/app/pages/Login/page';
import '@testing-library/jest-dom';

describe('Testes da página Login', () => {
  it('Verifica se o texto "Login" está na página', () => {
    const component: ReactElement = <Login />;
    render(component);

    const text = screen.getByText('LOGIN');

    expect(text).toBeInTheDocument();
  });
});