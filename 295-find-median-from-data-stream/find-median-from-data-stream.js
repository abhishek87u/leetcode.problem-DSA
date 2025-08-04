class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }

  offer(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  poll() {
    if (this.size() === 1) return this.heap.pop();
    const root = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return root;
  }

  bubbleUp() {
    let index = this.size() - 1;
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element >= parent) break;
      this.heap[index] = parent;
      index = parentIndex;
    }
    this.heap[index] = element;
  }

  bubbleDown() {
    let index = 0;
    const length = this.size();
    const element = this.heap[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild < element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.heap[index] = this.heap[swap];
      index = swap;
    }
    this.heap[index] = element;
  }
}

var MedianFinder = function() {
    this.maxHeapForSmallNum = new MinHeap();
    this.minHeapForLargeNum = new MinHeap();
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.maxHeapForSmallNum.size() === 0 || -1 * this.maxHeapForSmallNum.peek() >= num) {
        this.maxHeapForSmallNum.offer(-1 * num);
    } else {
        this.minHeapForLargeNum.offer(num);
    }

    if (this.maxHeapForSmallNum.size() > this.minHeapForLargeNum.size() + 1) {
        this.minHeapForLargeNum.offer(-1 * this.maxHeapForSmallNum.poll());
    } else if (this.maxHeapForSmallNum.size() < this.minHeapForLargeNum.size()) {
        this.maxHeapForSmallNum.offer(-1 * this.minHeapForLargeNum.poll());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if (this.maxHeapForSmallNum.size() === this.minHeapForLargeNum.size()) {
        return (-1 * this.maxHeapForSmallNum.peek()) / 2.0 + this.minHeapForLargeNum.peek() / 2.0;
    }
    return -1 * (this.maxHeapForSmallNum.peek() / 1.0);
};

