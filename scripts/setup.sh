# Clone bridge server source
git clone https://github.com/OriginProtocol/origin-bridge.git bridge

# Checkout bridge server develop branch
cd bridge
git checkout develop
cd ..

# Clone js source
git clone https://github.com/OriginProtocol/origin-js.git js

# Checkout js develop branch
cd js
git checkout develop
cd ..

# Clone dapp source
git clone https://github.com/OriginProtocol/origin-dapp.git dapp

# Checkout dapp develop branch
cd dapp
git checkout develop
cd ..

# Copy .env files to source
cp ./container/files/config/bridge_dev.env ./bridge/.env
cp ./container/files/config/dapp_dev.env ./dapp/.env

# Build bridge server image
docker build ./container -t origin-image
