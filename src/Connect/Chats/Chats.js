import React, { Component } from "react";
import styles from "./Chats.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import ContactList from "../../components/ContactList/ContactList";
import API from "../../Api/API";

class Contacts extends Component {
	state = {
		contacts: [],
		recent: [],
		contactDataLoaded: false,
		recentDataLoaded: false
	};

	async componentDidMount() {
		let api = new API();
		let rsn = await api.getUserRsn();
		const recent = await api.getRecentChats(rsn);
		this.setState({
			recentDataLoaded: true,
			recent
		});
		const contacts = await api.getConnectContact(rsn);
		this.setState({
			contactDataLoaded: true,
			contacts
		});
		console.log("Recent: ", this.state.recent);
	}

	render() {
		return (
			<div>
				{this.state.contacts.length > 0 || this.state.recent.length > 0 ? (
					<div className={styles.Chats}>
						<SearchBar placeholder="Find Contact" />
						{this.state.recent.length > 0 ? (
							<div className={styles.ContactContainer}>
								<h2>Recent</h2>
								<ContactList contacts={this.state.recent} />
							</div>
						) : (
							""
						)}
						{this.state.contacts.length > 0 ? (
							<div className={styles.ContactContainer}>
								<h2>Contacts</h2>
								<ContactList heading="" contacts={this.state.contacts} />
							</div>
						) : (
							""
						)}
					</div>
				) : (
					"Create New"
				)}
			</div>
		);
	}
}

export default Contacts;
