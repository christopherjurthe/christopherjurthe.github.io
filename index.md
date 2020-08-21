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
<button onClick={() => clickhandler}>Click Me</button>
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

### useRef
**IN**
```
import React, { useState } from 'react';

const [count, setCount] = useState(0);
const clickhandler = () => {
    setCount(count+1);
}
```

**OUT**
```
<button onClick={() => clickhandler}>Click Me</button>
<p>You clicked {count} times</p>
```

### Other Hooks
**_Hausaufgabe_**
- useContext
- useMemo / useCallback
- useReducer

**useContext** GlobalStateMgmt
```
//CartContext.js
    export const CartContext = React.createContext(
        { showCart:false, toggleCart: () => {}, }
    );

//Cart.js
   const [showCart, setShowCart] = useState(false);

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return(
    <CartContext.Provider value={{ showCart, toggleCart }}>
        <section>
            <CartDrawer show={showCart} selectedCartItems={selectedCartItems} />
        </section>
    </CartContext.Provider>
  );

//Article.js
import CartContext from 'CartContext.js'
export const Article () => {
    const cart = useContext(CartContext);
    const addToCart = async () => {
        if (true) {
            cart.toggleCart();
        }
    };

    return (
        <button onCLick={addToCart}>Add Item to Cart</button>
    )
}

<Shop>
    <Header>
        <Cart/>
    </Header>
    <Main>
        <Category>
            <Article>
        ...
```

## Example Project

Creating a Drummaschine, played with your Keyboard
_Base Repo_

## Whats next

- Write AI for AutoTune
- Animations
- Save Input for a loop

