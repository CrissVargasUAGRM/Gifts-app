import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { CustomHeader } from "./CustomHeader";

describe('CustomHeader Component', () => {
    const title = "Test Title";
    const nombre = "Test Nombre";
    test('should render title and nombre correctly', () => {
        render(<CustomHeader title={title} description="hola" nombre={nombre}/>);
        expect(screen.getByText(title)).toBeDefined();
    });

    test('should render the description when provided', () => {
        const description = 'This is a description';
        render(<CustomHeader title={title} description={description} nombre={nombre}/>);
        expect(screen.getByText(description)).toBeDefined();
        expect(screen.getAllByRole('paragraph')[1].innerHTML).toBe(nombre);
        expect(screen.getAllByRole('paragraph')[0].innerHTML).toBe(description);
    });

    test('should not render description when not provided', () => {
        const {container} = render(<CustomHeader title={title} nombre={nombre} />);
        const divElement = container.querySelector('.content-center');
        const h1 = divElement?.querySelector('h1');
        expect(h1?.innerHTML).toBe(title);
        const p = divElement?.querySelectorAll('p');
        expect(p?.length).toBe(1);
        expect(p?.[0].innerHTML).toBe(nombre);
    });
});