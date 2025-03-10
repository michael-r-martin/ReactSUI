import React from 'react';
import VStack from '../../Views/Stacks/VStack';
import HStack from '../../Views/Stacks/HStack';
import ZStack from '../../Views/Stacks/ZStack';
import { Rectangle, RoundedRectangle } from '../../Views/Rectangles';
import { HorizontalAlignment, VerticalAlignment } from '../../Views/ModifierTypes/Alignment';

const PlaygroundPage = () => {
    return (
      HStack({
        children: [
            Rectangle({
                width: 100,
                height: 100,
                backgroundColor: "blue"
            }),
            Rectangle({
                width: 100,
                height: 100,
                backgroundColor: "blue"
            })
        ],
        width: 300,
        height: 100,
        spacing: 10,
        horizontalAlignment: HorizontalAlignment.CENTER,
        verticalAlignment: VerticalAlignment.CENTER,
        backgroundColor: "red",
        cornerRadius: 10
      })
    )
}

export default PlaygroundPage