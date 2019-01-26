import React from 'react';
import { Breadcrumb } from 'antd';

class BreadcrumbContent extends React.Component {
    render(){
        return (
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Currently Playing</Breadcrumb.Item>
                <Breadcrumb.Item>List</Breadcrumb.Item>
                <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
        )
    }
}

export default BreadcrumbContent;

