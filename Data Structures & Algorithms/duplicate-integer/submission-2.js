class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // loop and set item 
        // returin true if it's already has the item
        const count = new Map(); 
        for (let i = 0; i < nums.length;i++ ){
            if(count.has(nums[i])){
                return true
            }
            count.set(nums[i], true)
        }
        return false
    }
}
