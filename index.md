```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```


# Phil Collins doing React Hooks

## Was sind _HOOKS_

- ab React 16.8 (Komplett Opt-In)
- ermöglichen Logik in functional Components

#Higher-Order-Components -> _Sellee-Root-Statehandler_
#render-props -> _React Router_

Ohne Hooks
```
class Button extends React.Components{
    constructor() {
        this.state = { count: 0 }
    }

    clickhandler(){
        const {count} = this.state;
        this.setState({
            count: count+1 
        })
    }
}
```

Mit Hooks
```
function Button(){
    const [count, setCount] = useState(0);

    function clickhandler(){
        setCount(count+1);
    }
}
```

### Essentials
- Nur für functional Components
- Reihenfolge der setState's muss in jedem rendering identisch sein

## Differences
- useState
- useEffect
- useRef

## Example Project

Creating a Drummaschine, played with your Keyboard
_Base Repo_

## Whats next

- Write AI for AutoTune
- Animations
- Save Input for a loop

TODO
- Hooks react to Events
- Component for State_Calls bool, string, int
