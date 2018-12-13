import React, { Component } from 'react';
import Tab from './Tab';

class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: this.props.children[0].props.label};
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const { onClickTabItem, props: { children }, state: { activeTab } } = this;
    return (
        <div>
            <div className="px-6 md:px-0 flex items-baseline justify-between border-b-2 border-grey-light mt-6 order-0 lg:order-1">
                <h4 className="hidden md:inline-block text-grey-dark font-normal">Books</h4>
                <div>
                { children.map((child) => {
                    const { label } = child.props;
                    return (
                        <Tab
                            activeTab={activeTab}
                            key={label}
                            label={label}
                            onClick={onClickTabItem}
                        />
                    );
                 }) 
                }
                </div>
            </div>
            <div>
                {children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </div>
        </div>
    );
  }
}

export default Tabs;