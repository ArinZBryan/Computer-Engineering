#software/datastructures 
Linked lists are a non-contiguous data structure, that while simple in premise and implementation, is not often used today due to performance concerns. A linked list comes in two main flavours, a *singly-linked list* and a *doubly-linked list*. A further extension to *skip-lists* can be built on top of either of these types of linked-list.
### Singly-Linked Lists
A *singly-linked* list consists of some wrapper object, usually supplying information about the data as a whole as well as methods for manipulating it. Specifically, the ADT for a list requires that the wrapper provide the abilities to:
- Create a linked list
- Add elements at any position
- Remove elements at any position
- Check if an element exists
- Check if the list is empty
- etc...
Beneath this wrapper is a series of nodes, each one containing some piece of data, as well as a pointer to the next one in the sequence.
![Singly-Linked List](../Images/Singly-Linked%20List.png)
An example barebones implementation of a singly-linked list is as follows:
```cpp
template <typename T>
class Singly_Linked_List {
private:
	class Node {
		Node(T value, Node<T>* next): value(value), next(next) {}
		T value;
		Node<T>* next;
	}
	Node<T>* head;
	unsigned int length;
public:
	unsigned int size() { return length; }
	bool empty() const { return head == nullptr; }
}
```
##### Method: Add Element
To insert an element somewhere in the singly-linked list, you must first allocate memory for a new `Node` and update the pointers for the nodes before and after the place you intend to insert into. Note: Given you have the pointer to the element before the place you want to insert a new node into, insertion is an $O(1)$ operation, but if you don't, then it becomes an $O(n)$ operation, as you must perform a linear search for the node first.
##### Method: Delete Element
To delete an element somewhere in the singly-linked list, you must first find the element before the one you want to delete. Then change the pointer for that node to the one after the one you want to delete. Finally, you can delete the node. Note: Given you have the pointer to the element before the node you want to delete, deletion is an $O(1)$ operation, else it is an $O(n)$ operation, as you must perform a linear search for the node first.
##### Other Methods
Most of the methods required for a list are trivial to construct, generally by using a linear search, such as for instance:
- `get(int i)`
- `find(Node* n)`
- etc...
### Doubly-Linked Lists
To make a singly-linked list more powerful, we can upgrade the node so that each one points to both the previous and next node in the list. This kind of list 