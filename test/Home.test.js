import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // Si estás usando Redux
import configureStore from 'redux-mock-store'; // Si estás usando Redux
import Home from '../src/views/Home/Home';

describe('Home Component', () => {
  const initialState = {
    recipes: [], // Define tu estado inicial aquí
    allRecipes: [], // Define tu estado inicial aquí
    filters: {}, // Define tu estado inicial aquí
    diets: [], // Define tu estado inicial aquí
    page: 1, // Define tu estado inicial aquí
  };
  const mockStore = configureStore(); // Si estás usando Redux
  let store;

  beforeEach(() => {
    store = mockStore(initialState); // Si estás usando Redux
  });

  it('renders without crashing', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );
    // Puedes agregar expectativas para asegurarte de que ciertos elementos se rendericen correctamente.
  });

  it('updates filterDiet state when diet selector is changed', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const dietSelector = getByLabelText('Filter by Diet');
    fireEvent.change(dietSelector, { target: { value: 'someDiet' } });

    expect(dietSelector.value).toBe('someDiet');
  });

  // Agrega más pruebas similares para otras interacciones de usuario.

  it('calls paginator function when page button is clicked', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const pageButton = getByText('2'); // Cambia esto por el número de página que quieras probar
    fireEvent.click(pageButton);

    // Agrega expectativas para asegurarte de que la función paginator se haya llamado con el número de página correcto.
  });

  // Agrega más pruebas para lógica interna como handleFilterDiet, handleFilterDietCard, handleFilterOrigin, handleOrder, etc.
});