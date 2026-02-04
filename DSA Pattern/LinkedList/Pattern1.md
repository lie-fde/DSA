# 🐢🐇 Fast & Slow Pointers Pattern (Tortoise & Hare)

![DSA](https://img.shields.io/badge/DSA-Linked%20List-blue)
![Pattern](https://img.shields.io/badge/Pattern-Fast%20%26%20Slow%20Pointers-green)
![Difficulty](https://img.shields.io/badge/Level-Beginner%20→%20Intermediate-orange)
![Language](https://img.shields.io/badge/Language-JavaScript-yellow)
![Status](https://img.shields.io/badge/Status-Interview%20Ready-success)

> A powerful two-pointer technique used to solve **Linked List** problems in  
> **O(n) time** and **O(1) space** — frequently asked in coding interviews.

---

## 📌 Table of Contents
- [What is the Fast & Slow Pointer Pattern?](#-what-is-the-fast--slow-pointer-pattern)
- [When Should You Use This Pattern?](#-when-should-you-use-this-pattern)
- [Core Intuition](#-core-intuition)
- [Classic Example: Middle of a Linked List](#-classic-example-middle-of-a-linked-list)
  - [Algorithm](#algorithm)
  - [JavaScript Implementation](#javascript-implementation)
  - [Dry Run](#dry-run)
- [Common Pitfalls](#-common-pitfalls)
- [Why This Pattern Is Powerful](#-why-this-pattern-is-powerful)
- [Practice Problems](#-practice-problems)
- [Quick Cheat Sheet](#-quick-cheat-sheet)
- [Suggested File Name](#-suggested-file-name)

---

## 🧠 What is the Fast & Slow Pointer Pattern?

The **Fast & Slow Pointer** technique uses **two pointers** moving through a linked list at different speeds:

- `slow` → moves **1 step**
- `fast` → moves **2 steps**

Because `fast` moves twice as fast as `slow`, their relative positions reveal:
- the **middle** of a list
- the **existence of a cycle**
- the **start of a cycle**
- nodes relative to the **end** of the list

This is also called **Floyd’s Cycle Detection Algorithm**.

---

## 🎯 When Should You Use This Pattern?

Use this pattern when:
- You need to find the **middle** of a linked list
- You must **detect a cycle**
- You want to find the **starting point of a loop**
- You need the **Nth node from the end**
- You want a **one-pass** solution with **constant memory**

If the problem mentions:
> *linked list*, *cycle*, *middle*, *one pass*, *O(1) space*  
→ **Think Fast & Slow pointers immediately**

---

## 💡 Core Intuition

Imagine two runners on a track:
- 🐢 Slow runner → 1 step at a time  
- 🐇 Fast runner → 2 steps at a time  

### Observations:
- If the track is **straight**, the slow runner reaches the **middle** when the fast runner finishes.
- If the track has a **loop**, the fast runner will **eventually meet** the slow runner inside the loop.

That single idea powers **many interview problems**.

---

## 🧪 Classic Example: Middle of a Linked List

### Problem
Return the **middle node** of a singly linked list.  
If there are **two middle nodes**, return the **second one**.

---

### Algorithm
1. Initialize both pointers at `head`
2. Move:
   - `slow` → 1 step
   - `fast` → 2 steps
3. When `fast` reaches the end, `slow` is at the **middle**

---

### JavaScript Implementation
```javascript
function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

function middleNode(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}

```

### 🧪 Dry Run

### Odd Length List  
**Input:** `1 → 2 → 3 → 4 → 5`

| Step | Slow | Fast |
|-----:|:----:|:----:|
| 0 | 1 | 1 |
| 1 | 2 | 3 |
| 2 | 3 | 5 |

➡️ **Result:** `slow = 3` → **Middle node**

---

### Even Length List  
**Input:** `1 → 2 → 3 → 4`

| Step | Slow | Fast |
|-----:|:----:|:----:|
| 0 | 1 | 1 |
| 1 | 2 | 3 |
| 2 | 3 | null |

➡️ **Result:** `slow = 3` → **Second middle node**

---

## ⚠️ Common Pitfalls

- ❌ Forgetting to check `fast` and `fast.next` → **runtime error**
- ❌ Confusing **first middle** vs **second middle**
- ❌ Not resetting pointers when finding the **start of a cycle**
- ❌ Using extra space when an **O(1)** solution exists

---

## 🚀 Why This Pattern Is Powerful

- ✅ One-pass solution  
- ✅ Constant extra space  
- ✅ Easy to reason once mastered  
- ✅ Extremely common in interviews  
- ✅ Works across many linked-list variations  

> **Master this once → reuse it everywhere.**

---

## 🧩 Practice Problems

Try these problems **in order** to fully master the Fast & Slow Pointer pattern:

1. **876. Middle of the Linked List**
2. **141. Linked List Cycle**
3. **142. Linked List Cycle II**
4. **19. Remove Nth Node From End of List**
5. **160. Intersection of Two Linked Lists**
6. **328. Odd Even Linked List**

💡 **Interview Tip:**  
After solving each problem, explain the solution **out loud** using *slow* and *fast* pointers.  
Interviewers care as much about **clarity of thought** as correctness.
