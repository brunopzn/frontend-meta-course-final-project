import {  } from "@testing-library/react";
import '@testing-library/jest-dom';
import { initializeTimes, updateTimes } from "./src/App";

import App from './src/App'

describe('App reducer functions', () => {
    test('initializeTimes deve retornar os valores corretos', () => { 
       const expectValue = { 
        availableTimes: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'],
        reservations: [] 
    };
       const result = initializeTimes();

       expect(result).toEqual(expectValue);

       
     })
     test('updateTimes deve retornar o mesmo valor fornecido no estado', () => {
        const currentState = ['17:00', '18:00'];
        const action = { type: 'UPDATE_TIMES', date: '2023-12-01' };
        
        const result = updateTimes(currentState, action);
        
        expect(result).toEqual(currentState);
    });
})