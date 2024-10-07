class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    // Method to add task with priority to the queue
    enqueue(value, priority) {
        const node = { value, priority };
        let added = false;

        // find place to add element
        for (const i in this.queue) {
            if (this.queue[i].priority > priority) {
                this.queue.splice(+i, 0, node);
                added = true;
                break;
            }
        }

        // if element not added, add it to the end of queue
        if (!added) {
            this.queue.push(node);
        }
    }

    // Check if queue is empty
    isEmpty() {
        return !this.queue.length;
    }

    // return element with the highest priority
    dequeue() {
        return this.queue.shift();
    }

    // Get element with the highest priority without removing
    peek() {
        return this.queue[0];
    }
}

const pq = new PriorityQueue();
pq.enqueue("Update db", 3);
pq.enqueue("required error", 1);
pq.enqueue("Scheduled support", 2);
pq.enqueue("Take a shit", 1);

while (!pq.isEmpty()) {
    const task = pq.dequeue();
    console.log(`Task: ${task.value}, Priority: ${task.priority}`);
}