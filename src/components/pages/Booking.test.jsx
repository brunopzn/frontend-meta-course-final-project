

import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Booking from './Booking'
import { MemoryRouter } from "react-router-dom";

test("Mostra Choose time na tela", ()=> {
    render(<MemoryRouter><Booking/></MemoryRouter>)
    const textElement = screen.getByText('Choose time')
    expect(textElement).toBeInTheDocument();
})