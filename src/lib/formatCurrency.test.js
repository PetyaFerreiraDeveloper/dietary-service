const formatCurrency = require('./formatCurrency');

it('adds $ at the start', () => {
    expect(formatCurrency(6)).toContain('£6');
    expect(formatCurrency(12)).toContain('£12');
});

it('adds a comma every three digits', () => {
    expect(formatCurrency(1_234)).toContain('1,234');
});

it('supports decimals', () => {
    expect(formatCurrency(5.99)).toContain('5.99');
});