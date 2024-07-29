import React from 'react';
import DefaultTypeRenderer from 'react-styleguidist/lib/client/rsg-components/Type/TypeRenderer';

const ComplexTypeRenderer = ({ raw, ...props }) => (
  <DefaultTypeRenderer {...props}>{raw}</DefaultTypeRenderer>
);

export default ComplexTypeRenderer;
