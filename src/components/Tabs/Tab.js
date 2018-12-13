import React, { Component } from 'react';

class Tab extends Component {

  onClick = () => {
    const { label, onClick } = this.props;
    onClick(label);
  }

  render() {
    const { onClick, props: { activeTab, label }} = this;
    let className = 'no-underline inline-block border-indigo pb-2 px-2 text-sm text-indigo-darkest hover:cursor-pointer js-tab relative';
    className +=  activeTab === label ? ' active' : '';
    return (
      <div className={className} onClick={onClick}> {label} </div>
    );
  }
}

export default Tab;