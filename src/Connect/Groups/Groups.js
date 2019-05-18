import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Groups.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";
import API from "../../Api/API";

class Groups extends Component {
	state = {
		groups: [],
		groupsLoaded: false
	};
	async componentDidMount() {
		let api = new API();
		let rsn = await api.getUserRsn();
		const groups = await api.getConnectGroup(rsn);
		this.setState({
			groups,
			groupsLoaded: true
		});
	}
	render() {
		return (
			<div className={styles.Groups}>
				{this.state.groups.length > 0 ? (
					<SearchBar placeholder="Filter Group" />
				) : (
					""
				)}
				<h2>Groups</h2>
				<Link to="/creategroup">CREATE NEW GROUP</Link>
				<ContactList contacts={this.state.groups} groupList />
			</div>
		);
	}
}

export default Groups;
