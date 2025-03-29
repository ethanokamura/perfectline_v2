---
title: Disjoint Set
description: Time to build a simple Queue ADT.
tags:
  - data-structure
  - queue
  - linked-list
  - memory
  - classes
published: true
lang: cpp
course: maze
order: 3
---

## Overview:
Disjoint sets let us track equivalence classes. AKA union-find
- Group `n` items between `n` and `1` set(s) based on what you decide what equivalency means.
- Self-healing towards best time complexity
- Operation #1 `find()`: Given an item, which set is it a member of?
- Operation #2 `union()`: Unite two sets (yields one set)

## Implementation:
Linked lists of elements in the same set would be too slow ($O(n)$ find). So we use a disjoint set forest.
- expected case $O(1)$, worst case $O(n)$ but self-healing towards $O(n)$

## Time Budget $O(n)$:
Our operations will need to make decisions quickly with little information to stay within the $O(1)$ budget
- Heuristic #1: Union by rank
- Heuristic #2: Path compression

## Root Element:
The root element is the representative element of a given set.
- An element of the set is its name

## Make Set:
We want to set each element as part of its own set by default. Meaning that each element is the parent of itself with a default value for the representative (in this case, zero).

Make set is consumed by the constructor:

```cpp
// constructor
DisjointSet(int n) {
  if (n < 3) throw std::domain_error("invalid size!");
  p = new int[n];
  r = new int[n];
  count = n;
  this->n = n;
  for (int i = 0; i < n; i++) {
    p[i] = i;  // parent is itself
    r[i] = 0;  // all are initially rank 0
  }
}
```

## Union (By Rank):
1. Determine representative element
2. Combine by **rank** to try to avoid worst-case

![[DS_01.svg]]

**NOTE:** Rank is an estimated upper bound.

### Union:
The union function is pretty much just a wrapper for the link function. We check to make sure the bounds are valid within our disjoint set. We then _link_ the two representatives of the sets from $x$ and $y$ together.

```cpp
/**
 * @brief union by rank
 *   unites set that includes x and y by rank
 *   determined representative element
 *   combine by rank to try to avoid worst-case
 */
void union_by_rank(int x, int y) {
  // bounds check x and y
  if (x < 0 || x >= n || y < 0 || y >= n)
	  throw std::domain_error("out of range");
  if (x == y) return;
  // find the representatives (or root nodes)
  // unite then together
  link(find(x), find(y));
}
```

### Link:
The linking function itself is a little more complex. Keep in mind, with this function, x and y are the representatives of the previous sets of x and y.

Here's how the code works:
1. Check to see if the rank of x is greater than y. If so, we set the parent of y to x
2. If the rank of x is less than the rank of y, we set the parent of x to y.
3. If the ranks are equal we increase the rank of y by one.

```cpp
void link(int x, int y) {
  // tuck smaller rank under larger rank, no rank change
  // if they are the same rank, then one rank increases by one (one on top)
  if (r[x] > r[y]) {
    p[y] = x;
  } else if (r[x] < r[y]) {
    p[x] = y;
  } else {
    r[y]++;
  }
}
```

## Find (With Path Compression):
Within our find call, we will want to try to flatten our structure. This is achieved by finding what we are looking for and fixing the parents simultaneously.

We then return the representative of that value.

**NOTE:** This does not change the rank of the element.

```cpp
int find(int x) {
  // bounds check
  if (x >= n) throw std::domain_error("out of range");
  if (p[x] != x) p[x] = find(p[x]);
  return p[x];
}
```