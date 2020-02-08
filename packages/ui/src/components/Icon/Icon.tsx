import React from 'react';

export const Icon: React.FC<{
    type: 'regular' | 'solid' | 'logo',
    name: string,
    color: string,
    size: 'xs' | 'sm' | 'md' | 'lg' | 'cssSize',
    rotate: '90' | '180' | '270',
    flip: 'horizontal' | 'vertical',
    border: 'square' | 'circle',
    animation: string,
    pull: 'left' | 'right'
}> = (props) => <box-icon {...props} />;