'use strict';

const mock = require('egg-mock');

describe('test/dotenv.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/dotenv-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('bar')
      .expect(200);
  });
});
