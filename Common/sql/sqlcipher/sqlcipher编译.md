# 下载
git clone https://github.com/sqlcipher/sqlcipher.git -b v3.4.2
# 安装依赖
- sudo apt-get install gcc-4.9
- sudo apt-get install openssl
- sudo apt-get install libssl-dev
- sudo apt-get install tclsh
- sudo apt-get install tcl-dev 
- sudo apt-get install tk-dev
# 初始化编译
./configure --enable-tempstore=yes CFLAGS="-DSQLITE_HAS_CODEC" LDFLAGS="-lcrypto"
# 编译
make
# 安装
sudo make install
# 调用
./sqlcipher
# 引用
gcc hello.c -o demo -lsqlcipher
