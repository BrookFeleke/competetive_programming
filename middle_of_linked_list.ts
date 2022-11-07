class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
      this.val = val === undefined ? 0 : val;
      this.next = next === undefined ? null : next;
    }
  }
  
  function middleNode(head: ListNode | null): ListNode | null {
    let firstItr = head;
    let secondItr = head;
  
    while (secondItr !== null && secondItr.next !== null) {
      if (typeof firstItr?.next !== "undefined") {
        firstItr = firstItr?.next;
        secondItr = secondItr.next.next;
      }
    }
  
    return firstItr;
  }
