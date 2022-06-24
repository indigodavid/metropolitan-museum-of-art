import { getTotalComments } from '../get_comment.js';

describe('Get Comment Count', () => {
  test('If no data is found, return 0', async () => {
    const id = 'hello_world_id';
    const data = await getTotalComments(id);
    expect(data).toBe(0);
  });
});
