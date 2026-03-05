# 🪞 Mirror & Symmetry Pattern (Binary Trees)

> A fundamental Binary Tree recursion pattern used to determine whether two trees (or subtrees) are **mirror images**, **identical**, or **structurally equivalent**.

This pattern frequently appears in coding interviews because it tests:
- Recursive thinking
- Tree traversal understanding
- Structural comparison of trees

---

## 📌 Table of Contents

- [What is the Mirror & Symmetry Pattern?](#-what-is-the-mirror--symmetry-pattern)
- [When Should You Use This Pattern?](#-when-should-you-use-this-pattern)
- [Core Intuition](#-core-intuition)
- [Visual Understanding](#-visual-understanding)
- [Algorithm Idea](#-algorithm-idea)
- [JavaScript Template](#-javascript-template)
- [Common Pitfalls](#-common-pitfalls)
- [Why This Pattern Is Important](#-why-this-pattern-is-important)
- [Practice Problems](#-practice-problems)
- [Quick Cheat Sheet](#-quick-cheat-sheet)

---

## 🧠 What is the Mirror & Symmetry Pattern?

The Mirror & Symmetry Pattern focuses on **comparing two parts of a binary tree** to determine whether they are mirror images of each other or structurally identical.

In many problems, you must compare:

```
left subtree  ↔  right subtree
```

Instead of comparing nodes in the **same direction**, you compare them in **opposite directions**:

```
Left.left   ↔ Right.right
Left.right  ↔ Right.left
```

This approach helps solve problems like:
- Checking if a tree is **symmetric**
- **Inverting** a binary tree
- Checking if two trees are **identical**
- Checking if one tree is a **subtree** of another
- Determining **flip equivalence**

> Most of these problems are solved using **recursion**.

---

## 🎯 When Should You Use This Pattern?

Use this pattern when the problem mentions:

| Keyword | Signal |
|---|---|
| Mirror image | ✅ |
| Symmetric tree | ✅ |
| Flip left and right | ✅ |
| Two trees are identical | ✅ |
| Compare two subtrees | ✅ |
| Subtree matching | ✅ |

**Key signal in a question:**

> *"Compare the left subtree of one node with the right subtree of another node."*

Whenever you see this → **think Mirror Pattern**.

---

## 💡 Core Intuition

A binary tree is **symmetric** if the left subtree is a mirror reflection of the right subtree.

**Example of a symmetric tree:**

```
        1
      /   \
     2     2
    / \   / \
   3   4 4   3
```

**Comparison pattern:**

```
Left subtree          Right subtree

    2                     2
   / \                   / \
  3   4       ↔         4   3
```

**Check:**
```
left.val == right.val
left.left  ↔ right.right
left.right ↔ right.left
```

If all conditions hold **recursively** → the tree is symmetric.

---

## 👀 Visual Understanding

**Original Tree:**
```
      4
    /   \
   2     7
  / \   / \
 1   3 6   9
```

**Mirror (Inverted) Tree:**
```
      4
    /   \
   7     2
  / \   / \
 9   6 3   1
```

> Notice how **left child ↔ right child** — this swapping/mirrored comparison is the core of the pattern.

---

## ⚙️ Algorithm Idea

Most mirror problems follow this recursive idea:

**Steps:**
1. If both nodes are `null` → return `true`
2. If only one node is `null` → return `false`
3. Check current **node values**
4. Recursively compare:
   - `left.left` with `right.right`
   - `left.right` with `right.left`
5. If all conditions hold → trees are mirrors

---

## 💻 JavaScript Template

```javascript
function isMirror(node1, node2) {
    if (!node1 && !node2) return true;
    if (!node1 || !node2) return false;
    if (node1.val !== node2.val) return false;

    return (
        isMirror(node1.left, node2.right) &&
        isMirror(node1.right, node2.left)
    );
}
```

**For symmetric tree:**

```javascript
function isSymmetric(root) {
    return isMirror(root.left, root.right);
}
```

---

## ⚠️ Common Pitfalls

| ❌ Mistake | ✅ Fix |
|---|---|
| Forgetting to check null nodes | Always handle both null base cases first |
| Comparing wrong children (`left.left` vs `left.left`) | Always cross-compare: `left.left ↔ right.right` |
| Not checking node values before recursion | Validate `.val` before recursive calls |
| Missing base cases | Both `null-null` and `one-null` cases are required |

**Correct comparison is always:**
```
left.left  ↔ right.right
left.right ↔ right.left
```

---

## 🚀 Why This Pattern Is Important

This pattern teaches several key tree concepts:

- ♻️ **Recursive thinking**
- 🌲 **Tree structure comparison**
- ➗ **Divide and conquer**
- 🔄 **Understanding symmetry in data structures**

It is one of the **most frequently asked** tree patterns in interviews.

> Companies like **Google**, **Amazon**, **Microsoft**, and **Meta** often ask variations of these problems.

---

## 🧩 Practice Problems

Practice these LeetCode problems in order to master the Mirror & Symmetry pattern:

| # | Problem | Link |
|---|---|---|
| 1️⃣ | Invert Binary Tree | [226. Invert Binary Tree](https://leetcode.com/problems/invert-binary-tree/) |
| 2️⃣ | Symmetric Tree | [101. Symmetric Tree](https://leetcode.com/problems/symmetric-tree/) |
| 3️⃣ | Same Tree | [100. Same Tree](https://leetcode.com/problems/same-tree/) |
| 4️⃣ | Subtree of Another Tree | [572. Subtree of Another Tree](https://leetcode.com/problems/subtree-of-another-tree/) |
| 5️⃣ | Flip Equivalent Binary Trees | [951. Flip Equivalent Binary Trees](https://leetcode.com/problems/flip-equivalent-binary-trees/) |

> 💡 **Tip:** While solving these problems, always ask:
> *"Am I comparing two trees in mirror order?"*
> If yes → **Mirror Pattern applies.**

---

## ⚡ Quick Cheat Sheet

| Problem | Core Idea |
|---|---|
| Invert Binary Tree | Swap left and right children |
| Symmetric Tree | Compare left subtree with right subtree in mirror order |
| Same Tree | Compare two trees node by node |
| Subtree of Another Tree | Check if one tree exists inside another |
| Flip Equivalent Trees | Nodes may swap left/right but still be equivalent |

---

> *"In the Mirror Pattern, always think: left goes right, and right goes left."*