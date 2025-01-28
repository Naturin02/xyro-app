-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: localhost    Database: xyro_db
-- ------------------------------------------------------
-- Server version	8.0.40

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `pedidos`
--

DROP TABLE IF EXISTS `pedidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pedidos` (
  `numero_pedido` varchar(50) NOT NULL DEFAULT '0',
  `nombre_cliente` varchar(100) NOT NULL,
  `apellido_cliente` varchar(100) NOT NULL,
  `nombre_tienda` varchar(100) NOT NULL,
  `productos_seleccionados` text,
  `fecha_pedido` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` enum('pendiente','en proceso','completado','cancelado') DEFAULT 'pendiente',
  `total` decimal(10,2) NOT NULL,
  `cantidad_productos` int DEFAULT NULL,
  `subtotal` decimal(10,2) NOT NULL,
  `envio` decimal(10,2) NOT NULL,
  PRIMARY KEY (`numero_pedido`),
  KEY `nombre_cliente` (`nombre_cliente`,`apellido_cliente`),
  KEY `nombre_tienda` (`nombre_tienda`),
  CONSTRAINT `pedidos_ibfk_1` FOREIGN KEY (`nombre_cliente`, `apellido_cliente`) REFERENCES `usuarios` (`nombre`, `apellido`),
  CONSTRAINT `pedidos_ibfk_2` FOREIGN KEY (`nombre_tienda`) REFERENCES `tiendas` (`nombre_tienda`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
INSERT INTO `pedidos` VALUES ('003069','Rosalia','Naranjo','Casa Xochitl Express','Pedido de carnes frías','2024-05-24 16:08:00','completado',3372.69,48,2200.32,14.65),('003651','Úrsula','Casas','Casa Xochitl Express','Compra de dulces y botanas','2024-12-01 01:18:00','completado',2747.03,4,7512.02,45.85),('008122','Rosalia','Duarte','Casa Tlalpan Shop','Compra de abarrotes básicos','2024-02-18 23:32:00','pendiente',1854.19,38,520.36,985.51),('008325','Esperanza','Carrera','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-03-01 01:58:00','pendiente',877.35,46,66325.32,14.65),('011449','Manuel','Mata','Abarrotes Quetzal Original','Pedido de productos enlatados','2024-10-18 16:30:00','pendiente',1983.63,17,8751.21,365.21),('013306','Esperanza','Carrera','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-03-01 01:58:00','pendiente',877.35,46,9875.26,645.11),('013832','José','Olivares','Abarrotes Cempasúchil Plus','Compra de dulces y botanas','2024-01-25 18:20:00','cancelado',4760.48,30,861.25,24.65),('016147','Vicente','Patiño','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-03-23 15:25:00','pendiente',3055.37,9,9512.36,64.52),('018760','Jonás','Bernal','Abarrotes Quetzal Original','Compra de bebidas y snacks','2024-09-24 02:11:00','cancelado',3394.20,3,87421.36,98.65),('023118','Luz','Valenzuela','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-02-02 08:47:00','en proceso',1765.77,40,362.25,324.45),('034485','Jonás','Lucero','Abarrotes Atl Gourmet','Compra de panadería','2024-07-16 07:58:00','completado',1743.13,39,6153.52,54.65),('035619','Jonás','Bernal','Abarrotes Quetzal Original','Compra de bebidas y snacks','2024-09-24 02:11:00','cancelado',3394.20,25,6582.36,54.65),('037878','Abel','Puga','Bazar Huey Select','Compra de dulces y botanas','2024-06-20 07:12:00','en proceso',2616.05,8,3274.32,365.21),('044377','Esteban','Leal','Abarrotes Ameyalli Express','Pedido de productos enlatados','2024-10-08 17:07:00','en proceso',4004.77,15,1253.01,65.32),('046390','Patricia','Ayala','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-03-10 01:20:00','en proceso',4690.12,48,8751.98,684.35),('049123','Víctor','García','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-06-17 08:43:00','pendiente',1142.32,47,3574.21,653.13),('050497','Serafin','Alba','Bodega Díaz Comercial','Compra de dulces y botanas','2024-04-05 22:17:00','pendiente',4449.38,40,3974.30,48.65),('050813','Rolando','Puga','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-06-12 01:17:00','pendiente',1754.44,8,36974.02,845.25),('055255','Eloy','Caraballo','Bazar Huey Select','Pedido de productos orgánicos','2024-02-24 20:33:00','cancelado',3190.97,20,3651.04,95.65),('056315','Esperanza','Carrera','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-03-01 01:58:00','pendiente',877.35,26,4510.23,98.14),('058381','Patricia','Ayala','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-03-10 01:20:00','en proceso',4690.12,21,563.21,95.74),('074515','Diana','Moya','Bazar Huey Select','Compra de dulces y botanas','2024-02-23 04:29:00','en proceso',2036.82,23,3654.02,65.54),('085888','Manuel','Guevara','Casa Xochitl Express','Compra de dulces y botanas','2024-01-30 20:58:00','completado',2169.45,3,98751.36,985.61),('104051','Víctor','García','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-06-17 08:43:00','pendiente',1142.32,45,98512.02,756.98),('112239','Abigail','Chacón','Abarrotes Atl Gourmet','Compra de dulces y botanas','2024-11-27 18:26:00','cancelado',1932.54,18,3984.02,685.34),('113542','Yuridia','Delgadillo','Bazar Huey Select','Pedido de productos orgánicos','2024-02-24 20:33:00','cancelado',3190.97,1,154.02,98.65),('126700','Esteban','Leal','Abarrotes Ameyalli Express','Pedido de productos enlatados','2024-10-08 17:07:00','en proceso',4004.77,4,3687.06,751.25),('130524','Rolando','Gaitán','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-25 22:10:00','pendiente',2630.67,14,358.02,175.65),('131523','Sofía','Solorio','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-07-04 09:48:00','cancelado',4816.64,8,642.03,986.54),('133623','Rolando','Gaitán','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-25 22:10:00','pendiente',2630.67,46,9853.02,65.35),('150042','Jesús','Sanches','Casa Tlalpan Shop','Pedido de mayoreo de productos lácteos','2024-03-24 17:15:00','cancelado',1228.00,5,985.01,94.63),('155372','Rolando','Puga','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-06-12 01:17:00','pendiente',1754.44,39,9858.32,18.65),('155618','Margarita','Alemán','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-03-10 01:20:00','en proceso',4690.12,28,6512.05,17.65),('164237','Dolores','Hinojosa','Abarrotes Cempasúchil Plus','Pedido de frutas y verduras','2024-12-27 08:56:00','completado',4272.04,23,3975.30,85.65),('183509','Margarita','Rosas','Casa Tonalli Express','Pedido de productos de limpieza','2024-08-09 06:21:00','pendiente',512.42,28,3215.06,98.65),('184047','Estefanía','Sosa','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-07 10:34:00','cancelado',4870.78,24,7851.36,475.65),('188177','Estefanía','Sosa','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-07 10:34:00','cancelado',4870.78,35,2548.65,14.65),('198777','Luz','Ojeda','Abarrotes Cempasúchil Plus','Pedido de mayoreo de productos lácteos','2024-08-04 08:22:00','cancelado',3743.72,1,9751.36,84.65),('199427','Josefina','Centeno','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-07-04 09:48:00','cancelado',4816.64,50,6512.65,975.51),('204089','Emilio','Serrano','Casa Tonalli Express','Pedido de frutas y verduras','2024-08-01 14:39:00','en proceso',869.77,46,9851.36,45.31),('206951','Estefanía','Aguirre','Casa Xochitl Express','Compra de dulces y botanas','2024-12-01 01:18:00','completado',2747.03,31,98423.12,35.14),('210756','Mario','Lugo','Bodega Díaz Comercial','Compra de dulces y botanas','2024-04-05 22:17:00','pendiente',4449.38,18,3152.64,253.15),('218008','Jonás','Lucero','Abarrotes Atl Gourmet','Compra de panadería','2024-07-16 07:58:00','completado',1743.13,44,36912.36,65.25),('224471','Luz','Ojeda','Abarrotes Cempasúchil Plus','Pedido de mayoreo de productos lácteos','2024-08-04 08:22:00','cancelado',3743.72,17,1583.61,42.36),('229690','Mariana','Cruz','Casa Tonalli Express','Compra de abarrotes básicos','2024-07-06 10:43:00','pendiente',3369.33,1,256.51,98.25),('240223','Rosalia','Duarte','Casa Tlalpan Shop','Compra de abarrotes básicos','2024-02-18 23:32:00','pendiente',1854.19,18,5142.06,65.21),('245718','Margarita','Rosas','Casa Tonalli Express','Pedido de productos de limpieza','2024-08-09 06:21:00','pendiente',512.42,29,6152.02,14.65),('251490','Manuel','Guevara','Casa Xochitl Express','Compra de dulces y botanas','2024-01-30 20:58:00','completado',2169.45,37,846.21,395.25),('261889','Jos','Rubio','Casa Tlalpan Shop','Pedido de frutas y verduras','2024-07-12 10:04:00','en proceso',2836.24,48,8453.25,14.65),('264169','Magdalena','Vera','Bazar Huey Select','Compra de dulces y botanas','2024-03-03 07:04:00','pendiente',3099.09,29,6512.03,36.54),('270625','Sofía','Ureña','Abarrotes Cempasúchil Plus','Compra de dulces y botanas','2024-01-25 18:20:00','cancelado',4760.48,49,6142.30,31.54),('277845','Sara','Palomino','Bazar Huey Select','Pedido de frutas y verduras','2024-02-16 11:49:00','pendiente',4353.41,8,3158.02,25.65),('279144','Manuel','Guevara','Casa Xochitl Express','Compra de dulces y botanas','2024-01-30 20:58:00','completado',2169.45,43,3615.02,95.68),('287550','Estefanía','Sosa','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-07 10:34:00','cancelado',4870.78,41,1975.21,953.54),('288113','Abraham','Zavala','Bodega Díaz Comercial','Pedido de productos enlatados','2024-06-08 23:32:00','cancelado',2361.33,23,39452.02,98.65),('301981','Mariana','Cruz','Casa Tonalli Express','Compra de abarrotes básicos','2024-07-06 10:43:00','pendiente',3369.33,43,3152.02,25.64),('304261','Jonás','Lucero','Abarrotes Atl Gourmet','Compra de panadería','2024-07-16 07:58:00','completado',1743.13,47,8453.01,53.65),('308870','Patricia','Ayala','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-03-10 01:20:00','en proceso',4690.12,4,7512.01,14.54),('310478','Delia','Maestas','Abarrotes Ameyalli Express','Pedido de productos de limpieza','2024-02-11 18:16:00','completado',3805.04,30,945.20,75.54),('312408','Esteban','Leal','Abarrotes Ameyalli Express','Pedido de productos enlatados','2024-10-08 17:07:00','en proceso',4004.77,37,39740.21,68.51),('318669','Sofía','Ureña','Abarrotes Cempasúchil Plus','Compra de dulces y botanas','2024-01-25 18:20:00','cancelado',4760.48,45,9450.31,47.62),('320030','Jesús','Sanches','Casa Tlalpan Shop','Pedido de mayoreo de productos lácteos','2024-03-24 17:15:00','cancelado',1228.00,12,945.01,75.65),('322569','Sara','Galván','Casa Tonalli Express','Pedido de frutas y verduras','2024-08-01 14:39:00','en proceso',869.77,25,3451.03,98.65),('323148','Jonás','Bernal','Abarrotes Quetzal Original','Compra de bebidas y snacks','2024-09-24 02:11:00','cancelado',3394.20,40,8742.75,75.65),('333530','Úrsula','Casas','Casa Xochitl Express','Compra de dulces y botanas','2024-12-01 01:18:00','completado',2747.03,23,13460.12,983.21),('335351','Úrsula','Casas','Casa Xochitl Express','Compra de dulces y botanas','2024-12-01 01:18:00','completado',2747.03,46,73169.34,47.65),('339309','Margarita','Rosas','Casa Tonalli Express','Pedido de productos de limpieza','2024-08-09 06:21:00','pendiente',512.42,9,34251.02,398.15),('341347','Elena','Mata','Casa Xochitl Express','Pedido de frutas y verduras','2024-11-25 19:30:00','completado',961.31,8,945.31,473.65),('345667','Sofía','Ureña','Abarrotes Cempasúchil Plus','Compra de dulces y botanas','2024-01-25 18:20:00','cancelado',4760.48,13,5472.15,65.25),('351259','Jonás','Lucero','Abarrotes Atl Gourmet','Compra de panadería','2024-07-16 07:58:00','completado',1743.13,40,39742.15,54.65),('359900','Josefina','Centeno','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-07-04 09:48:00','cancelado',4816.64,10,645.31,35.65),('369366','Estefanía','Aguirre','Casa Xochitl Express','Compra de dulces y botanas','2024-12-01 01:18:00','completado',2747.03,28,1532.32,14.65),('371612','Eduardo','Barajas','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-25 22:10:00','pendiente',2630.67,12,9845.63,98.65),('376219','Sofía','Solorio','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-07-04 09:48:00','cancelado',4816.64,26,9845.31,173.25),('389428','Abigail','Olivera','Abarrotes Ameyalli Express','Compra de dulces y botanas','2024-08-13 11:39:00','en proceso',2195.67,44,7561.32,48.65),('393526','Sara','Palomino','Bazar Huey Select','Pedido de frutas y verduras','2024-02-16 11:49:00','pendiente',4353.41,39,8453.25,253.14),('409515','Margarita','Rosas','Casa Tonalli Express','Pedido de productos de limpieza','2024-08-09 06:21:00','pendiente',512.42,12,8756.34,476.25),('426174','Yuridia','Delgadillo','Bazar Huey Select','Pedido de productos orgánicos','2024-02-24 20:33:00','cancelado',3190.97,43,9453.14,14.65),('433324','Víctor','García','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-06-17 08:43:00','pendiente',1142.32,30,7531.54,173.56),('437159','Jesús','Sanches','Casa Tlalpan Shop','Pedido de mayoreo de productos lácteos','2024-03-24 17:15:00','cancelado',1228.00,20,9485.36,25.65),('439935','Jesús','Sanches','Casa Tlalpan Shop','Pedido de mayoreo de productos lácteos','2024-03-24 17:15:00','cancelado',1228.00,11,4861.48,25.63),('441561','Esparta','Serrano','Abarrotes Juárez Market','Compra de panadería','2024-12-01 03:39:00','en proceso',4486.18,41,875.21,56.36),('446316','Jos','Rubio','Casa Tlalpan Shop','Pedido de frutas y verduras','2024-07-12 10:04:00','en proceso',2836.24,25,9542.01,95.62),('447349','Esperanza','Carrera','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-03-01 01:58:00','pendiente',877.35,49,756.31,47.65),('456422','Margarita','Alemán','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-03-10 01:20:00','en proceso',4690.12,22,2945.31,25.62),('463460','Magdalena','Vera','Bazar Huey Select','Compra de dulces y botanas','2024-03-03 07:04:00','pendiente',3099.09,9,785.67,15.42),('464944','Manuel','Mata','Abarrotes Quetzal Original','Pedido de productos enlatados','2024-10-18 16:30:00','pendiente',1983.63,32,3578.87,253.32),('470812','Diana','Viera','Casa Xochitl Express','Compra de panadería','2024-04-24 20:57:00','en proceso',4080.00,30,2147.87,85.65),('470858','Jonás','Bernal','Abarrotes Quetzal Original','Compra de bebidas y snacks','2024-09-24 02:11:00','cancelado',3394.20,5,9945.85,985.65),('475560','Úrsula','Correa','Casa Tonalli Express','Pedido de frutas y verduras','2024-08-01 14:39:00','en proceso',869.77,35,9475.31,14.65),('479144','Manuel','Guevara','Casa Xochitl Express','Compra de dulces y botanas','2024-01-30 20:58:00','completado',2169.45,8,475.15,35.62),('479595','Marco Antonio','Lemus','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-03-23 15:25:00','pendiente',3055.37,36,9853.01,57.95),('480623','Yuridia','Delgadillo','Bazar Huey Select','Pedido de productos orgánicos','2024-02-24 20:33:00','cancelado',3190.97,3,751.36,36.54),('487535','Mariana','Cruz','Casa Tonalli Express','Compra de abarrotes básicos','2024-07-06 10:43:00','pendiente',3369.33,7,4731.04,98.65),('495278','Esteban','Leal','Abarrotes Ameyalli Express','Pedido de productos enlatados','2024-10-08 17:07:00','en proceso',4004.77,28,3945.07,84.65),('502458','Abelardo','Leiva','Casa Xochitl Express','Pedido de carnes frías','2024-11-06 08:18:00','cancelado',4052.99,17,9873.51,58.65),('511533','Rosalia','Naranjo','Casa Xochitl Express','Pedido de carnes frías','2024-05-24 16:08:00','completado',3372.69,3,987.61,35.62),('519587','Luz','Valenzuela','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-02-02 08:47:00','en proceso',1765.77,11,8753.25,25.65),('551862','Miguel','Arreola','Bazar Huey Select','Compra de dulces y botanas','2024-07-25 06:26:00','cancelado',2759.22,45,8753.64,983.56),('560663','Magdalena','Vera','Bazar Huey Select','Compra de dulces y botanas','2024-03-03 07:04:00','pendiente',3099.09,41,987.36,35.65),('564259','Rosalia','Duarte','Casa Tlalpan Shop','Compra de abarrotes básicos','2024-02-18 23:32:00','pendiente',1854.19,19,3975.21,98.65),('567581','Magdalena','Vera','Bazar Huey Select','Compra de dulces y botanas','2024-03-03 07:04:00','pendiente',3099.09,23,4763.58,84.54),('570251','Marco Antonio','Lemus','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-03-23 15:25:00','pendiente',3055.37,8,9435.61,14.54),('571360','Margarita','Rosas','Casa Tonalli Express','Pedido de productos de limpieza','2024-08-09 06:21:00','pendiente',512.42,20,9875.67,57.54),('577049','Sofía','Solorio','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-07-04 09:48:00','cancelado',4816.64,25,853.14,24.61),('585625','Úrsula','Correa','Casa Tonalli Express','Pedido de frutas y verduras','2024-08-01 14:39:00','en proceso',869.77,15,7631.57,34.51),('587927','Abraham','Delgadillo','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-01-09 11:14:00','pendiente',3091.32,48,9643.85,75.24),('593060','Luz','Valenzuela','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-02-02 08:47:00','en proceso',1765.77,46,9753.51,54.21),('596123','Abel','Puga','Abarrotes Quetzal Original','Compra de bebidas y snacks','2024-05-10 19:12:00','cancelado',4930.41,34,5763.84,65.32),('603641','Sara','Palomino','Bazar Huey Select','Pedido de frutas y verduras','2024-02-16 11:49:00','pendiente',4353.41,33,976.85,85.62),('606075','Rosa','Adame','Bazar Huey Select','Pedido de productos orgánicos','2024-02-24 20:33:00','cancelado',3190.97,12,9753.87,75.62),('610425','Abigail','Olivera','Abarrotes Ameyalli Express','Pedido de mayoreo de productos lácteos','2024-01-08 10:06:00','en proceso',2317.44,12,9846.58,53.65),('615527','Esteban','Leal','Abarrotes Ameyalli Express','Pedido de productos enlatados','2024-10-08 17:07:00','en proceso',4004.77,23,5876.35,95.68),('627464','Vicente','Patiño','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-03-23 15:25:00','pendiente',3055.37,30,8456.98,25.34),('676785','Abril','Garrido','Abarrotes Cempasúchil Plus','Compra de dulces y botanas','2024-04-15 21:06:00','en proceso',3251.26,28,9637.58,25.64),('680366','Manuel','Guevara','Casa Xochitl Express','Compra de dulces y botanas','2024-01-30 20:58:00','completado',2169.45,49,9761.85,75.65),('692979','Manuel','Mata','Abarrotes Quetzal Original','Pedido de productos enlatados','2024-10-18 16:30:00','pendiente',1983.63,11,3654.85,38.65),('693741','Sara','Palomino','Bazar Huey Select','Pedido de frutas y verduras','2024-02-16 11:49:00','pendiente',4353.41,6,3175.61,35.68),('695795','Jos','Rubio','Casa Tlalpan Shop','Pedido de frutas y verduras','2024-07-12 10:04:00','en proceso',2836.24,48,2863.47,35.65),('695818','Jonás','Lucero','Abarrotes Atl Gourmet','Compra de panadería','2024-07-16 07:58:00','completado',1743.13,22,2861.58,47.21),('699985','Rosalia','Naranjo','Casa Xochitl Express','Pedido de carnes frías','2024-05-24 16:08:00','completado',3372.69,13,6742.54,47.54),('700019','Miguel','Arreola','Bazar Huey Select','Compra de dulces y botanas','2024-07-25 06:26:00','cancelado',2759.22,50,513.54,21.54),('705352','Emilio','Gamboa','Casa Xochitl Express','Pedido de carnes frías','2024-05-24 16:08:00','completado',3372.69,9,3512.65,35.24),('723595','Rolando','Gaitán','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-25 22:10:00','pendiente',2630.67,44,6856.14,65.35),('723923','Abigail','Batista','Abarrotes Quetzal Original','Compra de panadería','2024-10-31 03:51:00','completado',4452.99,44,6845.48,36.24),('730891','Esparta','Patiño','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-06-17 08:43:00','pendiente',1142.32,38,6853.15,65.35),('733746','Esperanza','Carrera','Abarrotes Quetzal Original','Pedido de productos orgánicos','2024-03-01 01:58:00','pendiente',877.35,5,8463.64,253.24),('747452','Manuel','Mata','Abarrotes Quetzal Original','Pedido de productos enlatados','2024-10-18 16:30:00','pendiente',1983.63,12,976.18,758.65),('759850','Jorge Luis','Mena','Bazar Huey Select','Compra de dulces y botanas','2024-07-25 06:26:00','cancelado',2759.22,44,9563.17,15.65),('766211','Vicente','Patiño','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-03-23 15:25:00','pendiente',3055.37,34,4825.18,25.65),('772751','Rolando','Gaitán','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-25 22:10:00','pendiente',2630.67,36,5953.18,75.65),('774223','Emilia','Alba','Casa Tlalpan Shop','Compra de abarrotes básicos','2024-02-18 23:32:00','pendiente',1854.19,28,5942.25,24.68),('778375','Mariana','Cruz','Casa Tonalli Express','Compra de abarrotes básicos','2024-07-06 10:43:00','pendiente',3369.33,31,7533.47,38.47),('791792','Mario','Lugo','Bodega Díaz Comercial','Compra de dulces y botanas','2024-04-05 22:17:00','pendiente',4449.38,20,2863.51,67.43),('829189','Jonás','Bernal','Abarrotes Quetzal Original','Compra de bebidas y snacks','2024-09-24 02:11:00','cancelado',3394.20,5,5943.15,37.42),('834018','Elisa','Ramos','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-06-12 01:17:00','pendiente',1754.44,18,294.41,73.21),('835285','Esparta','Serrano','Abarrotes Juárez Market','Compra de panadería','2024-12-01 03:39:00','en proceso',4486.18,21,1823.41,64.37),('840729','Manuel','Mata','Abarrotes Quetzal Original','Pedido de productos enlatados','2024-10-18 16:30:00','pendiente',1983.63,4,5973.21,34.13),('846527','Jos','Rubio','Casa Tlalpan Shop','Pedido de frutas y verduras','2024-07-12 10:04:00','en proceso',2836.24,3,6842.61,73.91),('851665','Magdalena','Vera','Bazar Huey Select','Compra de dulces y botanas','2024-03-03 07:04:00','pendiente',3099.09,6,4563.18,735.26),('853196','Abril','Palacios','Bodega Díaz Comercial','Compra de panadería','2024-12-03 11:51:00','pendiente',4204.67,20,4853.15,58.65),('870157','Jos','Rubio','Casa Tlalpan Shop','Pedido de frutas y verduras','2024-07-12 10:04:00','en proceso',2836.24,29,1863.54,356.35),('872434','Mariana','Cruz','Casa Tonalli Express','Compra de abarrotes básicos','2024-07-06 10:43:00','pendiente',3369.33,36,8563.75,14.25),('873203','Esparta','Serrano','Abarrotes Juárez Market','Compra de panadería','2024-12-01 03:39:00','en proceso',4486.18,43,986.18,273.34),('877736','Esparta','Serrano','Abarrotes Juárez Market','Compra de panadería','2024-12-01 03:39:00','en proceso',4486.18,7,8563.15,65.36),('878979','Luz','Valenzuela','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-02-02 08:47:00','en proceso',1765.77,6,9863.85,983.65),('883840','Abraham','Curiel','Abarrotes Juárez Market','Pedido de frutas y verduras','2024-11-28 16:10:00','completado',3125.53,6,4753.15,36.53),('892305','Úrsula','Correa','Casa Tonalli Express','Pedido de frutas y verduras','2024-08-01 14:39:00','en proceso',869.77,14,1563.14,64.35),('904392','Ernesto','Bueno','Bazar Huey Select','Pedido de frutas y verduras','2024-02-16 11:49:00','pendiente',4353.41,2,8531.24,95.64),('905809','Luz','Valenzuela','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-02-02 08:47:00','en proceso',1765.77,15,651.32,86.35),('909606','Estefanía','Sosa','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-07 10:34:00','cancelado',4870.78,21,543.25,34.51),('909692','Esparta','Nieto','Bodega Díaz Comercial','Compra de dulces y botanas','2024-04-05 22:17:00','pendiente',4449.38,8,647.32,67.65),('909751','José','Olivares','Abarrotes Cempasúchil Plus','Compra de dulces y botanas','2024-01-25 18:20:00','cancelado',4760.48,28,2543.25,983.35),('914180','Jesús','Sanches','Casa Tlalpan Shop','Pedido de mayoreo de productos lácteos','2024-03-24 17:15:00','cancelado',1228.00,16,5423.65,75.98),('922595','Rosalia','Naranjo','Casa Xochitl Express','Pedido de carnes frías','2024-05-24 16:08:00','completado',3372.69,46,453.25,36.41),('950474','Luz','Ojeda','Abarrotes Cempasúchil Plus','Pedido de mayoreo de productos lácteos','2024-08-04 08:22:00','cancelado',3743.72,30,6984.63,27.65),('956894','Esparta','Patiño','Casa Tlalpan Shop','Compra de bebidas y snacks','2024-06-17 08:43:00','pendiente',1142.32,12,358.15,68.54),('957813','Rolando','Puga','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-06-12 01:17:00','pendiente',1754.44,18,1563.15,32.54),('962545','Mario','Lugo','Bodega Díaz Comercial','Compra de dulces y botanas','2024-04-05 22:17:00','pendiente',4449.38,7,1547.62,61.54),('963549','Rolando','Puga','Casa Xochitl Express','Pedido de mayoreo de productos lácteos','2024-06-12 01:17:00','pendiente',1754.44,27,5314.36,84.65),('973674','Estefanía','Sosa','Abarrotes Cempasúchil Plus','Compra de abarrotes básicos','2024-05-07 10:34:00','cancelado',4870.78,14,5842.65,35.14),('979192','Esparta','Serrano','Abarrotes Juárez Market','Compra de panadería','2024-12-01 03:39:00','en proceso',4486.18,41,9453.25,75.61),('983183','Jorge Luis','Mena','Bazar Huey Select','Compra de dulces y botanas','2024-07-25 06:26:00','cancelado',2759.22,9,1587.65,34.54),('989461','Luz','Ojeda','Abarrotes Cempasúchil Plus','Pedido de mayoreo de productos lácteos','2024-08-04 08:22:00','cancelado',3743.72,23,5943.15,54.65),('990681','Rosalia','Duarte','Casa Tlalpan Shop','Compra de abarrotes básicos','2024-02-18 23:32:00','pendiente',1854.19,37,1583.15,34.61),('991522','Miguel','Arreola','Bazar Huey Select','Compra de dulces y botanas','2024-07-25 06:26:00','cancelado',2759.22,15,9853.14,57.65),('997188','Luz','Ojeda','Abarrotes Cempasúchil Plus','Pedido de mayoreo de productos lácteos','2024-08-04 08:22:00','cancelado',3743.72,13,593.35,87.65);
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-01-26  0:28:26
