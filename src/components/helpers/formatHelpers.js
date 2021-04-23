const formatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

function formatNumbers(value) {
  return formatter.format(value);
}

export { formatNumbers };
