# React Observable Object Hook & SwiftUI-Style Views

This repository provides React components and hooks that mirror SwiftUI's architecture, state management, and view system.

## Overview

This project consists of two main parts:

1. **Observable Object Pattern**: An implementation similar to SwiftUI's `ObservableObject` for state management in React
2. **SwiftUI-Style Views**: A collection of view components that mirror SwiftUI's declarative UI building blocks

### State Management

The `ObservableObject` pattern allows developers to create a source of truth for views in a declarative style, which can be observed by UI components for automatic updates. The implementation uses React's `useState` and `useCallback` hooks to create a similar observable object mechanism.

### View Components

The library includes several SwiftUI-inspired view components:

- **Stack Views**:
  - `VStack`: Vertical stack layout
  - `HStack`: Horizontal stack layout
  - `ZStack`: Overlay stack layout (components stacked on top of each other)

- **Basic Views**:
  - `Rectangle`: Basic rectangular view
  - `RoundedRectangle`: Rectangle with rounded corners

All view components support common modifiers for:
- Width and height
- Background color
- Corner radius
- Alignment (for stack views)
- Spacing (for stack views)

## File Structure

- `ObservableObject.js`: Implements the state management system
- `Views/`
  - `Stacks/`: Contains VStack, HStack, and ZStack components
  - `Rectangles.tsx`: Basic shape components
  - `BaseTypes/`: Common types and interfaces
  - `ModifierTypes/`: View modifier definitions

## Usage

### State Management
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
```

### View Components
```typescript
import { VStack, Rectangle, RoundedRectangle } from './Views';

const MyView = () => {
  return (
    <VStack spacing={10} horizontalAlignment={HorizontalAlignment.CENTER}>
      <Rectangle width={100} height={100} backgroundColor="blue" />
      <RoundedRectangle 
        width={200} 
        height={50} 
        backgroundColor="red" 
        cornerRadius={10} 
      />
    </VStack>
  );
};
```
