

function useState<Type>(initialState: Type) : [Type, (newState: Type) => void] {
  let state = initialState

  function setState(newState: Type) {
    state = newState
  }

  return [state, setState]
}




export {}