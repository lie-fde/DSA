# 🧱 Pattern 2 — Dummy Node Technique (Sentinel Node)

![DSA](https://img.shields.io/badge/DSA-Linked%20List-blue)
![Pattern](https://img.shields.io/badge/Pattern-Dummy%20Node-green)
![Use%20Case](https://img.shields.io/badge/Use%20Case-Insert%20%7C%20Delete%20%7C%20Build-orange)
![Level](https://img.shields.io/badge/Level-Beginner%20→%20Intermediate-yellow)

> The **Dummy Node Technique** is used to **simplify edge cases** in linked list problems,  
> especially when dealing with **head modifications**, **insertions**, or **deletions**.

---

## 📌 Table of Contents
- [What is the Dummy Node Technique?](#-what-is-the-dummy-node-technique)
- [When to Use This Pattern](#-when-to-use-this-pattern)
- [Core Intuition](#-core-intuition)
- [Basic Visualization](#-basic-visualization)
- [Algorithm Template](#-algorithm-template)
- [JavaScript Template](#-javascript-template)
- [Common Pitfalls](#-common-pitfalls)
- [Why This Pattern Is Powerful](#-why-this-pattern-is-powerful)
- [Practice Problems](#-practice-problems)
- [One-Line Memory Trick](#-one-line-memory-trick)
- [Suggested File Name](#-suggested-file-name)

---

## 🧠 What is the Dummy Node Technique?

A **dummy node** (also called a *sentinel node*) is an **extra node** placed **before the actual head** of a linked list.

Instead of starting directly from `head`, we do:

```text
dummy → head → ...

```

# 🎯 Linked List Pattern: The Dummy Node Technique

### When to Use This Pattern
Use the **Dummy Node Technique** when:
* You are adding nodes to a linked list.
* You are removing nodes.
* You are modifying existing nodes.
* You are building a new linked list.
* **The head node might change.**
* Handling the head separately feels complicated.

### 🔍 Strong Clue
If the problem forces you to write:
`if (node === head)`
**→ Use a dummy node.**

---

### 💡 Core Intuition
**Without a dummy node:**
* The head is "special."
* Removing or replacing it requires extra conditions.

**With a dummy node:**
* Every node (including the original head) is treated uniformly.
* No special cases or "if head" checks.
* Cleaner loops and fewer bugs.

> Dummy node converts edge-case-heavy code into simple pointer logic.

---

### 🔎 Basic Visualization

**Without Dummy Node**
`head → 1 → 2 → 3`
*Removing 1 requires special logic.*



**With Dummy Node**
`dummy → 1 → 2 → 3`
*Removing 1 is just:*
`prev.next = curr.next`



---

### 🧠 Algorithm Template
1.  **Create** a dummy node (usually with a value like -1 or null).
2.  **Point** `dummy.next` to the `head`.
3.  **Use a pointer** (like `curr` or `prev`) starting from the `dummy`.
4.  **Perform** insert / delete / build operations.
5.  **Return** `dummy.next` (this is the new head).

---

### 💻 JavaScript Template
```javascript
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function solve(head) {
  const dummy = new ListNode(-1);
  dummy.next = head;

  let curr = dummy;

  while (curr.next !== null) {
    // Perform operation using curr and curr.next
    curr = curr.next;
  }

  return dummy.next;
}

```
---
## ⚠️ Common Pitfalls

- ❌ Forgetting to return dummy.next
- ❌ Modifying head directly instead of using dummy
- ❌ Writing special-case logic even after using dummy
- ❌ Losing node references while re-linking

---

## 🚀 Why This Pattern Is Powerful

- ✅ Eliminates head-related edge cases
- ✅ Makes code shorter and easier to read
- ✅ Reduces bugs in insertion/deletion logic
- ✅ Extremely common in interviews
- ✅ Works well with other patterns

**If you are changing a linked list → think Dummy Node first.**

### 🧩 Practice Problems

Try these problems in order to master this pattern:

1. **2 Add Two Numbers**
2. **21. Merge Two Sorted Lists**
3. **83. Remove Duplicates from Sorted List**
4. **86. Partition List**
5. **61. Rotate List**
6. **237. Delete Node in a Linked List**

### 💡 Interview Tip:
Say this clearly:

“I’ll use a dummy node to avoid handling the head as a special case.”

### 🧠 One-Line Memory Trick

If the list might change → add a dummy node. 