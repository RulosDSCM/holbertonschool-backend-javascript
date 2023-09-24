function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

export default function getBudgetForCurrentYear(income, gdp, capita) {
  const incomeKey = `income-${getCurrentYear()}`;
  const gdpKey = `gdp-${getCurrentYear()}`;
  const capitakey = `capita-${getCurrentYear()}`;

  const budget = {
    [incomeKey]: income,
    [gdpKey]: gdp,
    [capitakey]: capita,
  };
  return budget;
}
