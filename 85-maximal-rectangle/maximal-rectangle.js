/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    if (!matrix.length || !matrix[0].length) return 0;
    const cols = matrix[0].length;
    const heights = Array(cols).fill(0);
    let maxArea = 0;

    for (let row of matrix) {
        for (let i = 0; i < cols; i++) {
            heights[i] = row[i] === '1' ? heights[i] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }

    function largestRectangleArea(heights) {
        let stack = [], max = 0;
        heights.push(0);
        for (let i = 0; i < heights.length; i++) {
            while (stack.length && heights[i] < heights[stack[stack.length - 1]]) {
                let h = heights[stack.pop()];
                let w = stack.length ? i - stack[stack.length - 1] - 1 : i;
                max = Math.max(max, h * w);
            }
            stack.push(i);
        }
        return max;
    }

    return maxArea;
};
