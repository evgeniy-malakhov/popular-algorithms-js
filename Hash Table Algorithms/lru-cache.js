/**
 * RLU cache is a cache that keeps track of which items have been used recently
 * and keeps a minimum number of items used to make room for new ones.
 *
 * In this example, I implement it using a Map data structure, which maintains order
 * in elements and allows resource elements to be removed efficiently.
 */

class LRUCache {
    constructor(maxSize) {
        this.maxSize = maxSize;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) {
            return null;
        }

        // Move the key to the end (the 'newest' location) to mark it as recently used
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    set(key, value) {
        // If the element already exists, just update it
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }

        // If the cache is full, remove the least used element (oldest)
        if (this.cache.size >= this.maxSize) {
            const firstKey = this.cache.keys().next().value
            this.cache.delete(firstKey);
        }

        this.cache.set(key, value);
    }
}

// example to use
const cache = new LRUCache(3)
cache.set(1, 'one')
cache.set(2, 'two')
cache.set(3, 'three')

console.log(cache.get(1)) // 'one'
cache.set(4, 'four')

console.log(cache.get(2)) // null
console.log(cache.get(3)) // 'three'
console.log(cache.get(4)) // 'four'