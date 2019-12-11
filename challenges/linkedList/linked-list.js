class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}



class LinkedList {
    constructor(head){
        this.head = new Node(0),
        this.size = 1
    }

    insert(value){
            let head = this.head;
            this.head = new Node(value);
            this.head.next = head;
            this.size++
        }
    includes(value) {
        
        const proceed = (node, value) => {
            if(!node.next){ return 'false'}
            else if(node.value === value){ 
                return 'true' }
            proceed(node.next, value);
        }
            
            const result = proceed(this.head, value);
            return result;
            }

        append(value) {
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            };
            currentNode.next = new Node(value);
            console.log(currentNode)
            this.size++;
        }
    toString() {
        let array = [];
        let node = this.head;
            while(node.next){
            array.push(`${node.value} ->`)
            node = node.next
        }
        array.push('null');
        let string = array.reduce((acc, curr ) => {
            return acc += `${curr} `
        }, '');
        return string;
    }
}

module.exports = { Node, LinkedList };
