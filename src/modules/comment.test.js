import { getTotalComments } from './get_comment.js';

describe('Get Comment Count', () => {
  test('If no data is found, return 0', async () => {
    // if user submit id and no data is found with that ID

    const id = 'hello_world_id';
    const data = await getTotalComments(id);

    // return 0
    expect(data).toBe(0);
  });
});
