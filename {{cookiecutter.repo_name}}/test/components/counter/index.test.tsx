import { expect } from "chai";
import { mount, shallow } from "enzyme";
import * as React from "react";
import { spy } from "sinon";

import Counter from "@src/components/Counter";

describe("Counter", () => {
    it("is present", () => {
        let testCount = 0;
        const decrementClick = spy(() => testCount--);
        const incrementClick = spy(() => testCount++);
        const initalProps = {
            count: testCount,
            decrementCounter: decrementClick,
            incrementCounter: incrementClick,
        };
        const wrapper = shallow(<Counter {...initalProps} />);
        expect(wrapper).to.be.present;
    });
    it("should decrement count after click", () => {
        let testCount = 1;
        const decrementClick = spy(() => testCount--);
        const incrementClick = spy(() => testCount++);
        const initalProps = {
            count: testCount,
            decrementCounter: decrementClick,
            incrementCounter: incrementClick,
        };
        const wrapper = mount(<Counter {...initalProps} />);
        const decrementButton = wrapper.find("button").at(1);
        decrementButton.simulate("click");
        expect(decrementClick.calledOnce).to.equal(true);
        expect(testCount).to.equal(0);
    });
    it("should increment count after click", () => {
        let testCount = 0;
        const decrementClick = spy(() => testCount--);
        const incrementClick = spy(() => testCount++);
        const initalProps = {
            count: testCount,
            decrementCounter: decrementClick,
            incrementCounter: incrementClick,
        };
        const wrapper = mount(<Counter {...initalProps} />);
        const incrementButton = wrapper.find("button").at(0);
        incrementButton.simulate("click");
        expect(incrementClick.calledOnce).to.equal(true);
        expect(testCount).to.equal(1);
    });
});
