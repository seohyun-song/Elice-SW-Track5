function reverse<T>(item: T[]): T[] {
	return item.reverse();
}

const arg = [1, 2, 3, 4, 5];
const reversed = reverse(arg);
console.log(reversed); // [ 5, 4, 3, 2, 1 ]
