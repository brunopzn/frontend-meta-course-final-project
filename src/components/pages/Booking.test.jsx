

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Booking from './Booking'
import { MemoryRouter } from "react-router-dom";

test("Mostra Choose time na tela", ()=> {
    render(<MemoryRouter><Booking/></MemoryRouter>)
    const textElement = screen.getByText('Choose time')
    expect(textElement).toBeInTheDocument();
})

test("Deve aplicar atributos de validação HTML5 aos campos", () => {
    render(<MemoryRouter><Booking availableTimes={[]} /></MemoryRouter>);
    
    const dateInput = screen.getByLabelText(/Choose time/i);
    const guestsInput = screen.getByLabelText(/Number of guests/i);

    // Verifica se os atributos HTML5 estão presentes
    expect(dateInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
});