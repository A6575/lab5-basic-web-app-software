import QueryProcessor from "../../utils/QueryProcessor";
import '@testing-library/jest-dom'

describe("QueryProcessor", () => {
    test("should return a string", () => {
        const query = "test";
        const response: string = QueryProcessor(query);
        expect(typeof response).toBe("string");
    });

    test('should return shakespeare description', () => {
        const query = "shakespeare";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
            "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
            "English poet, playwright, and actor, widely regarded as the greatest " +
            "writer in the English language and the world's pre-eminent dramatist."
          ));
    });

    // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
    test('should return my USB ID', () => {
        const query = "what's your USB ID?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"USB ID: 18-10938"
    	));
    });

    test('should return my name', () => {
        const query = "what is your name?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"Astrid A."
    	));
    });

    test('should return the largest number', () => {
        const query = "what is the largest number in 1, 2, 3?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"3"
    	));
    });

    test('should return the sum of numbers', () => {
        const query = "What is 37 plus 70?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"107"
    	));
    });

    test('should return the multiplication of numbers', () => {
        const query = "What is 73 multiplied by 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"4672"
    	));
    });

    test('should return numbers squared an cube', () => { 
        const query = "Which of the following numbers is both a square and a cube: 4900, 729, 1138, 4288, 1854, 4520, 64?";
        const response: string = QueryProcessor(query);
        expect(response).toBe((
		"729, 64"
    	));
    });
});
