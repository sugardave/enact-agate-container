import Button from '@enact/agate/Button';
import Heading from '@enact/agate/Heading';
import kind from '@enact/core/kind';
import { Panel } from '@enact/agate/Panels';
import React from 'react';

const MainPanel = kind({
	name: 'MainPanel',

	render: props => (
		<Panel {...props}>
			<Heading>Hello world!</Heading>
			<Button>Click me</Button>
		</Panel>
	)
});

export default MainPanel;
