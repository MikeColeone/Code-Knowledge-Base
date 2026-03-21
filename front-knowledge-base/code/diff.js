function h(type, props, children, key) {
    if (children === void 0) { children = []; }
    return {
        type: type,
        props: props || {},
        children: children,
        key: key
    };
}
var oldTree = h("ul", {}, [
    h("li", { text: "A" }, [], "A"),
    h("li", { text: "B" }, [], "B"),
    h("li", { text: "C" }, [], "C")
]);
var newTree = h("ul", {}, [
    h("li", { text: "B" }, [], "B"),
    h("li", { text: "A" }, [], "A"),
    h("li", { text: "D" }, [], "D")
]);
var PatchType = {
    CREATE: "CREATE",
    REMOVE: "REMOVE",
    REPLACE: "REPLACE",
    UPDATE: "UPDATE",
    MOVE: "MOVE"
};
var diff = function (oldNode, newNode) {
    var patches = [];
    // walk(oldNode,newNode,[],patches);
    return patches;
};
// const walk = (oldNode,newNode,path,patches){
// }
