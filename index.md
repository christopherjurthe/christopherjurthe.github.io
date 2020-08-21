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

**Ohne Hooks**
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

**Mit Hooks**
```
function Button(){
    const [count, setCount] = useState(0);

    function clickhandler(){
        setCount(count+1);
    }
}

```
### TOPs
- useState
- useEffect
- useRef

## _Hausaufgabe_
- useMemo
- useContext
- useCallback
- useReducer


### Essentials
1. Nur für functional Components
2. Reihenfolge der setState's muss in jedem rendering identisch sein (Top Level)

### useState 
__this.setState({});__
**IN**
```
import React, { useState } from 'react';

const [count, setCount] = useState(0);
setCount(count + 1);
```

**OUT**
```
<p>You clicked {count} times</p>
```

### useEffect
__componentDid[Mount,Update,..]()__
**IN**
```

__________
import React, { useState, useEffect } from 'react';

const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
    fetch('http://ourapi.com/v1/users')
    .then(response => setUsers(response.json()))

    //optional
    return () => {
        //do stuff after unmounting
    }
});

useEffect(()=>{foo()},[]);
useEffect(()=>{foo()},[stateValue])
```

**OUT**
```
if(loading){
    return (<p>Loading</p>)
} else {
    return (
        <ul>
        {users.map(user => <li>user.name</li>)}
        </ul>     
    )
}
```

### useState
**IN**
```
import React, { useState } from 'react';

const [count, setCount] = useState(0);
setCount(count + 1);
```

**OUT**
```
<p>You clicked {count} times</p>
```


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
