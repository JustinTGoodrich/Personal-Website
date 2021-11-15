
/**
 * @jest-environment jsdom
*/
import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages/index'
import '@testing-library/jest-dom/extend-expect';

describe("Index Page", ()=>{
    it("Renders a NavBar", ()=>{
        render(<Home/>);
        const nav = screen.getByRole("navigation");
        expect(nav).toBeInTheDocument();
    })
})