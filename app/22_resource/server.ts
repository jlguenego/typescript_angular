'use strict';

import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as serveIndex from 'serve-index';

import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackConfig from './webpack.config.js';

import ws from './rest';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

webpackConfig.output.path = '/';
const compiler = webpack(webpackConfig);
app.use('/app/22_resource/wpk/', webpackDevMiddleware(compiler, {}));

app.use('/app/22_resource/ws/*', (req, res, next) => {
	console.log('req.url', req.url);
	setTimeout(() => {
		next();
	}, 1000);
});

app.use('/app/22_resource/ws', ws);

app.use(express.static('.'));
app.use(serveIndex('.', { icons: true }));

app.use((req, res, next) => {
	console.log('404: Page not Found', req.url);
	next();
});

app.listen(8000, () => {
	console.log('server started on port 8000');
});

