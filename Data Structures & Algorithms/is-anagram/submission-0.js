class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // const first_item = s.split('').sort().join('');
        // const second_item = t.split('').sort().join('');
        // return first_item === second_item;
        let items_one = s.split('');
        let items_two = t.split('');
        if(items_one.length !== items_two.length){
            return false;
        }

        const count1 = new Map();
        const count2 = new Map();
       
        for (let i = 0; i < items_one.length;i++ ){
            // add the count of items_one items
            // if(count1.has(items_one[i])){
            //     count1[items_one[i]]++;
            // }else{
            //     count1[items_one[i]] = 1;
            // }
            count1.set(items_one[i], (count1.get((items_one[i]))??0)+1)
        }

        for (let i = 0; i < items_two.length;i++ ){
            // add the count of items_two items

            // if(count2[items_two[i]]){
            //     count2[items_two[i]]++;
            // }else{
            //     count2[items_two[i]] = 1;
            // }
            count2.set(items_two[i], (count2.get(items_two[i])??0)+1)

        }
        
        //loop throu the counts and check if they all match

        for (const [index, item] of count1) {
            // key = the letter, value = its count
            if(!count2.has(index)){
                return false
            }
            // if(count1[index] != count2[index]){
            //     return false
            // } 
            if(item !== count2.get(index)){
                return false
            }
        }
        return true
    }
}
