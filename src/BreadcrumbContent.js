import React from 'react';
import { Breadcrumb } from 'antd';

class BreadcrumbContent extends React.Component {
    render(){
        return (
            <Breadcrumb>
                <Breadcrumb.Item>Movies</Breadcrumb.Item>
                <Breadcrumb.Item>Currently Playing</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadcrumbContent;

