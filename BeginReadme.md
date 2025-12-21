
instalar cualquier compu MAC/Linux

brew install python@3.12
sudo chown -R $(whoami) /opt/homebrew/Cellar
cd ia-clases
./setup_python312.sh

cd ia-clases
chmod +x setup.sh run.sh
./setup.sh
./run.sh


\RobotAtlas


cd ia-clases
venv/scripts/activate
python robot_gui_conmodulos.py   



python -m pip install cv2   