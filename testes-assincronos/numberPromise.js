const numberPromise = (number) =>
  new Promise(function (resolve, reject) {
    setTimeout(
      number > 5 ? resolve('numero bom') : reject(new Error('Muito pouco')), 3000,
    );
  });

module.exports = numberPromise;