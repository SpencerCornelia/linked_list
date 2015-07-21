Linked List

In computer science, a linked list is a data structure consisting of a group of nodes which together represent a sequence. Under the simplest form, each node is composed of data and a reference (in other words, a link) to the next node in the sequence; more complex variants add additional links. This structure allows for efficient insertion or removal of elements from any position in the sequence.

Linked lists are among the simplest and most common data structures. They can be used to implement several other common abstract data types, including lists (the abstract data type), stacks, queues, associative arrays, and S-expressions, though it is not uncommon to implement the other data structures directly without using a list as the basis of implementation.

The principal benefit of a linked list over a conventional array is that the list elements can easily be inserted or removed without reallocation or reorganization of the entire structure because the data items need not be stored contiguously in memory or on disk, while an array has to be declared in the source code, before compiling and running the program. Linked lists allow insertion and removal of nodes at any point in the list, and can do so with a constant number of operations if the link previous to the link being added or removed is maintained during list traversal.

On the other hand, simple linked lists by themselves do not allow random access to the data, or any form of efficient indexing. Thus, many basic operations — such as obtaining the last node of the list (assuming that the last node is not maintained as separate node reference in the list structure), or finding a node that contains a given datum, or locating the place where a new node should be inserted — may require sequential scanning of most or all of the list elements. The advantages and disadvantages of using linked lists are given below.



Advantages
Linked lists are a dynamic data structure, allocating the needed memory while the program is running.
Insertion and deletion node operations are easily implemented in a linked list.
Linear data structures such as stacks and queues are easily executed with a linked list.
They can reduce access time and may expand in real time without memory overhead.


Disadvantages
They have a tendency to use more memory due to pointers requiring extra storage space.
Nodes in a linked list must be read in order from the beginning as linked lists are inherently sequential access.
Nodes are stored incontiguously, greatly increasing the time required to access individual elements within the list.
Difficulties arise in linked lists when it comes to reverse traversing. For instance, singly linked lists are cumbersome to navigate backwards and while doubly linked lists are somewhat easier to read, memory is wasted in allocating space for a back pointer.




Running Time
- O(n)
- O(1) if placed in beginning
- O(1) if last node is known


