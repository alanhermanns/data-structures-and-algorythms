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
    const goatillend = (node, value) => {
        if(!node.next){
            this.size++;
            let newnode = new Node(value);
            node.next = newnode;
            return
        }
        goatillend(node.next, value);
    }
        goatillend(this.head, value);
}
    insertBefore(value, newValue){
        const go = (node, value, newValue) => {
            if(!node.next){ return 'false'}
            else if(node.next.value === value){
                this.size++;
                let newNode = new Node(newValue);
                node = newNode;
                newNode.next = node.next;
                return true;
            }
            go(node.next, value, newValue);
        }
            go(this.head, value, newValue);
    }
    insertAfter(value, newValue){
        const goafter = (node, value, newValue) => {
            if(!node.next){ return false}
            else if(node.value === value){
                this.size++;
                let nextnode = node.next;
                let newnode = new Node(newValue)
                node.next = newnode;
                newnode.next = nextnode;
            }
            goafter(node.next, value, newValue);
        }
            goafter(this.head, value, newValue);
    }
    toString() {
        let array = [];
        let node = this.head;
            while(node.next !== null){
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
