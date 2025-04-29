// You can add any JavaScript expression (something that evaluates to a single value) inside curly braces. For example:

// 1. An object property with dot notation:
function Header1(props) {
  return <h1>{props.title}</h1>
}

// 2. A template literal:
function Header2({ title }) {
  return <h1>{`Cool ${title}`}</h1>
}

// 3. The returned value of a function:
function createTitle(title) {
  if (title) {
    return title
  } else {
    return 'Default title'
  }
}

function Header3({ title }) {
  return <h1>{createTitle(title)}</h1>
}

// 4. Or ternary operators:
function Header4({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}
