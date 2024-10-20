class PriorityMinHeap {
    constructor() {
        this.heap = [];
    }

    insert(task) {
        this.heap.push(task);
        this.bubbleUp()
    }

    remove() {
        if (this.isEmpty()) return null
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.sinkDown();
        return root;
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        let task = this.heap[idx];
        while (idx > 0 && this.heap[this.getParentIndex(idx)].priority > task.priority) {
            this.swap(idx, this.getParentIndex(idx));
            idx = this.getParentIndex(idx);
        }
    }

    sinkDown() {
        let idx = 0
        while (this.getLeftChildIndex(idx) < this.heap.length) {
            let leftIndex = this.getLeftChildIndex(idx);
            let rightIndex = this.getRightChildIndex(idx);

            if (rightIndex < this.heap.length && this.heap[rightIndex].priority < this.heap[leftIndex].priority) {
                leftIndex = rightIndex;
            }

            if (this.heap[idx].priority <= this.heap[leftIndex].priority) break;

            this.swap(idx, leftIndex);
            idx = leftIndex
        }
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }

    getLeftChildIndex(idx) {
        return 2 * idx + 1;
    }

    getRightChildIndex(idx) {
        return 2 * idx + 2;
    }

    isEmpty() {
        return !this.heap.length;
    }
}


/**
 * This is simple implementation of priority queue with O(n) complexity
 */
// class PriorityQueue {
//     constructor() {
//         this.queue = [];
//     }
//
//     // Method to add task with priority to the queue
//     enqueue(value, priority) {
//         const node = { value, priority };
//         let added = false;
//
//         // find place to add element
//         for (const i in this.queue) {
//             if (this.queue[i].priority > priority) {
//                 this.queue.splice(+i, 0, node);
//                 added = true;
//                 break;
//             }
//         }
//
//         // if element not added, add it to the end of queue
//         if (!added) {
//             this.queue.push(node);
//         }
//     }
//
//     // Check if queue is empty
//     isEmpty() {
//         return !this.queue.length;
//     }
//
//     // return element with the highest priority
//     dequeue() {
//         return this.queue.shift();
//     }
//
//     // Get element with the highest priority without removing
//     peek() {
//         return this.queue[0];
//     }
// }

/**
 * This is new priority queue was built on MinHeap structure with complexity O(log n)
 * which is better than previous simple implementation O(n)
 */
class PriorityQueue {
    constructor() {
        this.heap = new PriorityMinHeap()
    }

    enqueue(name, priority) {
        this.heap.insert({
            name,
            priority
        })
    }

    dequeue() {
        return this.heap.remove()
    }

    isEmpty() {
        return this.heap.isEmpty()
    }
}

const pq = new PriorityQueue();
pq.enqueue("Update db", 3);
pq.enqueue("required error", 1);
pq.enqueue("Scheduled support", 2);
pq.enqueue("Take a shit", 1);

while (!pq.isEmpty()) {
    const task = pq.dequeue();
    console.log(`Task: ${task.name}, Priority: ${task.priority}`);
}