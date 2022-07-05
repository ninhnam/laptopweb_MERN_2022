import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import PageFrame from './../../../components/PageFrame/index';

class AdminLayoutRoute extends Component {
    render() {
        const { component: YourComponent, ...remainProps } = this.props;
        
        return (
            <Route 
                {...remainProps}
                render={routeProps => {
                    return (
                        <PageFrame {...remainProps}>
                            <YourComponent {...routeProps} />
                        </PageFrame>
                    )
                }}
            />
        );
    }
}


export default AdminLayoutRoute;