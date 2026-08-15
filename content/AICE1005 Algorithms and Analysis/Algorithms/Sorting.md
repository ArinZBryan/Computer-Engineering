#software/algorithms 
### Bubble Sort
*Bubble sort* is a stable, in-place sorting algorithm that is generally not used due to its poor performance, even compared with other algorithms that share its [big-O complexity](Time%20Complexity.md#Sorting). Its only merits are its name and simplicity to implement.
##### Method
To perform a bubble sort, repeatedly iterate through the array of items, swapping any two adjacent pairs if they are out of order. Each pass through the array will cause the $n^{th}$ largest value to 'bubble up' to the top of the array. The algorithm may terminate once either a pass through the array has been performed, but no swaps occurred, or $n$ passes on the array have been performed. Generally, though the first method is used, as it slightly speeds up the algorithm.
##### Code
```cpp
template<typename T, size_t N>
void bubble_sort(T[N] arr, bool (*gt_eq)(T a, T b)) {
	bool did_swap = false;
	while (!did_swap) {
		did_swap = false;
		for (size_t i = 0; i < N - 1; i++) {
			if (!gt_eq(arr[i], arr[i+1])) {
				T tmp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = tmp;
				did_swap = true;
			}
		}
	}
}
```
##### Analysis
Bubble sort takes, in the best case scenario, where no swaps are performed, $O(n)$ time. in the worst, when the array is reversed, will take $O(n^2)$ time. On average, $O(n^2)$ time is taken. As bubble sort is in-place, no additional memory is allocated.
### Insertion Sort
*Insertion Sort* is a stable, in-place sorting algorithm that is commonly used on small arrays, where it performs well. However, as this algorithm does not scale well, it is very rarely used on larger datasets. Commonly, insertion sort is used as part of quick sort, once the individual slices being sorted get small enough for insertion sort to perform well.
##### Method
To perform an insertion sort, iterate through the elements of the array, for each one, removing it and inserting it into a sorted portion of the array. The position of the element being moved is determined by using a linear search through the sorted portion to find where it belongs. Once all the elements in the original array have been inserted into the sorted section, the algorithm exits.
##### Code
```cpp
template<typename T, size_t N>
void insertion_sort(T[N] arr, bool (*gt_eq)(T a, T, b)) {
	for (size_t i = 1; i < N; i++) {
		T value = arr[i];
		size_t j = i - 1;
		while (gt_eq(arr[j], value) && j >= 1) {
			arr[j+1] = arr[j];
			j--;
		}
		arr[j+1] = value;
	}
}
```
##### Analysis
Insertion sort takes, in the best case scenario, where the array is already in order, $\Theta(n)$ time. In the worst case scenario, where the array is in reverse order, $\sum^n_{i=2}(i-1)=1+2+\dots+n-1=\frac{n(n-1)}{2}\in \Theta(n^2)$. On average, elements will need to be moved halfway through the sorted section, resulting in $\frac{n(n-1)}{4} \in O(n^2)$ time complexity.
### Selection Sort
*Selection sort* is a non-stable, in-place sorting algorithm that is almost never used as it performs slightly worse than insertion sort in the asymptotic case. This is because though it has the same worst case time complexity, it has worse average and best case complexities. The advantage of this is that it performs less moving of the data, which is required when using arrays in insertion sort. A linked list could be used in insertion sort to speed it up slightly, but that would add the requirement to convert back to an array.
##### Method
Selection sort is the method most commonly used to sort a deck of cards by value: find the lowest valued card in the unsorted portion of the array and move it to the end of the sorted portion repeatedly until no more elements remain.
##### Code
```cpp
template<typename T, size_t N>
void selection_sort(T[N] arr, bool (*gt_eq)(T a, T, b)) {
	for (size_t i = 0; i < N; i++) {
		int min_index = i;
		for (size_t j = i; j < N; j++) {
			if (!gt_eq(arr[j], arr[min_index])) {
				min_index = j;
			}
		}
		T tmp = arr[i];
		arr[i] = arr[min_index];
		arr[min_index] = tmp;
	}
}
```
##### Analysis
Selection sort has a known number of comparisons for any given size of input. This happens to be $\frac{n(n-1)}{2}$ comparisons. This means that it has the same worst case than insertion sort, but worse average and best cases.
### Merge Sort

### Quick Sort
Quick sort works primarily based on the partitioning function used. It works in a relatively simple way: 
- Given some value we want to be the 'pivot' value, which does not have to be a value present in the array, but does need to be less than the maximum value and more than the minimum.
- Walk a pointer from the left rightwards until we hit value larger than the pivot.
- Walk a pointer from the right leftwards until we hit a value smaller than the pivot.
- Swap the values at the pointers
- Repeat the previous three steps until the pointers point to the same element.
```c++
template<typename T>
void swap(T* a, T* b) {
	T temp = *a;
	*a = *b;
	*b = T;
}
//std::slice is a non-owning view into a vector or array (in this case)
size_t partition(std::slice<int> slice, int pivot) {
	size_t left = 0;
	size_t right = slice.size() - 1;
	while (left != right) {
		while (slice[left] <= pivot) { left++; }
		while (slice[right] >= pivot) { right--; }
		swap(&slice[left], &slice[right]);
	}
	return left;
}
```
This leaves one final problem - determining what the pivot value will be. Commonly we just take the median of three of the values in the array (often the first, last and middle, in case the array is partially pre-sorted). While the mean could work, if we restrict ourselves to partition values that exist in the array, we can get a minor speedup (and make the algorithm easier to understand).
```c++
int getPivotValue(std::slice<int> slice) {
	int first = slice[0];
	int last = slice[slice.size() - 1];
	int middle = slice[static_cast<size_t>(slice.size()/2.0) - 1];
	if (first < middle && middle < last) { return middle; }
	if (last < middle && middle < first) { return middle; }
	if (middle < first && first < last) { return first; }
	if (last < first && first < middle) { return first; }
	if (first < last && last < middle) { return last; }
	if (middle < last && last < first) { return last;}
}
```

Once we have the partitioning function, the rest of quick sort is easily defined. We recursively partition into smaller and smaller subsections until we determine the subsection is small enough. Then, we run some other sorting algorithm (usually insertion sort) on that subsection.
```c++
void quickSort(std::slice<int> slice) {
	if (slice.size() <= 3) { insertionSort(slice); }
	else {
		int pivot = getPivotValue(slice);
		size_t partition_point = partition(slice, pivot);
		quickSort(slice, 0, pivot - 1);
		quickSort(slice, pivot + 1, slice.size() - 1);
	}
}
```
### Radix Sort
Radix sort works on the idea that we shouldn't be making binary choices, when we can make a more nuanced choice and gain more information. Thus, we use the idea of sorting into buckets to perform the sorting.
This example will assume we are sorting positive integers, but it could be extended to other applications.

Say we have some list of numbers. The first step is to place them all into a queue. At this stage the order they enter does not matter. We could then have 10 buckets, 0-9 which we then place the numbers into, based on the digit in the 'ones' place. We then remove the numbers from the buckets, starting at zero and moving up and place them back into the priority queue. Then, we sort in the same way by the 'tens' place, then the hundreds, thousands and so on. Eventually, the queue will stop changing order, and we will be done.

