function h(
  type: any,
  props: any,
  children: any[] = [],
  key?: any
) {
  return {
    type,
    props: props || {},
    children,
    key
  }
}

const oldTree = h("ul", {}, [
  h("li", {text: "A"}, [], "A"),
  h("li", {text: "B"}, [], "B"),
  h("li", {text: "C"}, [], "C")
])

const newTree = h("ul", {}, [
  h("li", {text: "B"}, [], "B"),
  h("li", {text: "A"}, [], "A"),
  h("li", {text: "D"}, [], "D")
])

const PatchType = {
  CREATE: "CREATE",
  REMOVE: "REMOVE",
  REPLACE: "REPLACE",
  UPDATE: "UPDATE",
  MOVE: "MOVE"
}


const diff = (oldNode,newNode) => {
    const patches = []
    // walk(oldNode,newNode,[],patches);
    return patches;
}

// const walk = (oldNode,newNode,path,patches){
    
// }