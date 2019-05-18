import React, { Component } from "react";
import styles from "./Contacts.module.css";
import ContactList from "../../components/ContactList/ContactList";
import SearchBar from "../../components/SearchBar/SearchBar";
import API from "../../Api/API";

class Contacts extends Component {
	state = {
		contacts: []
	};

	async componentDidMount() {
		let api = new API();
		let rsn = await api.getUserRsn();
		const contacts = await api.getConnectContact(rsn);
		this.setState({
			contactDataLoaded: true,
			contacts
		});
	}

	render() {
		return (
			<div className={styles.Contacts}>
				<SearchBar placeholder="Find Contact" />
				<h2>Contacts</h2>
				<ContactList heading="Contacts" contacts={this.state.contacts} />
			</div>
		);
	}
}

export default Contacts;
