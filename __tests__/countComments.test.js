import commentsCount from '../src/modules/countComments';

describe('comments counter', () => {
  const comments = [
    {
      creation_date: '2022-08-04',
      username: 'dd',
      comment: 'sw',
    },
    {
      creation_date: '2022-08-04',
      username: '2e',
      comment: 'sqdqdc',
    },
    {
      creation_date: '2022-08-04',
      username: 'qdd213',
      comment: 'sw',
    },
    {
      creation_date: '2022-08-04',
      username: '2312',
      comment: 'sdqdq',
    },
  ];
  it('when no comments (error message) returns 0', () => {
    expect(commentsCount('No Comments')).toBe(0);
  });
  it('returns length of comments', () => {
    expect(commentsCount(comments)).toBe(4);
  });
});