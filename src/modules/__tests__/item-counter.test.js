import itemCounter from '../item-counter.js';

jest.mock('../get-searched.js');

describe('Item counter', () => {
  test('Itemcounter when query is painting', async () => {
    const length = await itemCounter('painting');
    expect(length).toBe(3);
  });

  test('Itemcounter when query is rembrandt', async () => {
    const length = await itemCounter('rembrandt');
    expect(length).toBe(4);
  });

  test('Itemcounter when query is gogh', async () => {
    const length = await itemCounter('gogh');
    expect(length).toBe(5);
  });
});