import '../../styleguide.css';
import React from 'react';
import DefaultStyleGuideRenderer from 'react-styleguidist/lib/client/rsg-components/StyleGuide/StyleGuideRenderer';

const StyleGuideRenderer = ({ ...props }) => <DefaultStyleGuideRenderer {...props} />;

export default StyleGuideRenderer;
