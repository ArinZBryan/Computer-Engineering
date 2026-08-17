#software/algorithms
Files can be compressed in one of two main ways: lossy and lossless. Put simply, with lossless compression, when we decompress the data, we get back exactly what we started with. On the other hand, with lossy compression, we don't get back exactly what we put in. Generally, because of this, lossy compression gets a better ratio - usually up to 25%, whereas lossless often gets between 10% and 1% compression ratios.
### Entropy Encoding
The basic idea of this is to give commonly seen sequences (symbols) shorter encoding and less commonly seen sequences longer encodings. Claude Shannon showed that for an alphabet of $n$ symbols, where the probability of any one ($i$) of them showing up was $P_i$, the number of bits required for encoding a message will never be less than:
$$
-\sum^n_{i=1}P_i\log_2(P_i)
$$
##### Huffman Coding
*Huffman coding* is a greedy method of assigning codes to symbols that makes use of a binary tree. It happens to be the most optimal method of performing this operations, as a result of this it is very commonly used. For instance, it is one of the several methods supported by the JPEG file format for compressing images.

To perform Huffman coding, we must first know the frequencies of each symbol's appearance in the source data. Using English text as an example, this could be the number of times each letter or punctuation mark appears in the text. In practice, Huffman coding can perform better if you instead count words or commonly appearing sequences of characters instead, but that is more complicated and uses, fundamentally the same algorithm, once the sequences have been identified.

As Huffman coding is a type of entropy encoding, we need to find some way to assign some encoding to each symbol, with more common symbols getting shorter encodings and less common symbols getting longer symbols. To do this, we use a [binary tree](../Datastructures/Binary%20Trees.md), where each leaf holds a symbol and the path from the root node to each given leaf denotes its encoding.
![Huffman Tree](../Images/Huffman%20Tree.png)
Using the above tree as an example, the following encodings would be produced:

| Symbol | Encoding |
| ------ | -------- |
| a      | 00       |
| b      | 01       |
| c      | 10       |
| d      | 1100     |
| e      | 1101     |
| f      | 1110     |
| g      | 1111     |

This scheme of encodings ensures that it is impossible to mistake one symbol's encoding for another when reading the data sequentially. Now however, we must actually generate this tree based on the source data. To do this, we use the frequencies of each symbol in the source material. If we create a tree containing just one leaf node for each symbol and place the trees into a priority queue, with the frequency of the symbols' occurrence acting as the priority, we can draw the top two subtrees from the queue. From here, we link the two trees and reinsert the resulting tree back into the priority queue, with a priority equal to the sum of the priorities of the two trees used to make it. We continue doing this until there is only one tree remaining in the priority queue, at which point we have finished generating the tree.
##### Building on Huffman coding
Though Huffman coding itself is relatively simple, it can be easily built on (at least in principle) by instead identifying sequences of data to group into one 'symbol'. This is quite difficult and in practice, algorithms to do this are generally highly specific to one type of data or another. (images/text/code/etc.)

> [!tip] Using compression for plagiarism detection
> As it happens, it is possible to use compression methods, especially those built on top of Huffman coding to detect plagiarism. If we simply concatenate the original and the copy, if they are similar, they will share significant structural similarities. Even if there have been attempts made at changing words to avoid looking like plagiarism. Because of these similarities, Huffman coding based compression techniques will achieve a very high compression ratio, due to the copying. If however, the two texts are genuinely different, a low compression ratio will be achieved, as the two texts are unique.
### Wavelet Encoding
![float-right|400](../Images/daub6%20compression.png)Given some signal $x = \{x_0, x_1, x_2,\dots,x_{n-1}\}$, we could imagine compressing it by reducing the details of the signal, performing lossy compression. In doing so we still want to preserve as much of the signal as possible. To aid in measuring the amount we preserve the signal, we define 'energy' as the following:
$$
E=\sum^n_{i=1}{x_i}^2
$$

In lossy compression, our goal is to maximise the proportion of the original signal's energy that we transmit in the compressed data. There are a few strategies to do this, listed below:
##### Haar Wavelets
We can decompose a signal into two others, an 'average' signal and a 'detail' signal, notated as $a$ and $d$ in the below diagram. More formally, we define them as:
$$
a_i=\frac{x_{2i}+x_{2i+1}}{\sqrt{2}}\hspace{24pt}d=\frac{x_{2i}-x_{2i+1}}{\sqrt{2}}
$$
![Haar Wavelets](../Images/Haar%20Wavelets.png)
We can prove mathematically that the energy of these two signals combined is exactly equal to the energy of the source signal. So far nothing destructive has taken place, but also, no compression has happened. From this state, we can easily reverse the process and use $a$ and $d$ to produce the original signal, $x$. When we later perform the _lossy_ part of _lossy compression_, we want as much of the signal's energy to be encoded in $a$, rather than $d$. As a result, we often then take Haar wavelets of $a$, to get $a^2$ and $d^2$, then $a^3$, $d^3$ and so on. 
![Second order Haar wavelets](../Images/Haar%20Wavelets%202.png)
This concentrates the energy in $a^n$, and should produce several $d^n$ signals with only small details. At this point, we can simply throw away the low amplitude details in the difference signals. This allows us to then replace them all with zero for instance. This then leaves a signal that is much easier to compress via lossless methods, such as using Huffman coding, as the signal will be dominated by a single symbol - zero.
##### Daubechies Wavelets
While Haar wavelets are the simplest to understand, there are also other wavelet sets that can perform better than Haar. The next simplest is called 'Daub4', and is defined as following:
$$a_i=c_0x_{2i}+c_1x_{2i+1}+c_2x_{2i+2}+c_3x_{2i+3}$$$$d_i=c_3x_{2i}+c_2x_{2i+1}+c_1x_{2i+2}+c_0x_{2i+3}$$
$$
c_0=\frac{1+\sqrt{3}}{4\sqrt{2}}\hspace{12pt}c_1=\frac{3+\sqrt{3}}{4\sqrt{2}}\hspace{12pt}c_2=\frac{3-\sqrt{3}}{4\sqrt{2}}\hspace{12pt}c_3=\frac{1-\sqrt{3}}{4\sqrt{2}}
$$
Once again, this can be mathematically proven to conserver energy. As it happens, when the signal is linear, the difference signal is always zero, which means that the resulting signal is even more compressible.
##### Noise Reduction
As can be seen in the first diagram, this method of compression also works as noise reduction, which allows for applications outside of just compressing the signal.