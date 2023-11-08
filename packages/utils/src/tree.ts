import { isEqual } from './isEqual'

interface TreeNode<T> {
  data: T
  children: Tree<T>[]
}

export enum Traversals {
  PRE_ORDER,
  POST_ORDER,
  LEVEL_ORDER,s
}

export class Tree<T> {
  private root: TreeNode<T> | undefined = undefined

  public insert(data: T): Tree<T> {
    if (!this.root) {
      this.root = { data, children: [] }
      return this
    }

    const child = new Tree<T>()

    this.root.children.push(child.insert(data))

    return child
  }

  public remove(data: T): void {
    if (!this.root) return

    if (isEqual(this.root.data, data)) {
      this.root = undefined
      return
    }

    this.root.children = this.root.children.filter(
      (child) => !isEqual(child.root?.data, data)
    )
    this.root.children.forEach((child) => child.remove(data))
  }

  /**
   * Returns the longest path from `tree` node to a leaf node.
   */
  public height(tree: Tree<T>): number {
    if (!tree.root) return -1

    return tree.root.children.length === 0
      ? 0
      : Math.max(...tree.root.children.map((child) => 1 + child.height(child)))
  }

  /*
   * Returns the path length from this tree's root node to `target` node.
   */
  public depth(target: Tree<T>): number {
    const queue = [{ tree: this as Tree<T>, level: 0 }]

    while (queue.length) {
      const entry = queue.pop()

      if (entry && entry.tree.root === target.root) {
        return entry.level
      }

      entry?.tree?.root?.children.forEach((child) => {
        queue.unshift({ tree: child, level: entry.level + 1 })
      })
    }

    return -1
  }

  public toArray(traversal: Traversals = Traversals.LEVEL_ORDER): T[] {
    switch (traversal) {
      case Traversals.PRE_ORDER:
        return this.traversePreOrder(this.root)
      case Traversals.POST_ORDER:
        return this.traversePostOrder(this.root)
      default:
        return this.traverseLevelOrder(this.root)
    }
  }

  private traversePreOrder(root: TreeNode<T> | undefined): T[] {
    if (!root) return []

    return [
      root.data,
      ...root.children.flatMap((child) => child.traversePreOrder(child.root)),
    ]
  }

  private traversePostOrder(root: TreeNode<T> | undefined): T[] {
    if (!root) return []

    return [
      ...root.children.flatMap((child) => child.traversePostOrder(child.root)),
      root.data,
    ]
  }

  private traverseLevelOrder(root: TreeNode<T> | undefined): T[] {
    const result: T[] = []
    const queue: (TreeNode<T> | undefined)[] = [root]

    while (queue.length) {
      const node = queue.pop()

      if (node) {
        result.push(node.data)

        for (const child of node.children) {
          queue.unshift(child.root)
        }
      }
    }

    return result
  }
}