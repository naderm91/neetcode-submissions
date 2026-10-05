class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // space comp is 2n
    isAnagram(s, t) {
        let items_one = s.split('');
        let items_two = t.split('');
        if(items_one.length !== items_two.length){
            return false;
        }

        const count1 = new Map();
        const count2 = new Map();
       
        for (let i = 0; i < items_one.length;i++ ){
            count1.set(items_one[i], (count1.get((items_one[i]))??0)+1)
        }

        for (let i = 0; i < items_two.length;i++ ){
            count2.set(items_two[i], (count2.get(items_two[i])??0)+1)
        }
        
        //loop throu the counts and check if they all match

        for (const [index, item] of count1) {
            if(!count2.has(index)){
                return false
            }
            if(item !== count2.get(index)){
                return false
            }
        }
        return true
    }
}
