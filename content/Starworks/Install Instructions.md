To install the WSL2 virtual machine, there are two available options:
1. Download a pre-built image
2. Build the VM from scratch yourself
While option 1 may be preferable when you have good internet speeds, option 2 still has merit for debugging and familiarising yourself with ROS2 and Basilisk
### Option 1
1. Download the image from [starworks-ros2-bsk-base.tar.gz](https://1drv.ms/u/c/f97671c4de08f37e/IQDxtk8BqrLVR5DEidiGc0ijAbTM3KZoxu9Sx6Sm4j919qU?e=cDYY3u).
2. Import the image using `wsl --import starworks-ros2-bsk <Path to where you want the VM to be installed to> <Path to where you downloaded the gzipped tarball>`
3. Login to the user account using the following details:
	Username: `starworks`
	Password: `starworks`
4. Profit!
### Option 2
See attached instructions. 