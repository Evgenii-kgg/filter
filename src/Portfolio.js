import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Toolbar from "./Toolbar";
import ProjectList from "./ProjectList";
import { cards } from "./cards";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cards,
      filters: "All",
    };
  }

  onSelectFilter = (filter) => {
    this.setState(() => ({ cards: filter == 'All' ? cards : cards.filter((o) => o.category == filter) }));
  };

  render() {
    return (
      <>
        <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected={this.state.filter}
          onSelectFilter={this.onSelectFilter}
        />

        <div style={{ columnCount: "3" }}>
          <ProjectList projects={this.state.cards} />
        </div>
      </>
    );
  }
}

export default Portfolio;
