import { expect } from "chai";

import reducer, {
    DECREMENT,
    decrementCounter,
    INCREMENT,
    incrementCounter,
    initialState,
} from "@src/ducks/app";

// describe and it are global functions from mocha
describe("app", () => {
    describe("incrementCounter", () => {
        it("should create an action to increment a number", () => {
            const expectedAction = {
                type: INCREMENT,
            };
            expect(incrementCounter()).to.deep.equal(expectedAction);
        });
        it("0 + 1 = 1", () => {
            const stateBefore = { ...initialState };
            const newState = reducer(stateBefore, incrementCounter());
            expect(newState)
                .to.have.property("count")
                .that.is.equal(1);
        });
    });
    describe("decrementCounter", () => {
        it("should create an action to decrement a number", () => {
            const expectedAction = {
                type: DECREMENT,
            };
            expect(decrementCounter()).to.deep.equal(expectedAction);
        });
        it("0 - 1 = -1", () => {
            const stateBefore = { ...initialState };
            const newState = reducer(stateBefore, decrementCounter());
            expect(newState)
                .to.have.property("count")
                .that.is.equal(-1);
        });
    });
});
