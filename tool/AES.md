# AES加解密不一致

## 参数一致

### 密钥长度（Key Size）

* AES算法下，key的长度有三种：128、192和256 bits。

### 加密模式（Cipher Mode）

* AES属于块加密（Block Cipher），块加密中有CBC、ECB、CTR、OFB、CFB等几种工作模式。

### 填充方式（Padding）

* 由于块加密只能对特定长度的数据块进行加密，因此CBC、ECB模式需要在最后一数据块加密前进行数据填充。
* 在iOS SDK中提供了PKCS7Padding，而JDK则提供了PKCS5Padding。

### 初始向量（Initialization Vector）

* 使用除ECB以外的其他加密模式均需要传入一个初始向量，其大小与Block Size相等（AES的Block Size为128 bits），而两个平台的API文档均指明当不传入初始向量时，系统将默认使用一个全0的初始向量。
