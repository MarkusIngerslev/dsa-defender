export default class SinglyLinkedList {
    head = null;

    add(enemy) {
        const node = new Node(enemy);
        if (this.head == null) {
            // hvis listen er tom
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
    }

    getFirstNode() {
        return this.head;
    }

    getNextNode(node) {
        return node.next;
    }

    getFirst() {
        const node = this.getFirstNode();
        return node.data;
    }

    getNodeWith(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data == data) {
                console.log(current.data);
                return current;
            }
            current = current.next;
        }
    }

    // Fjerner en node fra listen
    removeNode(node) {
        // Hvis noden der skal fjernes er head
        if (this.head === node) {
            this.head = this.head.next;
            return;
        }

        // Finder noden før den, der skal fjernes
        let current = this.head;
        while (current.next && current.next !== node) {
            current = current.next;
        }

        // Hvis vi fandt den node, der skal fjernes
        if (current.next === node) {
            current.next = node.next;
        }
    }

    // Fjerner node med bestemt data
    remove(data) {
        const nodeToRemove = this.getNodeWith(data);
        if (nodeToRemove) {
            console.log(nodeToRemove);
            this.removeNode(nodeToRemove);
        }
    }

    size() {}
}

class Node {
    next; // den peger hen på næste node
    data; // den peger hen på data som er enemy i dette tilfælde

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
