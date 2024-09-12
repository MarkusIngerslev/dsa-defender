export default class SinglyLinkedList {
    head = null;

    // Der opretter en ny node, med link til data-objektet, og tilføjer den til listen
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

    // Der finder en node med link til dét data-objekt, og fjerner den noden.
    remove(data) {
        const nodeToRemove = this.getNodeWith(data);
        if (nodeToRemove) {
            console.log(nodeToRemove);
            this.removeNode(nodeToRemove);
        }
    }

    // Der returnerer data i den første node i listen
    getFirst() {
        const node = this.getFirstNode();
        return node.data;
    }

    // Der returnerer data-objektet på det pågældende index i listen.
    getLast() {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current.data;
    }

    // der returnerer den første node i listen
    getFirstNode() {
        return this.head;
    }

    // Der returnerer noden efter denne (eller null, hvis der ikke er nogen)
    getNextNode(node) {
        return node.next;
    }

    // Der returnerer den sidste node i listen
    getLastNode() {
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return;
    }

    // Der returnerer den node der linker til dette data-objekt
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

    // der fjerner den første node fra listen
    removeFirstNode() {
        
    }

    // Der fjerner den sidste node fra listen
    removeLastNode() {}

    // Der fjerner dén node fra listen
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

    // der fjerner alle nodes fra listen, og sørger for at den er tom
    clear() {}

    // der returnerer antallet af nodes i listen
    size() {}

    // der console.log'er alle data-elementer i listen
    dumpList() {}
}

class Node {
    next; // den peger hen på næste node
    data; // den peger hen på data som er enemy i dette tilfælde

    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
