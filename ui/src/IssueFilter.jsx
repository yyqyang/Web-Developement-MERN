import React from 'react';
import { Link } from 'react-router-dom';
/* eslint "react/prefer-stateless-function": "off" */

export default class IssueFilter extends React.Component {
    render() {
      return (
        <div>
        <Link to="/issues">All Issues</Link>
        {' | '}
        <Link to={{ pathname: '/issues', search: '?status=New' }}>
          New Issues
        </Link>
        {' | '}
        <Link to={{ pathname: '/issues', search: '?status=Assigned' }}>
          Assigned Issues
        </Link>
      </div>
      );
    }
  }
