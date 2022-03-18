class Validate {
  convertStringToArray(value) {
    return value.split("");
  }
  static name(value) {
    const errorMessage = [];
    if (!value) {
      errorMessage.push("Insira um nome!.");
    }
    if (/\d/.test(value)) {
      errorMessage.push("O campo nome não pode conter números!.");
    }

    return errorMessage;
  }

  static cardNumber(value) {
    const errorMessage = [];
    let convertedValue = value.split("");
    if (convertedValue.length != 12) {
      errorMessage.push("Este campo deve conter 12 digitos.");
    }

    if (/[^0-9]/g.test(parseInt(convertedValue))) {
      errorMessage.push("Este campo deve conter somente números.");
    }

    return errorMessage;
  }

  static expireDate(value) {
    const errorMessage = [];
    // console.log(Date.now());
    let convertedValue = value.split("/");

    let month = convertedValue[0];
    let year = convertedValue[1];

    if (value === "") {
      errorMessage.push("Insira uma data");
    }
    let day = new Date(`20${year}`, month, 0).getDate();

    let expireDate = new Date(`20${year}/${month}/${day}`);
    if (Date.now() > Date.parse(expireDate)) errorMessage.push("Data invalida!");

    return errorMessage;
  }

  static cvv(value) {
    const errorMessage = [];
    let convertedValue = value.split("");
    if (convertedValue.length != 3) {
      errorMessage.push("Este campo deve conter 3 digitos.");
    }

    if (/[^0-9]/g.test(parseInt(convertedValue))) {
      errorMessage.push("Este campo deve conter somente números.");
    }

    return errorMessage;
  }

  static cpf(value) {
    const errorMessage = [];
    let convertedValue = value.split("");
    if (convertedValue.length != 11) {
      errorMessage.push("Este campo deve conter 11 digitos.");
    }

    if (/[^0-9]/g.test(parseInt(convertedValue))) {
      errorMessage.push("Este campo deve conter somente números.");
    }

    return errorMessage;
  }
}

export default Validate;
