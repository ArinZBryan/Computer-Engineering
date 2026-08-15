#hardware
<marquee><strong><em>THIS CONTENT IS NOT EXAMINABLE</em></strong></marquee>
GPUs (Graphics Processing Units) first originated in the '70s, to accelerate 2D games in drawing and moving spites and scrolling backgrounds. In the '90s, GPUs gained the ability to do 3D graphics acceleration, also to facilitate new video games.
GPUs have become necessary for the simple reason of resolution. At 1080p, each frame will take at least 6MB, 1440p jumps to 11MB and 4K almost to 25MB. CPUs are just simply not good at pushing this amount of data so quickly, as the calculations required to get it are quite complex and do any meaningful other work.
### Representing Graphics
![float-right|300](images/GPUs/Mesh%20Makeup.png)In 3D graphics, we represent objects as a collection of points, which form edges, which form faces, which finally form a mesh.
We can run these vertices through a pipeline that first processes each mesh, rasterises it (projection), performs filtering, runs the fragment shader and then finally combines everything to get an image at the end.
It used to be that GPUs all had a fixed pipeline - they could only do specific steps in a specific order, with just a few settings that could be changed. However, now shaders have been made programmable, allowing for more custom graphics pipelines to be implemented by programmers.

Because shaders are now programmable, they can also be used for more than just drawing graphics. When using shaders for non-graphics workloads, we call it GPGPU (General Purpose Graphics Processing Unit) processing. Today, some examples of GPU workloads include:
- Video Compression
- Video Encode/Decode
- Image Processing
- Modelling
- Autonomous Vehicles
- AI
- Crypto-Currency Mining
### NVIDIA GPUs
##### Versus a CPU

|                               | CPU (Modern Epyc) | GPU (RTX 4090) |
| ----------------------------- | ----------------- | -------------- |
| **Clock Speed**               | ~4GHz             | ~2GHz          |
| **Core Count**                | $\ge$ 192         | $\ge$ 16,384   |
| **Power Usage**               | 50-350 W          | 100-450W       |
| **High-End Transistor Count** | 78 Billion        | 76 Billion     |
| **High-End FP32 Performance** | ~10 TFLOPS        | ~100 TFLOPS    |
As can be seen above, for a similar number of transistors, it is possible to achieve a much higher floating point performance and core count, but this requires sacrificing some flexibility in the computations you can do
##### CUDA
A 'Streaming Multiprocessor' includes 128 CUDA cores, though calling a CUDA core a 'core' is a bit of a misnomer. It is more accurate to call it an execution unit, as you would have on a CPU, as CUDA cores contain no logic for scheduling or self regulating - this is done at the streaming multiprocessor level.
