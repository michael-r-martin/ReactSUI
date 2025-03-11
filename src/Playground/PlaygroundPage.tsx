import React, { useState } from 'react';
import HStack from '../../Views/Stacks/HStack';
import ZStack from '../../Views/Stacks/ZStack';
import { Rectangle, RoundedRectangle } from '../../Views/BaseViews/Rectangles';
import { HorizontalAlignment, VerticalAlignment } from '../../Views/ModifierTypes/Alignment';
import VStack from '../../Views/Stacks/VStack';
import Spacer from '../../Views/BaseViews/Spacer';
import Button from '../../Views/BaseViews/Button';

const PlaygroundPage = () => {
    const [hstackWidth, setHstackWidth] = useState(300);
    const [vstackHeight, setVstackHeight] = useState(300);

    return (
        <VStack
            width={100}
            height={vstackHeight}
            backgroundColor="aliceblue"
            horizontalAlignment={HorizontalAlignment.CENTER}
        >
            <Rectangle width={50} height={50} backgroundColor="blue" />
            <Rectangle width={50} height={50} backgroundColor="gold" />
            <Spacer />
            <Button
                onPress={() => setVstackHeight(vstackHeight + 10)}
            >
                <Rectangle width={70} height={100} backgroundColor="greenyellow" />
            </Button>
        </VStack>
    )
}

export default PlaygroundPage