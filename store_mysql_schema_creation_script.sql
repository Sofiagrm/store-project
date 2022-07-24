-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema store
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema store
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `store` DEFAULT CHARACTER SET utf8mb3 ;
USE `store` ;

-- -----------------------------------------------------
-- Table `store`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `store`.`category` (
  `idcategory` INT NOT NULL AUTO_INCREMENT,
  `designation` VARCHAR(90) NOT NULL,
  `catref` VARCHAR(3) NOT NULL,
  PRIMARY KEY (`idcategory`, `catref`),
  UNIQUE INDEX `idcategory_UNIQUE` (`idcategory` ASC) VISIBLE,
  UNIQUE INDEX `designation_UNIQUE` (`designation` ASC) VISIBLE,
  UNIQUE INDEX `catref_UNIQUE` (`catref` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `store`.`invoice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `store`.`invoice` (
  `idinvoice` INT NOT NULL AUTO_INCREMENT,
  `totalcost` VARCHAR(45) NOT NULL,
  `invoicedate` DATETIME NOT NULL,
  `invoicenumber` VARCHAR(7) NOT NULL,
  PRIMARY KEY (`idinvoice`, `invoicenumber`),
  UNIQUE INDEX `idinvoice_UNIQUE` (`idinvoice` ASC) VISIBLE,
  UNIQUE INDEX `invoicenumber_UNIQUE` (`invoicenumber` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `store`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `store`.`product` (
  `idproduct` INT NOT NULL AUTO_INCREMENT,
  `designation` VARCHAR(45) NOT NULL,
  `price` VARCHAR(7) NOT NULL,
  `prodref` VARCHAR(45) NOT NULL,
  `imgurl` VARCHAR(3000) NULL DEFAULT NULL,
  `stock` SMALLINT NOT NULL DEFAULT '0',
  `prodCat_fk` VARCHAR(45) NULL DEFAULT NULL,
  `description` VARCHAR(3000) NULL DEFAULT NULL,
  PRIMARY KEY (`idproduct`, `prodref`),
  UNIQUE INDEX `idproduto_UNIQUE` (`idproduct` ASC) VISIBLE,
  UNIQUE INDEX `prodref_UNIQUE` (`prodref` ASC) VISIBLE,
  INDEX `prodCat_fk_idx` (`prodCat_fk` ASC) VISIBLE,
  CONSTRAINT `prodCat_fk`
    FOREIGN KEY (`prodCat_fk`)
    REFERENCES `store`.`category` (`catref`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 48
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `store`.`invoiceline`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `store`.`invoiceline` (
  `idinvoiceline` INT NOT NULL AUTO_INCREMENT,
  `cost` VARCHAR(45) NOT NULL,
  `prodref_fk` VARCHAR(45) NOT NULL,
  `invoicenumber_fk` VARCHAR(7) NOT NULL,
  `prodamount` INT NOT NULL,
  PRIMARY KEY (`idinvoiceline`),
  UNIQUE INDEX `idinvoiceline_UNIQUE` (`idinvoiceline` ASC) VISIBLE,
  INDEX `prodref_fk_idx` (`prodref_fk` ASC) VISIBLE,
  INDEX `invoicenumber_fk_idx` (`invoicenumber_fk` ASC) VISIBLE,
  CONSTRAINT `invoicenumber_fk`
    FOREIGN KEY (`invoicenumber_fk`)
    REFERENCES `store`.`invoice` (`invoicenumber`),
  CONSTRAINT `prodref_fk`
    FOREIGN KEY (`prodref_fk`)
    REFERENCES `store`.`product` (`prodref`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
