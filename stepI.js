function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

const Relay = {
  createElement,
};

const element = Relay.createElement(
  "div",
  { id: "foo" },
  Relay.createElement("a", null, "bar"),
  Relay.createElement("b")
);
