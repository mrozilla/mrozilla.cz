import React from "react";

import { RootContainer, SEOContainer } from "~containers";
import { Main, Hero, Card } from "~components";

export default function DragAndDropPage() {
  const [items, setItems] = React.useState([
    "🍎 Apple",
    "🍞 Bread",
    "🍰 Cake",
    "🍩 Donut",
    "🥚 Egg",
    "🍟 Fries",
    "🍇 Grapes",
    "🍯 Honey",
    "🍦 Icecream",
    "🌶 Jalapeño",
    "🥝 Kiwi",
    "🍋 Lemon",
  ]);
  const draggedIdx = React.useRef(-1);

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, idx: number) => {
    const element = event.target as HTMLLIElement;

    event.dataTransfer.effectAllowed = "move";
    // @ts-expect-error setData expects the second argument to be string
    event.dataTransfer.setData("text/html", element);
    draggedIdx.current = idx;

    window.requestAnimationFrame(() => {
      element.style.opacity = "0"; // needed to load full-opacity element into drag image
    });
  };

  const handleDragEnter = (idx: number) => {
    setItems(
      items.map((item, i) => {
        if (i === draggedIdx.current) return items[idx];
        if (i === idx) return items[draggedIdx.current];
        return item;
      })
    );
    draggedIdx.current = idx;
  };

  const handleDragOver: React.DragEventHandler = (event) => {
    event.preventDefault(); // needed to prevent animation back to original location
  };

  const handleDragEnd: React.DragEventHandler<HTMLDivElement> = (event) => {
    (event.target as HTMLLIElement).style.opacity = "1";
    draggedIdx.current = -1;
  };

  return (
    <RootContainer>
      <Main>
        <Hero
          title="A simple drag-and-drop doesn't require any additional dependencies in React, everything is possible through the native API"
          codeLink="https://github.com/mrozilla/mrozilla.cz/blob/master/src/pages/lab/drag-drop.tsx"
        />
        <section style={{ maxWidth: "400px" }}>
          <Card style={{ gap: "1rem" }}>
            {items.map((item, i) => (
              <Card
                key={item}
                tag="li"
                draggable
                onDragStart={(e) => handleDragStart(e, i)}
                onDragEnter={() => handleDragEnter(i)}
                onDragOver={handleDragOver}
                onDragEnd={handleDragEnd}
              >
                {item}
              </Card>
            ))}
          </Card>
        </section>
      </Main>
    </RootContainer>
  );
}

export const Head = () => {
  return (
    <SEOContainer
      title="Drag'n'drop"
      description="A simple drag-and-drop doesn't require any additional dependencies in React, everything is possible through the native API"
      permalink="/lab/drag-drop"
      ogImage="/assets/og.png"
    />
  );
};
