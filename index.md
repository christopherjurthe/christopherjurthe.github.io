# 53Webinar [21.08.2020]

**Interaktive Teilnahme erwünscht**
-
-
________
# Phil Collins doing React Hooks
________
-
-

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
import React, { useRef } from 'react';

const inputEl = useRef(null);
const onButtonClick = () => {    
    inputEl.current.focus();
  };
```

**OUT**
```
<>
    <input ref={inputEl} type="text" />
    <button onClick={onButtonClick}>Focus the input</button>
</>
```

__But wait, there's more__

mutable Objects:
**IN**
```
import React, { useRef } from 'react';

const intervalref = useRef();
useEffect(() => {
    const id = setInterval(() => {
      // ...
    });
    intervalRef.current = id;   
});

function handleCancelClick() {
    clearInterval(intervalRef.current);
}
```

**OUT**
```
<>
    <input ref={inputEl} type="text" />
    <button onClick={onButtonClick}>Focus the input</button>
</>
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
[Link](https://github.com/christopherjurthe/christopherjurthe.github.io)
Branch: start

## Whats next

- Write AI for AutoTune
- Animations
- Save Input for a loop

