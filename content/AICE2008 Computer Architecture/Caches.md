When creating a CPU, there are usually several layers of memory that can be accessed in descending order of speed:
- Registers
- SRAM
- DRAM
- Disk/Flash
However, using large quantities of the faster memory types is often very expensive per bit and may simply be technically unfeasible (volatile storage being used where non-volatile is desired). However, from the CPU's perspective, we only want to 'see' one address space. To achieve this, we consider the use of _caches_: smaller, faster blocks of memory that mirror larger and slower ones to allow us the fast access we need to memory we're currently working on while not paying for the full complexity of directly accessing large quantities of fast memory, or having to access slow memory instead.

> [!info]- DRAM, SRAM and FLASH on the same die
> Because the manner in which DRAM and SRAM are manufactured are differently in ways which are fundamentally incompatible, you _never_ find DRAM and SRAM/general compute on the same die. It is possible however to modify the manufacturing process of general CMOS silicon to allow for flash memory to be placed onto the same die by adding some more masks and layers to accommodate it without preventing the general compute from being manufactured, as FLASH is primarily built from the same CMOS transistors as SRAM and general compute.
### Multiple Levels of Cache
In much the same way that it can be advantageous to have a cache against general memory to improve the latency/speed of memory at the cost of capacity and cost per bit, it can also be advantageous to further cache the cache to further improve latency/speed. This does naturally increase complexity and cost further, but can provide significant performance improvements. For instance, in a modern x86_64 processor, it would not be uncommon to see an L1, L2 and L3 cache before memory and in some AMD processors, 3D V-Cache may act as an 'expanded L3 cache' or an L4 cache.
### Cache Associativity
When building a cache, the first question is always 'how do you map addresses in memory to addresses in the cache?'. There are a number of strategies for doing this, but the most common are:
- Direct Mapping
- Set Associative
- Fully Associative
Direct mapping is the simplest, but also the worst performing, whereas 2-way, 4-way, $2^n$-way and fully associative each perform better than the last, but are more complex to implement.
##### Direct Mapping
![float-right|200](images/Direct%20Mapping%20Cache%20Strategy.png)In _direct mapping_, each memory address is capable of being mapped to exactly _one_ cache address. This is often achieved by just truncating the memory address to a shorted number of bits. As can be seen in the diagram to the right memory addresses, which are four bits are truncated to their least significant two bits, which determines which cache slot the data at that address may be mapped to.
![](./images/Cache%20Strategies/Direct%20Mapping.gif)
The above tables show how the state of a cache evolves over time with memory accesses when the cache is directly mapped to memory.
##### Set Associativity
![float-right|200](images/2-way%20cache%20associativity.png)Set associativity is a mapping scheme where each value can go one of several 'ways' into the cache. To make implementation easier, generally set associativity is done with sets the size of a power of two (e.g. 2-way associative, 4-way associative, etc.). The method by which the specific 'way' is chosen is subject to _cache eviction policy_. The only policy shown here is one of the simplest - _free-then-least-recently-used_. In this policy, if there is an unused way, then that is used, otherwise the least recently used way is always chosen to be evicted. 
![](./images/Cache%20Strategies/2%20Way%20Mapping.gif)
The above tables show how the state of a cache evolves over time with memory accesses when the cache is two-way associative with memory. Below shows the case for a four-way associative cache. It can be seen that in this case, the four-way associative cache performs better, with fewer cache evictions (better cache utilisation) and more cache hits.
![](./images/Cache%20Strategies/4%20Way%20Mapping.gif)
##### Fully Associative Cache
A fully associative cache is one where any memory address can be placed in any cache slot. It is the most complex to implement, but generally performs the best due to its high cache utilisation.
![](./images/Cache%20Strategies/Full%20Associativity.gif)
### Cache Lines
When reading data, it is very common that reads aren't truly random. In fact, the most common pattern is that of reading from an array. Thus, there are specific cache prediction strategies that CPUs use to get memory into cache before it's needed - preventing a pipeline stall. The simplest of these is the humble cache line. Instead of reading a single byte or word from memory, a block of addresses are read together and placed into cache, called a _cache line_. This means that when a particular address is read from, surrounding addresses are immediately available to the CPU.
![](./images/Cache%20Strategies/Direct%20Mapping%20Line4.gif)
Above is a directly-mapped cache with a four-word cache line. The table shows _cache addresses_ as being four bits, however, this is slightly misleading - the cache address does map directly to the bottom four bits of the address of the values, but generally, the whole line has one set of metadata, rather than the words individually. The cache line's address would only be the first two bits of the cache address in this case, as there are only four lines that can fit in this cache.

Below is a fully-associative cache with a line size of four words. Like the above table, it also shows addresses for each word, when in reality, the address is only stored for each cache line. 
![](./images/Cache%20Strategies/Full%20Associativity%20Line4.gif)
### Victim Caches
A victim cache is a _small_ fully-associative cache that is kept separate that evicted cache lines are placed into during eviction. This provides a small line of last defence against cache thrashing, where lines come in and out of the cache repeatedly. When a cache line is hit and it is in the victim cache, it is then swapped with a line from the main cache, which may be determined as if it were being loaded from memory for the first time - that is, it is determined by cache eviction policy.
![](./images/Cache%20Strategies/Direct%20Mapping%20Victim.gif)
Above shows a directly-mapped cache with a victim cache. Note that at the end, even though the values were evicted from the main cached, by being kept around in the victim cache, they were able to be hit anyway, allowing for faster lookup times, and potentially preventing a pipeline stall.

Below is a similar setup with a 2-way set associative cache with victim cache. Notice that at the end, there are multiple swaps between victim cache slot 0, which causes 'thrashing' between the main and victim caches. While this is not ideal, it is certainly more ideal than thrashing between memory and caches.
![](./images/Cache%20Strategies/2%20Way%20Mapping%20Victim.gif)

### To Cache Or Not To Cache?
There are often sections of memory for which caching is not desirable. For this reason, CPUs often support several modes for pages in memory which determine whether and how caching is applied to those blocks of memory. The below modes are based on those used by x86 CPUs, but in general, this will apply across architectures.
- No Cache
	- Never cache this address, always forward reads and writes straight to the memory bus.
	- Generally used for memory-mapped I/O, where caching would fundamentally break the operation of memory-mapped devices
- Write Combining
	- Writes can be combined and re-ordered by the CPU before being sent on the bus without caching. Reads are never cached.
	- Used almost exclusively for devices where there is a large block of data that needs to be sent, but the exact order that we send it isn't too important and reads are generally rare. This can often be more efficient when dealing with devices on a PCIe bus.
	- Often used for sending/receiving framebuffers from graphics devices.
- Write Back
	- Standard cached memory
- Write Through
	- Writes are written to both the cached page and memory immediately, but reads are cached as normal.
### Writing To Cached Memory
If you write to cached memory, there are in general two ways to do it: write back and write through. In write-back, once a cache line is written to, it is marked as 'dirty', meaning that when it is next evicted, it should also be written back to main memory. This is a 'lazy' method. On the other hand, in write-through, writes to a cached piece of memory are immediately replicated to main memory. This ensures that it's always up to date, but is rare due to the not exactly spectacular speed. In practice, this method is rarely used today.
### Metadata
Alongside any cache line, a set of metadata is always held. It usually contains:
- A 'dirty' bit
	-  The dirty bit marks whether the cache line has been written to since being read from memory. This is used in 'write-back' mode, where cache lines that are dirty when evicted also get written back to memory.
- A 'valid' bit
	- The valid bit marks whether the cache line is uninitialized. If false, then the cache line can be overwritten no matter whether it is marked as dirty or not. This is generally used to facilitate cache flushes, where it is cheaper to mark a line as now unused than zero-ing out the line.
- A 'tag'
	- The cache line's tag is simply the bits of the address corresponding to the start of the cache line that don't specify the bits internal to the line. For example, in a 16-bit machine with 8-byte cache lines and addresses referring to individual bytes, this would be the top 13-bits of the address of the line's base address, as the bottom three bits of the address are only used to determine which bit of the cache line already cached is being accessed. This is used to verify that a cache line is already in the cache and can be 'hit'. 

