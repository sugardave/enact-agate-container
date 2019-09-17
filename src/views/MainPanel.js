import Button from '@enact/agate/Button';
import { Cell, Row } from '@enact/ui/Layout';
import Heading from '@enact/agate/Heading';
import kind from '@enact/core/kind';
import { Panel } from '@enact/agate/Panels';
import React from 'react';

const MainPanel = kind({
	name: 'MainPanel',

	render: props => (
		<Panel {...props}>
			<Row align="center space-between">
				<Cell shrink>
					<Heading>Hello world!</Heading>
				</Cell>
				<Cell shrink>
					<Button>Click me</Button>
				</Cell>
			</Row>
		</Panel>
	)
});

export default MainPanel;
