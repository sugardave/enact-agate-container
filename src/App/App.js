import kind from '@enact/core/kind';
import AgateDecorator from '@enact/agate/AgateDecorator';
import Panels from '@enact/agate/Panels';
import React from 'react';

import MainPanel from '../views/MainPanel';

import css from './App.module.less';

const App = kind({
	name: 'App',

	styles: {
		css,
		className: 'app'
	},

	render: props => (
		<div {...props}>
			<Panels noCloseButton>
				<MainPanel />
			</Panels>
		</div>
	)
});

export default AgateDecorator(App);
