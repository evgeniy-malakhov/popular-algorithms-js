class MaxHeap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(idx) {
        return Math.floor((idx -1) / 2)
    }

    getLeftChildIndex(idx) {
        return 2 * idx + 1
    }

    getRightChildIndex(idx) {
        return 2 * idx + 2
    }

    insert(value) {
        this.heap.push(value);
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0 && this.heap[this.getParentIndex(idx)] < this.heap[idx]) {
            this.swap(idx, this.getParentIndex(idx));
            idx = this.getParentIndex(idx);
        }
    }

    remove() {
        if (this.isEmpty()) return null
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown();
        return root;
    }

    sinkDown() {
        let idx = 0
        while (this.getLeftChildIndex(idx) < this.heap.length) {
            let leftChildIdx = this.getLeftChildIndex(idx);
            let rightChildIdx = this.getRightChildIndex(idx);

            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[leftChildIdx]) {
                leftChildIdx = rightChildIdx
            }

            if (this.heap[idx] >= this.heap[leftChildIdx]) break;

            this.swap(idx, leftChildIdx);
            idx = leftChildIdx;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
}

const heap = new MaxHeap();
heap.insert(2);
heap.insert(4);
heap.insert(1);
heap.insert(6);
heap.insert(3);
heap.insert(5);
console.log(heap.heap)

console.log(heap.remove());
console.log(heap.heap)

console.log(heap.remove());
console.log(heap.heap)

console.log(heap.remove());
console.log(heap.heap)

console.log(heap.remove());
console.log(heap.heap)

console.log(heap.remove());
console.log(heap.heap)

console.log(heap.remove());
console.log(heap.heap)