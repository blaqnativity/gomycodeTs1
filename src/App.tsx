// Import React and Component
import React, { Component } from 'react';

// Step 1: Define the type for the component's state
type CounterState = {
  count: number; // State contains one property: count
};

// Step 2: Define the class component with state type
class Counter extends Component<{}, CounterState> {
  // Step 3: Initialize state with a type-safe object
  state: CounterState = {
    count: 0,
  };

  // Step 4: Type-safe method using arrow function to preserve 'this' context
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 5: Render JSX with button click handler
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
