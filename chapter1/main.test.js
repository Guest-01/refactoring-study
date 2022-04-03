const { statement } = require('./main');
const plays = require('./plays.json')
const invoices = require('./invoices.json')

it('prints invoices', () => {
  expect(statement(invoices[0], plays)).toMatch(`청구 내역 (고객명: BigCo)
  Hamlet: $650.00 (55석)
  As You Like It: $580.00 (35석)
  Othello: $500.00 (40석)
총액: $1,730.00
적립 포인트: 47점`)
})