# React Observable Object Hook

This repository is a work in progress, with the aim of building a new framework to mirror SwiftUI's architecture and state management.

Currently, it contains a single JavaScript file that demonstrates how to mirror SwiftUI's data structure and reactivity model within a React application. The primary focus is to provide React developers with a way to manage state using a pattern similar to SwiftUI's `ObservableObject`, enhancing the consistency and ease of state management in complex React applications.

## Overview

The `ObservableObject` pattern in SwiftUI allows developers to create a source of truth for a view in a declarative style, which can be observed by the UI components for automatic updates. This repository adapts that concept to React using hooks, effectively marrying React's reactive capabilities with the intuitive and developer-friendly approach of SwiftUI.

The provided implementation uses a combination of React's `useState` and `useCallback` hooks to create a similar observable object mechanism. This allows React components to automatically re-render when the observable object's state changes, mimicking SwiftUI's behavior.

## File Description

- `ObservableObject.js`: Implements the `NewObservableObject` function that developers can use to create stateful logic similar to SwiftUI's observable objects in React. It allows for defining state variables and setters in a centralized object, providing a cleaner and more organized way to handle component state.

## Usage

To use the ObservableObject in your React project, import the `NewObservableObject` function from `ObservableObject.js` and use it to create state objects. You will need to have TypeScript enabled for your project.

```javascript
import { NewObservableObject } from './ObservableObject';

const App = () => {
  const viewModel = NewObservableObject({
    count: 1,
    message: "Hello, world!"
  });

  return (
    <div>
      <h1>{viewModel.get.count}</h1>
      <p>{viewModel.get.message}</p>
      <button onClick={() => viewModel.set.count(prev => prev + 1)}>
        Increase Count
      </button>
    </div>
  );
};