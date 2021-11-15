import React from 'react'
import { render, screen } from '@testing-library/react'
import ErrorPage from '../../pages/404'
import '@testing-library/jest-dom/extend-expect';

describe("404 page", ()=>{
    it("Renders a NavBar", ()=>{
        render(<ErrorPage/>);
        const err = screen.getAllByText("404");
        expect(err[0]).toBeInTheDocument();
    })

    it("Renders the return home", ()=>{
        render(<ErrorPage/>);
        const button =  screen.getByRole("button");
        expect(button).toBeInTheDocument()
    })
})