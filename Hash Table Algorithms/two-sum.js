/**
 * Complexity - O(n)
 */

class TwoSum {
    constructor(target) {
        this.target = target;
        // key-map temporary storage like key - value from array, value - index
        this.tmp = new Map()
    }

    find(arr) {
        for (const i in arr) {
            const diff = this.tmp.get(this.target - arr[i]);

            if (diff) {
                return [+i, +diff];
            }

            this.tmp.set(arr[i], i)
        }
    }
}

const tmpArr = [1, 2, 3, 4, 5, 6]
const finder = new TwoSum(9)
console.log(finder.find(tmpArr))