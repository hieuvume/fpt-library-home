/* eslint-disable max-len */
import plugin from 'tailwindcss/plugin';

export default plugin(({addComponents, theme}) => {
  // Fixed
  addComponents({
    '.container-fixed': {
			'flex-grow': '1',
			'width': '100%',
			'padding-left': theme('custom.components.container.fixed.px.DEFAULT'),
      		'padding-right': theme('custom.components.container.fixed.px.DEFAULT')
    },
		[`@media (min-width: ${theme('screens.xl')})`]: {
			'.container-fixed': {
				'margin-left': 'auto',
				'margin-right': 'auto',
				'padding-left': '1.875rem',
				'padding-right': '1.875rem',
				'max-width': theme('custom.components.container.fixed')['max-width']
			}
		}
  });
	
	// Fluid
  addComponents({
    '.container-fluid': {
			'width': '100%',
			'flex-grow': '1',
			'padding-left': theme('custom.components.container.fluid.px.DEFAULT'),
      'padding-right': theme('custom.components.container.fluid.px.DEFAULT')
    },
		[`@media (min-width: ${theme('screens.xl')})`]: {
			'.container-fluid': {
				'padding-left': theme('custom.components.container.fluid.px.xl'),
				'padding-right': theme('custom.components.container.fluid.px.xl')
			}
		}
  });
});