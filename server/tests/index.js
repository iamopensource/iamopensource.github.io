var request = require('supertest');
var expect = require('expect')

var index = require('../');

describe('index.js', () => {

  describe('/api/contributions', () => {
    let issuesSpy;
    beforeEach(() => {
      issuesSpy = expect.spyOn(index.github.search, 'issues').andReturn(
        {
          data: {
            items: [
              {
                user: {
                  login: 'anglinb'
                }
              },
              {
                user: {
                  login: 'anglinb'
                }
              }
            ]
          }
        }
      );
    });
    it('should call the github api and return PRs', async () => {
      let resp = await request(index.app)
        .get('/api/contributions')
        .expect(200);
      expect(issuesSpy).toHaveBeenCalledWith({
        q: 'commenter:app/welcome is:pr is:merged',
        incomplete_results: true,
        per_page: 100,
      });
    });

    it('should add the Allow-Access-Control-Origin header', async () => {
      let resp = await request(index.app)
        .get('/api/contributions')
        .expect(200);
      expect(issuesSpy).toHaveBeenCalledWith({
        q: 'commenter:app/welcome is:pr is:merged',
        incomplete_results: true,
        per_page: 100,
      });
      expect(resp.headers['access-control-allow-origin']).toBe('*');
    });

    it('should filter out multiple instances of the same user', async () => {
      let resp = await request(index.app)
        .get('/api/contributions')
        .expect(200);
      expect(issuesSpy).toHaveBeenCalledWith({
        q: 'commenter:app/welcome is:pr is:merged',
        incomplete_results: true,
        per_page: 100,
      });
      expect(resp.body.length).toBe(1);
    });
  });
});
