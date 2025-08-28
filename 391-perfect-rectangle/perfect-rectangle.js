/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var isRectangleCover = function(rectangles) {
    let set = new Set();
    let area = 0;
    let [x1, y1, x2, y2] = [Infinity, Infinity, -Infinity, -Infinity];

    for (let [a, b, c, d] of rectangles) {
        area += (c - a) * (d - b);
        x1 = Math.min(x1, a);
        y1 = Math.min(y1, b);
        x2 = Math.max(x2, c);
        y2 = Math.max(y2, d);

        for (let p of [[a,b],[a,d],[c,b],[c,d]]) {
            let key = p.join(",");
            if (set.has(key)) set.delete(key);
            else set.add(key);
        }
    }

    return set.size === 4 && set.has([x1,y1].join(",")) && 
           set.has([x1,y2].join(",")) && set.has([x2,y1].join(",")) && 
           set.has([x2,y2].join(",")) &&
           area === (x2 - x1) * (y2 - y1);
};
