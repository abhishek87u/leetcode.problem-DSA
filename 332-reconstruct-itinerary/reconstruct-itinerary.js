/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
    const graph = {};
    for (let [from, to] of tickets) {
        if (!graph[from]) graph[from] = [];
        graph[from].push(to);
    }
    for (let from in graph) graph[from].sort().reverse();
    const res = [];
    const dfs = (node) => {
        while (graph[node] && graph[node].length) dfs(graph[node].pop());
        res.push(node);
    };
    dfs("JFK");
    return res.reverse();
};
