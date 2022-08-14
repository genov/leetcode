var topKFrequent = function (words, k) {
  const n = words.length;
  const heap = new MaxHeap();
  const hash = {};
  const result = [];

  for (let i = 0; i < n; i++) {
    hash[words[i]] = (hash[words[i]] || 0) + 1;
  }

  for (let word in hash) {
    heap.enqueue(hash[word], word);
  }

  while (result.length < k) {
    const item = heap.dequeue();
    result.push(item[1]);
  }

  return result;

  function MaxHeap() {
    this.data = [];

    this.enqueue = function (priority, value) {
      this.data.push([priority, value]);

      let current = this.data.length;
      while (current > 1) {
        const parent = Math.floor(current / 2);
        if (
          (this.data[current - 1][0] === this.data[parent - 1][0] &&
            this.data[current - 1][1] < this.data[parent - 1][1]) ||
          this.data[current - 1][0] > this.data[parent - 1][0]
        ) {
          [this.data[current - 1], this.data[parent - 1]] = [
            this.data[parent - 1],
            this.data[current - 1],
          ];
          current = parent;
        } else {
          return;
        }
      }
    };

    this.dequeue = function () {
      const item = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.length -= 1;

      let current = 1;
      while (current < this.data.length) {
        const left = current * 2;
        const right = current * 2 + 1;
        if (left <= this.data.length && right <= this.data.length) {
          if (
            (this.data[left - 1][0] === this.data[right - 1][0] &&
              this.data[left - 1][1] < this.data[right - 1][1]) ||
            this.data[left - 1][0] > this.data[right - 1][0]
          ) {
            if (
              (this.data[left - 1][0] === this.data[current - 1][0] &&
                this.data[left - 1][1] < this.data[current - 1][1]) ||
              this.data[left - 1][0] > this.data[current - 1][0]
            ) {
              [this.data[left - 1], this.data[current - 1]] = [
                this.data[current - 1],
                this.data[left - 1],
              ];
              current = left;
              continue;
            }
          } else {
            if (
              (this.data[right - 1][0] === this.data[current - 1][0] &&
                this.data[right - 1][1] < this.data[current - 1][1]) ||
              this.data[right - 1][0] > this.data[current - 1][0]
            ) {
              [this.data[right - 1], this.data[current - 1]] = [
                this.data[current - 1],
                this.data[right - 1],
              ];
              current = right;
              continue;
            }
          }
        } else if (left <= this.data.length) {
          if (
            (this.data[left - 1][0] === this.data[current - 1][0] &&
              this.data[left - 1][1] < this.data[current - 1][1]) ||
            this.data[left - 1][0] > this.data[current - 1][0]
          ) {
            [this.data[left - 1], this.data[current - 1]] = [
              this.data[current - 1],
              this.data[left - 1],
            ];
            current = left;
            continue;
          }
        }
        break;
      }
      return item;
    };
  }
};
