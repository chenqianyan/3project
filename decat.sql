SET NAMES UTF8;
DROP DATABASE IF EXISTS decat;
CREATE DATABASE decat CHARSET=UTF8;
USE decat;
/**用户信息**/
CREATE TABLE dec_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uphone VARCHAR
(32),
  upwd VARCHAR
(32),
  phone VARCHAR
(16),
  gender INT                  #性别  0-女  1-男
);
INSERT INTO  dec_user
values(NULL, 'chenyan', '123', '18520799957', '1');
/**首页轮播图片**/
CREATE TABLE dec_banner(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR
(128)         #图片路径
);
INSERT INTO  dec_banner
values(NULL, 'http://localhost:8081/img/banner1.jpg');
INSERT INTO  dec_banner
values(NULL, 'http://localhost:8081/img/banner2.jpg');
INSERT INTO  dec_banner
values(NULL, 'http://localhost:8081/img/banner3.jpg');
INSERT INTO  dec_banner
values(NULL, 'http://localhost:8081/img/banner4.jpg');
INSERT INTO  dec_banner
values(NULL, 'http://localhost:8081/img/banner5.jpg');

/**首页产品**/
CREATE TABLE dec_index_product(
  lid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR
(64), 
  details VARCHAR
(128),
  order_id INT,
  price DECIMAL
(10,2),
  producttype VARCHAR
(64),
  img VARCHAR
(128),
  score VARCHAR
(32),
  commentNumber VARCHAR
(128),
  color VARCHAR
(10)
);
INSERT INTO  dec_index_product
values(NULL, '乳清蛋白粉(WHEY9) 1.8kg', '>80%乳清蛋白含量，整桶法国进口 纯度更高，粉末更细更容易呗身体吸收。富含支链氨基酸，迅速补充人体所需的氨基酸。 杯子仅做蛋白粉颜色展示，需另行购买。', '308915', '449.90', 'DOMYOS', 'http://localhost:8081/img/CN+WHEY9+1+8kg (1).jpg', '5.0', '3', null
);
INSERT INTO  dec_index_product
values(
    NULL,
    '按摩和肌肉恢复滚轴 软泡沫',
    '我们的设计师推出这款滚轴，适合综合循环训练。运动开始前或结束后进行按摩，会让运动效果更好',
    '186811',
    '99.90',
    'DOMYOS',
    'http://localhost:8081/img/Massage+and+Mobility+Roller+Soft.jpg', '4.9', '19',
    '红色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '7.5 公斤六角哑铃',
    '该通用型哑铃，可用于健身运动和功能性训练，如俯卧撑等训练。 哑铃呈六角形状，稳定性更佳， 耐久橡胶可缓冲冲击力。',
    '152912',
    '149.90',
    'DOMYOS',
    'http://localhost:8081/img/Hex+Dumbbell+7+5+kg.jpg', '4.4', '23',
    '蓝色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '10公斤六角哑铃',
    '该通用型哑铃，可用于健身运动和功能性训练，如俯卧撑等训练。 哑铃呈六角形状，稳定性更佳， 耐久橡胶可缓冲冲击力。',
    '152913',
    '199.90',
    'DOMYOS',
    'http://localhost:8081/img/Hex+Dumbbell+10+kg.jpg', '4.5', '24',
    '蓝色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '男生高尔夫长袖Polo衫',
    '适合在10-20摄氏度的凉爽天气打高尔夫时穿着 适合在凉爽天气中使用',
    '170573',
    '99.90',
    'INESIS',
    'http://localhost:8081/img/Men+s+Golf+Long+Sleeve+Polo+Shirt+Navy+Blue.jpg', '4.7', '56',
    '蓝黑色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '男生高尔夫套头衫-海军蓝',
    '适合在10-20摄氏度的凉爽天气打高尔夫时穿着 适合在凉爽天气中使用',
    '133665',
    '99.90',
    'INESIS',
    'http://localhost:8081/img/Men+s+Golf+Pullover+Navy+Blue.jpg', '4.5', '5',
    '蓝黑色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '男生高尔夫长轻量羽绒背心 黑色',
    '适合在10-20摄氏度的凉爽天气打高尔夫时穿着 适合在凉爽天气中使用',
    '328775',
    '249.90',
    'INESIS',
    'http://localhost:8081/img/Men+s+Golf+Ultralight+Sleeveless+Down+Jacket+Black.jpg', '5', '0',
    '蓝黑色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '女士高尔夫轻量无袖羽绒衣',
    '适合在10-20摄氏度的凉爽天气打高尔夫时穿着 适合在凉爽天气中使用',
    '128754',
    '249.90',
    'INESIS',
    'http://localhost:8081/img/WOMEN+S+SLEEVELESS+ULTRA+LIGHTWEIGHT+GOLF+DOWN+JACKET+LIGHT+GREY.jpg', '5', '0',
    '钢灰色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '男士高尔夫长裤-海军蓝',
    '适合在10-20摄氏度的凉爽天气打高尔夫时穿着 适合在凉爽天气中使用',
    '304040',
    '129.90',
    'INESIS',
    'http://localhost:8081/img/Men+s+Golf+Trousers+Navy+Blue.jpg', '4.6', '179',
    '蓝黑色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    '女士高尔夫长裤-淡粉',
    '这款高尔夫长裤专为10-20摄氏度的温和天气而设计。
弹性纤维保证了更佳的舒适度',
    '304029',
    '129.90',
    'INESIS',
    'http://localhost:8081/img/Women+s+Golf+Trousers+Pale+Pink.jpg', '4.5', '21',
    '淡粉'
);
INSERT INTO  dec_index_product
values(
    NULL,
    'TRAVEL 100户外徒步旅行三合-夹克',
    '我们的背包设计师设计了这款夹克，让你安心地在各种环境中徒步旅行。
作为三合一夹克，可拆卸摇粒绒内胆，提供保暖。多口袋设，方便储物。防水且保暖性能出色，适应多场景切换。',
    '324214',
    '399.90',
    'Forclaz',
    'http://localhost:8081/img/TRAVEL+100+CHINA+3IN1.jpg', '4.6', '67',
    '黑色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    'TRAVEL 100女式三合-徒步旅行防水夹克',
    '旅行徒步数日的女性背包客。
三合一夹克，适应各种场合。
',
    '177029',
    '399.90',
    'Forclaz',
    'http://localhost:8081/img/TRAVEL+100+CHINA+3IN1.jpg', '4.9', '89',
    '青莲色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    'TRAVEL 100户外户外保暖羽绒夹克-粉色',
    '我们的团队成员都是登山徒步旅行的爱好者。他们专门为寒冷天气设计了这款颜值和功能兼具的羽绒服。
采用85%羽绒，15%羽毛，蓬松度700+轻盈的羽绒材质，轻便保暖舒适可压缩。 ',
    '328439',
    '299.90',
    'Forclaz',
    'http://localhost:8081/img/Women+s+3+in+1+Waterproof+Comfort+0+C+Travel+Trekking+Jacket+TRAVEL+100+purple.jpg', '5.0', '99',
    '粉色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    'TRAVEL 500三合-羽绒保暖夹克',
    '我们的背包设计师设计了这款夹克，让你安心地在各种环境中徒步旅行。
作为三合一夹克，可拆卸摇粒绒内胆，提供保暖。多口袋设，方便储物。防水且保暖性能出色，适应多场景切换。',
    '324214',
    '699.90',
    'Forclaz',
    'http://localhost:8081/img/CN+TRAVEL+500+3in1+DOWN.jpg', '4.7', '30',
    '黑色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    'SH500 登山杖 单只 红色',
    '这款登山杖具有很长的抓握区域和大直径的冬季杖托，因此无论冬夏，都能派上用场。
登山杖适合经常性登山使用，它有一个加长的把手，使用起来非常舒适，适合雪鞋运动或山地陡坡徒步。',
    '156363',
    '249.90',
    'Forclaz',
    'http://localhost:8081/img/1+Hiking+Pole+Snow+SH500+All+season+Red.jpg', '4.6', '12',
    '红色'
);
INSERT INTO  dec_index_product
values(
    NULL,
    'TREK 500 男士户外保暖背心-黑色',
    '这款填充背心保暖舒适，适合在寒冷天气里进行山地徒步时穿着。
这款背心采用合成的保暖面料制成（含有 70% 的可回收面料），可以有效应付气温变化。还可以应付潮湿的环境。',
    '306590',
    '199.90',
    'Forclaz',
    'http://localhost:8081/img/Men+s+Mountain+Trekking+Padded+Sleeveless+Jacket+TREK+500+Black.jpg', '4.5', '10',
    '黑色'
);