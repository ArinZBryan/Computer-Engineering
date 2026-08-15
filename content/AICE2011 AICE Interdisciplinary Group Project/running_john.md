sudo pigpiod
tmux # make 4 terminals to run the following commands in parallel


ros2 launch turtlebot3_bringup camera.launch.py
ros2 launch turtlebot3_bringup robot.launch.py
ros2 run stepper_control stepper_node --ros-args -p step_pin:=12 -p dir_pin:=16 -p enable_pin:=26 -p enable_active_low:=true
ros2 run turtlecam camera --ros-args -p sim:=false -p web_gui:=true -p red_wall_id:=23 -p cal:=true
