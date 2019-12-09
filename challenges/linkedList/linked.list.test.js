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
        expect(linkedList.head.next).toEqual(new Node(4));
    });
    it('should check if it includes a value', () => {
        const linkedList = new LinkedList();
        linkedList.insert(4);
        linkedList.insert(5);
        console.log(linkedList)
        console.log(linkedList.includes(0));
        expect(linkedList.includes(4)).toEqual('true')
    });
})