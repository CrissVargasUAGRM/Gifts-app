import { act, renderHook } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
import { useGifs } from "./useGifs";
import * as gifActions from "../actions/getGifByQuery.action";

describe('useGifs', () => {
    test('should return default values and methods', () => {
        const { result } = renderHook(() => useGifs());
        expect(result.current.gifs.length).toBe(0);
        expect(result.current.previousTerms.length).toBe(0);
        expect(result.current.handleSearch).toBeDefined();
        expect(result.current.handleSearch).toBeInstanceOf(Function);
        expect(result.current.onClickTerm).toBeDefined();
        expect(result.current.onClickTerm).toBeInstanceOf(Function);
    });

    test('should return a list of gifs', async () => {
        const { result } = renderHook(() => useGifs());

        await act(async () => {
            await result.current.handleSearch('cat');
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs when handleTermClicked is called', async() => {
        const {result} = renderHook(() => useGifs());

        await act( async() => {
             await result.current.onClickTerm('cat')
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs from cache', async() => {
        const {result} = renderHook(() => useGifs());

        await act( async() => {
             await result.current.onClickTerm('cat')
        });

        expect(result.current.gifs.length).toBe(10);
    });

    test('should return a list of gifs from cache', async() => {
        const {result} = renderHook(() => useGifs());

        await act( async() => {
             await result.current.onClickTerm('cat')
        });

        expect(result.current.gifs.length).toBe(10);

        vi.spyOn(gifActions, 'getGifByQuery').mockRejectedValue(new Error('Error fetching gifs from API'));

        await act( async() => {
             await result.current.onClickTerm('cat')
        });

        expect(result.current.gifs.length).toBe(10);
    });
});