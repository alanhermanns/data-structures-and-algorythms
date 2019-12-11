const {
    Node,
    LinkedList
} = require('./linked-list');

describe('Node Class', () => {
    it('should have a value of 4 and next should be null', () => {
        const node = new Node(4);
        expect(node.value).toEqual(4);
        expect(node.next).toEqual(null);
    });
})

describe('LinkedList Class', () => {
    it('should be initialized with an empty head', () => {
        const linkedList = new LinkedList();
        expect(linkedList.head).toEqual({"next": null, "value": 0});
    });
    it('should have an insert method that adds a new node after the head', () => {
        const linkedList = new LinkedList();
        linkedList.insert(4);
        expect(linkedList.head.next).toEqual(new Node(0));
    });
    it('should check if it includes a value', () => {
        const linkedList = new LinkedList();
        linkedList.insert(4);
        linkedList.insert(5);
        linkedList.insert(0);
        expect(linkedList.includes(0)).toEqual('true')
    });
    it('should be able to be converted into a string', () => {
        const linkedList = new LinkedList();
        linkedList.insert(4);
        linkedList.insert(5);
        linkedList.insert(0);
        expect(linkedList.toString()).toEqual('0 -> 5 -> 4 -> null ')
    });
    it('should be able to add a node to the end', () => {
        const linkedList = new LinkedList();
        linkedList.append(4);
        linkedList.insert(3);
        linkedList.append(1);
        linkedList.insert('hi');
        expect(linkedList.size).toEqual(5); 
        });
    

})