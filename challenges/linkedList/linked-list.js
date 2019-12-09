class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}



class LinkedList {
    constructor(head){
        this.head = new Node(0),
        this.size = 0
    }

    insert(value){
            this.head.next = new Node(value);
            this.size++
        }
    includes(value) {
        
        const proceed = (node) => {
            console.log(node.value);
            if(node.value === value){ return true }
            proceed(node.next);
        }
            
        if(this.size > 0){
            let result = proceed(this.head)
            console.log(result);
            return result;
            } else {
                result = 'LinkedList of Zero Length';
                return result;
            }
        }
    toString() {
        let array = [];
        let node = head;
            while(node.next){
            array.push(JSON.stringify(node.value));
            node = node.next
        }
        return JSON.stringify(array);
    }
}

module.exports = { Node, LinkedList };
