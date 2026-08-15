#starworks 
### Create WSL2 Ubuntu-24.04LTS VM
```
wsl --install Ubuntu-24.04 --name starworks-ros2-bsk
```
- Assign a unix username + password
### Download and Install ROS2 Jazzy
```
cd ~
sudo apt install software-properties-common -y
sudo add-apt-repository universe -y
sudo apt update && sudo apt install curl -y
export ROS_APT_SOURCE_VERSION=$(curl -s https://api.github.com/repos/ros-infrastructure/ros-apt-source/releases/latest | grep -F "tag_name" | awk -F\" '{print $4}')
curl -L -o /tmp/ros2-apt-source.deb "https://github.com/ros-infrastructure/ros-apt-source/releases/download/${ROS_APT_SOURCE_VERSION}/ros2-apt-source_${ROS_APT_SOURCE_VERSION}.$(. /etc/os-release && echo ${UBUNTU_CODENAME:-${VERSION_CODENAME}})_all.deb"
sudo dpkg -i /tmp/ros2-apt-source.deb
sudo apt update && sudo apt install ros-dev-tools -y
sudo apt update
sudo apt upgrade -y
sudo apt install ros-jazzy-desktop -y
source /opt/ros/jazzy/setup.bash
sudo rosdep init
rosdep update
sudo apt install python3-zmq
pip3 install orjson --break-system-packages
echo "source /opt/ros/jazzy/setup.bash" >> ~/.bashrc
source ~/.bashrc
source ~/.profile
```
### Download and Build Basilisk from Source
```
cd ~
git clone https://github.com/AVSLab/basilisk.git
sudo apt update
sudo apt install build-essential python3 python3-setuptools python3-dev python3-tk libgtk2.0-0 python3-pip -y
sudo apt install python$(python3 --version |
 grep -P -o "3.\d\d")-venv -y
cd basilisk
python3 -m venv .venv
source .venv/bin/activate
pip3 install -r requirements_dev.txt
pip3 install pyzmq orjson
python3 conanfile.py
deactivate
```
### Make ROS2 Workspace
```
cd ~
mkdir -p ros2_ws/src
cd ros2_ws/src
git clone https://github.com/DISCOWER/bsk-msgs.git
git clone https://github.com/DISCOWER/bsk-ros2-bridge.git
cd ..
python -m venv .venv --system-site-packages
source .venv/bin/activate
source /opt/ros/jazzy/setup.bash
colcon build
source install/setup.bash
pip install -r src/bsk-ros2-bridge/requirements.txt
deactivate
```

> [!important] Be careful of PIP
> ROS2's package manager `rosdep` was designed before _PEP668_, and so relies on `pip` as an alternative package manager to `apt`. For this reason, it expects to be able to run `pip install` without a virtual environment. As per [the documentation](https://docs.ros.org/en/independent/api/rosdep/html/pip_and_pep_668.html), we set the `PIP_BREAK_SYSTEM_PACKAGES` environment variable to allow this.
> 
> This means that installing a package from `apt`, via the `python3-xxxx` convention and then again from `pip` can cause python to get very confused about which package to use when and whether to overwrite various packages when installing. 
> 
> Thus, though the error message has been supressed, it is important to remember that python packages and libraries should still be installed in a virtual environment where possible and if not possible, using `apt`. Usage of `pip` in the global scope will still present a warning against the use of `sudo pip`, but this can safely be ignored. (still don't use `sudo pip` ever though)
### bsk-ros2-bridge Example Code (bsk-ros2-mpc)
##### Setup and install dependencies
```
cd ~
git clone https://github.com/acados/acados.git
cd acados
git submodule update --recursive --init
mkdir -p build
cd build
cmake -DACADOS_WITH_QPOASES=ON -DACADOS_WITH_OPENMP=ON ..
make install -j8
source ~/ros2_ws/.venv/bin/activate
source /opt/ros/jazzy/setup.bash
pip install -e ~/acados/interfaces/acados_template
deactivate
echo 'export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:"$HOME/acados/lib"' >> ~/.profile
echo 'export ACADOS_SOURCE_DIR="$HOME/acados"' >> ~/.profile
cd ..
mkdir bin
wget https://github.com/acados/tera_renderer/releases/download/v0.2.0/t_renderer-v0.2.0-linux-amd64
mv t_renderer-v0.2.0-linux-amd64 t_renderer
chmod +x t_renderer
cd ~/ros2_ws/src
source ~/ros2_ws/.venv/bin/activate
source /opt/ros/jazzy/setup.bash
git clone https://github.com/DISCOWER/bsk-ros2-mpc.git
cd ..
colcon build
source install/setup.bash
```
##### Run the example code
This code needs to be run in three terminals. Either use GNU screen, TMUX or create multiple WSL windows by attaching to the same vm twice more with `wsl -d starworks-bsk-ros2`.

```
# Terminal 1: start the bridge
cd ~/ros2_ws
source /opt/ros/jazzy/setup.sh
source innstall/setup.sh
ros2 launch bsk-ros2-bridge bridge.launch.py

# Terminal 2: start a Basilisk scenario (requires the BSK environment)
cd ~/ros2_ws/src/bsk-ros2-bridge
source ~/basilisk/.venv/bin/activate
python examples/scenarioRosOrbit_wrench.py

# Terminal 3: start a controller (e.g., BSK-ROS2-MPC)
cd ~/ros2_ws
source /opt/ros/jazzy/setup.sh
source innstall/setup.sh
ros2 launch bsk-ros2-mpc mpc.launch.py namespace:=bskSat0 type:=wrench use_hill:=False
```